import React from 'react';
import { SectionHeader } from '../layout/SectionHeader';
import './AccreditationSection.css';

export function AccreditationSection({ accredList, registration }) {
  return (
    <section id="acreditacion" className="reveal-on-scroll">
      <div className="wrap">
        <SectionHeader
          num="07 — Validez oficial"
          title="Acreditación y lineamientos de certificación"
          description="Nuestros planes de estudio cuentan con respaldo institucional y legal para la emisión de constancias y certificados oficiales."
        />

        <div className="accred-wrap">
          <ul className="accred-list">
            {accredList.map((item, index) => (
              <li key={index} className={`reveal-on-scroll delay-${(index % 3) + 1}`}>
                <strong>{item.key}</strong>
                {item.val}
              </li>
            ))}
          </ul>

          <div className="id-panel reveal-on-scroll delay-2">
            <h4>Registro institucional</h4>
            <div className="id-row">
              <span className="k">Agente Capacitador STPS</span>
              <span className="v">{registration.stpsAgent}</span>
            </div>
            <div className="id-row">
              <span className="k">Red CONOCER — Folio</span>
              <span className="v">{registration.conocerFolio}</span>
            </div>
            <div className="id-row">
              <span className="k">Documento emitido</span>
              <span className="v">{registration.documentType}</span>
            </div>
            <div className="id-row">
              <span className="k">Aliados sectoriales</span>
              <span className="v">{registration.allies}</span>
            </div>
            <div className="id-row">
              <span className="k">Atención telefónica / WhatsApp</span>
              <span className="v">+52 (55) 3943-1120</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
