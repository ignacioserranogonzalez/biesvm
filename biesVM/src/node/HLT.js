import Instruction from './Instruction.js'

export default class HLT extends Instruction {
    execute() {
        throw new Error('\n>>> Program terminated by HLT')
    }
}