//Componente D : contextos de frames

class Dump {
    constructor() {
        this.dump = [];
    }

    pushContext(frame, pc) {
        this.dump.push({frame, pc});
    }

    popContext() {
        return this.dump.pop();
    }

    getCurrentContext() {
        return this.dump[this.dump.length - 1];
    }
}

export default Dump

