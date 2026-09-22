import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ChevronLeft, Code, Layers, Cpu, Globe, Lock, Play, Sprout } from 'lucide-react';
import { LEARNING_PATH_COURSES } from '../data/mockData';

export const LearningPathScreen = () => {
  const { navigateTo } = useApp();
  const [activeTab, setActiveTab] = useState('recommended');

  const getCourseIcon = (iconName) => {
    switch (iconName) {
      case 'code': return <Code size={20} />;
      case 'layers': return <Layers size={20} />;
      case 'cpu': return <Cpu size={20} />;
      case 'globe': return <Globe size={20} />;
      default: return <Code size={20} />;
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
          My Learning Path
        </h2>
      </div>

      {/* Filter Tabs */}
      <div style={{
        display: 'flex',
        gap: '0.5rem',
        background: '#ffffff',
        padding: '4px',
        borderRadius: '99px',
        border: '1px solid #e2e8f0'
      }}>
        <button
          onClick={() => setActiveTab('recommended')}
          style={{
            flex: 1,
            padding: '0.55rem',
            border: 'none',
            borderRadius: '99px',
            fontSize: '0.8rem',
            fontWeight: 700,
            cursor: 'pointer',
            background: activeTab === 'recommended' ? '#1a56db' : 'transparent',
            color: activeTab === 'recommended' ? '#ffffff' : '#64748b',
            transition: 'all 0.2s ease'
          }}
        >
          Recommended
        </button>
        <button
          onClick={() => setActiveTab('all')}
          style={{
            flex: 1,
            padding: '0.55rem',
            border: 'none',
            borderRadius: '99px',
            fontSize: '0.8rem',
            fontWeight: 700,
            cursor: 'pointer',
            background: activeTab === 'all' ? '#1a56db' : 'transparent',
            color: activeTab === 'all' ? '#ffffff' : '#64748b',
            transition: 'all 0.2s ease'
          }}
        >
          All Courses
        </button>
      </div>

      {/* Vertical Learning Path Step Timeline */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        position: 'relative'
      }}>
        {LEARNING_PATH_COURSES.map((course, index) => {
          const stepNumber = index + 1;
          const isGreen = course.statusType === 'green';
          const isBlue = course.statusType === 'blue';
          const isLocked = course.isLocked;

          return (
            <div
              key={course.id}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.85rem',
                position: 'relative'
              }}
            >
              {/* Step Circle Badge */}
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: isGreen ? '#10b981' : isBlue ? '#1a56db' : '#94a3b8',
                color: '#ffffff',
                fontWeight: 800,
                fontSize: '0.85rem',
                display: 'flex',
                alignItems: 'center',
                justify: 'center',
                flexShrink: 0,
                zIndex: 2,
                boxShadow: isGreen || isBlue ? '0 4px 10px rgba(26, 86, 219, 0.25)' : 'none'
              }}>
                {stepNumber}
              </div>

              {/* Course Card */}
              <div
                onClick={() => !isLocked && navigateTo('practice')}
                className={`card ${!isLocked ? 'card-hover' : ''}`}
                style={{
                  flex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.85rem',
                  padding: '1rem',
                  borderRadius: '16px',
                  opacity: isLocked ? 0.75 : 1,
                  cursor: isLocked ? 'not-allowed' : 'pointer',
                  background: isLocked ? '#f8fafc' : '#ffffff',
                  border: isBlue ? '1.5px solid #3b82f6' : '1px solid #e2e8f0'
                }}
              >
                {/* Course Icon */}
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  background: isGreen ? '#dcfce7' : isBlue ? '#dbeafe' : '#f1f5f9',
                  color: isGreen ? '#15803d' : isBlue ? '#1e40af' : '#64748b',
                  display: 'flex',
                  alignItems: 'center',
                  justify: 'center',
                  flexShrink: 0
                }}>
                  {getCourseIcon(course.icon)}
                </div>

                {/* Course Details */}
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
                    <h3 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#0f172a' }}>
                      {course.title}
                    </h3>
                  </div>

                  <span className={`tag-badge ${course.statusType}`}>
                    {course.status}
                  </span>
                </div>

                {/* Action Icon */}
                <div>
                  {isLocked ? (
                    <Lock size={18} style={{ color: '#94a3b8' }} />
                  ) : (
                    <div style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: '#1a56db',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justify: 'center'
                    }}>
                      <Play size={14} style={{ marginLeft: '2px' }} />
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Motivational Daily Sprout Card matching bottom of Screen 4 */}
      <div style={{
        background: 'linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)',
        border: '1px solid #a7f3d0',
        borderRadius: '20px',
        padding: '1.25rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        gap: '0.5rem',
        marginTop: '0.5rem'
      }}>
        <div style={{
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          background: '#10b981',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justify: 'center'
        }}>
          <Sprout size={24} />
        </div>
        <p style={{ fontSize: '0.9rem', fontWeight: 700, color: '#065f46', maxWidth: '240px' }}>
          "Small steps every day lead to big results."
        </p>
      </div>
    </div>
  );
};
