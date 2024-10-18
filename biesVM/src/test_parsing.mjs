import fs from 'fs'
import antlr4 from 'antlr4'
import basmLexer from '../parser/grammar/basmLexer.js'
import basmParser from '../parser/grammar/basmParser.js'
import basmVisitor from '../parser/grammar/basmVisitor.js'
import Block from '../vm/Block.mjs'
import BiesVM from '../vm/BiesVM.mjs'

class Instruction {
    /**
     * Creates an instance of Instruction.
     * @throws {Error} Throws an error if trying to instantiate the abstract class.
     */
    constructor() {
        if (new.target === Instruction) {
            throw new Error("Cannot instantiate abstract class Instruction")
        }
        this.args = []
        this.vm = new BiesVM()
    }

    /**
     * Sets the arguments for this instruction.
     * @param {Array} args - The arguments to set.
     */
    setArgs(args) {
        this.args = args
    }

    /**
     * Executes the instruction.
     * @abstract
     * @throws {Error} Throws an error if the method is not implemented in a subclass.
     */
    execute() {
        throw new Error('execute() method must be implemented')
    }
}

class LDV extends Instruction {
    /**
     * Executes the LDV instruction, loading a value onto the stack.
     * @returns {boolean} Returns true after the value has been pushed onto the stack.
     */
    execute() {
        const value = this.args[0]
        this.vm.S.push(value)
        return true
    }
}

class PRN extends Instruction {
    /**
     * Executes the PRN instruction, popping a value from the stack and printing it to the console.
     * @returns {boolean} Returns true after the value has been printed.
     */
    execute() {
        const value = this.vm.S.pop()
        console.log(value)
        return true
    }
}

class BST extends Instruction {
    /**
     * Executes the BST instruction, popping a value from the stack,
     * creating a new frame in the environment, and setting the value at the specified indices.
     *
     * @returns {boolean} Returns true after the value has been set.
     */
    execute() {
        const value = this.vm.S.pop();
        this.vm.B.setValue(this.args[0], this.args[1], value);
        return true;
    }
}


class BLD extends Instruction {
    /**
     * Executes the BLD instruction, retrieving a value from the
     * specified location in the environment and pushing it onto the stack.
     *
     * @returns {boolean} Returns true after the value has been pushed onto the stack.
     */
    execute() {
        const value = this.vm.B.getValue(this.args[0], this.args[1])
        this.vm.S.push(value)
        return true
    }
}

class LDF extends Instruction {
    /**
     * Executes the LDF instruction, pushing a specified value onto the stack.
     *
     * @returns {boolean} Returns true after the value has been pushed onto the stack.
     */
    execute() {
        const value = this.args[0]
        this.vm.S.push(value)
        return true
    }
}

class APP extends Instruction {
    /**
     * Executes the APP instruction, which applies a function
     * to a value by creating a new frame and pushing the
     * function and value onto the stack.
     *
     * Method steps:
     * 1. Pops the function and value from the stack.
     * 2. Creates a new frame in the B (Block) structure.
     * 3. Pushes the function and value onto the new frame.
     * 4. Dumps the current context.
     * 5. Sets the current block to the block associated with the function.
     * 6. Resets the program counter to 0 for the new block.
     *
     * @returns {boolean} Returns false to indicate that execution continues.
     */
    execute() {
        const fun = this.vm.S.pop();
        const k = this.args[0];

        if (this.vm.S.length < k) throw new Error("Not enough arguments on the stack");
        this.vm.B.createFrame(fun);

        for (let i = 0; i < k; i++) {
            const value = this.vm.S.pop(); 
    
            this.vm.B.pushValue(fun, value); // Cambiar el nivel si es necesario
        }

        this.vm.D.pushContext(this.vm.currentBlock.func, this.vm.currentBlock.pc + 1);
        this.vm.setCurrentBlock(this.vm.C.peekBlock(fun));

        this.vm.currentBlock.pc = 0;

        return false;
    }
}


class RET extends Instruction {
    /**
     * Executes the RET instruction, which returns from the current
     * function by popping the context from the context stack and
     * restoring the previous block and program counter.
     *
     * Method steps:
     * 1. Pops the current context from the context stack.
     * 2. Restores the block associated with the popped frame.
     * 3. Sets the program counter to the previously saved value.
     *
     * @returns {boolean} Returns false to indicate that execution continues.
     */
    execute() {
        const { frame, pc } = this.vm.D.popContext()

        this.vm.setCurrentBlock(this.vm.C.peekBlock(frame))
        this.vm.currentBlock.pc = pc

        return false
    }
}

class ADD extends Instruction {
    /**
     * Executes the ADD instruction, which pops the top two values from the
     * stack, adds them together, and pushes the result back onto the stack.
     *
     * Method steps:
     * 1. Pops the first value from the stack.
     * 2. Pops the second value from the stack.
     * 3. Calculates the sum of the two values.
     * 4. Pushes the result back onto the stack.
     *
     * @returns {boolean} Returns true to indicate that execution is complete.
     */
    execute() {
        const value1 = this.vm.S.pop()
        const value2 = this.vm.S.pop()
        this.vm.S.push(value1 + value2)
        return true
    }
}

class SUB extends Instruction {
    /**
     * Executes the SUB instruction, which pops the top two values from the
     * stack, subtracts the second value from the first, and pushes the
     * result back onto the stack.
     *
     * Method steps:
     * 1. Pops the first value from the stack.
     * 2. Pops the second value from the stack.
     * 3. Calculates the difference (value1 - value2).
     * 4. Pushes the result back onto the stack.
     *
     * @returns {boolean} Returns true to indicate that execution is complete.
     */
    execute() {
        const value1 = this.vm.S.pop()
        const value2 = this.vm.S.pop()
        this.vm.S.push(value1 - value2)
        return true
    }
}

class MUL extends Instruction {
    /**
     * Executes the MUL instruction, which pops the top two values from the
     * stack, multiplies them, and pushes the result back onto the stack.
     *
     * Method steps:
     * 1. Pops the first value from the stack.
     * 2. Pops the second value from the stack.
     * 3. Calculates the product (value1 * value2).
     * 4. Pushes the result back onto the stack.
     *
     * @returns {boolean} Returns true to indicate that execution is complete.
     */
    execute() {
        const value1 = this.vm.S.pop()
        const value2 = this.vm.S.pop()
        this.vm.S.push(value1 * value2)
        return true
    }
}

class DIV extends Instruction {
    /**
     * Executes the DIV instruction, which pops the top two values from the
     * stack, divides the second value by the first, and pushes the result
     * back onto the stack.
     *
     * Method steps:
     * 1. Pops the first value (dividend) from the stack.
     * 2. Pops the second value (divisor) from the stack.
     * 3. Calculates the quotient (value2 / value1).
     * 4. Pushes the result back onto the stack.
     *
     * @returns {boolean} Returns true to indicate that execution is complete.
     */
    execute() {
        const value1 = this.vm.S.pop()
        const value2 = this.vm.S.pop()
        this.vm.S.push(value1 / value2)
        return true
    }
}

class POP extends Instruction {
    /**
     * Executes the POP instruction, which removes the top value from the
     * stack. This operation discards the value, effectively reducing the
     * size of the stack by one.
     *
     * Method steps:
     * 1. Pops the top value from the stack.
     *
     * @returns {boolean} Returns true to indicate that execution is complete.
     */
    execute() {
        this.vm.S.pop()
        return true
    }
}

class SWP extends Instruction {
    /**
     * Executes the SWP instruction, which swaps the top two values on the stack.
     *
     * Method steps:
     * 1. Swaps the values at the top of the stack, changing their order.
     *
     * @returns {boolean} Returns true to indicate that execution is complete.
     */
    execute() {
        this.vm.S.swap()
        return true
    }
}

class NEG extends Instruction {
    /**
     * Executes the NEG instruction, which negates the top value on the stack.
     *
     * This method checks if the top value of the stack is a number. If it is,
     * pops the value from the stack and pushes its negation back onto the stack.
     *
     * @returns {boolean} Returns true to indicate that execution is complete.
     */
    execute() {
        if(typeof this.vm.S.peek() === 'number'){
            const value = this.vm.S.pop()
            this.vm.S.push(-value)
        }
        return true
    }
}

class SGN extends Instruction {
    /**
     * Executes the SGN instruction, which checks the sign of the top value on the stack.
     *
     * This method pops the top value from the stack and pushes 1 if the value is positive,
     * 0 if the value is zero or negative.
     *
     * @returns {boolean} Returns true to indicate that execution is complete.
     */
    execute() {
        const value = this.vm.S.pop()
        value > 0 ? this.vm.S.push(1) : this.vm.S.push(0)
        return true
    }
}

class EQ extends Instruction {
    /**
     * Executes the EQ instruction, which checks if the top two values on the stack are equal.
     *
     * This method pops the top two values from the stack and pushes 1 if they are equal,
     * or 0 if they are not equal.
     *
     * @returns {boolean} Returns true to indicate that execution is complete.
     */
    execute() {
        const value1 = this.vm.S.pop()
        const value2 = this.vm.S.pop()
        value1 === value2 ? this.vm.S.push(1) : this.vm.S.push(0)
        return true
    }
}

class GT extends Instruction {
    /**
     * Executes the GT instruction, which checks if the first value on the stack is greater than the second.
     *
     * This method pops the top two values from the stack and pushes 1 if the first value is greater than the second,
     * or 0 if it is not.
     *
     * @returns {boolean} Returns true to indicate that execution is complete.
     */
    execute() {
        const value1 = this.vm.S.pop()
        const value2 = this.vm.S.pop()
        value1 > value2 ? 
            this.vm.S.push(1) : 
            this.vm.S.push(0)
        return true
    }
}

class GTE extends Instruction {
    /**
     * Executes the GTE instruction, which checks if the first value on the stack is greater than or equal to the second.
     *
     * This method pops the top two values from the stack and pushes 1 if the first value is greater than or equal
     * to the second, or 0 if it is not.
     *
     * @returns {boolean} Returns true to indicate that execution is complete.
     */
    execute() {
        const value1 = this.vm.S.pop()
        const value2 = this.vm.S.pop()
        value1 >= value2 ? this.vm.S.push(1) : this.vm.S.push(0)
        return true
    }
}

class LT extends Instruction {
    /**
     * Executes the LT instruction, which checks if the first value on the stack is less than the second.
     *
     * This method pops the top two values from the stack and pushes 1 if the first value is less than the second,
     * or 0 if it is not.
     *
     * @returns {boolean} Returns true to indicate that execution is complete.
     */
    execute() {
        const value1 = this.vm.S.pop()
        const value2 = this.vm.S.pop()
        value1 < value2 ? this.vm.S.push(1) : this.vm.S.push(0)
        return true
    }
}

class LTE extends Instruction {
    /**
     * Executes the LTE instruction, which checks if the first value on the stack is less than or equal to the second.
     *
     * This method pops the top two values from the stack and pushes 1 if the first value is less than or equal
     * to the second, or 0 if it is not.
     *
     * @returns {boolean} Returns true to indicate that execution is complete.
     */
    execute() {
        const value1 = this.vm.S.pop()
        const value2 = this.vm.S.pop()
        value1 <= value2 ? this.vm.S.push(1) : this.vm.S.push(0)
        return true
    }
}

class NOT extends Instruction {
    /**
     * Executes the NOT instruction, which performs a logical negation on the top value of the stack.
     *
     * This method checks the top value of the stack. If it is falsy, it pops the value and pushes 0 onto the stack.
     * Otherwise, it leaves the stack unchanged.
     *
     * @returns {boolean} Returns true to indicate that execution is complete.
     */
    execute() {
        !this.vm.S.peek() ? (this.vm.S.pop(), this.vm.S.push(0)) : null
        return true
    }
}

class SNT extends Instruction {
    /**
     * Executes the SNT (string not) instruction, which checks if the top value of the stack is an empty string.
     *
     * This method pops the top value from the stack and pushes 1 if the value is an empty string,
     * otherwise it pushes 0.
     *
     * @returns {boolean} Returns true to indicate that execution is complete.
     */
    execute() {
        this.vm.S.pop() == '' ? 
            this.vm.S.push(1) : 
            this.vm.S.push(0)
        return true
    }
}

class CAT extends Instruction {
    /**
     * Executes the CAT (concatenate) instruction, which concatenates the top two values of the stack.
     *
     * This method pops the top two values from the stack and pushes their concatenation back onto the stack.
     *
     * @returns {boolean} Returns true to indicate that execution is complete.
     */
    execute() {
        const value1 = this.vm.S.pop()
        const value2 = this.vm.S.pop()
        this.vm.S.push(value1 + value2)
        return true
    }
}

class TOS extends Instruction {
    /**
     * Executes the TOS (top of stack) instruction, which converts the top stack value to a string.
     *
     * This method pops the top value from the stack, converts it to a string,
     * and pushes the string back onto the stack.
     *
     * @returns {boolean} Returns true to indicate that execution is complete.
     */
    execute() {
        this.vm.S.push(this.vm.S.pop().toString())
        return true
    }
}

class CST extends Instruction {
    /**
     * Executes the CST (cast) instruction, which casts the top stack value to a specified type.
     *
     * This method pops the top value from the stack and converts it to the specified type,
     * which can be 'number', 'list', or 'string'. If the type is 'list', the implementation
     * is currently not complete.
     *
     * @returns {boolean} Returns true to indicate that execution is complete.
     */
    execute() {
        try{
            const value = this.vm.S.pop()
            const type = this.args[0]
            
            switch(type){
                case 'number':
                    this.vm.S.push(Number(value))
                    break
                case 'list':
                    //this.vm.S.push([...String(value)]) // falta implementar listas
                    break
                case 'string':
                    this.vm.S.push(String(value))
                    break
            }

        } catch(e){
            throw new Error(`\n>>> Casting error: ${e.message}`)
        }
        return true
    }
}

class INO extends Instruction { // falta la implementacion de listas
    /**
     * Executes the INO (input/output) instruction, which checks the type of the top stack value
     * and pushes either the type or the value back onto the stack.
     *
     * This method pops the top value from the stack, checks its type against the specified type,
     * and pushes either the type (if it matches) or the original value back onto the stack.
     * Note: The list implementation is not yet complete.
     *
     * @returns {boolean} Returns true to indicate that execution is complete.
     */
    execute() {
        const value = this.vm.S.pop()
        const type = this.args[0]
        typeof value === type ? this.vm.S.push(type) : this.vm.S.push(value)
        return true
    }
}

class NOP extends Instruction {
    /**
     * Executes the NOP (no operation) instruction.
     *
     * This method performs no action and simply returns true to indicate that execution
     * is complete. It serves as a placeholder in instruction sequences where no operation is needed.
     *
     * @returns {boolean} Returns true to indicate that execution is complete.
     */
    execute() {
        return true
    }
}

class BR extends Instruction {
    /**
     * Executes the BR (branch) instruction.
     *
     * This method alters the program counter (pc) of the current block, effectively
     * jumping to a new instruction based on the specified offset.
     * The offset is taken from the first argument of the instruction.
     *
     * @returns {boolean} Returns true to indicate that execution is complete.
     */
    execute() {
        this.vm.currentBlock.pc += this.args[0] - 1
        return true
    }
}

class BT extends Instruction {
    /**
     * Executes the BT (branch if true) instruction.
     *
     * This method checks the top value of the stack. If it evaluates to true (a truthy value),
     * the program counter (pc) of the current block is modified to jump to a new instruction
     * based on the specified offset from the first argument.
     *
     * @returns {boolean} Returns true to indicate that execution is complete.
     */
    execute() {
        if (this.vm.S.peek()){
            this.vm.S.pop()
            this.vm.currentBlock.pc += this.args[0] - 1
        } 
        
        return true
    }
}

class BF extends Instruction {
    /**
     * Executes the BF (branch if false) instruction.
     *
     * This method checks the top value of the stack. If it evaluates to false (a falsy value),
     * the program counter (pc) of the current block is modified to jump to a new instruction
     * based on the specified offset from the first argument.
     *
     * @returns {boolean} Returns true to indicate that execution is complete.
     */
    execute() {
        if (!this.vm.S.peek()){
            this.vm.S.pop()
            this.vm.currentBlock.pc += this.args[0] - 1
        } 
        return true
    }
}

class LNT extends Instruction {
    /**
     * Executes the LNT (list is null or empty) instruction.
     *
     * This method checks if the top value of the stack is a list (array) and
     * determines whether it is null or empty. It pushes 1 onto the stack if the
     * list is null or empty, and 0 otherwise.
     *
     * @returns {boolean} Returns true to indicate that execution is complete.
     */
    execute() {
        const list = this.vm.S.pop()

        const isNullOrEmpty = !Array.isArray(list) || list.length === 0;
        this.vm.S.push(isNullOrEmpty ? 1 : 0);
        return true;
    }
}

class LIN extends Instruction {
    /**
     * Executes the LIN (list insert at the beginning) instruction.
     *
     * This method pops the top two values from the stack. The first value
     * is considered the item to insert, and the second value is expected
     * to be a list (array). The method inserts the item at the beginning
     * of the list. If the second value is not a list, it throws an error.
     *
     * @throws {Error} Throws an error if the top of the stack is not a list.
     * @returns {boolean} Returns true to indicate that execution is complete.
     */
    execute() {
        const value = this.vm.S.pop();
        const list = this.vm.S.pop();

        if (Array.isArray(list)) {
            list.unshift(value);
            this.vm.S.push(list);
        } else {
            throw new Error("Top of stack is not a list");
        }
        return true;
    }
}

class LTK extends Instruction {
    /**
     * Executes the LTK (list take) instruction.
     *
     * This method pops the top two values from the stack. The first value
     * is considered the index to retrieve, and the second value is expected
     * to be a list (array). The method retrieves the value at the specified
     * index from the list. If the index is out of bounds, it pushes `null`
     * onto the stack. If the second value is not a list, it throws an error.
     *
     * @throws {Error} Throws an error if the top of the stack is not a list.
     * @returns {boolean} Returns true to indicate that execution is complete.
     */
    execute() {
        const index = this.vm.S.pop()
        const list = this.vm.S.pop()

        if (Array.isArray(list)) {
            const value = list[index]
            this.vm.S.push(value !== undefined ? value : null)
        } else {
            throw new Error("Top of stack is not a list");
        }
        return true;
    }
}

class LRK extends Instruction {
    /**
     * Executes the LRK (list remainder take) instruction.
     *
     * This method pops the top two values from the stack. The first value
     * is treated as the index to start taking the remainder from, and the
     * second value is expected to be a list (array). The method checks if
     * the index is valid, and if so, it creates a new array containing all
     * elements from the specified index to the end of the list, pushing
     * that array onto the stack. If the index is out of bounds, it throws
     * an error. If the second value is not a list, it also throws an error.
     *
     * @throws {Error} Throws an error if the top of the stack is not a list
     * or if the index is out of range.
     * @returns {boolean} Returns true to indicate that execution is complete.
     */
    execute() {
        const index = this.vm.S.pop();
        const list = this.vm.S.pop();

        if (Array.isArray(list)) {
            if (index >= 0 && index < list.length) {
                const remainder = [...list.slice(index)];
                this.vm.S.push(remainder);
            } else {
                throw new Error("Index out of range");
            }
        } else {
            throw new Error("Top of stack is not a list");
        }
        return true;
    }
}

class TOL extends Instruction {
    /**
     * Executes the TOL (top to list) instruction.
     *
     * This method pops the top value from the stack. If the value is already
     * an array (list), it pushes it back onto the stack. If the value is not
     * an array, it wraps the value in an array and pushes that new array onto
     * the stack. This effectively converts the top stack item into a list.
     *
     * @returns {boolean} Returns true to indicate that execution is complete.
     */
    execute() {
        const value = this.vm.S.pop();

        const list = Array.isArray(value) ? value : [value];
        this.vm.S.push(list);
        return true;
    }
}

class STK extends Instruction {
    /**
     * Executes the STK (stack take) instruction.
     *
     * This method pops the top two values from the stack. The first value
     * is considered the index to retrieve (k), and the second value is expected
     * to be a stack (array). The method retrieves the value at the specified
     * index from the stack. If the index is out of bounds, it pushes `null`
     * onto the stack.
     *
     * @throws {Error} Throws an error if the index is out of range.
     * @returns {boolean} Returns true to indicate that execution is complete.
     */
    execute() {
        const index = this.args[0]
        const stackSize = this.vm.S.stack.length

        if (index >= 0 && index < stackSize) {
            const value = this.vm.S.stack[stackSize - 1 - index]
            this.vm.S.push(value) 
        } else {
            throw new Error("Index out of range")
        }
        return true;
    }
}

class SRK extends Instruction {
    /**
     * Executes the SRK (stack remainder take) instruction.
     *
     * This method retrieves the index from the arguments. It creates a new array
     * containing all elements from the specified index to the end of the stack
     * and pushes that array onto the stack.
     *
     * @throws {Error} Throws an error if the index is out of range.
     * @returns {boolean} Returns true to indicate that execution is complete.
     */
    execute() {
        const index = this.args[0]; // Toma el índice k del argumento
        const stackSize = this.vm.S.stack.length; // Tamaño actual del stack

        if (index >= 0 && index < stackSize) {
            const remainder = this.vm.S.stack.slice(stackSize - index); // Crea el resto del stack
            this.vm.S.push(remainder); // Devuelve el resto al stack
        } else {
            throw new Error("Index out of range");
        }
        return true;
    }
}

class HLT extends Instruction {
    /**
     * Executes the HLT (halt) instruction.
     *
     * This method is used to terminate the program execution. When invoked,
     * it throws an error indicating that the program has been halted.
     *
     * @throws {Error} Throws an error with a message indicating program termination.
     */
    execute() {
        throw new Error('\n>>> Program terminated by HLT')
    }
}

class InstructionSet {
    /**
     * Creates an instance of InstructionSet.
     *
     * Initializes a mapping of instruction mnemonics to their corresponding
     * instruction classes. Each mnemonic can be used to create an instance of its associated instruction class.
     */
    constructor() {
        this.instructions = new Map([
            ['LDV', () => new LDV()],
            ['PRN', () => new PRN()],
            ['BST', () => new BST()],
            ['BLD', () => new BLD()],
            ['LDF', () => new LDF()],
            ['APP', () => new APP()],
            ['RET', () => new RET()],
            ['ADD', () => new ADD()],
            ['SUB', () => new SUB()],
            ['MUL', () => new MUL()],
            ['DIV', () => new DIV()],
            ['POP', () => new POP()],
            ['SWP', () => new SWP()],
            ['NEG', () => new NEG()],
            ['SGN', () => new SGN()],
            ['EQ', () => new EQ()],
            ['GT', () => new GT()],
            ['GTE', () => new GTE()],
            ['LT', () => new LT()],
            ['LTE', () => new LTE()],
            ['NOT', () => new NOT()],
            ['SNT', () => new SNT()],
            ['CAT', () => new CAT()],
            ['TOS', () => new TOS()],
            ['CST', () => new CST()],
            ['INO', () => new INO()],
            ['NOP', () => new NOP()],
            ['BR', () => new BR()],
            ['BT', () => new BT()],
            ['BF', () => new BF()],
            ['LNT', () => new LNT()],
            ['LIN', () => new LIN()],
            ['LTK', () => new LTK()],
            ['LRK', () => new LRK()],
            ['TOL', () => new TOL()],
            ['STK', () => new STK()],
            ['SRK', () => new SRK()],
            ['HLT', () => new HLT()]
        ]);
    }

    /**
     * Retrieves an instruction instance by its mnemonic.
     *
     * @param {string} mnemonic - The mnemonic of the instruction to retrieve.
     * @returns {Instruction|undefined} An instance of the corresponding instruction class or undefined if the mnemonic is not found.
     */
    getInstruction(mnemonic) {
        return this.instructions.get(mnemonic)?.();
    }
}

class InstructionVisitor extends basmVisitor {

    /**
     * Creates an instance of InstructionVisitor.
     *
     * Initializes the instruction set, the virtual machine (BiesVM), and
     * the context for function calls.
     */
    constructor() {
        super()
        this.instructionSet = new InstructionSet()
        this.vm = new BiesVM()
        this.context = 0
    }

    /**
     * Visits a program context.
     *
     * @param {ProgramContext} ctx - The context of the program.
     * @returns {null}
     */
    visitProgram(ctx) {
        return this.visitChildren(ctx)
    }

    /**
     * Visits an argument context.
     *
     * @param {ArgContext} ctx - The context of the argument.
     * @returns {number|string|null} The value of the argument, which can be an integer, string, or null.
     */
    visitArg(ctx) {
        if (ctx.INT()) return parseInt(ctx.INT().getText(), 10)
        if (ctx.STR()) return ctx.STR().getText().replace(/^"|"$|"/g, '')
        if (ctx.SIGNED_INT()) return this.handleSignedInt(ctx.SIGNED_INT().getText())
        if (ctx.funcArg()) return parseInt(ctx.funcArg().getText().slice(1), 10)
        if (ctx.listArg()) return this.visitList(ctx.listArg())
        else if(ctx.typeArg()) return ctx.typeArg().getText().toLowerCase()
        return null
    }

    /**
     * Handles signed integers, converting them to their numeric value.
     *
     * @param {string} signedInt - The signed integer as a string.
     * @returns {number} The numeric value of the signed integer.
     */
    handleSignedInt(signedInt) {
        const sign = signedInt[0] === '+' ? 1 : -1;
        const number = parseInt(signedInt.slice(1), 10);
        return sign * number;
    }

    /**
     * Visits a list context and extracts integer elements.
     *
     * @param {ListContext} ctx - The context of the list.
     * @returns {Array<number>} An array of integers from the list.
     */
    visitList(ctx) {
        const elements = ctx.INT()
        const list = []
    
        for (let i = 0; i < elements.length; i++) {
            list.push(parseInt(elements[i].getText(), 10))
        }
        
        return list;
    }

    /**
     * Visits a function context and creates a new block in the virtual machine.
     *
     * @param {FuncContext} ctx - The context of the function.
     * @returns {null}
     */
    visitFunc(ctx) {
        this.context = ctx.INT(0).getText()
        const args = parseInt(ctx.INT(1).getText(), 10)
        const parent = ctx.INT(2).getText()
        this.vm.C.pushBlock(this.context, new Block(this.context, args, parent))
        return null
    }

    /**
     * Visits the end of a context and resets the current context.
     *
     * @param {EndContext} ctx - The context of the end.
     * @returns {null}
     */
    visitEnd(ctx){
        this.context = null
        return null
    }

    /**
     * Visits an instruction context, retrieves the corresponding instruction,
     * sets its arguments, and pushes it to the current block.
     *
     * @param {InstContext} ctx - The context of the instruction.
     * @returns {null}
     * @throws {Error} If the instruction mnemonic is unknown.
     */
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

/**
 * Default input file for the BiesVM.
 * This file is used as the default source of input for the virtual machine.
 *
 * @type {string}
 */
let default_input_file = './test/input.txt'
const vm = new BiesVM()

/**
 * Parses and executes a BASM program from the specified input file.
 *
 * This function reads the contents of the given input file, tokenizes it using the BASM lexer,
 * builds a parse tree with the BASM parser, and then visits the parse tree to execute the instructions.
 *
 * @param {string} [input_file=default_input_file] - The path to the input file to be parsed.
 * If not provided, it defaults to the predefined `default_input_file`.
 */
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
