import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ChevronLeft, Star, Code, Flame, Target, Globe, Cpu, Award, CheckCircle, Lock, X } from 'lucide-react';
import confetti from 'canvas-confetti';

export const AchievementsScreen = () => {
  const { navigateTo, achievements } = useApp();
  const [activeTab, setActiveTab] = useState('badges');
  const [selectedBadge, setSelectedBadge] = useState(null);

  const getBadgeIcon = (iconName, size = 24) => {
    switch (iconName) {
      case 'star': return <Star size={size} />;
      case 'code': return <Code size={size} />;
      case 'flame': return <Flame size={size} />;
      case 'target': return <Target size={size} />;
      case 'globe': return <Globe size={size} />;
      case 'cpu': return <Cpu size={size} />;
      default: return <Award size={size} />;
    }
  };

  const handleBadgeClick = (badge) => {
    setSelectedBadge(badge);
    if (badge.earned) {
      confetti({ particleCount: 30, spread: 45 });
    }
  };

  return (
    <div style={{
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: '1.25rem',
      background: '#f8fafc',
      padding: '1.25rem',
      paddingBottom: '2rem',
      position: 'relative'
    }} className="animate-fade-in">

      {/* Screen Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <button
          onClick={() => navigateTo('dashboard')}
          style={{
            background: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justify: 'center',
            cursor: 'pointer',
            color: '#0f172a'
          }}
        >
          <ChevronLeft size={20} />
        </button>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a' }}>
          Achievements
        </h2>
      </div>

      {/* Filter Tabs */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '4px',
        background: '#ffffff',
        padding: '4px',
        borderRadius: '99px',
        border: '1px solid #e2e8f0'
      }}>
        <button
          onClick={() => setActiveTab('badges')}
          style={{
            padding: '0.55rem',
            border: 'none',
            borderRadius: '99px',
            fontSize: '0.8rem',
            fontWeight: 700,
            cursor: 'pointer',
            background: activeTab === 'badges' ? '#1a56db' : 'transparent',
            color: activeTab === 'badges' ? '#ffffff' : '#64748b',
            transition: 'all 0.2s ease'
          }}
        >
          Badges
        </button>
        <button
          onClick={() => setActiveTab('certificates')}
          style={{
            padding: '0.55rem',
            border: 'none',
            borderRadius: '99px',
            fontSize: '0.8rem',
            fontWeight: 700,
            cursor: 'pointer',
            background: activeTab === 'certificates' ? '#1a56db' : 'transparent',
            color: activeTab === 'certificates' ? '#ffffff' : '#64748b',
            transition: 'all 0.2s ease'
          }}
        >
          Certificates
        </button>
      </div>

      {activeTab === 'badges' ? (
        /* Badges Grid (6 Badge Cards matching Screen 7) */
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '0.85rem'
        }}>
          {achievements.map(badge => (
            <div
              key={badge.id}
              onClick={() => handleBadgeClick(badge)}
              className="card card-hover"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                padding: '1.1rem 0.75rem',
                borderRadius: '20px',
                cursor: 'pointer',
                opacity: badge.earned ? 1 : 0.65,
                background: badge.earned ? '#ffffff' : '#f8fafc',
                border: badge.earned ? '1px solid #e2e8f0' : '1px dashed #cbd5e1'
              }}
            >
              {/* Badge Icon Box */}
              <div style={{
                width: '52px',
                height: '52px',
                borderRadius: '16px',
                background: badge.earned ? `${badge.color}15` : '#f1f5f9',
                color: badge.earned ? badge.color : '#94a3b8',
                display: 'flex',
                alignItems: 'center',
                justify: 'center',
                marginBottom: '0.65rem',
                position: 'relative'
              }}>
                {getBadgeIcon(badge.icon, 24)}
                {!badge.earned && (
                  <div style={{
                    position: 'absolute',
                    top: '-4px',
                    right: '-4px',
                    background: '#64748b',
                    color: '#ffffff',
                    borderRadius: '50%',
                    padding: '2px'
                  }}>
                    <Lock size={12} />
                  </div>
                )}
              </div>

              {/* Title & Description */}
              <h3 style={{ fontSize: '0.88rem', fontWeight: 800, color: '#0f172a', lineHeight: 1.2 }}>
                {badge.title}
              </h3>
              <p style={{ fontSize: '0.72rem', color: '#64748b', marginTop: '4px' }}>
                {badge.requirement}
              </p>
            </div>
          ))}
        </div>
      ) : (
        /* Certificates Tab */
        <div className="card" style={{ padding: '1.5rem', textAlign: 'center', borderRadius: '20px' }}>
          <Award size={48} style={{ color: '#1a56db', margin: '0 auto 0.75rem' }} />
          <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#0f172a' }}>Python Basics Certificate</h3>
          <p style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '0.35rem', marginBottom: '1rem' }}>
            Issued to Akash for successfully completing Python Foundation & Data Structures.
          </p>
          <button className="btn-secondary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.82rem' }}>
            Download PDF
          </button>
        </div>
      )}

      {/* Modal Popup for Badge details */}
      {selectedBadge && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(15, 23, 42, 0.6)',
          backdropFilter: 'blur(4px)',
          display: 'flex',
          alignItems: 'center',
          justify: 'center',
          zIndex: 100,
          padding: '1.5rem'
        }}>
          <div style={{
            background: '#ffffff',
            borderRadius: '24px',
            padding: '1.5rem',
            width: '100%',
            maxWidth: '340px',
            textAlign: 'center',
            boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
            position: 'relative'
          }} className="animate-fade-in">

            <button
              onClick={() => setSelectedBadge(null)}
              style={{
                position: 'absolute',
                top: '14px',
                right: '14px',
                background: '#f1f5f9',
                border: 'none',
                borderRadius: '50%',
                width: '28px',
                height: '28px',
                display: 'flex',
                alignItems: 'center',
                justify: 'center',
                cursor: 'pointer'
              }}
            >
              <X size={16} />
            </button>

            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '20px',
              background: `${selectedBadge.color}20`,
              color: selectedBadge.color,
              display: 'flex',
              alignItems: 'center',
              justify: 'center',
              margin: '0 auto 1rem'
            }}>
              {getBadgeIcon(selectedBadge.icon, 32)}
            </div>

            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a' }}>
              {selectedBadge.title}
            </h3>
            <p style={{ fontSize: '0.85rem', color: '#64748b', margin: '0.5rem 0 1rem' }}>
              {selectedBadge.requirement}
            </p>

            <span className={`tag-badge ${selectedBadge.earned ? 'green' : 'gray'}`}>
              {selectedBadge.earned ? '✓ Unlocked' : '🔒 Locked'}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
