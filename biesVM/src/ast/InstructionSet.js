import LDV from '../node/LDV.js'
import PRN from '../node/PRN_.js'
import BST from '../node/BST.js'
import BLD from '../node/BLD.js'
import LDF from '../node/LDF.js'
import APP from '../node/APP.js'
import RET from '../node/RET.js'
import ADD from '../node/ADD.js'
import SUB from '../node/SUB.js'
import MUL from '../node/MUL.js'
import DIV from '../node/DIV.js'
import POP from '../node/POP.js'
import SWP from '../node/SWP.js'
import NEG from '../node/NEG.js'
import SGN from '../node/SGN.js'
import EQ from '../node/EQ.js'
import GT from '../node/GT.js'
import GTE from '../node/GTE.js'
import LT from '../node/LT.js'
import LTE from '../node/LTE.js'
import NOT from '../node/NOT.js'
import SNT from '../node/SNT.js'
import CAT from '../node/CAT.js'
import TOS from '../node/TOS.js'
import CST from '../node/CST.js'
import INO from '../node/INO.js'
import NOP from '../node/NOP.js'
import BR from '../node/BR.js'
import BT from '../node/BT.js'
import BF from '../node/BF.js'
import LNT from '../node/LNT.js'
import LIN from '../node/LIN.js'
import LTK from '../node/LTK.js'
import LRK from '../node/LRK.js'
import TOL from '../node/TOL.js'
import STK from '../node/STK.js'
import SRK from '../node/SRK.js'
import HLT from '../node/HLT.js'

class InstructionSet {
    constructor() {
        this.instructions = new Map([
            ['LDV', () => new LDV()],
            ['PRN', () => new PRN()],
            ['BST', () => new BST()],
            ['BLD', () => new BLD()],
            ['LDF', () => new LDF()],
            ['APP', () => new APP()],
            ['RET', () => new RET()],
            ['ADD', () => new ADD()],
            ['SUB', () => new SUB()],
            ['MUL', () => new MUL()],
            ['DIV', () => new DIV()],
            ['POP', () => new POP()],
            ['SWP', () => new SWP()],
            ['NEG', () => new NEG()],
            ['SGN', () => new SGN()],
            ['EQ', () => new EQ()],
            ['GT', () => new GT()],
            ['GTE', () => new GTE()],
            ['LT', () => new LT()],
            ['LTE', () => new LTE()],
            ['NOT', () => new NOT()],
            ['SNT', () => new SNT()],
            ['CAT', () => new CAT()],
            ['TOS', () => new TOS()],
            ['CST', () => new CST()],
            ['INO', () => new INO()],
            ['NOP', () => new NOP()],
            ['BR', () => new BR()],
            ['BT', () => new BT()],
            ['BF', () => new BF()],
            ['LNT', () => new LNT()],
            ['LIN', () => new LIN()],
            ['LTK', () => new LTK()],
            ['LRK', () => new LRK()],
            ['TOL', () => new TOL()],
            ['STK', () => new STK()],
            ['SRK', () => new SRK()],
            ['HLT', () => new HLT()]
        ]);
    }

    getInstruction(mnemonic) {
        return this.instructions.get(mnemonic)?.();
    }
}

export default InstructionSet