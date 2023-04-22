import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useFetch } from "./hooks/useFetch";

import Axios from "axios";

import Index from "./pages/Index";
import Header from "./components/Header";
import Contato from "./pages/Contato";
import Rodape from "./components/Rodape";
import Precos from "./pages/Precos";
import Convenios from "./pages/Convenios";
import Filme from "./pages/Filme";

import { apiHostname } from "./config.json";

const App = () => {
  let filmes = useFetch(`GET/getFilmes.php`);
  const [horarios, setHorarios] = useState([]);

  // useEffect que requisita assincronamente os horários, sem interromper o loading da página
  useEffect(() => {
    if (!filmes || horarios.length !== 0) return;

    async function fetchHorarios() {
      const idsDosFilmes = [];
      filmes.forEach((filme) => {
        if (filme.slider === "1") return;
        idsDosFilmes.push(filme.id);
      });

      const { data } = await Axios.get(
        `${apiHostname}GET/getHorarios.php?ids=${idsDosFilmes.join(",")}`
      );
      setHorarios(data);
    }
    fetchHorarios();
  }, [filmes]);

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route index element={<Index filmes={filmes} />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/precos" element={<Precos />} />
          <Route path="/convenios" element={<Convenios />} />
          <Route
            path="/filme/:filmeId"
            element={<Filme filmes={filmes} horariosState={horarios} />}
          />
        </Routes>
        <Rodape />
      </Router>
    </>
  );
};

export default App;
