// Componente S

/**
 * Represents a simple stack data structure used by the Bies virtual machine.
 * Provides methods to manipulate the stack with standard operations.
 */
export default class Stack {
    constructor() {
        this.stack = [];
    }

    /**
     * Pushes a new value onto the top of the stack.
     * @param {any} value - The value to be pushed onto the stack.
     */
    push(value) {
        this.stack.push(value);
    }

    /**
     * Pops the top value off the stack.
     * @returns {any} The value that was at the top of the stack.
     * @throws {Error} If the stack is empty, an error is thrown indicating stack underflow.
     */
    pop() {
        if (this.stack.length === 0) throw new Error("Stack underflow");
        return this.stack.pop();
    }

    /**
     * Swaps the two topmost values on the stack.
     * @throws {Error} If there are not enough values on the stack to swap, an error is thrown.
     */
    swap() {
        if (this.stack.length < 2) throw new Error("Not enough values to swap");
        const [a, b] = [this.stack.pop(), this.stack.pop()];
        this.stack.push(a);
        this.stack.push(b);
    }

    /**
     * Retrieves the top value of the stack without removing it.
     * @returns {any} The value at the top of the stack.
     */
    peek() {
        return this.stack[this.stack.length - 1];
    }
}