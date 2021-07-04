function carregar(){
var msg = window.document.querySelector('div#msg')
var img = window.document.querySelector('img#foto')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`

if(hora >= 0 && hora < 12){
    //Bom dia
    img.src = 'manha.png'
    document.body.style.background = '#f0d7c3'
} else if (hora >= 12 && hora < 18 ){
    //boa tarde  
    img.src = 'tarde.png'
    document.body.style.background = '#c4712d' 
} else {
//boa noite
    img.src = 'noite.png'
    document.body.style.background = '#0c1b22'
}
}