class Block { 
    constructor(func, args, parent) {
        this.code = []
        this.func = func
        this.args = args
        this.parent = parent
        this.pc = 0
    }

    loadProgram(instructions) {
        this.code = instructions;
    }
 
    push(value) {
        this.code.push(value); 
    }

    pop() {
        if (this.code.length > 0) {
            return this.code.pop();
        } else {
            throw new Error("Code block is empty.");
        }
    }

    peek(index) {
        if (this.code[index] !== undefined) {
            return this.code[index];
        } else {
            throw new Error(`Element at index ${index} does not exist.`);
        }
    }

    length() {
        return this.code.length;
    }
}

export default Block;
