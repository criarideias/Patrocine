import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { repositorioDeAssets } from "../../config.json";
import { dateDiff } from "../../scripts/dateDiff";

import "./Filme.css";
import "./Filme-Mobile.css";

import Loader from "../../components/Loader";
import { IFilme, IFilmeComum, IFilmeSlider, IHorario } from "../../types";

interface IData {
  dia: Date;
  horarios: string[]
}

interface IProps {
  filmes: Array<IFilmeSlider | IFilmeComum>;
  horariosState: IHorario[];
}

const Filme: React.FC<IProps> = ({ filmes, horariosState }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { filmeId } = useParams();

  // Caso os filmes ainda não tiverem sido carregados
  if (!filmes || horariosState.length === 0) {
    return <Loader />;
  }

  const filme = filmes.find((filme) => filme.id === filmeId);

  // Caso o filme não tenha sido encontrado
  if (!filme) {
    return (
      <section
        className="movie-container"
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        <h1 style={{ color: "red" }}>Filme não encontrado {":("}</h1>
      </section>
    );
  }

  const { id, nome, link, sinopse, dataDeInicio, dataDeTermino } = filme;

  let elenco = "";
  let banner = filme.retrato

  if(filme.slider === "0") {
    elenco = filme.elenco;
    banner = filme.banner;
  }

  const dataInicial = new Date(dataDeInicio);
  const diasDeDuracao = dateDiff(dataInicial, new Date(dataDeTermino));

  const horarios = horariosState.filter((horario) => horario.filme === id);

  function renderizarHorarios() {
    if (horarios.length === 0) return null;

    const datas: IData[] = [];

    for (let i = 0; i <= diasDeDuracao; i++) {
      const diaAlvo = new Date();
      diaAlvo.setDate(dataInicial.getDate() + i);
      if (diaAlvo.getTime() >= new Date().getTime()) {
        const diaHorarios: string[] = [];
        horarios.forEach((horario) => {
          if (new Date(horario.horario).getDate() === diaAlvo.getDate()) {
            diaHorarios.push(horario.horario.split(" ")[1]);
          }
        });

        const novaData = {
          dia: diaAlvo,
          horarios: diaHorarios,
        };
        datas.push(novaData);
      }
    }

    function renderizarDatas() {
      const diasDaSemana = [
        "DOMINGO",
        "SEGUNDA-FEIRA",
        "TERÇA-FEIRA",
        "QUARTA-FEIRA",
        "QUINTA-FEIRA",
        "SEXTA-FEIRA",
        "SÁBADO",
        "DOMINGO",
      ];

      return datas.map((data) => {
        const { dia } = data;
        return (
          <div
            key={dia.getTime()}
            onClick={() => {
              setIsLoading(true);
              setTimeout(() => {
                setIsLoading(false);
              }, 200);
            }}
            className="horario-btt"
          >
            <h2>{dia.toLocaleDateString("pt-br")}</h2>
            <h3>
              {dia.getDate() === new Date().getDate()
                ? "HOJE"
                : diasDaSemana[dia.getDay()]}
            </h3>
          </div>
        );
      });
    }

    function renderizarHorarios() {
      if (isLoading) {
        return <p style={{ alignSelf: "center" }}>Carregando...</p>;
      }
      return datas[0].horarios.map((horario) => {
        return (
          <div key={horario} className="horario-view-box">
            <h2>{horario.slice(0, 5)}</h2>
            <h3>Sala {horarios[0].sala}</h3>
            <button
              onClick={() => {
                window.location.href = link;
              }}
            >
              Comprar
            </button>
          </div>
        );
      });
    }

    return (
      <>
        <h4>Horarios</h4>
        <main className="horarios">
          <div className="horarios-overflow">{renderizarDatas()}</div>
          <div className="horarios-view">{renderizarHorarios()}</div>
        </main>
      </>
    );
  }

  return (
    <section className="movie-container">
      <button
        className="close-btn"
        onClick={() => {
          navigate("/");
        }}
      >
        <i className="fa-regular fa-circle-xmark"></i>
      </button>
      <main className="movie-left">
        <img src={`${repositorioDeAssets}${banner}`} alt={nome} />
      </main>
      <main className="movie-right">
        <h2>{nome}</h2>
        <h3>{elenco}</h3>
        <p>{sinopse}</p>
        {renderizarHorarios()}
      </main>
    </section>
  );
};

export default Filme;
