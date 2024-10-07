// Generated from grammar/basm.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import basmVisitor from './basmVisitor.js';

const serializedATN = [4,1,17,56,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,1,0,5,0,16,8,0,10,0,12,0,19,9,0,1,1,1,1,5,1,23,8,1,10,1,
12,1,26,9,1,1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,3,1,3,5,3,41,8,
3,10,3,12,3,44,9,3,1,4,1,4,1,4,3,4,49,8,4,1,5,1,5,1,5,1,6,1,6,1,6,0,0,7,
0,2,4,6,8,10,12,0,1,1,0,6,14,53,0,17,1,0,0,0,2,20,1,0,0,0,4,29,1,0,0,0,6,
38,1,0,0,0,8,48,1,0,0,0,10,50,1,0,0,0,12,53,1,0,0,0,14,16,3,2,1,0,15,14,
1,0,0,0,16,19,1,0,0,0,17,15,1,0,0,0,17,18,1,0,0,0,18,1,1,0,0,0,19,17,1,0,
0,0,20,24,3,4,2,0,21,23,3,6,3,0,22,21,1,0,0,0,23,26,1,0,0,0,24,22,1,0,0,
0,24,25,1,0,0,0,25,27,1,0,0,0,26,24,1,0,0,0,27,28,5,1,0,0,28,3,1,0,0,0,29,
30,5,2,0,0,30,31,5,3,0,0,31,32,5,15,0,0,32,33,5,4,0,0,33,34,5,15,0,0,34,
35,5,5,0,0,35,36,5,3,0,0,36,37,5,15,0,0,37,5,1,0,0,0,38,42,3,12,6,0,39,41,
3,8,4,0,40,39,1,0,0,0,41,44,1,0,0,0,42,40,1,0,0,0,42,43,1,0,0,0,43,7,1,0,
0,0,44,42,1,0,0,0,45,49,5,15,0,0,46,49,5,16,0,0,47,49,3,10,5,0,48,45,1,0,
0,0,48,46,1,0,0,0,48,47,1,0,0,0,49,9,1,0,0,0,50,51,5,3,0,0,51,52,5,15,0,
0,52,11,1,0,0,0,53,54,7,0,0,0,54,13,1,0,0,0,4,17,24,42,48];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class basmParser extends antlr4.Parser {

    static grammarFileName = "basm.g4";
    static literalNames = [ null, "'$END'", "'$FUN'", "'$'", "'ARGS:'", 
                            "'PARENT:'", "'LDV'", "'PRN'", "'BST'", "'BLD'", 
                            "'LDF'", "'APP'", "'RET'", "'ADD'", "'HLT'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, "INT", 
                             "STR", "WS" ];
    static ruleNames = [ "program", "block", "func", "inst", "arg", "funcArg", 
                         "mnemonic" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = basmParser.ruleNames;
        this.literalNames = basmParser.literalNames;
        this.symbolicNames = basmParser.symbolicNames;
    }



	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, basmParser.RULE_program);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 17;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===2) {
	            this.state = 14;
	            this.block();
	            this.state = 19;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	block() {
	    let localctx = new BlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, basmParser.RULE_block);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 20;
	        this.func();
	        this.state = 24;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 32704) !== 0)) {
	            this.state = 21;
	            this.inst();
	            this.state = 26;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 27;
	        this.match(basmParser.T__0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	func() {
	    let localctx = new FuncContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, basmParser.RULE_func);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 29;
	        this.match(basmParser.T__1);
	        this.state = 30;
	        this.match(basmParser.T__2);
	        this.state = 31;
	        this.match(basmParser.INT);
	        this.state = 32;
	        this.match(basmParser.T__3);
	        this.state = 33;
	        this.match(basmParser.INT);
	        this.state = 34;
	        this.match(basmParser.T__4);
	        this.state = 35;
	        this.match(basmParser.T__2);
	        this.state = 36;
	        this.match(basmParser.INT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	inst() {
	    let localctx = new InstContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, basmParser.RULE_inst);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 38;
	        this.mnemonic();
	        this.state = 42;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 98312) !== 0)) {
	            this.state = 39;
	            this.arg();
	            this.state = 44;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	arg() {
	    let localctx = new ArgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, basmParser.RULE_arg);
	    try {
	        this.state = 48;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 15:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 45;
	            this.match(basmParser.INT);
	            break;
	        case 16:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 46;
	            this.match(basmParser.STR);
	            break;
	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 47;
	            this.funcArg();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	funcArg() {
	    let localctx = new FuncArgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, basmParser.RULE_funcArg);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 50;
	        this.match(basmParser.T__2);
	        this.state = 51;
	        this.match(basmParser.INT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	mnemonic() {
	    let localctx = new MnemonicContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, basmParser.RULE_mnemonic);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 53;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 32704) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

basmParser.EOF = antlr4.Token.EOF;
basmParser.T__0 = 1;
basmParser.T__1 = 2;
basmParser.T__2 = 3;
basmParser.T__3 = 4;
basmParser.T__4 = 5;
basmParser.T__5 = 6;
basmParser.T__6 = 7;
basmParser.T__7 = 8;
basmParser.T__8 = 9;
basmParser.T__9 = 10;
basmParser.T__10 = 11;
basmParser.T__11 = 12;
basmParser.T__12 = 13;
basmParser.T__13 = 14;
basmParser.INT = 15;
basmParser.STR = 16;
basmParser.WS = 17;

basmParser.RULE_program = 0;
basmParser.RULE_block = 1;
basmParser.RULE_func = 2;
basmParser.RULE_inst = 3;
basmParser.RULE_arg = 4;
basmParser.RULE_funcArg = 5;
basmParser.RULE_mnemonic = 6;

class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = basmParser.RULE_program;
    }

	block = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(BlockContext);
	    } else {
	        return this.getTypedRuleContext(BlockContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof basmVisitor ) {
	        return visitor.visitProgram(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = basmParser.RULE_block;
    }

	func() {
	    return this.getTypedRuleContext(FuncContext,0);
	};

	inst = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstContext);
	    } else {
	        return this.getTypedRuleContext(InstContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof basmVisitor ) {
	        return visitor.visitBlock(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FuncContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = basmParser.RULE_func;
    }

	INT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(basmParser.INT);
	    } else {
	        return this.getToken(basmParser.INT, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof basmVisitor ) {
	        return visitor.visitFunc(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = basmParser.RULE_inst;
    }

	mnemonic() {
	    return this.getTypedRuleContext(MnemonicContext,0);
	};

	arg = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ArgContext);
	    } else {
	        return this.getTypedRuleContext(ArgContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof basmVisitor ) {
	        return visitor.visitInst(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ArgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = basmParser.RULE_arg;
    }

	INT() {
	    return this.getToken(basmParser.INT, 0);
	};

	STR() {
	    return this.getToken(basmParser.STR, 0);
	};

	funcArg() {
	    return this.getTypedRuleContext(FuncArgContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof basmVisitor ) {
	        return visitor.visitArg(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FuncArgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = basmParser.RULE_funcArg;
    }

	INT() {
	    return this.getToken(basmParser.INT, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof basmVisitor ) {
	        return visitor.visitFuncArg(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class MnemonicContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = basmParser.RULE_mnemonic;
    }


	accept(visitor) {
	    if ( visitor instanceof basmVisitor ) {
	        return visitor.visitMnemonic(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




basmParser.ProgramContext = ProgramContext; 
basmParser.BlockContext = BlockContext; 
basmParser.FuncContext = FuncContext; 
basmParser.InstContext = InstContext; 
basmParser.ArgContext = ArgContext; 
basmParser.FuncArgContext = FuncArgContext; 
basmParser.MnemonicContext = MnemonicContext; 
