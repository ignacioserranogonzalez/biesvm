/**
 * Represents a collection of code blocks within the Bies virtual machine.
 * Manages loading and accessing code blocks for execution.
 */
class Code {
    constructor() {
        this.code = [];
    }

    /**
     * Loads a set of instructions into the code collection.
     * @param {Array} instructions - An array of instructions to load.
     */
    loadProgram(instructions) { 
        this.code = instructions;
    }

    /**
     * Pushes a new block into the code collection at the specified index.
     * @param {number} index - The index at which to place the block.
     * @param {Block} block - The block to be added.
     * @throws {Error} Throws an error if a block already exists at the specified index.
     */
    pushBlock(index, block) {
        if (this.code[index] !== undefined) {
            throw new Error(`Block at index ${index} already exists. Use a different index.`);
        }
        this.code[index] = block;
    }

    /**
     * Pops the most recent block from the code collection.
     * @returns {Block} The block that was removed.
     * @throws {Error} Throws an error if the code array is empty.
     */
    popBlock() {
        if (this.code.length > 0) {
            return this.code.pop();
        } else {
            throw new Error("Code array is empty.");
        }
    }

    /**
     * Retrieves the block at the specified index without removing it.
     * @param {number} index - The index of the block to peek at.
     * @returns {Block} The block at the specified index.
     * @throws {Error} Throws an error if the index does not exist.
     */
    peekBlock(index) {
        if (this.code[index] !== undefined) {
            return this.code[index];
        } else {
            throw new Error(`Block at index ${index} does not exist.`);
        }
    }

    /**
     * Returns the number of blocks in the code collection.
     * @returns {number} The length of the code array.
     */
    length() {
        return this.code.length;
    }
}

export default Code;
