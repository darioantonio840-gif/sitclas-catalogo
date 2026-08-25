import React from 'react';
import { SectionHeader } from '../layout/SectionHeader';
import './CertificationsSection.css';

export function CertificationsSection({ certs }) {
  return (
    <section id="certificaciones" className="reveal-on-scroll">
      <div className="wrap">
        <SectionHeader
          num="05 — Certificaciones internacionales"
          title="Preparación para exámenes oficiales"
          description="Entrenamiento de estrategia y resolución de simulacros para los exámenes más solicitados a nivel global. Desliza para comparar."
        />

        <div className="cert-scroll">
          <div className="cert-grid">
            {certs.map((cert, index) => (
              <div key={index} className="cert-card">
                <div className="top">
                  <h4>{cert.name}</h4>
                  <span className="lvl-pill">{cert.lvl}</span>
                </div>
                <span className="hrs-line">{cert.hrs} recomendadas</span>
                <p>{cert.purpose}</p>
                <div className="mods">{cert.mods}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
