function ordenarNomes() {
    let entrada = document.getElementById("nomes").value;
    let resultado = document.getElementById("resultado");

    if (entrada.trim() === "") {
        resultado.innerText = "Digite pelo menos um nome!";
        return;
    }

    let lista = entrada.split(",").map(nome => nome.trim());

    lista.sort((a, b) => a.localeCompare(b, 'pt-BR', { sensitivity: 'base' }));

    resultado.innerText = "Ordem alfabética: " + lista.join(", ");
}