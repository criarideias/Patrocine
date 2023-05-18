import React from "react";
import { useNavigate } from "react-router-dom";

import Classificacao from "../Classificacao";

import { repositorioDeAssets } from "../../config.json";
import { IFilmeComum } from "../../types";

interface IProps {
  filme: IFilmeComum;
  disponivel?: boolean;
}

const Filme: React.FC<IProps> = ({ filme, disponivel }) => {
  const navigate = useNavigate();
  const { id, nome, banner, classificacao } = filme;

  if (disponivel) {
    return (
      <div className="movie-box">
        <Classificacao idade={classificacao} />
        <div className="movie-img">
          <img src={`${repositorioDeAssets}${banner}`} alt={nome} />
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
        <h3>{nome}</h3>
      </div>
    );
  }

  return (
    <div className="movie-box movie-breve">
      <Classificacao idade={classificacao} />
      <div className="movie-img">
        <img src={`${repositorioDeAssets}${banner}`} alt={nome} />
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
      <h3>{nome}</h3>
    </div>
  );
};

export default Filme;
