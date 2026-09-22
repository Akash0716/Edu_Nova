import React from 'react';
import { useApp } from '../../context/AppContext';
import { Smartphone, Monitor, Grid, RotateCcw, Sparkles } from 'lucide-react';

export const ViewToggle = () => {
  const { viewMode, setViewMode, resetDemoState, activeScreen } = useApp();

  return (
    <div style={{
      width: '100%',
      background: '#090d16',
      borderBottom: '1px solid #1e293b',
      padding: '0.65rem 1.25rem',
      display: 'flex',
      alignItems: 'center',
      justify: 'space-between',
      color: '#94a3b8',
      fontSize: '0.85rem',
      zIndex: 100,
      position: 'sticky',
      top: 0
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
          background: 'rgba(26, 86, 219, 0.15)',
          color: '#60a5fa',
          padding: '0.35rem 0.75rem',
          borderRadius: '99px',
          fontWeight: 700,
          border: '1px solid rgba(59, 130, 246, 0.3)'
        }}>
          <Sparkles size={15} />
          <span>Edu Nova MVP</span>
        </div>
        <span style={{ color: '#475569', display: 'inline-block' }}>|</span>
        <span style={{ color: '#e2e8f0', fontWeight: 600 }}>
          Active Screen: <span style={{ color: '#34d399', textTransform: 'capitalize' }}>{activeScreen.replace('-', ' ')}</span>
        </span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        {/* Mode Switcher Buttons */}
        <div style={{
          background: '#1e293b',
          borderRadius: '99px',
          padding: '3px',
          display: 'flex',
          gap: '2px',
          border: '1px solid #334155'
        }}>
          <button
            onClick={() => setViewMode('phone')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              padding: '0.35rem 0.85rem',
              borderRadius: '99px',
              border: 'none',
              fontSize: '0.8rem',
              fontWeight: 600,
              cursor: 'pointer',
              background: viewMode === 'phone' ? '#1a56db' : 'transparent',
              color: viewMode === 'phone' ? '#ffffff' : '#94a3b8',
              transition: 'all 0.2s ease'
            }}

          >
            <Smartphone size={14} />
            <span>Mobile Phone</span>
          </button>

          <button
            onClick={() => setViewMode('desktop')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              padding: '0.35rem 0.85rem',
              borderRadius: '99px',
              border: 'none',
              fontSize: '0.8rem',
              fontWeight: 600,
              cursor: 'pointer',
              background: viewMode === 'desktop' ? '#1a56db' : 'transparent',
              color: viewMode === 'desktop' ? '#ffffff' : '#94a3b8',
              transition: 'all 0.2s ease'
            }}
          >
            <Monitor size={14} />
            <span>Desktop Web</span>
          </button>

          <button
            onClick={() => setViewMode('showcase')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              padding: '0.35rem 0.85rem',
              borderRadius: '99px',
              border: 'none',
              fontSize: '0.8rem',
              fontWeight: 600,
              cursor: 'pointer',
              background: viewMode === 'showcase' ? '#10b981' : 'transparent',
              color: viewMode === 'showcase' ? '#ffffff' : '#94a3b8',
              transition: 'all 0.2s ease'
            }}
          >
            <Grid size={14} />
            <span>8 Screens Showcase</span>
          </button>
        </div>

        {/* Reset State Button */}
        <button
          onClick={resetDemoState}
          title="Reset local state back to initial state"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem',
            padding: '0.35rem 0.75rem',
            borderRadius: '99px',
            border: '1px solid #334155',
            background: '#1e293b',
            color: '#94a3b8',
            fontSize: '0.8rem',
            fontWeight: 600,
            cursor: 'pointer'
          }}
        >
          <RotateCcw size={13} />
          <span>Reset</span>
        </button>
      </div>
    </div>
  );
};
