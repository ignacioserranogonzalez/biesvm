import Instruction from './Instruction.js'

export default class LTK extends Instruction {
    execute() {
        const index = this.vm.S.pop()
        const list = this.vm.S.pop()

        if (Array.isArray(list)) {
            const value = list[index]
            this.vm.S.push(value !== undefined ? value : null)
        } else {
            throw new Error("Top of stack is not a list");
        }
        return true;
    }
}