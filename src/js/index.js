const itensPerguntasERespostas = document.querySelectorAll(".item");

itensPerguntasERespostas.forEach(function (item) {
    item.addEventListener("click", function () {
        const itemAtivo = item.classList.contains("ativo");

        itensPerguntasERespostas.forEach(i => i.classList.remove("ativo"));

        if (!itemAtivo) {
            item.classList.add("ativo");
        }
    });
});
