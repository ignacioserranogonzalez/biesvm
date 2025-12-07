export default class Bindings {
    constructor() {
        this.frames = []; // Array que contendrá los contextos
        this.createFrame(0)
    }

    // Crea un nuevo contexto en la posición k y lo inicializa con un array vacío
    createFrame() {
        this.frames.push([]); // Crea y agrega un nuevo contexto
    }

    // Elimina el contexto en la posición k
    deleteFrame(k) {
        if (this.frames[k]) {
            this.frames[k] = null; // O eliminar completamente con `this.frames.splice(k, 1);`
        } else {
            throw new Error("No context found at this position"); // Maneja el caso si no existe el contexto
        }
    }

    // Establece un valor en el contexto especificado por k y la posición dentro de ese contexto
    setValue(k, pos, value) {
        // Verifica que el contexto exista
        if (!this.frames[k]) throw new Error("Invalid context level");

        // Establece el binding en la posición especificada
        this.frames[k][pos] = [k, value]; // Guarda como [contexto, valor]
    }

    // Método para agregar un valor al contexto especificado por k
    pushValue(k, value) {
        if (!this.frames[k]) throw new Error("Invalid context level");
        this.frames[k].push([k, value]); // Agrega el nuevo binding al contexto
    }

    // Obtiene un valor basado en el contexto y la posición
    getValue(k, pos) {
        if (!this.frames[k]) throw new Error("Invalid context level");
        if (!this.frames[k][pos]) throw new Error("Invalid position in context");

        return this.frames[k][pos][1]; // Retorna solo el valor
    }

    // Método para buscar un valor específico por contexto y valor
    findValue(k, value) {
        if (!this.frames[k]) throw new Error("Invalid context level");

        for (let i = 0; i < this.frames[k].length; i++) {
            const binding = this.frames[k][i];
            if (binding && binding[1] === value) {
                return binding[1]; // Retorna solo el valor si el valor coincide
            }
        }
        return null; // Retorna null si no se encuentra
    }
}