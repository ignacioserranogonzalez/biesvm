import Instruction from './Instruction.js'

export default class LNT extends Instruction {
    execute() {
        const list = this.vm.S.pop()

        const isNullOrEmpty = !Array.isArray(list) || list.length === 0;
        this.vm.S.push(isNullOrEmpty ? 1 : 0);
        return true;
    }
}