export default class Instruction {
    constructor() {
        if (this.constructor === Instruction) {
            throw new Error("Cannot instantiate abstract class Instruction")
        }
        this.args = []
        this.vm = new BiesVM()
    }

    setArgs(args) {
        this.args = args
    }

    execute() {
        throw new Error('execute() method must be implemented')
    }
}