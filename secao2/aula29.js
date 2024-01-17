let alunos = ["Walker", "Isabela", "Junior", "Juliana"];
let lista = ["Abacaxi", 12, true, 12.567, null];


console.log(alunos);
console.log(alunos.length);
console.log(alunos[0]);

alunos[2] = "Juca";
console.log(alunos);

alunos.push("Luiz");
console.log(alunos);

alunos.pop();
console.log(alunos);

alunos.unshift("Fabiano");
console.log(alunos);

alunos.shift();
console.log(alunos);


const alunosSlice = alunos.slice(0, 2);
console.log(alunosSlice);