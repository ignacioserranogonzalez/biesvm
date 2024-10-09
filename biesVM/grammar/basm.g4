grammar basm;

// Parser

program : block*;
block   : func inst* '$END';
func    : '$FUN' '$' INT 'ARGS:' INT 'PARENT:' '$' INT ;
inst    : mnemonic arg* ;
arg     : INT | STR | funcArg;
funcArg : '$' INT; 
mnemonic: 
      'LDV' 
    | 'PRN' 
    | 'BST'
    | 'BLD'
    | 'LDF'
    | 'APP'
    | 'RET'
    | 'ADD'
    | 'POP'
    | 'SWP'
    | 'NEG'
    | 'SGN'
    | 'EQ'
    | 'GT'
    | 'GTE'
    | 'LT'
    | 'LTE'
    | 'NOT'
    | 'SNT'
    | 'CAT'
    | 'TOS'
    | 'HLT';

// Lexer

INT     : '-'? [0-9]+ ;
STR : '"' ( ESC | ~('"' | '\n') )* '"' ;
fragment ESC : '\\' '"' ;
COMMENT : ';' ~[\r\n]* -> skip ;
WS      : [ \t\r\n]+ -> skip ;
