// Generated from grammar/basm.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import basmVisitor from './basmVisitor.js';

const serializedATN = [4,1,50,78,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,1,0,5,0,20,8,0,10,0,12,0,23,9,0,1,1,1,1,
5,1,27,8,1,10,1,12,1,30,9,1,1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,
1,3,1,3,5,3,45,8,3,10,3,12,3,48,9,3,1,4,1,4,1,4,1,4,1,4,1,4,3,4,56,8,4,1,
5,1,5,1,5,1,6,1,6,1,7,1,7,1,7,1,7,5,7,67,8,7,10,7,12,7,70,9,7,3,7,72,8,7,
1,7,1,7,1,8,1,8,1,8,0,0,9,0,2,4,6,8,10,12,14,16,0,1,1,0,9,44,78,0,21,1,0,
0,0,2,24,1,0,0,0,4,33,1,0,0,0,6,42,1,0,0,0,8,55,1,0,0,0,10,57,1,0,0,0,12,
60,1,0,0,0,14,62,1,0,0,0,16,75,1,0,0,0,18,20,3,2,1,0,19,18,1,0,0,0,20,23,
1,0,0,0,21,19,1,0,0,0,21,22,1,0,0,0,22,1,1,0,0,0,23,21,1,0,0,0,24,28,3,4,
2,0,25,27,3,6,3,0,26,25,1,0,0,0,27,30,1,0,0,0,28,26,1,0,0,0,28,29,1,0,0,
0,29,31,1,0,0,0,30,28,1,0,0,0,31,32,5,1,0,0,32,3,1,0,0,0,33,34,5,2,0,0,34,
35,5,3,0,0,35,36,5,45,0,0,36,37,5,4,0,0,37,38,5,45,0,0,38,39,5,5,0,0,39,
40,5,3,0,0,40,41,5,45,0,0,41,5,1,0,0,0,42,46,3,16,8,0,43,45,3,8,4,0,44,43,
1,0,0,0,45,48,1,0,0,0,46,44,1,0,0,0,46,47,1,0,0,0,47,7,1,0,0,0,48,46,1,0,
0,0,49,56,5,45,0,0,50,56,5,47,0,0,51,56,5,46,0,0,52,56,3,10,5,0,53,56,3,
12,6,0,54,56,3,14,7,0,55,49,1,0,0,0,55,50,1,0,0,0,55,51,1,0,0,0,55,52,1,
0,0,0,55,53,1,0,0,0,55,54,1,0,0,0,56,9,1,0,0,0,57,58,5,3,0,0,58,59,5,45,
0,0,59,11,1,0,0,0,60,61,5,48,0,0,61,13,1,0,0,0,62,71,5,6,0,0,63,68,5,45,
0,0,64,65,5,7,0,0,65,67,5,45,0,0,66,64,1,0,0,0,67,70,1,0,0,0,68,66,1,0,0,
0,68,69,1,0,0,0,69,72,1,0,0,0,70,68,1,0,0,0,71,63,1,0,0,0,71,72,1,0,0,0,
72,73,1,0,0,0,73,74,5,8,0,0,74,15,1,0,0,0,75,76,7,0,0,0,76,17,1,0,0,0,6,
21,28,46,55,68,71];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class basmParser extends antlr4.Parser {

    static grammarFileName = "basm.g4";
    static literalNames = [ null, "'$END'", "'$FUN'", "'$'", "'ARGS:'", 
                            "'PARENT:'", "'['", "','", "']'", "'LDV'", "'PRN'", 
                            "'BST'", "'BLD'", "'LDF'", "'APP'", "'RET'", 
                            "'ADD'", "'SUB'", "'MUL'", "'DIV'", "'POP'", 
                            "'SWP'", "'NEG'", "'SGN'", "'EQ'", "'GT'", "'GTE'", 
                            "'LT'", "'LTE'", "'NOT'", "'SNT'", "'CAT'", 
                            "'TOS'", "'CST'", "'INO'", "'NOP'", "'BR'", 
                            "'BT'", "'BF'", "'LNT'", "'LIN'", "'LTK'", "'LRK'", 
                            "'TOL'", "'HLT'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, "INT", "SIGNED_INT", 
                             "STR", "TYPE", "COMMENT", "WS" ];
    static ruleNames = [ "program", "block", "func", "inst", "arg", "funcArg", 
                         "typeArg", "listArg", "mnemonic" ];

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
	        this.state = 21;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===2) {
	            this.state = 18;
	            this.block();
	            this.state = 23;
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
	        this.state = 24;
	        this.func();
	        this.state = 28;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4294966784) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 8191) !== 0)) {
	            this.state = 25;
	            this.inst();
	            this.state = 30;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 31;
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
	        this.state = 33;
	        this.match(basmParser.T__1);
	        this.state = 34;
	        this.match(basmParser.T__2);
	        this.state = 35;
	        this.match(basmParser.INT);
	        this.state = 36;
	        this.match(basmParser.T__3);
	        this.state = 37;
	        this.match(basmParser.INT);
	        this.state = 38;
	        this.match(basmParser.T__4);
	        this.state = 39;
	        this.match(basmParser.T__2);
	        this.state = 40;
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
	        this.state = 42;
	        this.mnemonic();
	        this.state = 46;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===3 || _la===6 || ((((_la - 45)) & ~0x1f) === 0 && ((1 << (_la - 45)) & 15) !== 0)) {
	            this.state = 43;
	            this.arg();
	            this.state = 48;
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
	        this.state = 55;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 45:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 49;
	            this.match(basmParser.INT);
	            break;
	        case 47:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 50;
	            this.match(basmParser.STR);
	            break;
	        case 46:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 51;
	            this.match(basmParser.SIGNED_INT);
	            break;
	        case 3:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 52;
	            this.funcArg();
	            break;
	        case 48:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 53;
	            this.typeArg();
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 54;
	            this.listArg();
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
	        this.state = 57;
	        this.match(basmParser.T__2);
	        this.state = 58;
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



	typeArg() {
	    let localctx = new TypeArgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, basmParser.RULE_typeArg);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 60;
	        this.match(basmParser.TYPE);
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



	listArg() {
	    let localctx = new ListArgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, basmParser.RULE_listArg);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 62;
	        this.match(basmParser.T__5);
	        this.state = 71;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===45) {
	            this.state = 63;
	            this.match(basmParser.INT);
	            this.state = 68;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===7) {
	                this.state = 64;
	                this.match(basmParser.T__6);
	                this.state = 65;
	                this.match(basmParser.INT);
	                this.state = 70;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 73;
	        this.match(basmParser.T__7);
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
	    this.enterRule(localctx, 16, basmParser.RULE_mnemonic);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 75;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 4294966784) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 8191) !== 0))) {
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
basmParser.T__14 = 15;
basmParser.T__15 = 16;
basmParser.T__16 = 17;
basmParser.T__17 = 18;
basmParser.T__18 = 19;
basmParser.T__19 = 20;
basmParser.T__20 = 21;
basmParser.T__21 = 22;
basmParser.T__22 = 23;
basmParser.T__23 = 24;
basmParser.T__24 = 25;
basmParser.T__25 = 26;
basmParser.T__26 = 27;
basmParser.T__27 = 28;
basmParser.T__28 = 29;
basmParser.T__29 = 30;
basmParser.T__30 = 31;
basmParser.T__31 = 32;
basmParser.T__32 = 33;
basmParser.T__33 = 34;
basmParser.T__34 = 35;
basmParser.T__35 = 36;
basmParser.T__36 = 37;
basmParser.T__37 = 38;
basmParser.T__38 = 39;
basmParser.T__39 = 40;
basmParser.T__40 = 41;
basmParser.T__41 = 42;
basmParser.T__42 = 43;
basmParser.T__43 = 44;
basmParser.INT = 45;
basmParser.SIGNED_INT = 46;
basmParser.STR = 47;
basmParser.TYPE = 48;
basmParser.COMMENT = 49;
basmParser.WS = 50;

basmParser.RULE_program = 0;
basmParser.RULE_block = 1;
basmParser.RULE_func = 2;
basmParser.RULE_inst = 3;
basmParser.RULE_arg = 4;
basmParser.RULE_funcArg = 5;
basmParser.RULE_typeArg = 6;
basmParser.RULE_listArg = 7;
basmParser.RULE_mnemonic = 8;

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

	SIGNED_INT() {
	    return this.getToken(basmParser.SIGNED_INT, 0);
	};

	funcArg() {
	    return this.getTypedRuleContext(FuncArgContext,0);
	};

	typeArg() {
	    return this.getTypedRuleContext(TypeArgContext,0);
	};

	listArg() {
	    return this.getTypedRuleContext(ListArgContext,0);
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



class TypeArgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = basmParser.RULE_typeArg;
    }

	TYPE() {
	    return this.getToken(basmParser.TYPE, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof basmVisitor ) {
	        return visitor.visitTypeArg(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ListArgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = basmParser.RULE_listArg;
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
	        return visitor.visitListArg(this);
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
basmParser.TypeArgContext = TypeArgContext; 
basmParser.ListArgContext = ListArgContext; 
basmParser.MnemonicContext = MnemonicContext; 
