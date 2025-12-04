import Instruction from './Instruction.js'

export default class CST extends Instruction {
    execute() {
        try{
            const value = this.vm.S.pop()
            const type = this.args[0]
            
            switch(type){
                case 'number':
                    this.vm.S.push(Number(value))
                    break
                case 'list':
                    break
                case 'string':
                    this.vm.S.push(String(value))
                    break
            }

        } catch(e){
            throw new Error(`\n>>> Casting error: ${e.message}`)
        }
        return true
    }
}