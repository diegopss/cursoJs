var list = []

function analisar(){
 var txtnum = document.getElementById('txtnum')
 var num = txtnum.value
 var sel = document.getElementById('sel')
 
 
 if(num.length == 0 || num > 100){
     alert('por favor digite um numero válido')
 } else{
    if(list.indexOf(num) == -1){
        list.push(num)        
        var option = document.createElement('option')
        option.text = `Valor ${num} adicionado`
        sel.appendChild(option)
       txtnum.value = '' //limpa o input automaticamente
       txtnum.focus()   //coloca o cursor no input novamente
       res.innerHTML = ''
    } else {
        alert(`o numero ${num} já foi adicionado`)
    }
}
 

 
 

}

function finalizar(){
    var res = document.getElementById('res')  
    res.innerHTML= ''
    res.innerHTML += `<p>Ao todo temos ${list.length} Numeros cadastrados</p>`
    var maiorN = 0
    var menorN = 100
    var soma = 0
    media = 0
    //   var c = 0
   
  for(var c = 0 ; c < list.length ; c++){
    if(Number(list[c]) > maiorN){
        maiorN = Number(list[c])
    } 
    if(Number(list[c]) < menorN){
        menorN = Number(list[c])
    }               
    soma += Number(list[c])
    media = soma/list.length
}
    
    res.innerHTML += `<p>o maior Numero informado é ${maiorN}</p>`
    res.innerHTML += `<p>o menor Numero informado é ${menorN}</p>`
    res.innerHTML += `<p>A soma dos Numeros informados é ${soma}</p>`
    res.innerHTML += `<p>A média dos Numeros informados é ${media}</p>`
    

    

        
}