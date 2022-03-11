let text ="Brenda"
let str ="html, CSS, JS, PHP"
let palavra = "html, Css, JS, PHP"
let listaNegativa = "HTML, CSS, JS, PHP"
document.getElementById("texto").innerHTML = text.length;
document.getElementById("captura").innerHTML=str.slice(11,13);
//slice recupera uma informação na lista, informar posição inicial e final
//a primeira posição na contagem é ZERO
document.getElementById("captura2").innerHTML = palavra.slice(6)
//ele carrega toda a lista a partir da posição informada
document.getElementById("captura3").innerHTML = listaNegativa.slice(-8)

function substituicao(){// realizar troca
    var troca =document.getElementById("novo_texto").innerHTML;
    document.getElementById("novo_texto").innerHTML = troca.replace("HTML","CSS")
}
var palavras = text.concat(" gosta ",str," desejo que todos gostem tbm!!!");
document.getElementById("concatenacao").innerHTML=palavras;
/*
alert("Site em manutenção, caso tenha algum problema peço desculpas, é prazer tê-lo aqui!!!")
//prompt("Qual o seu nome?")
confirm("Você é aluno do senac?")

var nome = prompt("Qual o seu nome?")
var idade = prompt("Qual a sua idade?")

confirm("Você se chama "+nome+" e a sua idade é "+idade+" Está correto?")
*/
function media(valor1, valor2){
    var resultado = (valor1+valor2)/2;
    alert( " A medida entre "+valor1+ " e "+valor2+" é "+resultado)
}