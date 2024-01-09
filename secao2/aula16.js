const nome = "Walker";
const idade = 30;
const peso = 99;
const altura = 1.88;

const imc = peso/(altura*altura);

console.log(nome + " tem " + idade + " anos, " + "pesa " + peso + "kg " + "tem " + altura + " de altura" + " e seu IMC é igual a " + imc);
console.log(`${nome} tem ${idade} anos, pesa ${peso}kg, tem ${altura} de altura e seu IMC é igual a ${imc}`); //Template Strings