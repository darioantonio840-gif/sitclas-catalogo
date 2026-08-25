import React from 'react';
import { SectionHeader } from '../layout/SectionHeader';
import './SpeakingSection.css';

export function SpeakingSection({ clubs }) {
  return (
    <section className="alt reveal-on-scroll" id="conversacion">
      <div className="wrap">
        <SectionHeader
          num="06 — Speaking Mastery"
          title="Clases conversacionales"
          description="Módulos continuos (membresía mensual o bloques de 20/40 horas) para adquirir fluidez, confianza y naturalidad en el habla."
        />

        <div className="club-grid">
          {clubs.map((club, index) => (
            <div key={index} className={`club-card reveal-on-scroll delay-${(index % 2) + 1}`}>
              <div className="ico">{club.ico}</div>
              <div>
                <h4>{club.title}</h4>
                <p>{club.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
