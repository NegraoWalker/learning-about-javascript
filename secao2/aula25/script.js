// const nome = prompt('Digite seu nome completo:');
// document.body.innerHTML += `Seu nome é: ${nome}<br />`;
// document.body.innerHTML += `Seu nome tem ______ letras <br />`;
// document.body.innerHTML += `A segunda letra do seu nome é: ______<br />`;
// document.body.innerHTML += `Qual o primeiro índice da letra LETRA no seu nome? ______<br />`;
// document.body.innerHTML += `Qual o último índice da letra LETRA no seu nome? ______<br />`;
// document.body.innerHTML += `As últimas 3 letras do seu nome são: ______<br />`;
// document.body.innerHTML += `As palavras do seu nome são: ______<br />`;
// document.body.innerHTML += `Seu nome com letras maiúsculas: ______<br />`;
// document.body.innerHTML += `Seu nome com letras minúsculas: ______<br />`;

const nome = prompt('Digite seu nome completo:');
document.body.innerHTML += `Seu nome é: ${nome}<br />`;
document.body.innerHTML += `Seu nome tem ${nome.length} letras <br />`;
document.body.innerHTML += `A segunda letra do seu nome é: ${nome[1]}<br />`;
document.body.innerHTML += `Qual o primeiro índice da letra e no seu nome? ${nome.indexOf("e")}<br />`;
document.body.innerHTML += `Qual o último índice da letra e no seu nome? ${nome.lastIndexOf("e")}<br />`;
document.body.innerHTML += `As últimas 3 letras do seu nome são: ${nome.slice(-3)}<br />`;
document.body.innerHTML += `As palavras do seu nome são: ${nome.split(" ")}<br />`;
document.body.innerHTML += `Seu nome com letras maiúsculas: ${nome.toUpperCase()}<br />`;
document.body.innerHTML += `Seu nome com letras minúsculas: ${nome.toLowerCase()}<br />`;