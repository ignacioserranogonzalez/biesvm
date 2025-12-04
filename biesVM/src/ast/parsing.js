import fs from 'fs'
import antlr4 from 'antlr4'
import basmLexer from '../../parser/grammar/basmLexer.js'
import basmParser from '../../parser/grammar/basmParser.js'

import InstructionVisitor from './InstructionVisitor.js'
import BiesVM from '../vm/BiesVM.js'

let default_input_file = './test/input.txt'
const vm = new BiesVM()

function parse(input_file = default_input_file) {
    
    console.log(`>>> Reading ${input_file}\n`)
    const input = fs.readFileSync(input_file, 'utf-8')
    const chars = new antlr4.InputStream(input)
    const lexer = new basmLexer(chars)
    const tokens = new antlr4.CommonTokenStream(lexer)
    const parser = new basmParser(tokens)
    parser.buildParseTrees = true

    const ast = parser.program()
    const visitor = new InstructionVisitor()

    try {
        visitor.visit(ast)
        vm.execute() // BiesVM is not defined
    } catch (error) {
        console.error(error.message)
    }
    
    console.log(`>>> Executing ${input_file} done`)
}

export default parse