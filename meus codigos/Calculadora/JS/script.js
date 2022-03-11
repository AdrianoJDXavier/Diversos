function gerartabuada() {
    var v1;
    v1 = document.getElementById("tabuada").value
    var tabuada = "<fieldset id='resultado'>";
    var i = 1
    for (i; i <= 10; i++) {
        tabuada += v1 + " x " + i + "=" + v1 * i + "<br>"
    }
    tabuada += "</fieldset>"
    document.getElementById("res").innerHTML = tabuada
}