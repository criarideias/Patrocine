import React from "react";
import { useNavigate } from "react-router-dom";

import Classificacao from "../Classificacao";

import { repositorioDeAssets } from "../../config.json";

const Filme = ({ data, disponivel }) => {
  const navigate = useNavigate();
  const { id, nome, banner, classificacao } = data;

  const filmeNomeURL = encodeURIComponent(nome).replaceAll("%20", "-");
  console.log(nome, filmeNomeURL);

  if (disponivel) {
    return (
      <div className="movie-box">
        <Classificacao idade={classificacao.toString()} />
        <div className="movie-img">
          <img src={`${repositorioDeAssets}${banner}`} alt={nome} />
        </div>
        <button
          onClick={() => {
            window.scrollTo(0, 0);
            navigate(`./filme/${filmeNomeURL}/${id}`);
          }}
          className="comprar"
        >
          Ver Mais
        </button>
        <h3>{nome}</h3>
      </div>
    );
  }

  return (
    <div className="movie-box movie-breve">
      <Classificacao idade={classificacao.toString()} />
      <div className="movie-img">
        <img src={`${repositorioDeAssets}${banner}`} alt={nome} />
      </div>
      <button
        onClick={() => {
          window.scrollTo(0, 0);
          navigate(`./filme/${filmeNomeURL}/${id}`);
        }}
        className="avise"
      >
        Avise-me Quando Chegar
      </button>
      <h3>{nome}</h3>
    </div>
  );
};

export default Filme;
