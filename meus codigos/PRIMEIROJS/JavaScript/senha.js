function entrar() {
    var senha = ""
    do {
        senha = prompt("digite sua senha: ")
        if (senha == "123456senac") {
            alert("senha confere!")
        } else {
            alert("senha invalida")
        }
    } while (senha != "123456senac") {

    }
}

