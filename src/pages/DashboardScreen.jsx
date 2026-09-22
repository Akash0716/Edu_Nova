import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { CircularProgress } from '../components/common/CircularProgress';
import { ProgressBar } from '../components/common/ProgressBar';
import { Search, BookOpen, Target, Award, Bot, ChevronRight, PlayCircle } from 'lucide-react';
import { CONTINUING_COURSE } from '../data/mockData';

export const DashboardScreen = () => {
  const { user, navigateTo } = useApp();
  const [searchQuery, setSearchQuery] = useState('');

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

      {/* Top Header & Greeting */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a' }}>
            Hi, {user.name || 'Akash'}! 👋
          </h2>
          <p style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '2px' }}>
            Let's learn something new today.
          </p>
        </div>
        <img
          src={user.avatar}
          alt="User Profile"
          onClick={() => navigateTo('profile')}
          style={{
            width: '42px',
            height: '42px',
            borderRadius: '50%',
            objectFit: 'cover',
            border: '2px solid #1a56db',
            cursor: 'pointer'
          }}
        />
      </div>

      {/* Search Input Bar */}
      <div style={{ position: 'relative' }}>
        <Search size={18} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for subjects, topics..."
          className="input-field"
          style={{
            paddingLeft: '2.5rem',
            borderRadius: '16px',
            background: '#ffffff',
            boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
          }}
        />
      </div>

      {/* Hero Progress Box (Dark Royal Navy Card matching reference image) */}
      <div
        onClick={() => navigateTo('progress')}
        style={{
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #1a56db 100%)',
          borderRadius: '20px',
          padding: '1.25rem',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justify: 'space-between',
          boxShadow: '0 12px 25px -5px rgba(15, 23, 42, 0.4)',
          cursor: 'pointer',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div style={{ maxWidth: '60%', zIndex: 2 }}>
          <span style={{
            fontSize: '0.75rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            color: '#93c5fd',
            display: 'block',
            marginBottom: '0.25rem'
          }}>
            Overall Stat
          </span>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '0.5rem', lineHeight: 1.2 }}>
            Your Learning Progress
          </h3>
          <p style={{ fontSize: '0.8rem', color: '#cbd5e1', lineHeight: 1.4 }}>
            Keep going! You're doing great.
          </p>
        </div>

        <div style={{ zIndex: 2 }}>
          <CircularProgress percentage={user.overallProgress || 60} size={88} strokeWidth={9} color="#10B981" />
        </div>
      </div>

      {/* 4 Quick Action Cards Grid matching image */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '0.85rem'
      }}>
        {/* Card 1: My Courses */}
        <div
          onClick={() => navigateTo('learning-path')}
          className="card card-hover"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            cursor: 'pointer',
            padding: '1rem',
            borderRadius: '16px'
          }}
        >
          <div style={{
            width: '36px',
            height: '36px',
            borderRadius: '12px',
            background: '#dbeafe',
            color: '#1a56db',
            display: 'flex',
            alignItems: 'center',
            justify: 'center'
          }}>
            <BookOpen size={20} />
          </div>
          <div>
            <h4 style={{ fontSize: '0.9rem', fontWeight: 800, color: '#0f172a' }}>My Courses</h4>
            <p style={{ fontSize: '0.75rem', color: '#64748b' }}>{user.activeCoursesCount || 3} active</p>
          </div>
        </div>

        {/* Card 2: Practice */}
        <div
          onClick={() => navigateTo('practice')}
          className="card card-hover"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            cursor: 'pointer',
            padding: '1rem',
            borderRadius: '16px'
          }}
        >
          <div style={{
            width: '36px',
            height: '36px',
            borderRadius: '12px',
            background: '#dcfce7',
            color: '#15803d',
            display: 'flex',
            alignItems: 'center',
            justify: 'center'
          }}>
            <Target size={20} />
          </div>
          <div>
            <h4 style={{ fontSize: '0.9rem', fontWeight: 800, color: '#0f172a' }}>Practice</h4>
            <p style={{ fontSize: '0.75rem', color: '#64748b' }}>10 quizzes</p>
          </div>
        </div>

        {/* Card 3: Achievements */}
        <div
          onClick={() => navigateTo('achievements')}
          className="card card-hover"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            cursor: 'pointer',
            padding: '1rem',
            borderRadius: '16px'
          }}
        >
          <div style={{
            width: '36px',
            height: '36px',
            borderRadius: '12px',
            background: '#fef3c7',
            color: '#d97706',
            display: 'flex',
            alignItems: 'center',
            justify: 'center'
          }}>
            <Award size={20} />
          </div>
          <div>
            <h4 style={{ fontSize: '0.9rem', fontWeight: 800, color: '#0f172a' }}>Achievements</h4>
            <p style={{ fontSize: '0.75rem', color: '#64748b' }}>{user.earnedBadgesCount || 5} badges</p>
          </div>
        </div>

        {/* Card 4: AI Mentor */}
        <div
          onClick={() => navigateTo('ai-assistant')}
          className="card card-hover"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            cursor: 'pointer',
            padding: '1rem',
            borderRadius: '16px'
          }}
        >
          <div style={{
            width: '36px',
            height: '36px',
            borderRadius: '12px',
            background: '#f3e8ff',
            color: '#7e22ce',
            display: 'flex',
            alignItems: 'center',
            justify: 'center'
          }}>
            <Bot size={20} />
          </div>
          <div>
            <h4 style={{ fontSize: '0.9rem', fontWeight: 800, color: '#0f172a' }}>AI Mentor</h4>
            <p style={{ fontSize: '0.75rem', color: '#64748b' }}>Ask anything</p>
          </div>
        </div>
      </div>

      {/* Continue Learning Section */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#0f172a' }}>Continue Learning</h3>
          <button
            onClick={() => navigateTo('learning-path')}
            style={{
              background: 'none',
              border: 'none',
              color: '#1a56db',
              fontSize: '0.8rem',
              fontWeight: 700,
              cursor: 'pointer'
            }}
          >
            See All
          </button>
        </div>

        <div
          onClick={() => navigateTo('practice')}
          className="card card-hover"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            padding: '1rem',
            borderRadius: '16px',
            cursor: 'pointer'
          }}
        >
          <div style={{
            width: '44px',
            height: '44px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #1a56db, #3b82f6)',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justify: 'center',
            flexShrink: 0
          }}>
            <PlayCircle size={24} />
          </div>

          <div style={{ flex: 1 }}>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#0f172a' }}>
              {CONTINUING_COURSE.title}
            </h4>
            <p style={{ fontSize: '0.78rem', color: '#64748b', marginBottom: '0.5rem' }}>
              {CONTINUING_COURSE.subtitle}
            </p>
            <ProgressBar progress={CONTINUING_COURSE.progress} color="#1a56db" height={6} />
          </div>

          <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#1a56db', marginLeft: '0.5rem' }}>
            {CONTINUING_COURSE.progress}%
          </span>
        </div>
      </div>
    </div>
  );
};
