import Instruction from './Instruction.js'

export default class SGN extends Instruction {
    execute() {
        const value = this.vm.S.pop()
        value > 0 ? this.vm.S.push(1) : this.vm.S.push(0)
        return true
    }
}