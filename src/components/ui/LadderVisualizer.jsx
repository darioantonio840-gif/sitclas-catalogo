import React from 'react';
import './LadderVisualizer.css';

export function LadderVisualizer({ levels, onSelectLevel }) {
  const maxHrs = Math.max(...levels.map((l) => l.total));

  const handleClick = (index) => {
    onSelectLevel(index);
    const target = document.getElementById('niveles');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="ladder" id="ladder">
      {levels.map((lv, i) => {
        const barHeight = 18 + (lv.total / maxHrs) * 60;
        return (
          <div
            key={lv.code}
            className="step"
            onClick={() => handleClick(i)}
            title={`Ver detalle de nivel ${lv.code}`}
          >
            <div className="dot"></div>
            <div
              className="bar"
              style={{ height: `${barHeight}px`, width: '70%' }}
            ></div>
            <span className="lvl">{lv.code}</span>
            <span className="hrs">{lv.total} hrs</span>
          </div>
        );
      })}
    </div>
  );
}
