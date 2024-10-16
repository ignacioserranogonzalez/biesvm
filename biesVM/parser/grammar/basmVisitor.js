// Generated from grammar/basm.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';

/**
 * This class defines a complete generic visitor for a parse tree produced by basmParser.
 * It extends the `antlr4.tree.ParseTreeVisitor` class to visit different nodes in the parse tree.
 *
 * @extends antlr4.tree.ParseTreeVisitor
 */
export default class basmVisitor extends antlr4.tree.ParseTreeVisitor {

	/**
	 * Visit a parse tree produced by basmParser#program.
	 * @param {ProgramContext} ctx - The context of the program node.
	 * @returns {any} The result of visiting the children of the program node.
	 */
	visitProgram(ctx) {
		return this.visitChildren(ctx);
	}

	/**
	 * Visit a parse tree produced by basmParser#block.
	 * @param {BlockContext} ctx - The context of the block node.
	 * @returns {any} The result of visiting the children of the block node.
	 */
	visitBlock(ctx) {
		return this.visitChildren(ctx);
	}

	/**
	 * Visit a parse tree produced by basmParser#func.
	 * @param {FuncContext} ctx - The context of the function node.
	 * @returns {any} The result of visiting the children of the function node.
	 */
	visitFunc(ctx) {
		return this.visitChildren(ctx);
	}

	/**
	 * Visit a parse tree produced by basmParser#inst.
	 * @param {InstContext} ctx - The context of the instruction node.
	 * @returns {any} The result of visiting the children of the instruction node.
	 */
	visitInst(ctx) {
		return this.visitChildren(ctx);
	}

	/**
	 * Visit a parse tree produced by basmParser#arg.
	 * @param {ArgContext} ctx - The context of the argument node.
	 * @returns {any} The result of visiting the children of the argument node.
	 */
	visitArg(ctx) {
		return this.visitChildren(ctx);
	}

	/**
	 * Visit a parse tree produced by basmParser#funcArg.
	 * @param {FuncArgContext} ctx - The context of the function argument node.
	 * @returns {any} The result of visiting the children of the function argument node.
	 */
	visitFuncArg(ctx) {
		return this.visitChildren(ctx);
	}

	/**
	 * Visit a parse tree produced by basmParser#typeArg.
	 * @param {TypeArgContext} ctx - The context of the type argument node.
	 * @returns {any} The result of visiting the children of the type argument node.
	 */
	visitTypeArg(ctx) {
		return this.visitChildren(ctx);
	}

	/**
	 * Visit a parse tree produced by basmParser#listArg.
	 * @param {ListArgContext} ctx - The context of the list argument node.
	 * @returns {any} The result of visiting the children of the list argument node.
	 */
	visitListArg(ctx) {
		return this.visitChildren(ctx);
	}

	/**
	 * Visit a parse tree produced by basmParser#mnemonic.
	 * @param {MnemonicContext} ctx - The context of the mnemonic node.
	 * @returns {any} The result of visiting the children of the mnemonic node.
	 */
	visitMnemonic(ctx) {
		return this.visitChildren(ctx);
	}
}
