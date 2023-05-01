function verificar () {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('#txtano')
    var res = document.querySelector('#res')
     
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO]')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //CRIANÇA
                img.setAttribute('src', 'bebe-masc.jpg')
            } else if (idade < 21) {
                //JOVEM
                img.setAttribute('src', 'jovem-masc.jpg')
            } else if (idade < 50) {
                //ADULTO
                img.setAttribute('src', 'adulto-masc.jpg')
            } else {
                //IDOSO
                img.setAttribute('src', 'idoso-masc.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //CRIANÇA
                img.setAttribute('src', 'bebe-fem.jpg')
            } else if (idade < 21) {
                //JOVEM
                img.setAttribute('src', 'jovem-fem.jpg')
            } else if (idade < 50) {
                //ADULTO
                img.setAttribute('src', 'adulto-fem.jpg')
            } else {
                //IDOSO
                img.setAttribute('src', 'idoso-fem.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Você tem ${idade} anos e é ${genero}.`
        res.appendChild(img)
    }
     
}
  