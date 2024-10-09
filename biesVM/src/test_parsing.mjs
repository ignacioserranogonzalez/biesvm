import fs from 'fs'
import antlr4 from 'antlr4'
import basmLexer from '../parser/grammar/basmLexer.js'
import basmParser from '../parser/grammar/basmParser.js'
import basmVisitor from '../parser/grammar/basmVisitor.js'
import Block from '../vm/Block.mjs'
import BiesVM from '../vm/BiesVM.mjs'

class Instruction {
    constructor() {
        if (new.target === Instruction) {
            throw new Error("Cannot instantiate abstract class Instruction")
        }
        this.args = []
        this.vm = new BiesVM()
    }

    setArgs(args) {
        this.args = args
    } 

    execute() {
        throw new Error('execute() method must be implemented')
    }
}

class LDV extends Instruction {
    execute() {
        const value = this.args[0]
        this.vm.S.push(value)
        return true
    }
}

class PRN extends Instruction {
    execute() {
        const value = this.vm.S.pop()
        console.log(value)
        return true
    }
}

class BST extends Instruction {
    execute() {
        const value = this.vm.S.pop()
        this.vm.B.createFrame()
        this.vm.B.setValue(this.args[0], this.args[1], value)
        return true
    }
}

class BLD extends Instruction {
    execute() {
        const value = this.vm.B.getValue(this.args[0], this.args[1])
        this.vm.S.push(value)
        return true
    }
}

class LDF extends Instruction {
    execute() {
        const value = this.args[0]
        this.vm.S.push(value)
        return true
    }
}

class APP extends Instruction {
    execute() {
        const fun = this.vm.S.pop()
        const value = this.vm.S.pop()

        this.vm.B.createFrame()
        this.vm.B.pushValue(fun, value)

        this.vm.D.pushContext(this.vm.currentBlock.func, this.vm.currentBlock.pc + 1) // dump

        this.vm.setCurrentBlock(this.vm.C.peekBlock(fun))
        this.vm.currentBlock.pc = 0

        return false
    }
}

class RET extends Instruction {
    execute() {
        const { frame, pc } = this.vm.D.popContext()

        this.vm.setCurrentBlock(this.vm.C.peekBlock(frame))
        this.vm.currentBlock.pc = pc

        return false
    }
}

class ADD extends Instruction {
    execute() {
        const value1 = this.vm.S.pop()
        const value2 = this.vm.S.pop()
        this.vm.S.push(value1 + value2)
        return true
    }
}

class POP extends Instruction {
    execute() {
        this.vm.S.pop()
        return true
    }
}

class SWP extends Instruction {
    execute() {
        this.vm.S.swap()
        return true
    }
}

class NEG extends Instruction {
    execute() {
        if(typeof this.vm.S.peek() === 'number'){
            const value = this.vm.S.pop()
            this.vm.S.push(-value)
        }
        return true
    }
}

class SGN extends Instruction {
    execute() {
        const value = this.vm.S.pop()
        value > 0 ? this.vm.S.push(1) : this.vm.S.push(0)
        return true
    }
}

class EQ extends Instruction {
    execute() {
        const value1 = this.vm.S.pop()
        const value2 = this.vm.S.pop()
        value1 === value2 ? this.vm.S.push(1) : this.vm.S.push(0)
        return true
    }
}

class GT extends Instruction {
    execute() {
        const value1 = this.vm.S.pop()
        const value2 = this.vm.S.pop()
        value1 > value2 ? this.vm.S.push(1) : this.vm.S.push(0)
        return true
    }
}

class GTE extends Instruction {
    execute() {
        const value1 = this.vm.S.pop()
        const value2 = this.vm.S.pop()
        value1 >= value2 ? this.vm.S.push(1) : this.vm.S.push(0)
        return true
    }
}

class LT extends Instruction {
    execute() {
        const value1 = this.vm.S.pop()
        const value2 = this.vm.S.pop()
        value1 < value2 ? this.vm.S.push(1) : this.vm.S.push(0)
        return true
    }
}

class LTE extends Instruction {
    execute() {
        const value1 = this.vm.S.pop()
        const value2 = this.vm.S.pop()
        value1 <= value2 ? this.vm.S.push(1) : this.vm.S.push(0)
        return true
    }
}

class NOT extends Instruction {
    execute() {
        !this.vm.S.peek() ? (this.vm.S.pop(), this.vm.S.push(0)) : null
        return true
    }
}

class SNT extends Instruction {
    execute() {
        this.vm.S.pop() == '' ? 
            this.vm.S.push(1) : 
            this.vm.S.push(0)
        return true
    }
}

class CAT extends Instruction {
    execute() {

        const value1 = this.vm.S.pop()
        const value2 = this.vm.S.pop()

        this.vm.S.push(value1 + value2)

        return true
    }
}

class TOS extends Instruction {
    execute() {
        this.vm.S.push(this.vm.S.pop().toString())
        return true
    }
}

class HLT extends Instruction {
    execute() {
        throw new Error('\n>>> Program terminated by HLT')
    }
}

class InstructionSet {
    constructor() {
        this.instructions = {
            LDV: () => new LDV(),
            PRN: () => new PRN(),
            BST: () => new BST(),
            BLD: () => new BLD(),
            LDF: () => new LDF(),
            APP: () => new APP(),
            RET: () => new RET(),
            ADD: () => new ADD(),
            POP: () => new POP(),
            SWP: () => new SWP(),
            NEG: () => new NEG(),
            SGN: () => new SGN(),
            EQ: () => new EQ(),
            GT: () => new GT(),
            GTE: () => new GTE(),
            LT: () => new LT(),
            LTE: () => new LTE(),
            NOT: () => new NOT(),
            SNT: () => new SNT(),
            CAT: () => new CAT(),
            TOS: () => new TOS(),
            HLT: () => new HLT(),
        }
    }

    getInstruction(mnemonic) {
        return this.instructions[mnemonic]() || null; // Llama a la función para obtener una nueva instancia
    }
}

class InstructionVisitor extends basmVisitor {

    constructor() {
        super()
        this.instructionSet = new InstructionSet()
        this.vm = new BiesVM()
        this.context = 0
    }

    visitProgram(ctx) {
        return this.visitChildren(ctx)
    }

    visitArg(ctx) {
        if (ctx.INT()) return parseInt(ctx.INT().getText(), 10)
        if (ctx.STR()) return ctx.STR().getText().replace(/^"|"$|"/g, '');
        else if (ctx.funcArg()) {
            const funcText = ctx.funcArg().getText()
            return parseInt(funcText.slice(1), 10)
        }
        return null
    }

    visitFunc(ctx) {
        this.context = ctx.INT(0).getText()
        const args = parseInt(ctx.INT(1).getText(), 10)
        const parent = ctx.INT(2).getText()

        this.vm.C.pushBlock(this.context, new Block(this.context, args, parent))

        return null
    }

    visitEnd(ctx){
        this.context = null
        return null
    }

    visitInst(ctx) {
        const mnemonic = ctx.mnemonic().getText();
        const instruction = this.instructionSet.getInstruction(mnemonic);
        const args = ctx.arg().map(a => this.visitArg(a));
        instruction.setArgs(args)
    
        if (instruction) {
            const block = this.vm.C.peekBlock(this.context);
            block.push(instruction);
        } else {
            throw new Error(`Unknown instruction: ${mnemonic}`);
        }
    
        return null;
    }
    
}

let default_input_file = './test/input.txt'
const vm = new BiesVM()

function test_parser(input_file = default_input_file) {
    
    console.log(`>>> Reading ${input_file}\n`)
    const input = fs.readFileSync(input_file, 'utf-8')
    const chars = new antlr4.InputStream(input)
    const lexer = new basmLexer(chars)
    const tokens = new antlr4.CommonTokenStream(lexer)
    const parser = new basmParser(tokens)
    parser.buildParseTrees = true

    const ast = parser.program()
    const visitor = new InstructionVisitor()

    try {
        visitor.visit(ast)
        vm.execute()
    } catch (error) {
        console.error(error.message)
    }
    
    console.log(`>>> Executing ${input_file} done`)
}

export default test_parser
