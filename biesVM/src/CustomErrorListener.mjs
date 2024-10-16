import antlr4 from 'antlr4';

/**
 * Custom error listener for ANTLR4 to handle syntax errors and other parsing events.
 * @extends antlr4.error.ErrorListener
 */
class CustomErrorListener extends antlr4.error.ErrorListener {
  constructor() {
    super();
  }

  /**
   * Called for a syntax error.
   * @param {antlr4.Parser} recognizer - The parser instance.
   * @param {antlr4.Token} offendingSymbol - The offending token.
   * @param {number} line - The line number of the error.
   * @param {number} charPositionInLine - The character position in the line of the error.
   * @param {string} msg - The error message.
   * @param {Error} [e] - The underlying exception, if any.
   */
  syntaxError(recognizer, offendingSymbol, line, charPositionInLine, msg, e) {
    console.error(`Syntax error at line ${line}, column ${charPositionInLine}: ${msg}`);
  }

  /**
   * Reports ambiguity in the parser.
   * @param {antlr4.Parser} recognizer - The parser instance.
   * @param {antlr4.dfa.DFA} dfa - The DFA in use.
   * @param {number} startIndex - The start index of the ambiguity.
   * @param {number} stopIndex - The stop index of the ambiguity.
   * @param {boolean} exact - Whether the ambiguity is exact.
   * @param {Array<number>} ambigAlts - The ambiguous alternatives.
   * @param {antlr4.atn.PredictionContext} configs - The prediction context.
   */
  reportAmbiguity(recognizer, dfa, startIndex, stopIndex, exact, ambigAlts, configs) {
    console.warn(`Ambiguity at indices ${startIndex}-${stopIndex}`);
  }

  /**
   * Reports an attempt to resolve full context.
   * @param {antlr4.Parser} recognizer - The parser instance.
   * @param {antlr4.dfa.DFA} dfa - The DFA in use.
   * @param {number} startIndex - The start index of the context.
   * @param {number} stopIndex - The stop index of the context.
   * @param {Array<number>} conflictingAlts - The conflicting alternatives.
   * @param {antlr4.atn.PredictionContext} configs - The prediction context.
   */
  reportAttemptingFullContext(recognizer, dfa, startIndex, stopIndex, conflictingAlts, configs) {
    console.warn(`Attempting full context at indices ${startIndex}-${stopIndex}`);
  }

  /**
   * Reports context sensitivity in the parser.
   * @param {antlr4.Parser} recognizer - The parser instance.
   * @param {antlr4.dfa.DFA} dfa - The DFA in use.
   * @param {number} startIndex - The start index of the sensitivity.
   * @param {number} stopIndex - The stop index of the sensitivity.
   * @param {number} prediction - The predicted alternative.
   * @param {antlr4.atn.PredictionContext} configs - The prediction context.
   */
  reportContextSensitivity(recognizer, dfa, startIndex, stopIndex, prediction, configs) {
    console.warn(`Context sensitivity at indices ${startIndex}-${stopIndex}`);
  }
}

export default CustomErrorListener;
