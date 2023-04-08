import React, { useEffect, useState } from "react";

import "./Index.css";
import "./Index-Mobile.css";

import VelozesEFuriososVideo from "../../assets/velozes-e-furiosos.mp4";
import CartasMobile from "../../assets/cartas-mobile.jpg";
import VelozesEFuriososLogo from "../../assets/Fast_and_Furious_10.png";
import HomemFormigaBanner from "../../assets/2homemformigaeavfilmes12012023015801.jpeg";

import "../../scripts/index-reveal";
import Filme from "../../components/Filme";
import Loader from "../../components/Loader";

const VideoBackground = ({ data }) => {
  const { id, video, banner, logo, description } = data;

  return (
    <section className="video-background">
      <video autoPlay loop src={video}></video>
      <img
        className="mobile-background"
        src={banner}
        alt="patrocine mobile background"
      />
      <main className="movie-info-flex">
        <main className="movie-info">
          <img src={logo} alt="patrocine filme background" />
          <p>{description}</p>
          <div className="info-btts">
            <button>
              <a href="https://ingressoplus.net.br/">Comprar Ingresso</a>
            </button>
            <button>Mais Info</button>
          </div>
        </main>
      </main>
    </section>
  );
};

const ExibitionArea = ({ filmes }) => {
  function renderizarFilmes(disponiveis) {
    return filmes.map((filme) => {
      if (disponiveis !== filme.disponivel) return null;
      return <Filme key={filme.id} data={filme} />;
    });
  }

  return (
    <section className="exibicao-area">
      <main className="exibicao-row">
        <main className="exibicao-flex">{renderizarFilmes(true)}</main>
        <h2 className="breve-tittle">Em Breve</h2>
        <main className="breve-row">{renderizarFilmes(false)}</main>
        <main className="info-area">
          <button className="autorizacao">
            Autorização Para Entrada de Menores
          </button>
          <h2 className="socialmedia-area">Nos Siga nas Redes Sociais:</h2>
          <button className="social-btt">
            <i className="fa fa-instagram" aria-hidden="true"></i>
            Instagram
          </button>
          <button className="social-btt">
            <i className="fa fa-facebook" aria-hidden="true"></i>
            Facebook
          </button>
        </main>
      </main>
    </section>
  );
};

const Index = () => {
  const [loading, setLoading] = useState({
    video: true,
    filmes: true,
  });

  const [video, setVideo] = useState({
    id: 0,
    video: "",
    banner: "",
    logo: "",
    description: "",
  });

  const [filmes, setFilmes] = useState([
    {
      id: Date.now(),
      titulo: "",
      banner: "",
      classificacao: 0,
      disponivel: false,
    },
  ]);

  useEffect(() => {
    async function fetchVideo() {
      const dummyVideo = {
        id: 0,
        video: VelozesEFuriososVideo,
        banner: CartasMobile,
        logo: VelozesEFuriososLogo,
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dolore
        quas eveniet asperiores sed corrupti temporibus, hic dolor facilis
        labore tempore sequi impedit dignissimos. Culpa iste ea veniam eum
        illo.`,
      };

      setVideo(dummyVideo);
      setLoading((currentValue) => {
        return { ...currentValue, video: false };
      });
    }
    fetchVideo();

    async function fetchFilmes() {
      const dummyFilmes = [
        {
          id: Math.floor(Math.random() * 10000),
          titulo: "HOMEM-FORMIGA E A VESPA: QUANTUMANIA",
          banner: HomemFormigaBanner,
          classificacao: 14,
          disponivel: false,
        },
        {
          id: Math.floor(Math.random() * 10000),
          titulo: "HOMEM-FORMIGA E A VESPA: QUANTUMANIA",
          banner: HomemFormigaBanner,
          classificacao: 14,
          disponivel: false,
        },
        {
          id: Math.floor(Math.random() * 10000),
          titulo: "HOMEM-FORMIGA E A VESPA: QUANTUMANIA",
          banner: HomemFormigaBanner,
          classificacao: 14,
          disponivel: true,
        },
        {
          id: Math.floor(Math.random() * 10000),
          titulo: "HOMEM-FORMIGA E A VESPA: QUANTUMANIA",
          banner: HomemFormigaBanner,
          classificacao: 14,
          disponivel: true,
        },
      ];

      setFilmes(dummyFilmes);
      setLoading((currentValue) => {
        return { ...currentValue, filmes: false };
      });
    }
    fetchFilmes();
  }, []);

  if (loading.video || loading.filmes) {
    return <Loader />;
  }

  return (
    <>
      <VideoBackground data={video} />
      <h2 className="exibicao-tittle">Filmes em Exibição</h2>
      <ExibitionArea filmes={filmes} />
    </>
  );
};

export default Index;
