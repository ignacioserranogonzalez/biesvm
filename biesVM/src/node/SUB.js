import Instruction from './Instruction.js'

export default class SUB extends Instruction {
    execute() {
        const value1 = this.vm.S.pop()
        const value2 = this.vm.S.pop()
        this.vm.S.push(value1 - value2)
        return true
    }
}