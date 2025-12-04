import Instruction from './Instruction.js'

export default class LDV extends Instruction {
    execute() {
        const value = this.args[0]
        this.vm.S.push(value)
        return true
    }
}