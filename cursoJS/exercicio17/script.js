function confirmar(){
    var num = document.getElementById('num')
    var n = num.value
    var res = document.getElementById('res')
    var sel = document.getElementById('sel')
    var resul = 0
    
    if(n.length == 0){
        res.innerHTML = `[ERRO] preencha os campos`
    }else{
        sel.innerHTML = '' //serve para limpar o select para não acumular as tabuadas
        for(var c = 1 ;c < 11 ; c++){
            resul = n * c
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${resul}`
            item.value = `opt${c}` // essa linha cria um value pra cada option 
            sel.appendChild(item)         
            

        }
    }    
}