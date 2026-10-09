import { Link } from "react-router";

import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Instagram,
  ExternalLink,
  Star,
} from "lucide-react";

import { NAV_LINKS, WHATSAPP_NUMBER } from "../../data";

import logo from "../../assets/logo.png";

import "./Footer.css";

export function Footer() {
  return (
    <footer className="footer" id="contato">
      <div className="footer__container">

        <div className="footer__grid">

          {/* LOGO + DESCRIÇÃO */}
          <div className="footer__brand">

            <img
              src={logo}
              alt="RS Intermediações e Negócios"
              className="footer__logo"
            />

            <p className="footer__ladologo">
              RS Intermediações e Negócios
            </p>

            <p className="footer__tagline">
              Especialistas em consórcios e financiamentos com mais de 15 anos
              de experiência no mercado financeiro brasileiro.
            </p>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__whatsapp-btn"
            >
              <MessageCircle size={14} />
              Falar no WhatsApp
            </a>

          </div>


          {/* NAVEGAÇÃO */}
          <div className="footer__section">

            <p className="footer__section-title">
              Navegação
            </p>

            <div className="footer__links">

              {NAV_LINKS.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="footer__link"
                >
                  {link.label}
                </Link>
              ))}

            </div>

          </div>


          {/* SERVIÇOS */}
          <div className="footer__section">

            <p className="footer__section-title">
              Serviços
            </p>

            <div className="footer__links">

              {[
                "Consórcio de Imóveis",
                "Consórcio de Veículos",
                "Consórcio de Serviços",
                "Financiamento Imobiliário",
                "Crédito Pessoal",
                "Crédito Empresarial",
              ].map((s) => (
                <span
                  key={s}
                  className="footer__service"
                >
                  {s}
                </span>
              ))}

            </div>

          </div>


          {/* CONTATO + AVALIAÇÃO */}
          <div className="footer__section">

            <p className="footer__section-title">
              Contato
            </p>

            <div className="footer__contact-list">

              {[
                {
                  icon: <Phone size={14} />,
                  text: "(19) 99001-3809",
                },
                {
                  icon: <Mail size={14} />,
                  text: "gruporsintermediacoes@gmail.com",
                },
                {
                  icon: <MapPin size={14} />,
                  text: "Americana, SP — Brasil",
                },
              ].map((item) => (
                <div
                  key={item.text}
                  className="footer__contact-item"
                >

                  <span className="footer__contact-icon">
                    {item.icon}
                  </span>

                  <span className="footer__contact-text">
                    {item.text}
                  </span>

                </div>
              ))}

            </div>


            {/* REDES SOCIAIS E AVALIAR NO GOOGLE */}
            <div className="footer__social-links">

              <a
                href="https://www.instagram.com/ronny.consultor/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
              >
                <Instagram size={14} />
                Instagram
              </a>


              <a
                href="https://www.reclameaqui.com.br/empresa/r-s-intermediacoes-e-negocios-ltda/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
              >
                <ExternalLink size={14} />
                Reclame Aqui
              </a>

              {/* BOTÃO DE AVALIAÇÃO NO GOOGLE
              <a
                href="SEU_LINK_DO_GOOGLE_MEU_NEGOCIO"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__google-review-btn"
              >
                <Star size={14} className="footer__star-icon" />
                Avaliar no Google
              </a> */}

            </div>

          </div>

        </div>


        {/* RODAPÉ */}
        <div className="footer__bottom">

          <p className="footer__copy">
            © {new Date().getFullYear()} RS Intermediações e Negócios.
            Todos os direitos reservados.
          </p>

          <p className="footer__copy">
            CNPJ: 59.087.364/0001-01 — Correspondente Bancário Autorizado
          </p>

        </div>

      </div>
    </footer>
  );
}