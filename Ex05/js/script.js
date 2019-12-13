( function(){
    
    let data = prompt('digite uma data ( DD/MM/AAAA ) :')    
    data = data.split('/')
    
    for (let i=0; i<3; i++)
        document.write(data[i] + '</br>')
})()