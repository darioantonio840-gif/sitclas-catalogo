import React from 'react';
import { SectionHeader } from '../layout/SectionHeader';
import './MethodologySection.css';

export function MethodologySection({ features }) {
  return (
    <section id="propuesta" className="reveal-on-scroll">
      <div className="wrap">
        <SectionHeader
          num="01 — Propuesta educativa"
          title="Metodología SitClass"
          description="Un modelo pedagógico dinámico y práctico centrado en la producción lingüística efectiva."
        />

        <div className="feat-grid">
          {features.map((feat, index) => (
            <div key={index} className={`feat-card reveal-on-scroll delay-${(index % 4) + 1}`}>
              <div className="ico">{feat.ico}</div>
              <h4>{feat.title}</h4>
              <p>{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
