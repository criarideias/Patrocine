import React from "react";
import "./Rodape.css";
import "./Rodape-Mobile.css";

import LogoCriar from "../../assets/logo_criar.png";

const Rodape = () => {
  return (
    <footer className="rodape">
      <div className="endereco">
        <h2>Endereço</h2>
        <h3>
          Av. João Alves do Nascimento, 2264 Sala 304 Centro - Patrocínio - MG
          CEP: 38744-528
        </h3>
      </div>
      <div className="outros" id="contato">
        <h2 className="contato">Contato</h2>
        <a href="https://wa.me/+553499454242" target="_blank">
          <i className="fa-brands fa-whatsapp" aria-hidden="true"></i> (34)
          9945-4242
        </a>
        <a href="mailto:contato@criarideias.com.br">
          <i className="fa fa-envelope-o" aria-hidden="true"></i>
          &nbsp;contato@criarideias.com.br
        </a>
      </div>
      <div className="outros creditos">
        <h2>Site Desenvolvido Por:</h2>
        <a href="https://criarideias.com.br" target="_blank">
          <img src={LogoCriar} alt="criar ideias" />
        </a>
      </div>
    </footer>
  );
};

export default Rodape;
