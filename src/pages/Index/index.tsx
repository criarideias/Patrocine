import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Index.css";
import "./Index-Mobile.css";

import "../../scripts/index-reveal";
import Filme from "../../components/Filme";
import Loader from "../../components/Loader";

import { repositorioDeAssets } from "../../config.json";
import { IFilme, IFilmeComum, IFilmeSlider } from "../../types";

interface IVideoBackgroundProps {
  filme: IFilmeSlider;
}

const VideoBackground: React.FC<IVideoBackgroundProps> = ({ filme }) => {
  const navigate = useNavigate();
  const { id, trailer, link, retrato, titulo, sinopse } = filme;

  return (
    <section className="video-background">
      <video autoPlay loop src={`${repositorioDeAssets}${trailer}`}></video>
      <img
        className="mobile-background"
        src={`${repositorioDeAssets}${retrato}`}
        alt="patrocine mobile background"
      />
      <main className="movie-info-flex">
        <main className="movie-info">
          <img
            src={`${repositorioDeAssets}${titulo}`}
            alt="patrocine filme background"
          />
          <p>{sinopse}</p>
          <div className="info-btts">
            <button>
              <a href={link} target="_blank">
                Comprar Ingresso
              </a>
            </button>
            <button
              onClick={() => {
                navigate(`./filme/${id}`);
              }}
            >
              Mais Info
            </button>
          </div>
        </main>
      </main>
    </section>
  );
};

interface IExibitionAreaProps {
  filmes: IFilmeComum[];
}

const ExibitionArea: React.FC<IExibitionAreaProps> = ({ filmes }) => {
  function renderizarFilmes(disponiveis: boolean) {
    return filmes.map((filme) => {
      const filmeDeInicio = new Date(filme.dataDeInicio);
      const filmeDisponivel = filmeDeInicio.getTime() < new Date().getTime();

      if (disponiveis !== filmeDisponivel) return null;
      return (
        <Filme key={filme.id} filme={filme} disponivel={filmeDisponivel} />
      );
    });
  }

  return (
    <section className="exibicao-area">
      <main className="exibicao-row">
        <main className="exibicao-flex">{renderizarFilmes(true)}</main>
        <h2 className="breve-tittle">Em Breve</h2>
        <main className="breve-row">{renderizarFilmes(false)}</main>
        <main className="info-area">
          <button
            onClick={() => {
              window.open("https://patrocine.com.br/images/autorizacao.jpg");
            }}
            className="autorizacao"
          >
            Autorização Para Entrada de Menores
          </button>
          <h2 className="socialmedia-area">Nos Siga nas Redes Sociais:</h2>
          <a href="https://www.instagram.com/patrocinecinemas/" target="_blank">
            <button className="social-btt">
              <i className="fa fa-instagram" aria-hidden="true"></i>
              Instagram
            </button>
          </a>
          <a
            href="https://www.facebook.com/patrocinecinemas/?locale=pt_BR"
            target="_blank"
          >
            <button className="social-btt">
              <i className="fa fa-facebook" aria-hidden="true"></i>
              Facebook
            </button>
          </a>
        </main>
      </main>
    </section>
  );
};

interface IProps {
  filmes: Array<IFilmeComum | IFilmeSlider>;
}

const Index: React.FC<IProps> = ({ filmes }) => {
  const [loading, setLoading] = useState(true);

  const [video, setVideo] = useState<IFilmeSlider>();

  // Time to MTH (Make Typescript Happy)

  function returnFilmesComuns() {
    const filmesArray: IFilmeComum[] = [];
    filmes.forEach((filme) => {
      if (filme.slider === "1") return;
      filmesArray.push(filme);
    });

    return filmesArray;
  }

  function returnFilmesSlider() {
    const filmesArray: IFilmeSlider[] = [];
    filmes.forEach((filme) => {
      if (filme.slider === "0") return;
      filmesArray.push(filme);
    });

    return filmesArray;
  }

  useEffect(() => {
    if (!filmes) return;

    const filmesComuns: IFilmeComum[] = returnFilmesComuns();
    const filmesSlider: IFilmeSlider[] = returnFilmesSlider();

    filmes.forEach((filme) => {
      if (filme.slider === "0") return filmesComuns.push(filme);
      filmesSlider.push(filme);
    });

    const filmeSelecionado =
      filmesSlider[Math.floor(Math.random() * filmesSlider.length)];
    setVideo(filmeSelecionado);

    setLoading(false);
  }, [filmes]);

  if (loading || !video) {
    return <Loader />;
  }

  return (
    <>
      <VideoBackground filme={video} />
      <h2 className="exibicao-tittle">Filmes em Exibição</h2>
      <ExibitionArea filmes={returnFilmesComuns()} />
    </>
  );
};

export default Index;
