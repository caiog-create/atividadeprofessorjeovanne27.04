function validarFormulario() {
    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let mensagem = document.getElementById("mensagem").value.trim();

    if (nome === "") {
        alert("Por favor, preencha o nome!");
        return false;
    }

    if (email === "") {
        alert("Por favor, preencha o email!");
        return false;
    }

    if (mensagem === "") {
        alert("Por favor, escreva uma mensagem!");
        return false;
    }

    alert("Formulário enviado com sucesso!");
    return true;
}