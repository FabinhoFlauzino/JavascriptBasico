let num = [5, 8, 4, 9, 3, 2, 6, 7, 0]
num.push(1)
num.sort()

console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log( `O primeiro valor é ${num[0]} `)

let pos = num.indexOf(1)
if (pos == -1) {
    console.log('O valor não foi encontrado.')
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}

