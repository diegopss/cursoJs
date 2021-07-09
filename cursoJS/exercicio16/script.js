function contar(){
var inc = document.querySelector('input#inc')
var fim = document.querySelector('input#fim')
var pas = document.querySelector('input#pas')
var res = document.querySelector('div#res')
var i = Number(inc.value)
var f = Number(fim.value)
var p = Number(pas.value)
var emoji 

if (inc.value.length == 0 || fim.value.length == 0 || pas.value.length == 0 ) {
    res.innerHTML = `[Erro] prencha os campos`
}else{
    if(p < 1){
        alert('considerando o passo como 1')
        p = 1        
    }
    if(i<f){
    for (var x = i; x <= f; x += p ){

        res.innerHTML += `${x} &#128073`

    }
        res.innerHTML += `&#128076`
} else if (i>f) {
    for (var x = i; x >= f; x -= p ){

        res.innerHTML += `${x} &#128073`

    }
        res.innerHTML += `&#128076`
    
}       
    

}
}

