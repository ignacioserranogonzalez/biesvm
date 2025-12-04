import Instruction from './Instruction.js'

export default class NEG extends Instruction {
    execute() {
        if(typeof this.vm.S.peek() === 'number'){
            const value = this.vm.S.pop()
            this.vm.S.push(-value)
        }
        return true
    }
}