let tarefas = [];

function adicionarTarefa() {
    let input = document.getElementById("tarefaInput");
    let texto = input.value.trim();

    if (texto === "") {
        alert("Digite uma tarefa!");
        return;
    }

    tarefas.push(texto);
    input.value = "";
    renderizarLista();
}

function renderizarLista() {
    let lista = document.getElementById("listaTarefas");
    lista.innerHTML = "";

    tarefas.forEach((tarefa, index) => {
        let li = document.createElement("li");

        li.innerHTML = `
            <span>${tarefa}</span>
            <div class="acoes">
                <button onclick="editarTarefa(${index})">Editar</button>
                <button onclick="deletarTarefa(${index})">Excluir</button>
            </div>
        `;

        lista.appendChild(li);
    });
}

function editarTarefa(index) {
    let novaTarefa = prompt("Edite a tarefa:", tarefas[index]);

    if (novaTarefa !== null && novaTarefa.trim() !== "") {
        tarefas[index] = novaTarefa.trim();
        renderizarLista();
    }
}

function deletarTarefa(index) {
    tarefas.splice(index, 1);
    renderizarLista();
}