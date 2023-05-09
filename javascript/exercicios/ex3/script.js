function contar() {
    
    
    var ini = document.getElementById('#iinicio')
    var fim = document.getElementById('#ifim')
    var passo = document.getElementById('#ipasso')
    var res = document.getElementById('#res')
    var inicio = Number(ini.value)
    var final = Number(fim.value)
    var pulo = Number(passo.value)

    for (var i = inicio; i <= final; i += pulo) {
        res.innerHTML += i + ' '
    }
} 