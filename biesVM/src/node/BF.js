import Instruction from './Instruction.js'

export default class BF extends Instruction {
    execute() {
        if (!this.vm.S.peek()){
            this.vm.S.pop()
            this.vm.currentBlock.pc += this.args[0] - 1
        } 
        return true
    }
}
