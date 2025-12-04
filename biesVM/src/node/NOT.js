import Instruction from './Instruction.js'

export default class NOT extends Instruction {
    execute() {
        !this.vm.S.peek() ? (this.vm.S.pop(), this.vm.S.push(0)) : null
        return true
    }
}