(function(){
    let nome = prompt('digite seu nome completo:')
    let numero = prompt('digite o numero do caractere:')

    const caractere = function(nome, numero){
        let tam = nome.length
        if (numero < 1 | numero > tam){
            alert('o numero digitado não é valido!')
        } else {
            alert(nome.charAt(numero-1))
        }
    }

    caractere(nome,numero)
})()