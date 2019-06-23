

function verificar() {
    let inicio = document.getElementById('txtinicio')
    let fim = document.getElementById('txtfim')
    let passo = document.getElementById('txtpasso')
    let res = document.getElementById('res')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ){
        res.innerHTML = 'Impossivel contar'
        alert(`[ERRO] Faltam dados`)
    }else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(passo <= 0){
            alert('Passo invalido: Considerando PASSO 1')
            p = 1
        }
        if(i < f){
            //contagem progressiva
            for (let c = i; c <= f; c+= p) {
                res.innerHTML += `${c} \u{1F648}`;
                }
        }else {
            //contagem regressiva
            for (let c = i; c >= f; c-= p) {
                res.innerHTML += `${c} \u{1F648}`;
            }
        }
        res.innerHTML += `\u{1F9D9}`
    }
}
