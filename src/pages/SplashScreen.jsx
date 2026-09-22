import React from 'react';
import { useApp } from '../context/AppContext';
import { EduNovaLogo } from '../components/common/EduNovaLogo';
import { ArrowRight, Sparkles } from 'lucide-react';

export const SplashScreen = () => {
  const { navigateTo } = useApp();

  return (
    <div style={{
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justify: 'space-between',
      alignItems: 'center',
      padding: '2.5rem 1.5rem',
      background: 'linear-gradient(180deg, #ffffff 0%, #eff6ff 60%, #ecfdf5 100%)',
      minHeight: '100%',
      position: 'relative',
      overflow: 'hidden'
    }} className="animate-fade-in">

      {/* Top Subtle Badge */}
      <div style={{
        marginTop: '1rem',
        background: 'rgba(26, 86, 219, 0.08)',
        color: '#1a56db',
        padding: '0.4rem 1rem',
        borderRadius: '99px',
        fontSize: '0.75rem',
        fontWeight: 700,
        display: 'flex',
        alignItems: 'center',
        gap: '0.35rem',
        border: '1px solid rgba(26, 86, 219, 0.15)'
      }}>
        <Sparkles size={14} />
        <span>AI-Powered Learning Platform</span>
      </div>

      {/* Main Center Logo & Brand Section */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1.75rem',
        textAlign: 'center',
        margin: 'auto 0'
      }}>
        <EduNovaLogo size="large" layout="vertical" showTagline={true} />

        <div style={{ maxWidth: '280px', marginTop: '1rem' }}>
          <h2 style={{
            fontSize: '1.25rem',
            fontWeight: 800,
            color: '#0f172a',
            lineHeight: 1.35
          }}>
            Personalized Learning for a Brighter Tomorrow
          </h2>
          <p style={{
            fontSize: '0.85rem',
            color: '#64748b',
            marginTop: '0.75rem',
            lineHeight: 1.5
          }}>
            Adaptive paths, real-time quizzes, progress tracking & AI assistance tailored to your pace.
          </p>
        </div>
      </div>

      {/* Decorative Wave Background Graphic */}
      <div style={{
        position: 'absolute',
        bottom: '120px',
        left: 0,
        right: 0,
        height: '100px',
        background: 'radial-gradient(ellipse at bottom, rgba(16, 185, 129, 0.12) 0%, rgba(26, 86, 219, 0.05) 70%, transparent 100%)',
        pointerEvents: 'none'
      }} />

      {/* Action Buttons Footer */}
      <div style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem',
        zIndex: 10
      }}>
        <button
          onClick={() => navigateTo('auth')}
          className="btn-primary"
          style={{ width: '100%', padding: '1rem' }}
        >
          <span>Get Started</span>
          <ArrowRight size={18} />
        </button>

        <p style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600 }}>
          Already have an account?{' '}
          <button
            onClick={() => navigateTo('auth')}
            style={{
              background: 'none',
              border: 'none',
              color: '#1a56db',
              fontWeight: 800,
              cursor: 'pointer',
              textDecoration: 'underline'
            }}
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
};
