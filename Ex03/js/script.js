const inverterNomes = function(){
    let laco = true, nomes = '_'

    while (laco == true){
        let nome = prompt('digite um nome:')
        if (nome.toUpperCase() == 'FIM'){
            laco = false
        } else {
            nomes = nomes + nome + '_'
        }
    }
    
    console.log(nomes.split('_'))   
}

inverterNomes()