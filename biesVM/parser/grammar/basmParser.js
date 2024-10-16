// Generated from grammar/basm.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import basmVisitor from './basmVisitor.js';

/**
 * Serialized ATN for the grammar.
 * @type {number[]}
 */
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

/**
 * ATN (Abstract Syntax Tree) for the grammar.
 * @type {antlr4.atn.ATN}
 */
const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

/**
 * Array of DFA (Deterministic Finite Automaton) constructed from the ATN.
 * @type {antlr4.dfa.DFA[]}
 */
const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

/**
 * Cache for shared prediction contexts.
 * @type {antlr4.atn.PredictionContextCache}
 */
const sharedContextCache = new antlr4.atn.PredictionContextCache();

/**
 * Class that represents a parser for the BASM grammar.
 * @extends antlr4.Parser
 */
export default class basmParser extends antlr4.Parser {

	/**
	 * Name of the grammar file.
	 * @type {string}
	 * @static
	 */
    static grammarFileName = "basm.g4";

	/**
	 * Literal names of the tokens.
	 * @type {Array<string>}
	 * @static
	 */
    static literalNames = [ null, "'$END'", "'$FUN'", "'$'", "'ARGS:'", 
                            "'PARENT:'", "'['", "','", "']'", "'LDV'", "'PRN'", 
                            "'BST'", "'BLD'", "'LDF'", "'APP'", "'RET'", 
                            "'ADD'", "'SUB'", "'MUL'", "'DIV'", "'POP'", 
                            "'SWP'", "'NEG'", "'SGN'", "'EQ'", "'GT'", "'GTE'", 
                            "'LT'", "'LTE'", "'NOT'", "'SNT'", "'CAT'", 
                            "'TOS'", "'CST'", "'INO'", "'NOP'", "'BR'", 
                            "'BT'", "'BF'", "'LNT'", "'LIN'", "'LTK'", "'LRK'", 
                            "'TOL'", "'HLT'" ];

	/**
	 * Symbolic names of the tokens.
	 * @type {Array<string>}
	 * @static
	 */
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, "INT", "SIGNED_INT", 
                             "STR", "TYPE", "COMMENT", "WS" ];

	/**
	 * Names of the grammar rules.
	 * @type {Array<string>}
	 * @static
	 */
    static ruleNames = [ "program", "block", "func", "inst", "arg", "funcArg", 
                         "typeArg", "listArg", "mnemonic" ];

	/**
	 * Creates an instance of the parser.
	 * @param {antlr4.InputStream} input - The input to parse.
	 */
    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = basmParser.ruleNames;
        this.literalNames = basmParser.literalNames;
        this.symbolicNames = basmParser.symbolicNames;
    }


	/**
	 * Parses a program from the input.
	 *
	 * The program consists of one or more blocks. This method initiates the
	 * parsing process by checking for the start of a program and then
	 * repeatedly parses blocks until no more blocks are found.
	 *
	 * Each block is expected to conform to the rules defined in the grammar.
	 * If a recognition error occurs during parsing, it is caught and reported
	 * using the error handler.
	 *
	 * @returns {ProgramContext} The context of the parsed program, containing information about the blocks.
	 * @throws {antlr4.error.RecognitionException} If there is a recognition error during parsing.
	 */
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


	/**
	 * Parses a block from the input.
	 *
	 * A block consists of a function definition followed by zero or more instructions.
	 * This method starts by parsing the function and then continues to parse instructions
	 * until it reaches the end of the block, which is marked by a specific token.
	 * The method handles any recognition errors that may occur during parsing.
	 *
	 * @returns {BlockContext} The context of the parsed block, which includes the function
	 * and any instructions within the block.
	 * @throws {antlr4.error.RecognitionException} If there is a recognition error during parsing.
	 */
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


	/**
	 * Parses a function definition from the input.
	 *
	 * A function is defined by a specific sequence of tokens that includes
	 * a function declaration, input parameters, and return type. This method
	 * matches the expected tokens and handles any recognition errors that may
	 * occur during parsing.
	 *
	 * The structure of a function is expected to be:
	 * - A token indicating the start of the function (e.g., "func")
	 * - A token for opening the parameter list
	 * - An integer representing the number of parameters
	 * - A token for the return type declaration
	 * - An integer representing the return type
	 * - A token for closing the parameter list
	 * - An integer representing the return value
	 *
	 * @returns {FuncContext} The context of the parsed function, which includes
	 * the function's parameters and return type.
	 * @throws {antlr4.error.RecognitionException} If there is a recognition error during parsing.
	 */
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


	/**
	 * Parses an instruction from the input.
	 *
	 * An instruction consists of a mnemonic followed by a series of arguments.
	 * This method matches the expected tokens and handles any recognition errors
	 * that may occur during parsing.
	 *
	 * The structure of an instruction is expected to be:
	 * - A mnemonic token (e.g., operation code)
	 * - Zero or more arguments, which can be of various types (e.g., integer, string,
	 *   function argument, type argument, or list argument).
	 *
	 * @returns {InstContext} The context of the parsed instruction, which includes
	 * the mnemonic and any associated arguments.
	 * @throws {antlr4.error.RecognitionException} If there is a recognition error during parsing.
	 */
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


	/**
	 * Parses an argument from the input.
	 *
	 * An argument can be one of several types:
	 * - An integer
	 * - A string
	 * - A function argument
	 * - A type argument
	 * - A list argument
	 *
	 * This method matches the expected tokens for each argument type and handles
	 * any recognition errors that may occur during parsing.
	 *
	 * @returns {ArgContext} The context of the parsed argument, which includes the type
	 * of argument parsed (e.g., integer, string, etc.).
	 * @throws {antlr4.error.NoViableAltException} If the input does not match any expected argument type.
	 * @throws {antlr4.error.RecognitionException} If there is a recognition error during parsing.
	 */
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


	/**
	 * Parses a function argument from the input.
	 *
	 * A function argument consists of a specific token followed by an integer.
	 * This method matches the expected tokens for a function argument and handles
	 * any recognition errors that may occur during parsing.
	 *
	 * The expected format is:
	 * - A specific token (defined by `basmParser.T__2`)
	 * - Followed by an integer (defined by `basmParser.INT`)
	 *
	 * @returns {FuncArgContext} The context of the parsed function argument,
	 * which includes the matched tokens.
	 * @throws {antlr4.error.RecognitionException} If there is a recognition error during parsing.
	 */
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


	/**
	 * Parses a type argument from the input.
	 *
	 * A type argument consists of a specific token that indicates a type.
	 * This method matches the expected token for a type argument and handles
	 * any recognition errors that may occur during parsing.
	 *
	 * The expected format is:
	 * - A specific token representing the type (defined by `basmParser.TYPE`).
	 *
	 * @returns {TypeArgContext} The context of the parsed type argument, which includes the matched token.
	 * @throws {antlr4.error.RecognitionException} If there is a recognition error during parsing.
	 */
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


	/**
	 * Parses a list argument from the input.
	 *
	 * A list argument is expected to start with a specific token,
	 * followed by an integer, and potentially followed by additional
	 * integers separated by specific tokens.
	 *
	 * The expected format is:
	 * - Starts with a token indicating the start of a list (defined by `basmParser.T__5`).
	 * - Optionally contains an integer (defined by `basmParser.INT`).
	 * - May contain multiple integers separated by a specific token (defined by `basmParser.T__6`).
	 * - Ends with a token indicating the end of the list (defined by `basmParser.T__7`).
	 *
	 * @returns {ListArgContext} The context of the parsed list argument, which includes the matched tokens.
	 * @throws {antlr4.error.RecognitionException} If there is a recognition error during parsing.
	 */
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


	/**
	 * Parses a mnemonic from the input.
	 *
	 * A mnemonic is expected to be a specific token that represents
	 * an operation or command within the language. The method checks
	 * the current input to see if it matches any of the predefined
	 * mnemonics.
	 *
	 * The expected format is:
	 * - The mnemonic must match one of the valid token types defined by `basmParser`, specifically within the range of acceptable tokens.
	 *
	 * @returns {MnemonicContext} The context of the parsed mnemonic, which includes the matched token.
	 * @throws {antlr4.error.RecognitionException} If there is a recognition error during parsing.
	 */
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

/**
 * Tokens representing various syntactical elements in the language.
 * Each token corresponds to a specific syntax rule.
 * @constant {number}
 */
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
/**
 * Tokens for different data types.
 * @constant {number}
 */
basmParser.INT = 45;
basmParser.SIGNED_INT = 46;
basmParser.STR = 47;
basmParser.TYPE = 48;
basmParser.COMMENT = 49;
basmParser.WS = 50;
/**
 * Rule identifiers for the grammar.
 * These constants are used to identify different rules in the parser.
 * @constant {number}
 */
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

	/**
	 * Represents the context of a program in the BASM parser.
	 *
	 * @class ProgramContext
	 * @extends antlr4.ParserRuleContext
	 *
	 * @param {Object} parser - The parser instance that created this context.
	 * @param {ProgramContext|null} [parent=null] - The parent context, if any.
	 * @param {number} [invokingState=-1] - The state of the parser when this context was invoked.
	 */
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

	/**
	 * Creates an instance of BlockContext.
	 *
	 * @class BlockContext
	 * @extends antlr4.ParserRuleContext // Replace with the actual base class if applicable
	 *
	 * @param {Parser} parser - The parser instance associated with this context.
	 * @param {BlockContext|null} [parent=null] - The parent context. Defaults to null if not provided.
	 * @param {number} [invokingState=-1] - The state when this context is invoked. Defaults to -1 if not provided.
	 */
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

	/**
	 * Retrieves the first instance of FuncContext from the current context.
	 *
	 * @returns {FuncContext} The FuncContext instance associated with this context.
	 */
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


/**
 * Represents the context of a function in the parsing process.
 * Inherits from `antlr4.ParserRuleContext`.
 *
 * @extends antlr4.ParserRuleContext
 */
class FuncContext extends antlr4.ParserRuleContext {

	/**
	 * Creates a new instance of FuncContext.
	 *
	 * @param {Parser} parser - The parser instance.
	 * @param {ParserRuleContext} parent - The parent context.
	 * @param {number} invokingState - The state when this context is invoked.
	 */
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

	/**
	 * Retrieves tokens of type INT from the parser context.
	 *
	 * @param {number|null} [i=null] - The index of the specific INT token to retrieve. If null, all INT tokens will be returned.
	 * @returns {Array<Token>|Token} - An array of INT tokens if no index is provided, or a specific INT token if an index is given.
	 */
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


/**
 * Represents the context for an instruction in the parser.
 *
 * This class is generated by ANTLR and extends the base `ParserRuleContext`.
 * It provides methods to access the instruction-related tokens and sub-contexts.
 *
 * @extends antlr4.ParserRuleContext
 */
class InstContext extends antlr4.ParserRuleContext {

	/**
	 * Constructs an instance of InstContext.
	 *
	 * @param {Parser} parser - The parser instance.
	 * @param {ParserRuleContext} parent - The parent context.
	 * @param {number} invokingState - The state of the parser invoking this context.
	 */
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

	/**
	 * Retrieves the mnemonic for this instruction.
	 *
	 * @returns {MnemonicContext} - The mnemonic context for this instruction.
	 */
	mnemonic() {
	    return this.getTypedRuleContext(MnemonicContext,0);
	};

	/**
	 * Retrieves the argument(s) associated with this instruction.
	 *
	 * @param {number} [i] - The index of the argument to retrieve. If not provided, all arguments are returned.
	 * @returns {ArgContext|ArgContext[]} - The argument context(s) associated with the instruction.
	 */
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


/**
 * Represents the context for an argument in the parser.
 *
 * This class extends from `antlr4.ParserRuleContext` and is used to define
 * the structure of an argument in the language grammar being parsed.
 *
 * @extends antlr4.ParserRuleContext
 */
class ArgContext extends antlr4.ParserRuleContext {

	/**
	 * Constructs an instance of ArgContext.
	 *
	 * @param {Parser} parser - The parser instance.
	 * @param {ParserRuleContext} parent - The parent rule context.
	 * @param {number} invokingState - The invoking state of the parser.
	 */
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

	/**
	 * Retrieves the integer argument.
	 *
	 * @returns {Token} - The integer token if present.
	 */
	INT() {
	    return this.getToken(basmParser.INT, 0);
	};

	/**
	 * Retrieves the string argument.
	 *
	 * @returns {Token} - The string token if present.
	 */
	STR() {
	    return this.getToken(basmParser.STR, 0);
	};

	/**
	 * Retrieves the signed integer token from the parser.
	 *
	 * @returns {Token} The signed integer token.
	 */
	SIGNED_INT() {
	    return this.getToken(basmParser.SIGNED_INT, 0);
	};

	/**
	 * Retrieves a function argument context.
	 *
	 * @returns {FuncArgContext} - The function argument context if present.
	 */
	funcArg() {
	    return this.getTypedRuleContext(FuncArgContext,0);
	};

	/**
	 * Retrieves a type argument context.
	 *
	 * @returns {TypeArgContext} - The type argument context if present.
	 */
	typeArg() {
	    return this.getTypedRuleContext(TypeArgContext,0);
	};

	/**
	 * Retrieves a list argument context.
	 *
	 * @returns {ListArgContext} - The list argument context if present.
	 */
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


/**
 * Represents the context for a function argument in the parser.
 *
 * This class extends from `antlr4.ParserRuleContext` and is used to define
 * the structure of a function argument in the language grammar being parsed.
 *
 * @extends antlr4.ParserRuleContext
 */
class FuncArgContext extends antlr4.ParserRuleContext {

	/**
	 * Constructs an instance of FuncArgContext.
	 *
	 * @param {Parser} parser - The parser instance.
	 * @param {ParserRuleContext} parent - The parent rule context.
	 * @param {number} invokingState - The invoking state of the parser.
	 */
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

	/**
	 * Retrieves the integer token for the function argument.
	 *
	 * This method accesses the parser's token stream to return the first
	 * occurrence of an integer associated with the function argument.
	 *
	 * @returns {Token} - The token representing the integer argument.
	 */
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


/**
 * Represents the context for a type argument in the parser.
 * This class extends the ANTLR4 ParserRuleContext and is used
 * to manage the parsing of type arguments within the language.
 */
class TypeArgContext extends antlr4.ParserRuleContext {

	/**
	 * Constructs a TypeArgContext instance.
	 *
	 * @param {Parser} parser - The parser instance that created this context.
	 * @param {ParserRuleContext} parent - The parent context.
	 * @param {number} invokingState - The invoking state index.
	 */
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

	/**
	 * Retrieves the TYPE token from the current context.
	 *
	 * @returns {Token} The TYPE token, or null if not present.
	 */
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


/**
 * Represents the context for list arguments in a parsing process.
 * Extends `antlr4.ParserRuleContext`.
 */
class ListArgContext extends antlr4.ParserRuleContext {

	/**
	 * Constructs a ListArgContext.
	 * @param {antlr4.Parser} parser - The parser instance.
	 * @param {antlr4.ParserRuleContext} [parent=null] - The parent context.
	 * @param {number} [invokingState=-1] - The invoking state.
	 */
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

	/**
	 * Retrieves the integer tokens from the context.
	 * If an index is provided, retrieves the token at that index.
	 *
	 * @param {number|null} [i=null] The index of the token to retrieve. If null, retrieves all integer tokens.
	 * @returns {Array<antlr4.Token>|antlr4.Token|null} An array of integer tokens if no index is provided, or a specific integer token at the given index if an index is provided.
	 */
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


/**
 * Represents the context for a mnemonic rule in the parser.
 *
 * @class MnemonicContext
 * @extends antlr4.ParserRuleContext
 */
class MnemonicContext extends antlr4.ParserRuleContext {

	/**
	 * Constructs a MnemonicContext instance.
	 *
	 * @param {basmParser} parser - The parser instance associated with this context.
	 * @param {ParserRuleContext|null} [parent=null] - The parent context, or null if none.
	 * @param {number} [invokingState=-1] - The state when this context is invoked.
	 */
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



/**
 * @property {ProgramContext} ProgramContext - The context for the program rule.
 * @property {BlockContext} BlockContext - The context for the block rule.
 * @property {FuncContext} FuncContext - The context for the function rule.
 * @property {InstContext} InstContext - The context for the instruction rule.
 * @property {ArgContext} ArgContext - The context for arguments in instructions.
 * @property {FuncArgContext} FuncArgContext - The context for function arguments.
 * @property {TypeArgContext} TypeArgContext - The context for type arguments.
 * @property {ListArgContext} ListArgContext - The context for list arguments.
 * @property {MnemonicContext} MnemonicContext - The context for mnemonic instructions.
 */
basmParser.ProgramContext = ProgramContext; 
basmParser.BlockContext = BlockContext; 
basmParser.FuncContext = FuncContext; 
basmParser.InstContext = InstContext; 
basmParser.ArgContext = ArgContext; 
basmParser.FuncArgContext = FuncArgContext; 
basmParser.TypeArgContext = TypeArgContext; 
basmParser.ListArgContext = ListArgContext; 
basmParser.MnemonicContext = MnemonicContext; 
