import basmVisitor from '../../parser/grammar/basmVisitor.js'
import InstructionSet from './InstructionSet.js'
import BiesVM from '../vm/BiesVM.js'
import Block from '../vm/Block.js'

export default class InstructionVisitor extends basmVisitor {

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
        if (ctx.STR()) return ctx.STR().getText().replace(/^"|"$|"/g, '')
        if (ctx.SIGNED_INT()) return this.handleSignedInt(ctx.SIGNED_INT().getText())
        if (ctx.funcArg()) return parseInt(ctx.funcArg().getText().slice(1), 10)
        if (ctx.listArg()) return this.visitList(ctx.listArg())
        else if(ctx.typeArg()) return ctx.typeArg().getText().toLowerCase()
        return null
    }

    handleSignedInt(signedInt) {
        const sign = signedInt[0] === '+' ? 1 : -1;
        const number = parseInt(signedInt.slice(1), 10);
        return sign * number;
    }

    visitList(ctx) {
        const elements = ctx.INT()
        const list = []
    
        for (let i = 0; i < elements.length; i++) {
            list.push(parseInt(elements[i].getText(), 10))
        }
        
        return list;
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