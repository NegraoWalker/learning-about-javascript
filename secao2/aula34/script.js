function meuEscopo() {
    const formulario = document.querySelector('.form')
    const resultado = document.querySelector('.resultado')
    const pessoas = []

    function recebeEventoFormulario(evento) {
        evento.preventDefault()
        const nome = formulario.querySelector('.nome')
        const sobrenome = formulario.querySelector('.sobrenome')
        const peso = formulario.querySelector('.peso')
        const altura = formulario.querySelector('.altura')

        pessoas.push({
            nome: nome.nodeValue,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        })

        console.log(pessoas)

        resultado.innerHTML += `<p> ${nome.value} ${sobrenome.value} ${peso.value} kg ${altura.value} m</p>`
    }

    formulario.addEventListener('submit', recebeEventoFormulario)
}

meuEscopo()