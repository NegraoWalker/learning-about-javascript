const pessoa = {
    nome: "Walker",
    idade: 30,
    profissao: "Desenvolvedor de software backend",
    fala() {
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos`)
    }
}

console.log(pessoa.nome)
pessoa.fala()