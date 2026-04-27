function gerarSenha() {
    let tamanho = parseInt(document.getElementById("tamanho").value);
    let resultado = document.getElementById("resultado");

    if (isNaN(tamanho) || tamanho <= 0) {
        resultado.innerText = "Digite um tamanho válido!";
        return;
    }

    let caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
    let senha = "";

    for (let i = 0; i < tamanho; i++) {
        let indice = Math.floor(Math.random() * caracteres.length);
        senha += caracteres[indice];
    }

    resultado.innerText = `Senha gerada: ${senha}`;
}