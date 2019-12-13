const calcularMedia = function(){

    let totalNotas = 0, count = 0, laco = true

    while (laco){
        let notas = prompt('digita a nota:')
        if (notas.toUpperCase() == 'FIM'){
            laco = false
        } else {
            totalNotas += Number(notas)
            count += 1
    
        }
    }
    return alert(totalNotas/count)
}

calcularMedia()