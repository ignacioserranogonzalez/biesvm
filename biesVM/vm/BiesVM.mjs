import Code from './Code.mjs';
import Stack from './Stack.mjs';
import Bindings from './Bindings.mjs';
import Dump from './Dump.mjs';

/**
 * Represents the Bies virtual machine, responsible for executing the program.
 * Implements the singleton pattern to ensure only one instance exists.
 */
class BiesVM {
    /**
     * Creates an instance of the BiesVM.
     * Initializes the components necessary for execution, including
     * the code storage, stack, bindings, and context dump.
     * @throws {Error} Throws an error if trying to create multiple instances.
     */
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

    /**
     * Sets the current block to be executed.
     * Updates the program counter to the parent of the specified block.
     * @param {Block} block - The block to set as the current block.
     */
    setCurrentBlock(block) {
        this.currentBlock = block
        this.pc = block.parent
    }

    /**
     * Executes the program starting from the current program counter.
     * Iterates through blocks and executes instructions until the end of the program.
     */
    execute() {
        this.currentBlock = this.C.peekBlock(this.pc) // $0
        
        while (this.pc < this.C.length()){
            this.executeBlock(this.currentBlock)
            this.pc++
        }
    }

    /**
     * Executes the instructions within the specified block.
     * Continues execution until no more instructions are left to execute.
     * @param {Block} block - The block containing instructions to execute.
     */
    executeBlock(block) {
        // console.log(`>>> Executing Block - Function: $${block.func}, Args: ${block.args}, Parent: $${block.parent}`);
        while (block.peek(block.pc).execute()) {
            block.pc++
        }
    }
}

export default BiesVM;
