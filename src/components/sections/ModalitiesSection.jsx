import React from 'react';
import { SectionHeader } from '../layout/SectionHeader';
import './ModalitiesSection.css';

export function ModalitiesSection({ modalidades }) {
  return (
    <section className="alt reveal-on-scroll" id="modalidades">
      <div className="wrap">
        <SectionHeader
          num="08 — Modalidades de impartición"
          title="Un plan para cada dinámica de trabajo"
          description="Nos adaptamos a la dinámica corporativa y particular con las siguientes modalidades de registro."
        />

        <div className="mod-grid">
          {modalidades.map((mod, index) => (
            <div key={index} className={`mod-card reveal-on-scroll delay-${(index % 4) + 1}`}>
              <h4>{mod.title}</h4>
              <p>{mod.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
