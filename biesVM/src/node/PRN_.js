import Instruction from './Instruction.js'

export default class PRN extends Instruction {
    execute() {
        const value = this.vm.S.pop()
        console.log(value)
        return true
    }
}
