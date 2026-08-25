import React from 'react';
import { LadderVisualizer } from '../ui/LadderVisualizer';
import './HeroSection.css';

export function HeroSection({ levels, onSelectLevel, onOpenModal }) {
  const whatsappUrl = "https://wa.me/525539431120?text=Hola%20SitClass,%20me%20gustar%C3%ADa%20solicitar%20un%20Placement%20Test%20sin%20costo.";

  return (
    <section className="hero">
      <div className="wrap">
        <span className="eyebrow">● Catálogo oficial de servicios académicos</span>
        <h1>
          Explore, Experience <em>and Enjoy</em> English.
        </h1>
        <p className="lead">
          Programas de inglés estructurados con rigurosidad académica bajo el Marco Común Europeo de Referencia (MCER), impartidos por docentes certificados (TESOL, CELTA, TKT) y con validez oficial ante STPS y Red CONOCER.
        </p>

        <div className="cta-row">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-yellow"
          >
            💬 Enviar WhatsApp al 55 3943 1120 →
          </a>
          <button onClick={onOpenModal} className="btn btn-outline">
            Ver opciones de contacto
          </button>
        </div>

        <LadderVisualizer levels={levels} onSelectLevel={onSelectLevel} />
      </div>
    </section>
  );
}
