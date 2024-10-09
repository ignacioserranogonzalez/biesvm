grammar basm;

// Parser

program : block*;
block   : func inst* '$END';
func    : '$FUN' '$' INT 'ARGS:' INT 'PARENT:' '$' INT ;
inst    : mnemonic arg* ;
arg     : INT | STR | funcArg | typeArg;
funcArg : '$' INT; 
typeArg : TYPE ;
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
    | 'CST'
    | 'INO'
    | 'HLT';

// Lexer

INT     : '-'? [0-9]+ ;
STR : '"' ( ESC | ~('"' | '\n') )* '"' ;
fragment ESC : '\\' '"' ;
TYPE    : 'NUMBER' | 'LIST' | 'STRING' ;
COMMENT : ';' ~[\r\n]* -> skip ;
WS      : [ \t\r\n]+ -> skip ;
