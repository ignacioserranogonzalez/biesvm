import Instruction from './Instruction.js'

export default class BST extends Instruction {
    execute() {
        const value = this.vm.S.pop();
        this.vm.B.setValue(this.args[0], this.args[1], value);
        return true;
    }
}