import Instruction from './Instruction.js'

export default class LIN extends Instruction {
    execute() {
        const value = this.vm.S.pop();
        const list = this.vm.S.pop();

        if (Array.isArray(list)) {
            list.unshift(value);
            this.vm.S.push(list);
        } else {
            throw new Error("Top of stack is not a list");
        }
        return true;
    }
}