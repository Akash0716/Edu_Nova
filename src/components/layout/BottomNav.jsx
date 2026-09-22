import React from 'react';
import { useApp } from '../../context/AppContext';
import { Home, BookOpen, Target, BarChart2, User } from 'lucide-react';

export const BottomNav = () => {
  const { activeScreen, navigateTo } = useApp();

  const navItems = [
    { id: 'dashboard', label: 'Home', icon: Home },
    { id: 'learning-path', label: 'Learn', icon: BookOpen },
    { id: 'practice', label: 'Practice', icon: Target },
    { id: 'progress', label: 'Progress', icon: BarChart2 },
    { id: 'profile', label: 'Profile', icon: User }
  ];

  // Hide bottom nav on splash & auth screen
  if (['splash', 'auth'].includes(activeScreen)) {
    return null;
  }

  return (
    <nav className="edu-bottom-nav">
      {navItems.map(item => {
        const IconComponent = item.icon;
        const isActive = activeScreen === item.id;
        return (
          <button
            key={item.id}
            onClick={() => navigateTo(item.id)}
            className={`nav-item ${isActive ? 'active' : ''}`}
          >
            <IconComponent size={20} strokeWidth={isActive ? 2.5 : 1.75} />
            <span>{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
};
