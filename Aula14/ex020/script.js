function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if (num.value.length == 0 ) {
        alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        for (let c = 0; c <= 10; c++) {
            let item = document.createElement('option');
            item.text = `${n} x ${c} = ${n*c}`
            item.value =`tab ${c}`
            tab.appendChild(item) 
        }
    }
}