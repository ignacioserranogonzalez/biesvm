import Instruction from './Instruction.js'

export default class SRK extends Instruction {
    execute() {
        const index = this.args[0];
        const stackSize = this.vm.S.stack.length;

        if (index >= 0 && index < stackSize) {
            const remainder = this.vm.S.stack.slice(stackSize - index);
            this.vm.S.push(remainder);
        } else {
            throw new Error("Index out of range");
        }
        return true;
    }
}