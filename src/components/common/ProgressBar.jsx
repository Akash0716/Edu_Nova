import React from 'react';

export const ProgressBar = ({ progress = 0, color = '#1a56db', height = 8, trackColor = '#e2e8f0' }) => {
  return (
    <div style={{
      width: '100%',
      height: height,
      backgroundColor: trackColor,
      borderRadius: '99px',
      overflow: 'hidden'
    }}>
      <div style={{
        width: `${progress}%`,
        height: '100%',
        backgroundColor: color,
        borderRadius: '99px',
        transition: 'width 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
      }} />
    </div>
  );
};
