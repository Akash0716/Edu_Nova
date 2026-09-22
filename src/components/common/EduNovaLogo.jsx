import React from 'react';

export const EduNovaLogo = ({ size = 'medium', showTagline = true, layout = 'horizontal' }) => {
  const iconSizes = {
    small: 28,
    medium: 40,
    large: 64
  };

  const currentSize = iconSizes[size] || 40;

  return (
    <div style={{
      display: 'flex',
      flexDirection: layout === 'vertical' ? 'column' : 'row',
      alignItems: 'center',
      gap: layout === 'vertical' ? '0.75rem' : '0.65rem'
    }}>
      {/* Dual Leaf Sprout Emblem */}
      <div style={{
        width: currentSize,
        height: currentSize,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justify: 'center'
      }}>
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
          {/* Left Green Leaf */}
          <path
            d="M 50 85 C 20 70, 10 35, 25 15 C 45 15, 50 40, 50 85 Z"
            fill="#10B981"
          />
          {/* Right Blue Leaf */}
          <path
            d="M 50 85 C 80 70, 90 35, 75 15 C 55 15, 50 40, 50 85 Z"
            fill="#1A56DB"
          />
          {/* Stem / Center Line */}
          <path
            d="M 50 85 L 50 25"
            stroke="#ffffff"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Brand Text */}
      <div style={{ textAlign: layout === 'vertical' ? 'center' : 'left' }}>
        <h1 style={{
          fontSize: size === 'large' ? '2.2rem' : size === 'medium' ? '1.4rem' : '1.1rem',
          fontWeight: 800,
          color: '#1a56db',
          letterSpacing: '-0.02em',
          lineHeight: 1.1,
          display: 'flex',
          alignItems: 'center',
          gap: '4px'
        }}>
          Edu<span style={{ color: '#0f172a' }}>Nova</span>
        </h1>
        {showTagline && (
          <p style={{
            fontSize: size === 'large' ? '0.85rem' : '0.7rem',
            fontWeight: 700,
            color: '#64748b',
            letterSpacing: '0.05em',
            marginTop: '2px',
            textTransform: 'uppercase'
          }}>
            Learn • Grow • Achieve
          </p>
        )}
      </div>
    </div>
  );
};
