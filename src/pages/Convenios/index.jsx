import React from "react";

import "./Convenios.css";
import "./Convenios-Mobile.css";

import CartaoConvenio from "../../assets/cartao-convenio.jpg";

const Convenios = () => {
  return (
    <>
      <h2 className="convenios">Convenios</h2>
      <section className="convenio-info">
        <h2 className="tittle">O Que São?</h2>
        <p>
          Os convênios no cinema Patrocine são acordos realizados entre empresas
          e o cinema, que permitem que seus colaboradores tenham acesso a preços
          especiais e vantagens exclusivas na compra de ingressos e produtos.
          Com os convênios, é possível economizar e ainda desfrutar de uma
          experiência incrível no cinema, com opções de combos especiais e
          cartão fidelidade para acumular pontos e trocar por ingressos ou
          produtos.
        </p>

        <h2 className="tittle">Qual Suas Vantagens?</h2>
        <p>
          As vantagens dos convênios no cinema Patrocine são diversas e vão
          desde descontos em ingressos e combos especiais, até a possibilidade
          de acumular pontos e trocar por ingressos ou produtos através do
          cartão fidelidade. Além disso, as empresas que optam por fazer
          convênios podem oferecer benefícios diferenciados aos seus
          colaboradores, gerando mais engajamento e motivação no ambiente de
          trabalho.
        </p>

        <h2 className="tittle">Como Fazer?</h2>
        <p>
          Fazer convênios no Patrocine é muito fácil e pode ser feito por
          empresas que desejam oferecer benefícios aos seus colaboradores. Basta
          entrar em contato com o cinema e verificar as opções de convênios
          disponíveis, que geralmente incluem descontos em ingressos, combos
          especiais e cartão fidelidade. As empresas também podem personalizar
          os convênios de acordo com suas necessidades e definir as formas de
          pagamento e utilização dos mesmos. Não perca a oportunidade de
          oferecer vantagens exclusivas aos seus colaboradores e ainda
          proporcionar momentos incríveis no Patrocine!
        </p>
        <button
          onClick={() => {
            window.open("https://wa.me/553431990422");
          }}
          className="fazer-convenio"
        >
          Fazer Convênio
        </button>
      </section>
      <div className="info-box">
        <h2>Exemplo de Cartão de Convênio</h2>
        <img src={CartaoConvenio} alt="patrocine cartão convênio" />
      </div>
    </>
  );
};

export default Convenios;
