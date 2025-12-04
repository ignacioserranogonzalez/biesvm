import Instruction from './Instruction.js'

export default class BLD extends Instruction {
    execute() {
        const value = this.vm.B.getValue(this.args[0], this.args[1])
        this.vm.S.push(value)
        return true
    }
}