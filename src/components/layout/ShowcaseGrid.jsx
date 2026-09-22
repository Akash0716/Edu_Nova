import React from 'react';
import { PhoneStatusBar } from './PhoneStatusBar';
import { BottomNav } from './BottomNav';
import { SplashScreen } from '../../pages/SplashScreen';
import { AuthScreen } from '../../pages/AuthScreen';
import { DashboardScreen } from '../../pages/DashboardScreen';
import { LearningPathScreen } from '../../pages/LearningPathScreen';
import { QuizScreen } from '../../pages/QuizScreen';
import { ProgressScreen } from '../../pages/ProgressScreen';
import { AchievementsScreen } from '../../pages/AchievementsScreen';
import { AIAssistantScreen } from '../../pages/AIAssistantScreen';

export const ShowcaseGrid = () => {
  const screens = [
    { number: 1, title: 'Splash Screen', component: <SplashScreen /> },
    { number: 2, title: 'Sign Up / Login', component: <AuthScreen /> },
    { number: 3, title: 'Student Dashboard', component: <DashboardScreen /> },
    { number: 4, title: 'Personalized Learning Path', component: <LearningPathScreen /> },
    { number: 5, title: 'Practice / Quiz', component: <QuizScreen /> },
    { number: 6, title: 'Progress Tracking', component: <ProgressScreen /> },
    { number: 7, title: 'Achievements', component: <AchievementsScreen /> },
    { number: 8, title: 'AI Assistant', component: <AIAssistantScreen /> }
  ];

  return (
    <div style={{
      width: '100%',
      padding: '2rem 1.5rem',
      background: '#090d16',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em' }}>
          Edu Nova — Complete Product Workflow Showcase
        </h2>
        <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginTop: '0.4rem' }}>
          All 8 interactive screens side-by-side matching the entrepreneurship presentation reference layout.
        </p>
      </div>

      <div className="showcase-grid-container">
        {screens.map(screen => (
          <div key={screen.number} className="showcase-card-wrapper">
            <div className="showcase-screen-label">
              <span className="showcase-screen-badge">{screen.number}</span>
              <span>{screen.title}</span>
            </div>

            {/* Individual Phone Mockup Frame */}
            <div style={{
              width: '340px',
              height: '730px',
              background: '#ffffff',
              borderRadius: '40px',
              border: '8px solid #334155',
              boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              position: 'relative'
            }}>
              <PhoneStatusBar />
              <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
                {screen.component}
              </div>
              <BottomNav />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
