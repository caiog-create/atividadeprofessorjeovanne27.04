let produtos = [];

function adicionarProduto() {
    let nome = document.getElementById("nome").value.trim();
    let preco = parseFloat(document.getElementById("preco").value);

    if (nome === "" || isNaN(preco)) {
        alert("Preencha nome e preço corretamente!");
        return;
    }

    produtos.push({ nome, preco });

    document.getElementById("nome").value = "";
    document.getElementById("preco").value = "";

    renderizarLista();
}

function renderizarLista() {
    let lista = document.getElementById("listaProdutos");
    let totalElemento = document.getElementById("total");

    lista.innerHTML = "";

    let total = 0;

    produtos.forEach(produto => {
        let li = document.createElement("li");
        li.innerText = `${produto.nome} - R$ ${produto.preco.toFixed(2)}`;
        lista.appendChild(li);

        total += produto.preco;
    });

    totalElemento.innerText = `Total: R$ ${total.toFixed(2)}`;
}