import Instruction from './Instruction.js'

export default class TOS extends Instruction {
    execute() {
        this.vm.S.push(this.vm.S.pop().toString())
        return true
    }
}