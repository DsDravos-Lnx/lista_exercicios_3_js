const validarNome = function(){
    
    var nome = prompt('digite seu nome completo:')    
    
    const primeiroNome = function(nome){
        let aux = nome.split(' ')
        
        if (aux[0].length >= 4)
            return true
        else 
            return false
    }    
    
    const letraMaiscula = function(nome){
        let aux = nome.split(' ')
        
        for (let i=0 ; i< aux.length; i++){
            if (aux[i] != 'do' && aux[i] != 'de' && aux[i] != 'da'){
                let primeiraLetra = aux[i].charAt(0)
                if ( primeiraLetra != primeiraLetra.toUpperCase())
                    return false
            }
        }
        return true
    }
    
    const sobrenome = function(nome){
        let aux = nome.split(' ')

        if (aux.length > 1){
            return true
        } else {
            return false
        }
    }

    const semNumeros = function(nome){
        let numeros = /[0-9]/

        if (numeros.test(nome) == false){
            return true
        } else {
            return false
        }
    }

    if (primeiroNome(nome) == false){
        document.write('nome invalido')
    }else if (sobrenome(nome) == false){
        document.write('nome invalido')
    }else if (letraMaiscula(nome) == false){
        document.write('nome invalido')
    }else if (semNumeros(nome) == false){
        document.write('nome invalido')
    } else {
        document.write('nome valido')
    }

}
validarNome()