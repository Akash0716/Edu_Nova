import React from 'react';
import { useApp } from '../context/AppContext';
import { ChevronLeft, User, Mail, Award, Flame, RotateCcw, LogOut, Shield, Bell } from 'lucide-react';

export const ProfileScreen = () => {
  const { navigateTo, user, resetDemoState } = useApp();

  return (
    <div style={{
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: '1.25rem',
      background: '#f8fafc',
      padding: '1.25rem',
      paddingBottom: '2rem'
    }} className="animate-fade-in">

      {/* Header */}
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
          My Profile
        </h2>
      </div>

      {/* Profile Card */}
      <div className="card" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        padding: '1.5rem',
        borderRadius: '24px'
      }}>
        <img
          src={user.avatar}
          alt={user.name}
          style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            objectFit: 'cover',
            border: '3px solid #1a56db',
            marginBottom: '0.75rem'
          }}
        />
        <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a' }}>
          {user.name}
        </h3>
        <p style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '2px' }}>
          {user.email}
        </p>

        <div style={{
          display: 'flex',
          gap: '1rem',
          marginTop: '1.25rem',
          paddingTop: '1rem',
          borderTop: '1px solid #f1f5f9',
          width: '100%',
          justify: 'space-around'
        }}>
          <div>
            <span style={{ fontSize: '1.1rem', fontWeight: 800, color: '#1a56db', display: 'block' }}>
              {user.overallProgress}%
            </span>
            <span style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 700 }}>Progress</span>
          </div>

          <div>
            <span style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ef4444', display: 'block' }}>
              🔥 {user.streakDays}
            </span>
            <span style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 700 }}>Day Streak</span>
          </div>

          <div>
            <span style={{ fontSize: '1.1rem', fontWeight: 800, color: '#10b981', display: 'block' }}>
              {user.earnedBadgesCount}
            </span>
            <span style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 700 }}>Badges</span>
          </div>
        </div>
      </div>

      {/* Menu Options */}
      <div className="card" style={{ display: 'flex', flexDirection: 'column', padding: '0.5rem', borderRadius: '20px' }}>
        <button
          onClick={() => navigateTo('progress')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.85rem',
            padding: '0.85rem 1rem',
            border: 'none',
            background: 'none',
            cursor: 'pointer',
            fontSize: '0.9rem',
            fontWeight: 700,
            color: '#0f172a',
            borderBottom: '1px solid #f1f5f9'
          }}
        >
          <Award size={18} style={{ color: '#1a56db' }} />
          <span>My Learning Stats</span>
        </button>

        <button
          onClick={resetDemoState}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.85rem',
            padding: '0.85rem 1rem',
            border: 'none',
            background: 'none',
            cursor: 'pointer',
            fontSize: '0.9rem',
            fontWeight: 700,
            color: '#d97706',
            borderBottom: '1px solid #f1f5f9'
          }}
        >
          <RotateCcw size={18} />
          <span>Reset Demo Data</span>
        </button>

        <button
          onClick={() => navigateTo('auth')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.85rem',
            padding: '0.85rem 1rem',
            border: 'none',
            background: 'none',
            cursor: 'pointer',
            fontSize: '0.9rem',
            fontWeight: 700,
            color: '#ef4444'
          }}
        >
          <LogOut size={18} />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};
