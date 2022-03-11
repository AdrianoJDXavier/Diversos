function hora() {
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    // var hora = data.getHours()
    var hora = 15
    msg.innerHTML = 'Agora são ' + hora + ' horas'
    if (hora >= 00 && hora < 12) {
        //bom dia 
        //fazer alterações de estilo no html atraves da propriedade style
        document.body.style.background = "rgba(181, 221, 99, 0.712)"
        img.src = "../IMG/manhã.jpeg"
    } else if (hora >= 12 && hora <= 18) {
        //boa tarde
        document.body.style.background = "rgba(224, 138, 9)"
        img.src = "../IMG/tarde.jpeg"
    } else {
        //boa noite
        document.body.style.background = "rgba(2, 32, 41, 0.877)"
        img.src = "../IMG/noite.jpeg"
    }
}