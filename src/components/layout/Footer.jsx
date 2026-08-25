import React, { useState } from 'react';
import './Footer.css';

export function Footer({ onOpenModal }) {
  const [imgError, setImgError] = useState(false);
  const phoneDisplay = "+52 (55) 3943-1120";
  const whatsappUrl = "https://wa.me/525539431120?text=Hola%20SitClass,%20me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20y%20agendar%20un%20Placement%20Test.";

  return (
    <footer id="contacto">
      <div className="wrap">
        <div className="footer-brand-header">
          {!imgError && (
            <img
              src="/logo-sitclass.png"
              alt="SitClass Logo"
              className="footer-logo-img"
              onError={() => setImgError(true)}
            />
          )}
          <h2>Ponte en contacto con SitClass</h2>
        </div>

        <p className="tag">
          Escríbenos por WhatsApp o llámanos directamente al <strong>{phoneDisplay}</strong> para solicitar informes o tu Placement Test sin costo.
        </p>

        <div className="contact-row">
          <a
            className="contact-pill modal-trigger-pill"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="lbl">WhatsApp</span> 💬 Contactar al 55 3943 1120 →
          </a>
          <a className="contact-pill" href={`tel:+525539431120`}>
            <span className="lbl">Teléfono</span> 📞 {phoneDisplay}
          </a>
          <a className="contact-pill" href="https://www.sitclass.com" target="_blank" rel="noopener noreferrer">
            <span className="lbl">Sitio</span> www.sitclass.com
          </a>
          <a className="contact-pill" href="mailto:contacto@sitclass.com">
            <span className="lbl">Correo</span> contacto@sitclass.com
          </a>
        </div>

        <div className="foot-bottom">
          <div className="foot-brand-line">
            {!imgError && (
              <img src="/logo-sitclass.png" alt="SitClass" className="foot-mini-logo" />
            )}
            <span>SitClass — Explore, Experience and Enjoy English</span>
          </div>
          <span>Registro STPS CCB200703QF6-0013 · Red CONOCER CE0028-ECE364-18</span>
        </div>
      </div>
    </footer>
  );
}
