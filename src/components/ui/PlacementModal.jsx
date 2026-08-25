import React from 'react';
import './PlacementModal.css';

export function PlacementModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const phoneDisplay = "+52 (55) 3943-1120";
  const whatsappNumber = "525539431120";
  const defaultMessage = encodeURIComponent(
    "Hola SitClass, me gustaría solicitar informes y agendar mi Placement Test (prueba de nivel) sin costo."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Cerrar modal">
          ✕
        </button>

        <div className="modal-header">
          <span className="eyebrow">Atención Inmediata por WhatsApp</span>
          <h3>Contacto Directo SitClass</h3>
          <p>
           Escríbenos o llámanos directamente al <strong>{phoneDisplay}</strong> para agendar tu Placement Test.
          </p>
        </div>

        <div className="modal-actions-container">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
          >
            <span className="wa-icon">💬</span>
            <span>Enviar mensaje por WhatsApp</span>
          </a>

          <a href={`tel:+525539431120`} className="btn btn-phone">
            <span className="phone-icon">📞</span>
            <span>Llamar al {phoneDisplay}</span>
          </a>
        </div>

        <div className="modal-footer-note">
          <span>Respuesta inmediata en horario académico • Sin compromiso</span>
        </div>
      </div>
    </div>
  );
}
