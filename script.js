function carregar () {
var msg = document.getElementById("msg")
var img = document.getElementById("imagem")
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas!`
if (hora >= 5 && hora < 12) {
        img.src = 'manha.png'
        document.body.style.background = '#dfc4b1'
        document.body.style.color = '#dfc4b1'
        //bom dia
    } else if (hora >= 12 && hora < 18) {
        img.src = 'tarde.png'
        document.body.style.background = '#ea7e22'
        document.body.style.color = '#ea7e22'
        //boa tarde 
    } else {
        img.src = 'noite.png'
        document.body.style.background = '#0b2242'
        document.body.style.color = '#0b2242'
        //boa noite
    }

} 