function verificarAno() {
    let ano = parseInt(document.getElementById("ano").value);
    let resultado = document.getElementById("resultado");

    if (isNaN(ano)) {
        resultado.innerText = "Digite um ano válido!";
        return;
    }

    if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
        resultado.innerText = "É um ano bissexto.";
    } else {
        resultado.innerText = "Não é um ano bissexto.";
    }
}