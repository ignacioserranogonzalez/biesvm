class Code {
    constructor() {
        this.code = [];
    }

    loadProgram(instructions) { 
        this.code = instructions;
    }

    pushBlock(index, block) {
        if (this.code[index] !== undefined) {
            throw new Error(`Block at index ${index} already exists. Use a different index.`);
        }
        this.code[index] = block;
    }

    popBlock() {
        if (this.code.length > 0) {
            return this.code.pop();
        } else {
            throw new Error("Code array is empty.");
        }
    }

    peekBlock(index) {
        if (this.code[index] !== undefined) {
            return this.code[index];
        } else {
            throw new Error(`Block at index ${index} does not exist.`);
        }
    }

    length() {
        return this.code.length;
    }
}

export default Code;
