let num = [5, 3, 9, 90]
num.sort()
num.push(7) //adiciona um valor no final do array

console.log(`o primeiro valor é ${num[0]}`)
console.log(`O valor do nosso vetor é  ${num}`)
console.log(`temos ${num.length} elementos`)

/*
for (let pos = 0; pos <= num.length; pos++){
    console.log(num[pos])
}
*/

for ( let pos in num) {
    console.log(num[pos]) 
}

console.log(`O valor está na posição ${num.indexOf(9)}`)  //-1 é pq não existe