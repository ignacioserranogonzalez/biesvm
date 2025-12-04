import Instruction from './Instruction.js'

export default class BR extends Instruction {
    execute() {
        this.vm.currentBlock.pc += this.args[0] - 1
        return true
    }
}