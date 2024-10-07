import antlr4 from 'antlr4';

class CustomErrorListener extends antlr4.error.ErrorListener {
  constructor() {
    super();
  }

  syntaxError(recognizer, offendingSymbol, line, charPositionInLine, msg, e) {
    console.error(`Syntax error at line ${line}, column ${charPositionInLine}: ${msg}`);
  }

  reportAmbiguity(recognizer, dfa, startIndex, stopIndex, exact, ambigAlts, configs) {
    console.warn(`Ambiguity at indices ${startIndex}-${stopIndex}`);
  }

  reportAttemptingFullContext(recognizer, dfa, startIndex, stopIndex, conflictingAlts, configs) {
    console.warn(`Attempting full context at indices ${startIndex}-${stopIndex}`);
  }

  reportContextSensitivity(recognizer, dfa, startIndex, stopIndex, prediction, configs) {
    console.warn(`Context sensitivity at indices ${startIndex}-${stopIndex}`);
  }
}

export default CustomErrorListener;
