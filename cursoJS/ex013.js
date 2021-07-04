var agora = new Date()
var diaSemana = agora.getDay()


switch (diaSemana){
   case 0:
   console.log('domigo')
   break
   case 1:
   console.log('segunda')
   break
   case 3:
   console.log('terça')
   break
   case 4:
   console.log('quarta')
   break
   case 5:
   console.log('quinta')
   break
   case 6:
   console.log('sexta')
   break
   case 7:
   console.log('sabado')
   break
  default:     
       console.log('[Erro] Dia invalido')
       break 
}




