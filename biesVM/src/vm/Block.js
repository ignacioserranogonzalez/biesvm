/**
 * Represents a block of code within the Bies virtual machine.
 * Each block contains instructions and manages the execution context.
 */
export default class Block {
    /**
     * Creates an instance of a Block.
     * @param {number} func - The function identifier associated with this block.
     * @param {number} args - The number of arguments for this block.
     * @param {number} parent - The parent block identifier.
     */
    constructor(func, args, parent) {
        this.code = []
        this.func = func
        this.args = args
        this.parent = parent
        this.pc = 0
    }

    /**
     * Loads a set of instructions into the block.
     * @param {Array} instructions - An array of instructions to load.
     */
    loadProgram(instructions) {
        this.code = instructions;
    }

    /**
     * Pushes a new instruction onto the block's code stack.
     * @param {Instruction} value - The instruction to be added.
     */
    push(value) {
        this.code.push(value); 
    }

    /**
     * Pops the most recent instruction from the block's code stack.
     * @returns {Instruction} The instruction that was removed.
     * @throws {Error} Throws an error if the code block is empty.
     */
    pop() {
        if (this.code.length > 0) {
            return this.code.pop();
        } else {
            throw new Error("Code block is empty.");
        }
    }

    /**
     * Retrieves the instruction at the specified index without removing it.
     * @param {number} index - The index of the instruction to peek at.
     * @returns {Instruction} The instruction at the specified index.
     * @throws {Error} Throws an error if the index does not exist.
     */
    peek(index) {
        if (this.code[index] !== undefined) {
            return this.code[index];
        } else {
            throw new Error(`Element at index ${index} does not exist.`);
        }
    }

    /**
     * Returns the number of instructions in the block.
     * @returns {number} The length of the code array.
     */
    length() {
        return this.code.length;
    }
}