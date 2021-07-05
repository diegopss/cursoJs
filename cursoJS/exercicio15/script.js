function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')
    if (fano.value == 0 || fano.value > ano){
        alert('[ERRO]')
    } else{
        var fsex = document.getElementsByName('radsex')
        var genero = ''
        var idade = ano - Number(fano.value)
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
                     
       
    } if (fsex[1].checked){
        genero = 'Mulher'
        if(idade >= 0 && idade < 10){
            img.setAttribute('src', 'img/bebeF.png')                             //criança            
        }else if(idade < 21){
            img.setAttribute('src', 'img/jovemF.png')                            //jovem
        }else if (idade < 50){
            img.setAttribute('src', 'img/adulta.png')                            //adulto                                        
        }else{
            img.setAttribute('src', 'img/idosa.png')                           //idoso
        }
    
    } else if(fsex[0].checked){
        genero = 'Homem'
        if(idade >= 0 && idade < 10){
            img.setAttribute('src', 'img/bebeM.png')  //criança            
        }else if(idade < 21){
            img.setAttribute('src', 'img/jovemM.png')   //jovem
        }else if (idade < 50){
            img.setAttribute('src', 'img/adulto.png')   //adulto                                        
        }else{
            img.setAttribute('src', 'img/idoso.png')    //idoso
        }
    }
      res.innerHTML = `Detectamos o gênero ${genero} com ${idade} anos`
      res.style.textAlign = 'center'
      res.appendChild(img)
}