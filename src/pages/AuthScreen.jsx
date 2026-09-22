import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { EduNovaLogo } from '../components/common/EduNovaLogo';
import { Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';

export const AuthScreen = () => {
  const { navigateTo, user, setUser } = useApp();
  const [isLoginTab, setIsLoginTab] = useState(true);
  const [email, setEmail] = useState(user.email || 'akash@example.com');
  const [password, setPassword] = useState('••••••••');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      const nameFromEmail = email.split('@')[0];
      const capitalized = nameFromEmail.charAt(0).toUpperCase() + nameFromEmail.slice(1);
      setUser(prev => ({ ...prev, email: email, name: capitalized || 'Akash' }));
    }
    navigateTo('dashboard');
  };

  return (
    <div style={{
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justify: 'space-between',
      padding: '2rem 1.5rem',
      background: '#ffffff',
      minHeight: '100%'
    }} className="animate-fade-in">
      
      {/* Header & Logo */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <EduNovaLogo size="small" showTagline={false} />
        </div>

        <div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a' }}>
            {isLoginTab ? 'Welcome Back!' : 'Create Account'}
          </h2>
          <p style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '4px' }}>
            {isLoginTab ? 'Continue your learning journey' : 'Start your personalized AI learning path today'}
          </p>
        </div>

        {/* Tab Switcher Pills */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          background: '#f1f5f9',
          padding: '4px',
          borderRadius: '99px'
        }}>
          <button
            onClick={() => setIsLoginTab(true)}
            style={{
              padding: '0.6rem',
              border: 'none',
              borderRadius: '99px',
              fontWeight: 700,
              fontSize: '0.85rem',
              cursor: 'pointer',
              background: isLoginTab ? '#1a56db' : 'transparent',
              color: isLoginTab ? '#ffffff' : '#64748b',
              transition: 'all 0.2s ease'
            }}
          >
            Login
          </button>
          <button
            onClick={() => setIsLoginTab(false)}
            style={{
              padding: '0.6rem',
              border: 'none',
              borderRadius: '99px',
              fontWeight: 700,
              fontSize: '0.85rem',
              cursor: 'pointer',
              background: !isLoginTab ? '#1a56db' : 'transparent',
              color: !isLoginTab ? '#ffffff' : '#64748b',
              transition: 'all 0.2s ease'
            }}
          >
            Sign Up
          </button>
        </div>

        {/* Auth Form */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '0.5rem' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '0.35rem' }}>
              Email
            </label>
            <div style={{ position: 'relative' }}>
              <Mail size={18} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="akash@example.com"
                className="input-field"
                style={{ paddingLeft: '2.5rem' }}
                required
              />
            </div>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '0.35rem' }}>
              Password
            </label>
            <div style={{ position: 'relative' }}>
              <Lock size={18} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="input-field"
                style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: 'absolute',
                  right: '14px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  color: '#94a3b8',
                  cursor: 'pointer'
                }}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {isLoginTab && (
            <div style={{ textAlign: 'left' }}>
              <a href="#forgot" onClick={(e) => { e.preventDefault(); alert("Password reset link sent to " + email); }} style={{ fontSize: '0.78rem', color: '#1a56db', fontWeight: 700, textDecoration: 'underline' }}>
                Forgot Password?
              </a>
            </div>
          )}

          <button
            type="submit"
            className="btn-primary"
            style={{ width: '100%', marginTop: '0.5rem', padding: '0.9rem' }}
          >
            <span>{isLoginTab ? 'Login' : 'Create Account'}</span>
            <ArrowRight size={18} />
          </button>
        </form>

        {/* Divider */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', margin: '0.5rem 0' }}>
          <div style={{ flex: 1, height: '1px', background: '#e2e8f0' }} />
          <span style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: 600 }}>or continue with</span>
          <div style={{ flex: 1, height: '1px', background: '#e2e8f0' }} />
        </div>

        {/* Social Auth Buttons */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
          <button
            type="button"
            onClick={handleSubmit}
            className="btn-secondary"
            style={{ fontSize: '0.82rem', padding: '0.65rem' }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24">
              <path fill="#EA4335" d="M12 5c1.6 0 3 .6 4.1 1.6l3.1-3.1C17.3 1.8 14.8 1 12 1 7.5 1 3.7 3.6 1.9 7.3l3.7 2.9C6.5 7.4 9 5 12 5z"/>
              <path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.8z"/>
              <path fill="#FBBC05" d="M5.6 14.8c-.2-.7-.4-1.5-.4-2.3s.2-1.6.4-2.3L1.9 7.3C.7 9.7 0 10.8 0 12s.7 2.3 1.9 4.7l3.7-2.9z"/>
              <path fill="#34A853" d="M12 23c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3 0-5.5-2.4-6.4-5.2L1.9 16C3.7 19.7 7.5 23 12 23z"/>
            </svg>
            <span>Google</span>
          </button>

          <button
            type="button"
            onClick={handleSubmit}
            className="btn-secondary"
            style={{ fontSize: '0.82rem', padding: '0.65rem' }}
          >
            <svg width="18" height="18" viewBox="0 0 23 23">
              <path fill="#f35325" d="M1 1h10v10H1z"/>
              <path fill="#81bc06" d="M12 1h10v10H12z"/>
              <path fill="#05a6f0" d="M1 12h10v10H1z"/>
              <path fill="#ffba08" d="M12 12h10v10H12z"/>
            </svg>
            <span>Microsoft</span>
          </button>
        </div>
      </div>

      {/* Footer link */}
      <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
        <p style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600 }}>
          {isLoginTab ? "Don't have an account? " : "Already have an account? "}
          <button
            onClick={() => setIsLoginTab(!isLoginTab)}
            style={{
              background: 'none',
              border: 'none',
              color: '#1a56db',
              fontWeight: 800,
              cursor: 'pointer',
              textDecoration: 'underline'
            }}
          >
            {isLoginTab ? 'Sign Up' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  );
};
