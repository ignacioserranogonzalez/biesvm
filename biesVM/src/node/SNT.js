import Instruction from './Instruction.js'

export default class SNT extends Instruction {
    execute() {
        this.vm.S.pop() == '' ? 
            this.vm.S.push(1) : 
            this.vm.S.push(0)
        return true
    }
}