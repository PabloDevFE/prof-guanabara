function contar() {
    var ini = document.getElementById('inicio');
    var fim = document.getElementById('fim');
    var passo = document.getElementById('passo');
    var res = document.getElementById('res');
    var inicio = Number(ini.value);
    var final = Number(fim.value);
    var pulo = Number(passo.value);

    res.innerHTML = ""; // Limpa o conteúdo anterior

    for (var i = inicio; i <= final; i += pulo) {
        res.innerHTML += ` \u{1F449} ${i}`;
    }
}
