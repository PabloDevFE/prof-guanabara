function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `<h2>Agora são exatamente ${hora} horas</h2>`
    if (hora > 4 && hora < 12) {
        //BOM DIA
        msg.innerHTML += '<p>Bom dia!</p>'
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE
        img.src = 'tarde.jpg'
        document.body.style.backgroundColor = '#e79243'
        msg.innerHTML += '<p>Boa tarde!</p>'
    } else {
        //BOA NOITE
        img.src = 'noite.jpg'
        document.body.style.backgroundColor = '#0a0620'
        msg.innerHTML += '<p>Boa noite!</p>'
    }
}