let varA = "A";
let varB = "B";
let varC = "C";

console.log(varA,varB,varC);


let varAux = varA;
varA = varB;
varB = varC;
varC = varAux;

console.log(varA,varB,varC);