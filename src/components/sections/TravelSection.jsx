import React from 'react';
import { SectionHeader } from '../layout/SectionHeader';
import './TravelSection.css';

export function TravelSection({ steps }) {
  return (
    <section className="alt reveal-on-scroll" id="viajes">
      <div className="wrap">
        <SectionHeader
          num="04 — Travel & Culture"
          title="Inglés para viajes"
          description="Programa intensivo y 100% práctico (30–40 horas) enfocado en dar autonomía lingüística inmediata al viajero."
        />

        <div className="steps">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`step-card reveal-on-scroll delay-${(i % 5) + 1}`}
              data-n={String(i + 1).padStart(2, '0')}
            >
              <h4>{step.title}</h4>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
