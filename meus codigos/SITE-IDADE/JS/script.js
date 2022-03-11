function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.querySelector("div#res")

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique ano digitado e tente novamente')
    } else {
        //window.alert('tudo ok')
        var fsex = document.getElementsByName("radsex")
        var idade = ano - fano.value
        //res.innerHTML = "Idade calculada "+idade
        var gênero = ""
        var img = document.createElement("img")
        img.setAttribute("id", "foto")
        if (fsex[0].checked) {
            gênero = "Mulher"
            if (idade >= 0 && idade < 10) {
                img.setAttribute("src", "../IMG/criançaMenina.jpeg")
            } else if (idade < 21) {
                img.setAttribute("src", "../IMG/AdolescenteLinda.jpg")
            } else if (idade < 50) {
                img.setAttribute("src", "../IMG/mulher.jpg")
            } else {
                img.setAttribute("src", "../IMG/MulherIdosadeOculos.jpg")
            }
        } else if (fsex[1].checked) {
            gênero = "Homem"
        }
        res.innerHTML = "detectamos " + gênero + " com" + idade + "."
        res.appendChild(img)
    }
}