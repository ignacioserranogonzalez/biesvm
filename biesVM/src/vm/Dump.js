//Componente D : contextos de frames

/**
 * Represents a context dump used by the Bies virtual machine to manage execution contexts.
 * Stores frames and program counters (PC) for managing function calls and returns.
 */
class Dump {
    constructor() {
        this.dump = [];
    }

    /**
     * Pushes a new execution context onto the dump.
     * @param {number} frame - The frame identifier for the current context.
     * @param {number} pc - The program counter at the time of the context push.
     */
    pushContext(frame, pc) {
        this.dump.push({frame, pc});
    }

    /**
     * Pops the most recent execution context from the dump.
     * @returns {Object} The context object containing frame and program counter.
     */
    popContext() {
        return this.dump.pop();
    }

    /**
     * Retrieves the current execution context without removing it from the dump.
     * @returns {Object} The current context object containing frame and program counter.
     */
    getCurrentContext() {
        return this.dump[this.dump.length - 1];
    }
}

export default Dump

