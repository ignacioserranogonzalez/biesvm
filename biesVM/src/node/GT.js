import Instruction from './Instruction.js'

export default class GT extends Instruction {
    execute() {
        const value1 = this.vm.S.pop()
        const value2 = this.vm.S.pop()
        value1 > value2 ? 
            this.vm.S.push(1) : 
            this.vm.S.push(0)
        return true
    }
}