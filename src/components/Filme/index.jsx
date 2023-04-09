import React from "react";

const Filme = ({ data }) => {
  const { id, titulo, banner, classificacao, disponivel } = data;

  if (disponivel) {
    return (
      <div className="movie-box">
        <div className="classificacao">{classificacao}</div>
        <div className="movie-img">
          <img src={banner} alt={titulo} />
        </div>
        <button className="comprar">Ver Mais</button>
        <h3>{titulo}</h3>
      </div>
    );
  }

  return (
    <div className="movie-box movie-breve">
      <div className="classificacao">{classificacao}</div>
      <div className="movie-img">
        <img src={banner} alt="homem formiga banner" />
      </div>
      <button className="avise">Avise-me Quando Chegar</button>
      <h3>{titulo}</h3>
    </div>
  );
};

export default Filme;
