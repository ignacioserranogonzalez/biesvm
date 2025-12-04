import Instruction from './Instruction.js'

export default class NOP extends Instruction {
    execute() {
        return true
    }
}