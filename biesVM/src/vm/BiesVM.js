import Code from './Code.js';
import Stack from './Stack.js';
import Bindings from './Bindings.js';
import Dump from './Dump.js';

export default class BiesVM {
    constructor() {
        if (BiesVM.instance) {
            return BiesVM.instance;  // Retorna la instancia existente si ya fue creada
        }

        this.C = new Code();   // Almacena el código del programa
        this.S = new Stack();  // Pila para operaciones
        this.B = new Bindings();  // Entorno (bindings)
        this.D = new Dump();   // Pila de contextos de ejecución
        this.pc = 0
        this.currentBlock = null

        BiesVM.instance = this;  // Guarda la instancia para futuras referencias
    }
    
    setCurrentBlock(block) {
        this.currentBlock = block
        this.pc = block.parent
    }


    execute() {
        this.currentBlock = this.C.peekBlock(this.pc) // $0
        
        while (this.pc < this.C.length()){
            this.executeBlock(this.currentBlock)
            this.pc++
        }
    }

    executeBlock(block) {
        console.log(`>>> Executing Block - Function: $${block.func}, Args: ${block.args}, Parent: $${block.parent}`);
        while (block.peek(block.pc).execute()) {
            // console.log(block.peek(block.pc))
            block.pc++
        }
    }
}
