function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 0 && hora < 12){
        img.src = "fotomanha.jpg"
        document.body.style.background = '#e39400'
    }else if(hora >= 12 && hora <= 18){
        img.src = 'fototarde.jpg'
        document.body.style.background = '#b9846f'
    }else {
        img.src = 'fotonoite.jpg'
        document.body.style.background = '#303a45'
    }
}

