import { useRef } from "react";
import { CheckCircle, Play, Target, ShieldCheck, Smile, Users, Zap } from "lucide-react";

import "./Sobre.css";

// ===============================
// IMAGENS
// ===============================
import foto1 from "../assets/foto1.jpg";
import foto2 from "../assets/foto2.png";
import foto3 from "../assets/foto3.png";
import foto4 from "../assets/foto4.png";

// ===============================
// VÍDEOS
// ===============================
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

export default function Sobre() {
  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = (videoRef: React.RefObject<HTMLVideoElement | null>) => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        if (videoRef.current) {
          videoRef.current.muted = true;
          videoRef.current.play();
        }
      });
    }
  };

  const handleMouseLeave = (
    videoRef: React.RefObject<HTMLVideoElement | null>,
    e: React.MouseEvent
  ) => {
    const relatedTarget = e.relatedTarget as HTMLElement;
    if (videoRef.current && !document.fullscreenElement) {
      if (!videoRef.current.contains(relatedTarget)) {
        videoRef.current.pause();
      }
    }
  };

  return (
    <section className="sobre">
      <div className="sobre__container">

        {/* =====================================================
            PARTE PRINCIPAL
        ===================================================== */}
        <div className="sobre__grid">

          {/* IMAGEM PRINCIPAL */}
          <div className="sobre__image-wrapper">
            <div className="sobre__image-border" />
            <img
              src={foto1}
              alt="Equipe RS Intermediações em reunião"
              className="sobre__image"
            />
          </div>

          {/* TEXTO */}
          <div className="sobre__copy">
            <div className="sobre__eyebrow">
              <div className="sobre__eyebrow-line" />
              <span className="sobre__eyebrow-text">
                Sobre a empresa
              </span>
            </div>

            <h1 className="sobre__title">
              Confiança que se constrói negócio a negócio.
            </h1>

            <p className="sobre__text">
              A RS Intermediações e Negócios nasceu com o propósito de
              democratizar o acesso ao crédito inteligente. Somos especialistas
              em mapear o perfil de cada cliente e indicar a solução financeira
              mais eficiente — seja um consórcio ou um financiamento estratégico.
            </p>

            <p className="sobre__text">
              Nossa equipe atua com transparência, experiência e atendimento
              personalizado, acompanhando cada cliente durante todas as etapas
              do processo.
            </p>

            {/* BENEFÍCIOS */}
            <div className="sobre__benefits">
              {[
                "Consultoria financeira gratuita e personalizada",
                "Parceria com as maiores administradoras do Brasil",
                "Processo 100% digital e seguro",
                "Suporte pós-contratação completo",
              ].map((item) => (
                <div
                  key={item}
                  className="sobre__benefit-item"
                >
                  <CheckCircle
                    size={17}
                    className="sobre__benefit-icon"
                  />
                  <span className="sobre__benefit-text">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* =====================================================
            MISSÃO E VALORES
        ===================================================== */}
        <div className="sobre__mission-values">
          <div className="sobre__mission-card">
            <div className="sobre__mission-badge">
              <Target size={20} />
              <span>Nossa Essência</span>
            </div>
            <h3 className="sobre__mission-title">Missão que Transforma Sonhos</h3>
            <p className="sobre__mission-text">
              Assumimos a missão de gerar encantamento de forma consciente, a partir de ações e resultados que permitam materializar sonhos, oferecer as melhores soluções e alavancar prosperidade.
            </p>
          </div>

          <div className="sobre__values-grid">
            <div className="sobre__value-box">
              <div className="sobre__value-icon-wrapper">
                <ShieldCheck size={24} />
              </div>
              <h4 className="sobre__value-title">Ser Íntegro</h4>
              <p className="sobre__value-desc">Nossas bases são a integridade e o respeito. Sustentam a relação de confiança, ética e transparência absoluta.</p>
            </div>

            <div className="sobre__value-box">
              <div className="sobre__value-icon-wrapper">
                <Smile size={24} />
              </div>
              <h4 className="sobre__value-title">Ser Simples</h4>
              <p className="sobre__value-desc">Acreditamos no poder da simplicidade. Ela conecta e transforma desafios burocráticos em oportunidades claras.</p>
            </div>

            <div className="sobre__value-box">
              <div className="sobre__value-icon-wrapper">
                <Users size={24} />
              </div>
              <h4 className="sobre__value-title">Construir Juntos</h4>
              <p className="sobre__value-desc">Fazer juntos é a melhor forma de evoluir, cultivando a cooperação, o apoio mútuo e o verdadeiro espírito de equipe.</p>
            </div>

            <div className="sobre__value-box">
              <div className="sobre__value-icon-wrapper">
                <Zap size={24} />
              </div>
              <h4 className="sobre__value-title">Inovar Sempre</h4>
              <p className="sobre__value-desc">Inovar é atitude de protagonismo. Significa provocar novas formas de fazer e entregar o melhor em cada área.</p>
            </div>
          </div>
        </div>

        {/* =====================================================
            SEÇÃO DE CARROSSEL UNIFICADA (TRIPLA FAIXA)
        ===================================================== */}
        <div className="sobre__marquee-section">
          
          {/* Linha 1: Esquerda */}
          <div className="sobre__marquee-track sobre__marquee-track--left">
            <div className="sobre__marquee-group">
              <span className="sobre__marquee-text">Conquistas Reais</span>
              <span className="sobre__marquee-text">Planejamento Inteligente</span>
              <span className="sobre__marquee-text">Segurança e Transparência</span>
              <span className="sobre__marquee-text">Seu Sonho Realizado</span>
            </div>
            <div className="sobre__marquee-group" aria-hidden="true">
              <span className="sobre__marquee-text">Conquistas Reais</span>
              <span className="sobre__marquee-text">Planejamento Inteligente</span>
              <span className="sobre__marquee-text">Segurança e Transparência</span>
              <span className="sobre__marquee-text">Seu Sonho Realizado</span>
            </div>
          </div>

          {/* Linha 2: Direita */}
          <div className="sobre__marquee-track sobre__marquee-track--right">
            <div className="sobre__marquee-group">
              <span className="sobre__marquee-text">Crédito Estratégico</span>
              <span className="sobre__marquee-text">Soluções Financeiras</span>
              <span className="sobre__marquee-text">Parceria de Confiança</span>
              <span className="sobre__marquee-text">Realize Seus Planos</span>
            </div>
            <div className="sobre__marquee-group" aria-hidden="true">
              <span className="sobre__marquee-text">Crédito Estratégico</span>
              <span className="sobre__marquee-text">Soluções Financeiras</span>
              <span className="sobre__marquee-text">Parceria de Confiança</span>
              <span className="sobre__marquee-text">Realize Seus Planos</span>
            </div>
          </div>

          {/* Linha 3: Esquerda (Segmentos) */}
          <div className="sobre__marquee-track sobre__marquee-track--left">
            <div className="sobre__marquee-group">
              <span className="sobre__marquee-text">Casa Própria</span>
              <span className="sobre__marquee-text">Veículos de Passeio</span>
              <span className="sobre__marquee-text">Veículos Pesados</span>
              <span className="sobre__marquee-text">Investimentos</span>
            </div>
            <div className="sobre__marquee-group" aria-hidden="true">
              <span className="sobre__marquee-text">Casa Própria</span>
              <span className="sobre__marquee-text">Veículos de Passeio</span>
              <span className="sobre__marquee-text">Veículos Pesados</span>
              <span className="sobre__marquee-text">Investimentos</span>
            </div>
          </div>

        </div>

        {/* =====================================================
            GALERIA
        ===================================================== */}
        <div className="sobre__gallery">

          {/* CABEÇALHO */}
          <div className="sobre__gallery-heading">
            <div className="sobre__eyebrow">
              <div className="sobre__eyebrow-line" />
              <span className="sobre__eyebrow-text">
                Nossa estrutura
              </span>
            </div>

            <h2 className="sobre__gallery-title">
              Um atendimento feito para você.
            </h2>

            <p className="sobre__gallery-description">
              Conheça um pouco mais do nosso ambiente, da nossa equipe e da
              experiência que oferecemos aos nossos clientes.
            </p>
          </div>

          {/* 3 FOTOS */}
          <div className="sobre__photos">
            <div className="sobre__photo-card">
              <img
                src={foto4}
                alt="Escritório RS Intermediações"
              />
              <div className="sobre__photo-overlay">
                <span>Clientes Satisfeitos</span>
              </div>
            </div>

            <div className="sobre__photo-card">
              <img
                src={foto2}
                alt="Equipe RS Intermediações"
              />
              <div className="sobre__photo-overlay">
                <span>Sonhos Realizados</span>
              </div>
            </div>

            <div className="sobre__photo-card">
              <img
                src={foto3}
                alt="Atendimento RS Intermediações"
              />
              <div className="sobre__photo-overlay">
                <span>Atendimento personalizado</span>
              </div>
            </div>
          </div>

          {/* =====================================================
              2 VÍDEOS
          ===================================================== */}
          <div className="sobre__videos">

            {/* VÍDEO 1 */}
            <div className="sobre__video-card">
              <video
                ref={video1Ref}
                controls
                loop
                playsInline
                preload="metadata"
                onMouseEnter={() => handleMouseEnter(video1Ref)}
                onMouseLeave={(e) => handleMouseLeave(video1Ref, e)}
              >
                <source
                  src={video1}
                  type="video/mp4"
                />
                Seu navegador não suporta vídeos.
              </video>

              <div className="sobre__video-info">
                <div className="sobre__video-icon">
                  <Play
                    size={17}
                    fill="currentColor"
                  />
                </div>

                <div>
                  <h3>Conheça a RS</h3>
                  <p>
                    Contemplação e realização de sonhos com segurança e agilidade.
                  </p>
                </div>
              </div>
            </div>

            {/* VÍDEO 2 */}
            <div className="sobre__video-card">
              <video
                ref={video2Ref}
                controls
                loop
                playsInline
                preload="metadata"
                onMouseEnter={() => handleMouseEnter(video2Ref)}
                onMouseLeave={(e) => handleMouseLeave(video2Ref, e)}
              >
                <source
                  src={video2}
                  type="video/mp4"
                />
                Seu navegador não suporta vídeos.
              </video>

              <div className="sobre__video-info">
                <div className="sobre__video-icon">
                  <Play
                    size={17}
                    fill="currentColor"
                  />
                </div>

                <div>
                  <h3>Por dentro do nosso trabalho</h3>
                  <p>
                    Transparência, proximidade e atendimento personalizado.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}