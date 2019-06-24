let valores = [5, 8, 4, 9, 3, 2, 6, 7, 0]

/*for(let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}*/

for(let pos in valores){
    valores.sort()
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}