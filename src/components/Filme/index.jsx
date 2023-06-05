import React from "react";
import { Link, useNavigate } from "react-router-dom";

import Classificacao from "../Classificacao";

import { repositorioDeAssets } from "../../config.json";

const Filme = ({ data, disponivel }) => {
  const navigate = useNavigate();
  const { id, link, titulo, banner, classificacao } = data;

  if (disponivel) {
    return (
      <div className="movie-box">
        <Classificacao idade={classificacao.toString()} />
        <div className="movie-img">
          <img src={`${repositorioDeAssets}${banner}`} alt={titulo} />
        </div>
        <button
          onClick={() => {
            window.scrollTo(0, 0);
            navigate(`./filme/${id}`);
          }}
          className="comprar"
        >
          Ver Mais
        </button>
        <h3>{titulo}</h3>
      </div>
    );
  }

  return (
    <div className="movie-box movie-breve">
      <Classificacao idade={classificacao.toString()} />
      <div className="movie-img">
        <img src={`${repositorioDeAssets}${banner}`} alt={titulo} />
      </div>
      <button
        onClick={() => {
          window.scrollTo(0, 0);
          navigate(`./filme/${id}`);
        }}
        className="avise"
      >
        Avise-me Quando Chegar
      </button>
      <h3>{titulo}</h3>
    </div>
  );
};

export default Filme;
