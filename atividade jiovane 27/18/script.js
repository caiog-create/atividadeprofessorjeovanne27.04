function converter() {
    let valor = parseFloat(document.getElementById("valor").value);
    let de = document.getElementById("de").value;
    let para = document.getElementById("para").value;
    let resultado = document.getElementById("resultado");

    if (isNaN(valor)) {
        resultado.innerText = "Digite um valor válido!";
        return;
    }

    let celsius;

    // Converter para Celsius primeiro
    if (de === "c") {
        celsius = valor;
    } else if (de === "f") {
        celsius = (valor - 32) * 5/9;
    } else if (de === "k") {
        celsius = valor - 273.15;
    }

    let final;

    // Converter de Celsius para o destino
    if (para === "c") {
        final = celsius;
    } else if (para === "f") {
        final = (celsius * 9/5) + 32;
    } else if (para === "k") {
        final = celsius + 273.15;
    }

    resultado.innerText = `Resultado: ${final.toFixed(2)}°`;
}