//Componente B: Bindings

class Bindings {
    constructor() {
        this.frames = []; 
    }

    createFrame() {
        this.frames.push([]);
    }

    deleteFrame() {
        this.frames.pop();
    }

    setValue(level, key, value) { // nivel, pos, V
        if (!this.frames[level]) throw new Error("Invalid environment level");
        this.frames[level][key] = value;
    }

    pushValue(level, value) { // nivel, pos, V
        if (!this.frames[level]) throw new Error("Invalid environment level");
        this.frames[level].push(value);
    }

    getValue(level, key) { // nivel, pos
        if (!this.frames[level]) throw new Error("Invalid environment level");
        return this.frames[level][key];
    }
}

export default Bindings
