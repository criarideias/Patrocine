const sliderContainer = document.querySelector("#slider-container");
const moviesContainer = document.querySelector("#movies-container");

const filmBoxClone = document.querySelector(".film-box");
const movieBoxClone = document.querySelector(".movie-box");

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
    slider: "",
  },
];

function setFilmesSlider() {
  filmes.forEach((filme) => {
    if (filme.slider === "0") return;
    const filmBox = filmBoxClone.cloneNode(true);

    const filmeNome = filmBox.querySelector("#filme-nome");
    const filmeData = filmBox.querySelector("#filme-data");
    const filmeApagarBtn = filmBox.querySelector("#filme-apagar");

    const dataDeInicio = new Date(filme.dataDeInicio.split(" ")[0]);
    const dataDeTermino = new Date(filme.dataDeTermino.split(" ")[0]);

    filmeNome.textContent = filme.nome;
    filmeData.textContent = `${dataDeInicio.toLocaleDateString(
      "pt-br"
    )} à ${dataDeTermino.toLocaleDateString("pt-br")}`;

    filmeApagarBtn.addEventListener("click", async () => {
      filmBox.remove();
      await fetch(`../api/DELETE/deletarFilme.php?id=${filme.id}`);
    });

    sliderContainer.appendChild(filmBox);
  });
  filmBoxClone.remove();
}

function setMovies() {
  filmes.forEach((filme) => {
    if (filme.slider === "1") return;
    const movieBox = movieBoxClone.cloneNode(true);

    const filmeNome = movieBox.querySelector("#filme-nome");
    const filmeBanner = movieBox.querySelector("#filme-banner");
    const filmeData = movieBox.querySelector("#filme-data");
    const filmeApagarBtn = movieBox.querySelector("#filme-apagar");

    const dataDeInicio = new Date(filme.dataDeInicio.split(" ")[0]);
    const dataDeTermino = new Date(filme.dataDeTermino.split(" ")[0]);

    filmeNome.textContent = filme.nome;
    filmeBanner.src = `../uploads/${filme.banner}`;
    filmeData.textContent = `${dataDeInicio.toLocaleDateString(
      "pt-br"
    )} à ${dataDeTermino.toLocaleDateString("pt-br")}`;

    filmeApagarBtn.addEventListener("click", async () => {
      movieBox.remove();
      await fetch(`../api/DELETE/deletarFilme.php?id=${filme.id}`);
    });

    moviesContainer.appendChild(movieBox);
  });
  movieBoxClone.remove();
}

async function fetchFilmes() {
  const request = await fetch("../api/GET/getFilmes.php");
  const response = await request.json();

  filmes = response;
  setFilmesSlider();
  setMovies();
}
fetchFilmes();
