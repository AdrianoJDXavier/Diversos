let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#selLista')
let res = document.querySelector('div#res')
let valores = []
function numero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}
function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (numero(num.value) && !inLista(num.value, valores)) {
        //window.alert("ok")
        valores.push(Number(num.value)) //push add item ao vetor
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML =""

    } else {
        window.alert("Valor invalido ou já está na lista")
    }
    num.value=''
    num.focus()
    
}

function finalizar() {
    if (valores.length == 0) {
        window.alert("Add um valor antes de finalizar")
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        for (let pos in valores) {
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        res.innerHTML += `<p> Ao todo, temos ${total} numeros cadastrados`
        res.innerHTML += `<p> O maior é ${maior}`
        res.innerHTML += `<p> O menor é ${menor}`
    }
}
