const maioridadePenal = function(){
    let laco = true, maiores = 0, menores = 0

    while (laco){
        let idade = prompt('digite uma idade:')
        
        if (idade.toUpperCase() == 'FIM'){
            laco = false
        } else if  (Number(idade) >= 18) {
            maiores += 1
        } else {
            menores += 1
        }
    }

    alert(`${maiores} pessoas sao maiores de idade!`)
    alert(`${menores} pessoas sao menores de idade!`)

}

maioridadePenal()