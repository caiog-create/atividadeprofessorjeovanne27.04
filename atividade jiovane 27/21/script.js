function verificarNumero() {
    let numero = parseFloat(document.getElementById("numero").value);
    let resultado = document.getElementById("resultado");

    if (isNaN(numero)) {
        resultado.innerText = "Digite um número válido!";
        return;
    }

    if (numero > 0) {
        resultado.innerText = "O número é positivo.";
    } else if (numero < 0) {
        resultado.innerText = "O número é negativo.";
    } else {
        resultado.innerText = "O número é zero.";
    }
}