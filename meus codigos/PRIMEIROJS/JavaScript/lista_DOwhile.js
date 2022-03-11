function start() {
    var frutas = ["laranja", "maça", "banana", "pera", "melancia"]//array, lista com varias informações
    criarElementos("p", "paragrafoFrutas", "", "Escolha as frutas", "body")
    

    var i = 0;
    do {
        criarElementos("input", "frutas"+i, "", "", "body")
        document.getElementById("frutas" + i).setAttribute("type", "checkbox")
        criarElementos("label", "label" + frutas[i], "", frutas[i] + "\n", "body")
        i++
    } while (frutas[i])
    
}

function criarElementos(elemento, id, classe, texto, elementoPai) {
    var novoElemento = document.createElement(elemento)
    novoElemento.id = id
    if (classe != "")
        novoElemento.className = classe
    if (texto != "")
        novoElemento.innerText = texto
    if (elementoPai == "body")
        document.body.appendChild(novoElemento)
    else
        document.getElementById(elementoPai).appendChild(novoElemento)
}