import React from "react";

const Classificacao = ({ idade }) => {
  const idades = {
    0: { backgroundColor: "green", label: "L" },
    10: { backgroundColor: "cyan", label: "10" },
    12: { backgroundColor: "yellow", label: "12" },
    14: { backgroundColor: "orange", label: "14" },
    16: { backgroundColor: "red", label: "16" },
    18: { backgroundColor: "black", label: "18" },
  };

  return (
    <div
      className="classificacao"
      style={{ backgroundColor: idades[idade].backgroundColor }}
    >
      {idades[idade].label}
    </div>
  );
};

export default Classificacao;
