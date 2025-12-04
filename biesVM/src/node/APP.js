import Instruction from './Instruction.js'

export default class APP extends Instruction {
    execute() {
        const fun = this.vm.S.pop();
        const k = this.args[0];

        if (this.vm.S.length < k) throw new Error("Not enough arguments on the stack");
        
        this.vm.B.createFrame(fun)

        for (let i = 0; i < k; i++) {
            const value = this.vm.S.pop();
    
            this.vm.B.setValue(fun, i, value);
        }

        this.vm.D.pushContext(this.vm.currentBlock.func, this.vm.currentBlock.pc + 1);
        this.vm.setCurrentBlock(this.vm.C.peekBlock(fun));

        this.vm.currentBlock.pc = 0;

        return false;
    }
}