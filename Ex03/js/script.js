const inverterNomes = function(){
    let laco = true, nomes = '_'

    while (laco){
        let nome = prompt('digite um nome:')
        if (nome.toUpperCase() == 'FIM'){
            laco = false
        } else {
            nomes = nomes + nome + '_'
        }
    }
    
    nomes = nomes.split('_')

    for(i=nomes.length-2; i>0; i--){
        alert(nomes[i])
    }

}

inverterNomes()