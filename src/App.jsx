import React from 'react';
import { useApp } from './context/AppContext';
import { ViewToggle } from './components/layout/ViewToggle';
import { PhoneStatusBar } from './components/layout/PhoneStatusBar';
import { BottomNav } from './components/layout/BottomNav';
import { ShowcaseGrid } from './components/layout/ShowcaseGrid';
import { SplashScreen } from './pages/SplashScreen';
import { AuthScreen } from './pages/AuthScreen';
import { DashboardScreen } from './pages/DashboardScreen';
import { LearningPathScreen } from './pages/LearningPathScreen';
import { QuizScreen } from './pages/QuizScreen';
import { ProgressScreen } from './pages/ProgressScreen';
import { AchievementsScreen } from './pages/AchievementsScreen';
import { AIAssistantScreen } from './pages/AIAssistantScreen';
import { ProfileScreen } from './pages/ProfileScreen';

export const AppContent = () => {
  const { activeScreen, viewMode } = useApp();

  const renderCurrentScreen = () => {
    switch (activeScreen) {
      case 'splash': return <SplashScreen />;
      case 'auth': return <AuthScreen />;
      case 'dashboard': return <DashboardScreen />;
      case 'learning-path': return <LearningPathScreen />;
      case 'practice': return <QuizScreen />;
      case 'progress': return <ProgressScreen />;
      case 'achievements': return <AchievementsScreen />;
      case 'ai-assistant': return <AIAssistantScreen />;
      case 'profile': return <ProfileScreen />;
      default: return <DashboardScreen />;
    }
  };

  // If judge selects 8-Screen Showcase Mode
  if (viewMode === 'showcase') {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <ViewToggle />
        <ShowcaseGrid />
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Top Controls Header */}
      <ViewToggle />

      {/* Main Viewport */}
      <div className="app-viewport-wrapper">
        {viewMode === 'phone' ? (
          /* Mobile Smartphone Frame matching reference image */
          <div className="app-view-phone">
            <PhoneStatusBar />
            <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
              {renderCurrentScreen()}
            </div>
            <BottomNav />
          </div>
        ) : (
          /* Desktop Expanded Mode */
          <div className="app-view-desktop">
            <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
              {renderCurrentScreen()}
            </div>
            <BottomNav />
          </div>
        )}
      </div>
    </div>
  );
};

export default function App() {
  return <AppContent />;
}
