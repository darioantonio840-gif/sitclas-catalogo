import React from 'react';
import { SectionHeader } from '../layout/SectionHeader';
import { Badge } from '../ui/Badge';
import './LevelsSection.css';

export function LevelsSection({ levels, selectedIndex, onSelectLevel }) {
  const currentLevel = levels[selectedIndex] || levels[0];

  return (
    <section className="alt reveal-on-scroll" id="niveles">
      <div className="wrap">
        <SectionHeader
          num="02 — Inglés General por Niveles"
          title="Estructura curricular MCER"
          description="Cada nivel se distribuye en 3 módulos secuenciales para un aprendizaje gradual y profundo. Selecciona un nivel para ver el detalle de horas y competencias."
        />

        <div className="tabbar" id="levelTabs">
          {levels.map((lv, idx) => (
            <button
              key={lv.code}
              className={idx === selectedIndex ? 'active' : ''}
              onClick={() => onSelectLevel(idx)}
            >
              {lv.code} · {lv.name}
            </button>
          ))}
        </div>

        <div className="level-panel show" key={currentLevel.code}>
          <div className="level-total">
            <Badge variant="yellow">{currentLevel.total} hrs totales</Badge>
            <span className="desc">
              Nivel {currentLevel.code} — {currentLevel.name}, distribuido en 3 módulos de{' '}
              {currentLevel.modules[0].hrs} hrs cada uno.
            </span>
          </div>

          <div className="module-grid">
            {currentLevel.modules.map((m, idx) => (
              <div key={m.id} className={`module-card reveal-on-scroll delay-${idx + 1}`}>
                <h4>
                  {m.id} <span className="hrs-tag">{m.hrs} hrs</span>
                </h4>
                <p>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
