import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route index element={<Index />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
