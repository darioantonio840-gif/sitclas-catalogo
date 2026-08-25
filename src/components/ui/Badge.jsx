import React from 'react';

export function Badge({ children, variant = 'yellow', className = '' }) {
  const baseStyle = {
    fontFamily: "'IBM Plex Mono', monospace",
    fontWeight: 700,
    borderRadius: '8px',
    padding: '4px 10px',
    fontSize: '0.78rem',
    display: 'inline-block',
  };

  const variants = {
    yellow: {
      background: 'var(--yellow)',
      color: 'var(--purple-deep)',
    },
    purple: {
      background: 'var(--purple-soft)',
      color: 'var(--purple)',
    },
    dark: {
      background: 'var(--purple-deep)',
      color: 'var(--yellow)',
    },
  };

  const selectedVariant = variants[variant] || variants.yellow;

  return (
    <span style={{ ...baseStyle, ...selectedVariant }} className={className}>
      {children}
    </span>
  );
}
