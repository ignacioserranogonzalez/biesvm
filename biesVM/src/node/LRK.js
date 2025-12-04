import Instruction from './Instruction.js'

export default class LRK extends Instruction {
    execute() {
        const index = this.vm.S.pop();
        const list = this.vm.S.pop();

        if (Array.isArray(list)) {
            if (index >= 0 && index < list.length) {
                const remainder = [...list.slice(index)];
                this.vm.S.push(remainder);
            } else {
                throw new Error("Index out of range");
            }
        } else {
            throw new Error("Top of stack is not a list");
        }
        return true;
    }
}