import React from "react";

import { useFetch } from "../../hooks/useFetch";

import "./Precos.css";
import "./Precos-Mobile.css";

import Loader from "../../components/Loader";

import { repositorioDeAssets } from "../../config.json";

const Prices = () => {
  const outdoors = useFetch("GET/getOutdoors.php");

  if (!outdoors) {
    return <Loader />;
  }

  const anuncio = outdoors.filter((ad) => ad.titulo == "anuncio")[0];
  const novidade = outdoors.filter((ad) => ad.titulo == "novidade")[0];

  function handleButtonClick() {
    window.open("https://ingresso.plus/site/");
  }
  return (
    <>
      <section className="price-area">
        <h2 className="tittle">Ingressos Normais</h2>
        <ul>
          <h2>Segunda á Quarta (exceto feriados)</h2>
          <li>R$ 26,00 Inteira</li>
          <li>R$ 13,00 a meia</li>

          <button onClick={handleButtonClick}>Garanta Seu Ingresso!</button>
        </ul>
        <ul>
          <h2>Quinta e Sexta (exceto feriado)</h2>
          <li>R$ 28,00 a inteira</li>
          <li>R$ 14,00 a meia feriado</li>
          <button onClick={handleButtonClick}>Garanta Seu Ingresso!</button>
        </ul>
        <ul>
          <h2>Sábado, Domingo e Feriados</h2>
          <li>R$ 28,00 a inteira</li>
          <li>R$ 14,00 a meia</li>
          <button onClick={handleButtonClick}>Garanta Seu Ingresso!</button>
        </ul>

        <h2 className="tittle">Ingressos 3D</h2>
        <ul>
          <h2>Segunda á Quarta (exceto feriados)</h2>
          <li>R$ 26,00 Inteira</li>
          <li>R$ 13,00 a meia</li>
          <button onClick={handleButtonClick}>Garanta Seu Ingresso!</button>
        </ul>
        <ul>
          <h2>Quinta e Sexta (exceto feriado)</h2>
          <li>R$ 28,00 a inteira</li>
          <li>R$ 14,00 a meia feriado</li>
          <button onClick={handleButtonClick}>Garanta Seu Ingresso!</button>
        </ul>
        <ul>
          <h2>Sábado, Domingo e Feriados</h2>
          <li>R$ 28,00 a inteira</li>
          <li>R$ 14,00 a meia</li>
          <button onClick={handleButtonClick}>Garanta Seu Ingresso!</button>
        </ul>
      </section>

      <section className="novidades-area">
        <div className="novidade-box">
          <h2>Promoção Do Dia</h2>
          <img
            src={`${repositorioDeAssets}${anuncio.arquivo}`}
            alt="patrocine promoção"
          />
        </div>
        <div className="novidade-box">
          <h2>Novidades</h2>
          <img
            src={`${repositorioDeAssets}${novidade.arquivo}`}
            alt="patrocine novidade"
          />
        </div>
      </section>

      <section className="info-price">
        <h2>
          <span>MEIA ENTRADA:</span> Quem tem direito?
        </h2>
        <p>
          Dispõe sobre o benefício do pagamento de meia-entrada para estudantes,
          idosos, pessoas com deficiência e jovens de 15 a 29 anos
          comprovadamente carentes em espetáculos artístico-culturais e
          esportivos, e revoga a Medida Provisória nº 2.208, de 17 de agosto de
          2001. Art. 1º É assegurado aos estudantes o acesso a salas de cinema,
          cineclubes, teatros, espetáculos musicais e circenses e eventos
          educativos, esportivos, de lazer e de entretenimento, em todo o
          território nacional, promovidos por quaisquer entidades e realizados
          em estabelecimentos públicos ou particulares, mediante pagamento da
          metade do preço do ingresso efetivamente cobrado do público em geral.
          § 1º O benefício previsto no caput não será cumulativo com quaisquer
          outras promoções e convênios e, também, não se aplica ao valor dos
          serviços adicionais eventualmente oferecidos em camarotes, áreas e
          cadeiras especiais. § 2º Terão direito ao benefício os estudantes
          regularmente matriculados nos níveis e modalidades de educação e
          ensino previstos no Título V da Lei nº 9.394, de 20 de dezembro de
          1996, que comprovem sua condição de discente, mediante a apresentação,
          no momento da aquisição do ingresso e na portaria do local de
          realização do evento, da Carteira de Identificação Estudantil (CIE),
          emitida pela Associação Nacional de Pós- Graduandos (ANPG), pela União
          Nacional dos Estudantes (UNE), pela União Brasileira dos Estudantes
          Secundaristas (Ubes), pelas entidades estaduais e municipais filiadas
          àquelas, pelos Diretórios Centrais dos Estudantes (DCEs) e pelos
          Centros e Diretórios Acadêmicos, com prazo de validade renovável a
          cada ano, conforme modelo único nacionalmente padronizado e
          publicamente disponibilizado pelas entidades nacionais antes referidas
          e pelo Instituto Nacional de Tecnologia da Informação (ITI), com
          certificação digital deste, podendo a carteira de identifi cação
          estudantil ter 50% (cinquenta por cento) de características locais. §
          6º A Carteira de Identificação Estudantil (CIE) será válida da data de
          sua expedição até o dia 31 de março do ano subsequente. Não há
          legislação específica determinando o direito à meia entrada para
          crianças. Porém, com base no Estatuto da Criança e do Adolescente (Lei
          8069/1990), a maioria das redes de cinema cobram 50% do valor do
          ingresso para a faixa etária de 3 a 12 anos e não cobram para crianças
          de 0 a 2 anos. O Patrocine Cinemas esta fazendo parte deste consenso
          junto com o os demais cinemas. Para que as crianças possam efetuar
          deste benefício e necessário a apresentação de documento oficial com
          foto comprovando sua identidade
        </p>
      </section>
    </>
  );
};

export default Prices;
