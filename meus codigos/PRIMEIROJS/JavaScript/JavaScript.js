function minhaMensagem(){
    document.getElementById("msn").innerHTML = "Prazer JS!!!\n em 2022";
}
//criação de novo elemento createElement
var novoElement = document.createElement("input");
novoElement.id = "meuInput";
novoElement.id = "text";
novoElement.id = "terça-feira";
document.body.appendChild(novoElement);

var novoElement = document.createElement("input");
novoElement.id = "meuInput";
novoElement.id = "date";
document.body.appendChild(novoElement);

var novoElement = document.createElement("input");
novoElement.id = "meuInput";
novoElement.id = "submit";
novoElement.id = "enviar";
document.body.appendChild(novoElement);

//acessar os elementos do HTML atraves do ID
document.getElementById("meuInput");
document.getElementById("meuInput").value="chuva";
document.getElementById("meuInput").type="text";
document.getElementById("meuInput").type="button";

//propriedade utilizada para recuperar o texto de uma tags do html
/*function start(){
    var paragrafo= document.createElement("p");
    paragrafo.id= "meuParagrafo";
    paragrafo.innerText= "Que medo da chuva, mais acabei de lembrar o senac quer falar com vcs!!!";
    document.body.appendChild(paragrafo);
}*/
var texto = document.getElementById("meuParagrafo").innerText;
alert(texto);
var teste = "boa noite"
console.log("texto",texto,"texto",texto)
