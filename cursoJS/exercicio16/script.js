function contar(){
var inc = document.querySelector('input#inc')
var fim = document.querySelector('input#fim')
var pas = document.querySelector('input#pas')
var result = ""
var res = document.querySelector('div#res')
var i = Number(inc.value)
var f = Number(fim.value)
var p = Number(pas.value)

for (x = i; x < f; x += p ){

result = x 

 res.innerHTML = `${x}`


}


}