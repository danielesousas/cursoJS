function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados inseridos!')
    } else {
        var fsex = document.querySelectorAll('input[type="radio"]')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'img-masc-crianca.jpeg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'img-masc-jovem.webp')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'img-masc-adulto.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'img-masc-idoso.jpg')
            }
        } else {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'img-fem-crianca.jpeg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'img-fem-jovem.jpeg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'img-fem-adulto.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'img-fem-idoso.jpg')
            }
        }   
            res.style.textAlign = 'center'     
            res.innerHTML = `Detectamos ${gênero} com idade ${idade} anos.`
            res.appendChild(img)
}
}