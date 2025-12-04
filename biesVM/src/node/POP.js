import Instruction from './Instruction.js'

export default class POP extends Instruction {
    execute() {
        this.vm.S.pop()
        return true
    }
}