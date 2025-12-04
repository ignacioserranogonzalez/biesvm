import Instruction from './Instruction.js'

export default class INO extends Instruction {
    execute() {
        const value = this.vm.S.pop()
        const type = this.args[0]
        typeof value === type ? this.vm.S.push(type) : this.vm.S.push(value)
        return true
    }
}