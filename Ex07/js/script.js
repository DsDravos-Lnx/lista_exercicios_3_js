(function(){
    
    let nome = prompt('digite seu nome completo:')    
    letras = nome.replace(/\s/g, '')
    
    alert(`seu nome possui ${letras.length} letras`)
    alert(`seu nome possui ${nome.length} caracteres`)
    
})()
