import Instruction from './Instruction.js'

export default class TOL extends Instruction {
    execute() {
        const value = this.vm.S.pop();

        const list = Array.isArray(value) ? value : [value];
        this.vm.S.push(list);
        return true;
    }
}