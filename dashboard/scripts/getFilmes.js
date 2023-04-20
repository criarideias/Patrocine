const sliderArea = document.querySelector(".slider-area");
const movieBoxClone = document.querySelector(".film-box");

let filmes = [
    {
        id: "",
        nome: "",
        banner: "",
        titulo: "",
        retrato: "",
        trailer: "",
        sinopse: "",
        elenco: "",
        dataDeInicio: "",
        dataDeTermino: "",
        dataDeCriacao: "",
        slider: true
    }
]

function setMovies() {
    filmes.forEach((filme) => {
        const movieBox = movieBoxClone.cloneNode(true);

        const filmeNome = movieBox.querySelector("#filme-nome");
        const filmeData = movieBox.querySelector("#filme-data");
        const filmeApagarBtn = movieBox.querySelector("#filme-apagar");

        filmeNome.textContent = filme.nome;
        filmeData.textContent = `${filme.dataDeInicio.split(" ")[0]} à ${filme.dataDeTermino.split(" ")[0]}`;

        filmeApagarBtn.addEventListener("click", async () => {
            movieBox.remove();
            await fetch(`../api/DELETE/deletarFilme.php?id=${filme.id}`);
        });

        sliderArea.appendChild(movieBox);
    })
    movieBoxClone.remove();
}

async function fetchFilmes() {
    const request = await fetch("../api/GET/getFilmes.php");
    const response = await request.json();

    filmes = response;
    setMovies();
}
fetchFilmes();