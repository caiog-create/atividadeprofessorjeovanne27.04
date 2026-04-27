let intervalo;

function apagarLuzes() {
    document.getElementById("vermelho").classList.remove("ativa");
    document.getElementById("amarelo").classList.remove("ativa");
    document.getElementById("verde").classList.remove("ativa");
}

function iniciar() {
    let estado = 0;

    intervalo = setInterval(() => {
        apagarLuzes();

        if (estado === 0) {
            document.getElementById("vermelho").classList.add("ativa");
        } else if (estado === 1) {
            document.getElementById("verde").classList.add("ativa");
        } else if (estado === 2) {
            document.getElementById("amarelo").classList.add("ativa");
        }

        estado = (estado + 1) % 3;
    }, 1000);
}

function parar() {
    clearInterval(intervalo);
    apagarLuzes();
}