import React, { useState } from 'react';
import './Navbar.css';

export function Navbar({ activeSection, onOpenModal }) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '#propuesta', label: 'Metodología' },
    { href: '#niveles', label: 'Niveles MCER' },
    { href: '#especializado', label: 'Ing. Técnico' },
    { href: '#viajes', label: 'Viajes' },
    { href: '#certificaciones', label: 'Certificaciones' },
    { href: '#conversacion', label: 'Conversación' },
    { href: '#testimonios', label: 'Testimonios' },
    { href: '#acreditacion', label: 'Acreditación' },
    { href: '#modalidades', label: 'Modalidades' },
    { href: '#contacto', label: 'Contacto' },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className={`topnav ${isOpen ? 'open' : ''}`} id="topnav">
      <div className="wrap">
        <div className="brand" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="mark">SC</span> SitClass
        </div>

        <button
          className="navtoggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menú"
        >
          {isOpen ? '✕' : '☰'}
        </button>

        <nav className="links" id="navLinks">
          {navLinks.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.href}
                href={link.href}
                className={isActive ? 'active' : ''}
                onClick={handleLinkClick}
              >
                {link.label}
              </a>
            );
          })}
          <button className="nav-cta-btn" onClick={() => { setIsOpen(false); onOpenModal(); }}>
            Placement Test
          </button>
        </nav>
      </div>
    </header>
  );
}
