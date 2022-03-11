/*for(i = 0; i< 11;i++){
    console.log("5 x"+ i + "=" + 5*i);
}*/
console.clear() //limpa
for (i = 0; i < 10; i++) {
    console.log("exibindo texto numero: " + i)
}
/*//SWITCH :
switch (expressão){
    case 0:
    <bloco de comando>
        breck;
        case 2:
    <bloco de comando>
        breck;
        case 3:
    <bloco de comando>
        breck;
        case 4:
    <bloco de comando>
        breck;
deafault:
<encerramento>
}*/
jogo()
function jogo() {
    $jogador = Math.floor(Math.random() * 7);
    switch ($jogador) {
        case 0:
            text = ("fique parado")
            break;
        case 1:
            text = ("ande 1 casa")
            break;
        case 2:
            text = ("ande 2 casa")
            break;
        case 3:
            text = ("volte 3 casa")
            break;
        case 4:
            text = ("fique parado")
            break;
        case 5:
            text = ("avance 4 casa")
            break;
        case 6:
            text = ("você ganhou!!!")
            break;
        default:
            text = ("jogue outra vez!!!")
    }
}

console.log(text)
cargo = "funcionario";
salario = 1000;

switch (cargo) {
    case "gerente":
        salario *= 1.15;
        break;
    case "supervisor":
        salario *= 1.10;
        break;
    default:
        salario *= 1.05;
}
console.log(salario)

var idade = 18;
switch (idade) {
    case 18:
        permissao = "bem vindo ao site"
        break;
    default:
        permissao = "volte quando tiver 18"
}
console.clear()
var numero = 3;
switch (numero) {
    case 1:
        dia = "domingo"
        break;
    case 2:
        dia = "segunda-feira"
        break;
    case 3:
        dia = "terça-feira"
        break;
    case 4:
        dia = "quarta-feira"
        break;
    case 5:
        dia = "quinta-feira"
        break;
    case 6:
        dia = "sexta-feira"
        break;
    case 7:
        dia = "sábado"
        break;
    default:
        dia = "não corresponde a um dia da semana"
}
console.log(dia)