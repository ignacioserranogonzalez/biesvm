// Generated from grammar/basm.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';

// This class defines a complete generic visitor for a parse tree produced by basmParser.

export default class basmVisitor extends antlr4.tree.ParseTreeVisitor {

	// Visit a parse tree produced by basmParser#program.
	visitProgram(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by basmParser#block.
	visitBlock(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by basmParser#func.
	visitFunc(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by basmParser#inst.
	visitInst(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by basmParser#arg.
	visitArg(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by basmParser#funcArg.
	visitFuncArg(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by basmParser#typeArg.
	visitTypeArg(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by basmParser#listArg.
	visitListArg(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by basmParser#mnemonic.
	visitMnemonic(ctx) {
	  return this.visitChildren(ctx);
	}



}