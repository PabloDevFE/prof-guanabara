var agora = new Date()
var diaSem = agora.getDay()
/*
DOMINGO = 0
SEGUNDA = 1
TERÇA = 2
QUARTA = 3
QUINTA = 4
SEXTA = 5
SABADO = 6
*/
console.log(diaSem)

switch(diaSem) { //SWITCH É BOM PARA VALORES PPONTUAIS
    case 0:
        console.log('DOMINGO')
        break

    case 1:
        console.log('SEGUNDA')
        break

    case 2:
        console.log('TERÇA')
        break

    case 3:
        console.log('QUARTA')
        break

    case 4:
        console.log('QUINTA')
        break

    case 5:
        console.log('SEXTA')
        break

    case 6:
        console.log('SÁBADO')
        break

    default:
        console.log('[ERRO] Dia inválido')
}