( function () {
    
    const dataAtual = new Date()
    const horaAtual = dataAtual.getHours()
    
    if (6 < horaAtual && horaAtual < 12){
        alert('Bom dia!')
    } else if ( 12 < horaAtual && horaAtual < 18) {
        alert('Boa  tarde!')
    } else if (18 < horaAtual && horaAtual < 6) {
        alert('Boa Noite!')
    }
    
})()



