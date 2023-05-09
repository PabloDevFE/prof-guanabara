function tabuada() {
    var num = document.getElementById('inum')
    var tab = document.getElementById('sel')

    if (num.value.length == 0) {
        window.alert('Digite um numero valido')
    } else {
        var n = Number(num.value)
        var c = 1
        tab.innerHTML = ''

        while (c <= 10){
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }
} 