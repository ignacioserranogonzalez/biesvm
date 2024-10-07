// Componente S

class Stack {
    constructor() {
        this.stack = [];
    }

    push(value) {
        this.stack.push(value);
    }

    pop() {
        if (this.stack.length === 0) throw new Error("Stack underflow");
        return this.stack.pop();
    }

    swap() {
        if (this.stack.length < 2) throw new Error("Not enough values to swap");
        const [a, b] = [this.stack.pop(), this.stack.pop()];
        this.stack.push(a);
        this.stack.push(b);
    }

    peek() {
        return this.stack[this.stack.length - 1];
    }
}
export default Stack
