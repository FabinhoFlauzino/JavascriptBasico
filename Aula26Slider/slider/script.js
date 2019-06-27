var imgs = []
var slider
var imgAtual
var maxImg
var tmp
var tempotroca, vtempo, vbarra

function preCarregamento() {
    var s = 1
    for (var i = 1; i <= 6; i++) {
        imgs[i] = new Image()
        imgs[i].src = 'imgs/s'+s+'.jpg'
        s++
    }
}

function carregarImg(img){
    slider.style.backgroundImage = "url('"+imgs[img].src+"')"
}

function inicia(){
    preCarregamento()
    imgAtual = 1
    maxImg = imgs.length -1
    slider = document.getElementById('dvslider')
    vbarra = document.getElementById('dvbarra')
    carregarImg(imgAtual)
    tempotroca = 0
    anima()
    //tmp = setInterval(troca, tempotroca)
}

function troca(dir){
    tempotroca = 0
    imgAtual += dir
    if (imgAtual > maxImg) {
        imgAtual = 1
    }else if (imgAtual < 1) {
        imgAtual = maxImg
    }
    carregarImg(imgAtual)
}

function anima(){
    tempotroca++
    if(tempotroca >= 300){
        tempotroca = 0
        troca(1)
    }
    vtempo = tempotroca / 3
    vbarra.style.width = vtempo + '%'
    requestAnimationFrame(anima)
}

addEventListener('load', inicia)