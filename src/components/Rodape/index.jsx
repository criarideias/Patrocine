import React from "react";
import "./Rodape.css";
import "./Rodape-Mobile.css";

const Rodape = () => {
  return (
    <footer className="rodape">
      <div className="reuniao">
        <h2>Agende Sua Reunião</h2>
        <h3>Você sera respondido em seu e-mail</h3>
        <div className="underline">
          <input type="text" placeholder="Nome" />
        </div>
        <div className="underline">
          <input type="text" placeholder="E-Mail" />
        </div>
        <div className="underline">
          <input type="text" placeholder="Assunto" />
        </div>
        <button>Enviar</button>
      </div>
      <div className="endereco">
        <h2>Endereço</h2>
        <h3>
          Av. João Alves do Nascimento, 2264 Sala 304 Centro - Patrocínio - MG
          CEP: 38744-528
        </h3>
        <h2 className="contato">Contato</h2>
        <a href="#">
          <i className="fa fa-headphones" aria-hidden="true"></i> (34) 9945-4242
        </a>
        <a href="#">
          <i className="fa fa-envelope-o" aria-hidden="true"></i>
          contato@criarideias.com.br
        </a>
      </div>
      <div className="outros">
        <h2>Site Desenvolvido Por:</h2>
        <img src="" alt="" />
      </div>
    </footer>
  );
};

export default Rodape;
