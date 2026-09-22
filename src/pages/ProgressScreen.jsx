import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { CircularProgress } from '../components/common/CircularProgress';
import { ProgressBar } from '../components/common/ProgressBar';
import { ChevronLeft, BookOpen, Target, Award, TrendingUp } from 'lucide-react';
import { SUBJECT_PROGRESS_DATA } from '../data/mockData';

export const ProgressScreen = () => {
  const { navigateTo, user } = useApp();
  const [activeTab, setActiveTab] = useState('overview');

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
          My Progress
        </h2>
      </div>

      {/* Overview / Subjects / Insights Filter Tabs */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: '4px',
        background: '#ffffff',
        padding: '4px',
        borderRadius: '99px',
        border: '1px solid #e2e8f0'
      }}>
        {['overview', 'subjects', 'insights'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              padding: '0.5rem',
              border: 'none',
              borderRadius: '99px',
              fontSize: '0.78rem',
              fontWeight: 700,
              cursor: 'pointer',
              textTransform: 'capitalize',
              background: activeTab === tab ? '#1a56db' : 'transparent',
              color: activeTab === tab ? '#ffffff' : '#64748b',
              transition: 'all 0.2s ease'
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Circular Progress Hero Container matching Screen 6 */}
      <div className="card" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justify: 'center',
        padding: '1.5rem',
        textAlign: 'center',
        borderRadius: '24px'
      }}>
        <CircularProgress
          percentage={75}
          size={135}
          strokeWidth={12}
          color="#10B981"
          trackColor="#e2e8f0"
          textColor="#0f172a"
        />
        <h3 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#0f172a', marginTop: '0.75rem' }}>
          Overall Progress
        </h3>
      </div>

      {/* 3 Stat Counters Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.65rem' }}>
        <div className="card" style={{ padding: '0.85rem', textAlign: 'center', borderRadius: '16px' }}>
          <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#1a56db', display: 'block' }}>12</span>
          <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#64748b' }}>Courses</span>
        </div>

        <div className="card" style={{ padding: '0.85rem', textAlign: 'center', borderRadius: '16px' }}>
          <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#10b981', display: 'block' }}>
            {user.completedQuizzesCount || 48}
          </span>
          <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#64748b' }}>Quizzes</span>
        </div>

        <div className="card" style={{ padding: '0.85rem', textAlign: 'center', borderRadius: '16px' }}>
          <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#f59e0b', display: 'block' }}>
            {user.earnedBadgesCount || 5}
          </span>
          <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#64748b' }}>Badges</span>
        </div>
      </div>

      {/* Subject-wise Progress Section */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <h3 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#0f172a' }}>
          Subject-wise Progress
        </h3>

        <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '1.1rem', borderRadius: '20px' }}>
          {SUBJECT_PROGRESS_DATA.map(item => (
            <div key={item.subject} style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#334155' }}>
                  {item.subject}
                </span>
                <span style={{ fontSize: '0.8rem', fontWeight: 800, color: item.color }}>
                  {item.percentage}%
                </span>
              </div>
              <ProgressBar progress={item.percentage} color={item.color} height={8} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
