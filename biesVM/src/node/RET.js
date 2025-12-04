import Instruction from './Instruction.js'

export default class RET extends Instruction {
    execute() {
        const { frame, pc } = this.vm.D.popContext()

        this.vm.setCurrentBlock(this.vm.C.peekBlock(frame))
        this.vm.currentBlock.pc = pc

        return false
    }
}