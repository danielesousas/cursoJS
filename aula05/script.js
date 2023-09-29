function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('img')
var data = new Date()
var hora = data.getHours()
//var hora = 15
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 5 && hora < 12) {
    img.src = "dia.jpg"
    document.body.style.background = '#e2cd9f'
} else if (hora > 12 && hora < 18) {
    img.src = "tarde.png"
    document.body.style.background = '#3b9846f'
}
else {
    img.src = "noite.png"
    document.body.style.background = '#515154'
}

}