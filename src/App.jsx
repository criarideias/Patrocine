import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useFetch } from "./hooks/useFetch";

import Axios from "axios";

import Index from "./pages/Index";
import Header from "./components/Header";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Prices from "./pages/Prices";
import Conveniants from "./pages/Conveniants";
import Movie from "./pages/Movie";

import { apiHostname } from "./config.json";

const App = () => {
  let movies = useFetch(`GET/getMovies.php`);
  const [horarios, setHorarios] = useState([]);

  // useEffect que requisita assincronamente os horários, sem interromper o loading da página
  useEffect(() => {
    if (!movies || horarios.length !== 0) return;

    async function fetchHorarios() {
      const idsDosFilmes = [];
      movies.forEach((movie) => {
        if (movie.slider === "1") return;
        idsDosFilmes.push(movie.id);
      });

      const { data } = await Axios.get(
        `${apiHostname}GET/getGrids.php?ids=${idsDosFilmes.join(",")}`
      );
      setHorarios(data);
    }
    fetchHorarios();
  }, [movies]);

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route index element={<Index movies={movies} />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/precos" element={<Prices />} />
          <Route path="/convenios" element={<Conveniants />} />
          <Route
            path="/filme/:filmeTitulo/:filmeId"
            element={<Movie movies={movies} horariosState={horarios} />}
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
