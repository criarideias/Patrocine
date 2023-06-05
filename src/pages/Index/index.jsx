import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Index.css";
import "./Index-Mobile.css";

import "../../scripts/index-reveal";
import Filme from "../../components/Filme";
import Loader from "../../components/Loader";

import { repositorioDeAssets } from "../../config.json";

const VideoBackground = ({ data }) => {
  const navigate = useNavigate();
  const { id, trailer, link, retrato, titulo, sinopse } = data;

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

const ExibitionArea = ({ filmes }) => {
  function renderizarFilmes(disponiveis) {
    return filmes.map((filme) => {
      const dataDeInicio = new Date(filme.dataDeInicio);
      const filmeDisponivel = dataDeInicio.getTime() < new Date().getTime();

      if (disponiveis !== filmeDisponivel) return null;
      return <Filme key={filme.id} data={filme} disponivel={filmeDisponivel} />;
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

const Index = ({ filmes }) => {
  const [loading, setLoading] = useState(true);

  const [video, setVideo] = useState({
    retrato: "",
    link: "",
    trailer: "",
    titulo: "",
    sinopse: "",
  });

  useEffect(() => {
    if (!filmes) return;

    const filmesDoSlider = filmes.filter((filme) => filme.slider === "1");
    const filmeSelecionado =
      filmesDoSlider[Math.floor(Math.random() * filmesDoSlider.length)];
    setVideo(filmeSelecionado);

    setLoading(false);
  }, [filmes]);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <VideoBackground data={video} />
      <h2 className="exibicao-tittle">Filmes em Exibição</h2>
      <ExibitionArea filmes={filmes.filter((filme) => filme.slider !== "1")} />
    </>
  );
};

export default Index;
