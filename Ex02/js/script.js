( function(){
    let maior = 0

    for (let i=0; i<5;i++){
        let numero = Number(prompt('digite um numero:'))
        if (numero > maior){
            maior = numero
        }
    }
    return alert(maior)
})()