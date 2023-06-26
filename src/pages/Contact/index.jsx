import React from "react";

import "./Contato.css";
import "./Contato-Mobile.css";

const Contact = () => {
  return (
    <section className="contato-area">
      <h2 className="tittle">Contato</h2>

      <div className="contato-box">
        <h2>Número de Contato</h2>
        <h3>
          <i className="fa fa-phone" aria-hidden="true"></i> (34) 3199-0422
        </h3>
        <button>
          <i className="fa fa-whatsapp" aria-hidden="true"></i> WhatsApp
        </button>
      </div>
      <div className="contato-box">
        <h2>E-Mail</h2>
        <h3>
          <i className="fa fa-envelope-o" aria-hidden="true"></i>
          contato@patrocine.com.br
        </h3>
      </div>

      <div className="contato-box">
        <h2>Endereço</h2>
        <h3>
          <i className="fa fa-map-marker" aria-hidden="true"></i> Av. João Alves
          do Nascimento, 2264 Centro - Patrocínio - MG
        </h3>
      </div>
    </section>
  );
};

export default Contact;
