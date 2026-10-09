import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router";
import { Menu, X, ArrowRight } from "lucide-react";
import { NAV_LINKS } from "../../data";
import logo2 from "../../assets/logo2.png";
import "./Navbar.css";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__container">
        {/* LOGO À ESQUERDA */}
        <Link to="/" className="navbar__logo-link">
          <img
            src={logo2}
            alt="RS Intermediações e Negócios"
            className="navbar__logo-img"
          />
        </Link>

        {/* LINKS CENTRALIZADOS (Estilo Minimalista/Clean) */}
        <nav className="navbar__links">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `navbar__link ${isActive ? "navbar__link--active" : ""}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* BOTÃO CTA (SIMULAR CRÉDITO) - DESKTOP */}
        <Link to="/simulacao" className="navbar__cta">
          Simular Crédito <ArrowRight size={14} />
        </Link>

        {/* BOTÃO HAMBÚRGUER MOBILE */}
        <button
          className="navbar__hamburger"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MENU MOBILE */}
      {open && (
        <div className="navbar__mobile">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `navbar__mobile-link ${isActive ? "navbar__mobile-link--active" : ""}`
              }
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          {/* BOTÃO CTA (SIMULAR CRÉDITO) - MOBILE */}
          <Link
            to="/simulacao"
            className="navbar__mobile-cta"
            onClick={() => setOpen(false)}
          >
            Simular Crédito Agora
          </Link>
        </div>
      )}
    </header>
  );
}