// function saudacao(nome="João") {
//     console.log(`Oi ${nome}!`)
// }

// saudacao("Walker")
// saudacao()

// const saudacao = function(nome="João") {
//     console.log(`Oi ${nome}!`)
// }

// saudacao("Walker")
// saudacao()

const saudacao = (nome = "João") => {console.log(`Oi ${nome}!`)}

saudacao("Walker")
saudacao()

function adicao(a,b){
    return a + b
}

console.log(adicao(1,2))