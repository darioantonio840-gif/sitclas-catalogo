import React, { useState } from 'react';
import { SectionHeader } from '../layout/SectionHeader';
import { VideoModal } from '../ui/VideoModal';
import './TestimonialsSection.css';

export function TestimonialsSection({ testimonials }) {
  const [activeTestimonial, setActiveTestimonial] = useState(null);

  const whatsappUrl = "https://wa.me/525539431120?text=Hola%20SitClass,%20vi%20los%20testimonios%20de%20sus%20alumnos%20y%20me%20gustar%C3%ADa%20recibir%20informes.";

  return (
    <section id="testimonios" className="reveal-on-scroll">
      <div className="wrap">
        <SectionHeader
          num="09 — Casos de Éxito"
          title="Historias de Éxito y Testimonios"
          description="Descubre cómo nuestros egresados y profesionales han transformado su carrera internacional a través de la metodología SitClass."
        />

        <div className="testimonials-grid">
          {testimonials.map((t, index) => (
            <div key={t.id} className={`testimonial-card reveal-on-scroll delay-${index + 1}`}>
              <div className="video-thumbnail" onClick={() => setActiveTestimonial(t)}>
                <img src={t.posterUrl} alt={t.name} className="poster-img" />
                <div className="overlay-gradient"></div>
                <div className="play-button-pulse">
                  <div className="play-icon">▶</div>
                </div>
                <span className="duration-tag">{t.duration}</span>
                <span className="level-badge-overlay">{t.levelAchieved}</span>
              </div>

              <div className="card-body">
                <div className="user-meta">
                  <h4>{t.name}</h4>
                  <p className="user-role">{t.role}</p>
                  <p className="user-company">{t.company}</p>
                </div>

                <p className="quote-text">"{t.quote}"</p>

                <div className="metric-tag">
                  <span className="icon">🏆</span> {t.metrics}
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-yellow play-btn-card"
                >
                  💬 Contactar por WhatsApp al 55 3943 1120 →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <VideoModal
        testimonial={activeTestimonial}
        onClose={() => setActiveTestimonial(null)}
      />
    </section>
  );
}
