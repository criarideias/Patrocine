import React from "react";

import "./Convenios.css";
import "./Convenios-Mobile.css";

import AnuncioBomboniere from "../../assets/anuncio-bomboniere.jpeg";

const Convenios = () => {
  return (
    <>
      <h2 className="convenios">Convenios</h2>
      <section className="convenio-info">
        <h2 className="tittle">O Que São?</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
          necessitatibus similique quod, mollitia eveniet iure explicabo totam
          officia reprehenderit veritatis ducimus perferendis enim earum et
          laborum laboriosam voluptatem tenetur consequuntur! Lorem ipsum dolor
          sit amet consectetur, adipisicing elit. Vitae necessitatibus similique
          quod, mollitia eveniet iure explicabo totam officia reprehenderit
          veritatis ducimus perferendis enim earum et laborum laboriosam
          voluptatem tenetur consequuntur! Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Vitae necessitatibus similique quod,
          mollitia eveniet iure explicabo totam officia reprehenderit veritatis
          ducimus perferendis enim earum et laborum laboriosam voluptatem
          tenetur consequuntur! Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Vitae necessitatibus similique quod, mollitia
          eveniet iure explicabo totam officia reprehenderit veritatis ducimus
          perferendis enim earum et laborum laboriosam voluptatem tenetur
          consequuntur! Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Vitae necessitatibus similique quod, mollitia eveniet iure
          explicabo totam officia reprehenderit veritatis ducimus perferendis
          enim earum et laborum laboriosam voluptatem tenetur consequuntur!
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
          necessitatibus similique quod, mollitia eveniet iure explicabo totam
          officia reprehenderit veritatis ducimus perferendis enim earum et
          laborum laboriosam voluptatem tenetur consequuntur!
        </p>

        <h2 className="tittle">Qual Suas Vantagens?</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
          necessitatibus similique quod, mollitia eveniet iure explicabo totam
          officia reprehenderit veritatis ducimus perferendis enim earum et
          laborum laboriosam voluptatem tenetur consequuntur!Lorem ipsum dolor
          sit amet consectetur, adipisicing elit. Vitae necessitatibus similique
          quod, mollitia eveniet iure explicabo totam officia reprehenderit
          veritatis ducimus perferendis enim earum et laborum laboriosam
          voluptatem tenetur consequuntur! Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Vitae necessitatibus similique quod,
          mollitia eveniet iure explicabo totam officia reprehenderit veritatis
          ducimus perferendis enim earum et laborum laboriosam voluptatem
          tenetur consequuntur! Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Vitae necessitatibus similique quod, mollitia
          eveniet iure explicabo totam officia reprehenderit veritatis ducimus
          perferendis enim earum et laborum laboriosam voluptatem tenetur
          consequuntur! Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Vitae necessitatibus similique quod, mollitia eveniet iure
          explicabo totam officia reprehenderit veritatis ducimus perferendis
          enim earum et laborum laboriosam voluptatem tenetur consequuntur!
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
          necessitatibus similique quod, mollitia eveniet iure explicabo totam
          officia reprehenderit veritatis ducimus perferendis enim earum et
          laborum laboriosam voluptatem tenetur consequuntur!
        </p>

        <h2 className="tittle">Como Fazer?</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
          necessitatibus similique quod, mollitia eveniet iure explicabo totam
          officia reprehenderit veritatis ducimus perferendis enim earum et
          laborum laboriosam voluptatem tenetur consequuntur! Lorem ipsum dolor
          sit amet consectetur, adipisicing elit. Vitae necessitatibus similique
          quod, mollitia eveniet iure explicabo totam officia reprehenderit
          veritatis ducimus perferendis enim earum et laborum laboriosam
          voluptatem tenetur consequuntur! Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Vitae necessitatibus similique quod,
          mollitia eveniet iure explicabo totam officia reprehenderit veritatis
          ducimus perferendis enim earum et laborum laboriosam voluptatem
          tenetur consequuntur! Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Vitae necessitatibus similique quod, mollitia
          eveniet iure explicabo totam officia reprehenderit veritatis ducimus
          perferendis enim earum et laborum laboriosam voluptatem tenetur
          consequuntur! Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Vitae necessitatibus similique quod, mollitia eveniet iure
          explicabo totam officia reprehenderit veritatis ducimus perferendis
          enim earum et laborum laboriosam voluptatem tenetur consequuntur!
        </p>
        <button
          onClick={() => {
            window.open("https://wa.me/553499505483");
          }}
          className="fazer-convenio"
        >
          Fazer Convênio
        </button>
      </section>
      <div className="info-box">
        <h2>Exemplo de Cartão de Convênio</h2>
        <img src={AnuncioBomboniere} alt="patrocine cartão convênio" />
      </div>
    </>
  );
};

export default Convenios;
