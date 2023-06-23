import Lexer from "./Lexer";
import Parser from "./Parser";

const code = 
`კო უდრის 5 მიუმატე 9 მიუმატე (4 გამოაკელი 6);
დააკონსოლე კოდი;
ცვლადი უდრის კო მიუმატე 3;
დააკონსოლე ცვლადი მიუმატე კო გამოაკელი 6;`

const lexer = new Lexer(code);
lexer.lexAnalysis();

const parser = new Parser(lexer.tokenList);
const rootNode = parser.parseCode();
parser.run(rootNode);