function start(){
    var frutas = ["laranja", "maça", "banana", "pera", "melancia"]//array, lista com varias informações
    criarElementos("p", "paragrafoFrutas", "", "Escolha as frutas", "body")
    criarElementos("select", "selectFrutas", "", "", "body")
    document.getElementById("selectFrutas").multiple = "multiple"

    var i = 0;
    while (frutas[i]) {
        criarElementos("option","frutas"+i,"",frutas[i],"selectFrutas")
        i++
    }

}

function criarElementos(elemento,id,classe,texto, elementoPai) {
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