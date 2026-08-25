import React from 'react';
import './VideoModal.css';

export function VideoModal({ testimonial, onClose }) {
  if (!testimonial) return null;

  return (
    <div className="video-modal-backdrop" onClick={onClose}>
      <div className="video-modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="video-modal-close" onClick={onClose} aria-label="Cerrar video">
          ✕
        </button>

        <div className="video-wrapper">
          {testimonial.embedUrl ? (
            <iframe
              src={testimonial.embedUrl}
              title={`Testimonio ${testimonial.name}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="youtube-iframe"
            ></iframe>
          ) : (
            <video
              controls
              autoPlay
              playsInline
              poster={testimonial.posterUrl}
              src={testimonial.videoUrl}
            >
              Tu navegador no soporta la reproducción de video.
            </video>
          )}
        </div>

        <div className="video-modal-info">
          <span className="badge-level">{testimonial.levelAchieved}</span>
          <h3>{testimonial.name}</h3>
          <p className="role">
            {testimonial.role} — <strong>{testimonial.company}</strong>
          </p>
          <p className="quote">"{testimonial.quote}"</p>
        </div>
      </div>
    </div>
  );
}
