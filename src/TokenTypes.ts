export default class TokenType {
    name: string;
    regex: string;

    constructor(name:string, regex:string){
        this.name = name;
        this.regex = regex
    }
}

export const tokenTypesList = {
    'NUMBER': new TokenType('NUMBER', '[0-9]+'),
    'VARIABLE': new TokenType('VARIABLE', '[\u10A0-\u10FF\u2D00-\u2D25\u2D27\u2D2D]+'),
    'SEMICOLON': new TokenType('SEMICOLON', ';'),
    // 'SPACE': new TokenType('SPACE', '[\\n\\t\\r]'),
    'SPACE': new TokenType('SPACE', '[\\n\\t\\r\\u0020]'),
    // 'ASSIGN': new TokenType('ASSIGN', 'უდრის'),
    'ASSIGN': new TokenType('ASSIGN', '\u10E3\u10D3\u10E0\u10D8\u10E1'),
    // 'LOG': new TokenType('LOG', 'დააკონსოლე'),
    'LOG': new TokenType('LOG', '\u10D3\u10D0\u10D0\u10DA\u10DD\u10DC\u10D4'),
    'PLUS': new TokenType('PLUS', 'მიუმატე'),
    'MINUS': new TokenType('MINUS', 'გამოაკელი'),
    'LPAR': new TokenType('LPAR', '\\('),
    'RPAR': new TokenType('RPAR', '\\)'),
}