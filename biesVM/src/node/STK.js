import Instruction from './Instruction.js'

export default class STK extends Instruction {
    execute() {
        const index = this.args[0]
        const stackSize = this.vm.S.stack.length

        if (index >= 0 && index < stackSize) {
            const value = this.vm.S.stack[stackSize - 1 - index]
            this.vm.S.push(value) 
        } else {
            throw new Error("Index out of range")
        }
        return true;
    }
}