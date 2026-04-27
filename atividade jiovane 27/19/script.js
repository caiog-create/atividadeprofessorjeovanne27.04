function verificarDia() {
    let dataInput = document.getElementById("data").value;
    let resultado = document.getElementById("resultado");

    if (!dataInput) {
        resultado.innerText = "Selecione uma data!";
        return;
    }

    let data = new Date(dataInput);
    let diaSemana = data.getDay();

    let dias = [
        "Domingo",
        "Segunda-feira",
        "Terça-feira",
        "Quarta-feira",
        "Quinta-feira",
        "Sexta-feira",
        "Sábado"
    ];

    resultado.innerText = `Dia da semana: ${dias[diaSemana]}`;
}