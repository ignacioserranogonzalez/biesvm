import Instruction from './Instruction.js'

export default class SWP extends Instruction {
    execute() {
        this.vm.S.swap()
        return true
    }
}