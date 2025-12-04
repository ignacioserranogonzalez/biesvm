grammar basm;

program : block*;
block   : func inst* '$END';
func    : '$FUN' '$' INT 'ARGS:' INT 'PARENT:' '$' INT;
inst    : mnemonic arg*;
arg     : INT | STR | SIGNED_INT | funcArg | typeArg | listArg;

funcArg : '$' INT; 
typeArg : TYPE;
listArg : '[' (INT (',' INT)*)? ']';

mnemonic: 
      'LDV' 
    | 'PRN' 
    | 'BST'
    | 'BLD'
    | 'LDF'
    | 'APP'
    | 'RET'
    | 'ADD'
    | 'SUB'
    | 'MUL'
    | 'DIV'
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
    | 'NOP'
    | 'BR' 
    | 'BT'
    | 'BF'
    | 'LNT'
    | 'LIN'
    | 'LTK'
    | 'LRK'
    | 'TOL'
    | 'STK'
    | 'SRK'
    | 'HLT';

INT     : '-'? [0-9]+ ;
SIGNED_INT : ('+' | '-')? INT;
STR     : '"' ( ESC | ~('"' | '\n') )* '"' ;
fragment ESC : '\\' '"' ;
TYPE    : 'NUMBER' | 'LIST' | 'STRING' ;
COMMENT : ';' ~[\r\n]* -> skip ;
WS      : [ \t\r\n]+ -> skip ;