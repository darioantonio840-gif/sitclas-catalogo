import React from 'react';

export function SectionHeader({ num, title, description }) {
  return (
    <div className="sec-head">
      <span className="sec-num">{num}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
