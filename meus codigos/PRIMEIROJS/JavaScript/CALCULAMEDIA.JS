function start(){
    var label = document.createElement("label");
    label.id = "labelValor1";
    label.innerText = "Digite o primeiro valor";
    document.body.appendChild(label);

    var input = document.createElement("input");
    input.id ="inputValor1";
    input.type ="text";
    document.body.appendChild(input);

    var label = document.createElement("label");
    label.id = "labelValor2";
    label.innerText = "Digite o segundo valor";
    document.body.appendChild(label);

    var input = document.createElement("input");
    input.id ="inputValor2";
    input.type ="text";
    document.body.appendChild(input);

    var input = document.createElement("input");
    input.id = "botao";
    input.type ="button";
    input.value ="Calcula Média";
    input.setAttribute("onClick","getValores()");
    document.body.appendChild(input);
}
function getValores(){
    var valor1 = parseInt(document.getElementById("inputValor1").value);
    var valor2 = parseInt(document.getElementById("inputValor2").value);
    media (valor1, valor2);
}
function media(valor1,valor2){
    var resultado = (valor1+valor2)/2;
    alert("A media entre "+valor1+" e "+valor2+" é: "+resultado);
}