import React, { useState } from 'react';
import { SectionHeader } from '../layout/SectionHeader';
import './EspSection.css';

export function EspSection({ espList }) {
  const [openIndexes, setOpenIndexes] = useState([0]); // First one open by default
  const [searchTerm, setSearchTerm] = useState('');

  const toggleIndex = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  const filteredEsp = espList.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.intro.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.category && item.category.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <section id="especializado" className="reveal-on-scroll">
      <div className="wrap">
        <SectionHeader
          num="03 — English for Specific Purposes"
          title="Inglés técnico y especializado"
          description="Módulos por industria diseñados para dotar de terminología técnica y competencias comunicativas clave. Duración recomendada: 40–60 horas. Toca cada especialidad para expandir el contenido."
        />

        <div className="esp-search-bar">
          <input
            type="text"
            placeholder="🔍 Buscar especialidad (ej. Contabilidad, Negocios, Abogados, Médicos, Ingeniería)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="esp-search-input"
          />
        </div>

        <div className="esp-list">
          {filteredEsp.length === 0 ? (
            <div className="esp-empty">No se encontraron cursos especializados que coincidan con "{searchTerm}".</div>
          ) : (
            filteredEsp.map((item, i) => {
              const isOpen = openIndexes.includes(i);
              return (
                <div key={i} className={`esp-item reveal-on-scroll ${isOpen ? 'is-open' : ''}`}>
                  <div className="summary" onClick={() => toggleIndex(i)}>
                    <div className="left">
                      <span className="num">{String(i + 1).padStart(2, '0')}</span>
                      <h4>{item.name}</h4>
                    </div>
                    <div className="right">
                      <span className="hrs">{item.hrs}</span>
                      <span className="chev">{isOpen ? '−' : '+'}</span>
                    </div>
                  </div>
                  {isOpen && (
                    <div className="body">
                      <p>{item.intro}</p>
                      <ul>
                        {item.items.map((bullet, idx) => (
                          <li key={idx}>{bullet}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}
