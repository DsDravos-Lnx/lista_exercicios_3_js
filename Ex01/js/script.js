const calcularMedia = function(){

    let totalNotas = 0, count = 0, laco = true

    while (laco == true){
        let notas = prompt('digita a nota:')
        if (notas.toUpperCase() == 'FIM'){
            laco = false
        } else {
            totalNotas += Number(notas)
            count += 1
    
        }
    }
    return (console.log(totalNotas/count))
}

calcularMedia()