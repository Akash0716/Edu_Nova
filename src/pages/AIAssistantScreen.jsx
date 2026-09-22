import React, { useState, useRef, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { ChevronLeft, Bot, Send, Sparkles, Code, HelpCircle, Layout } from 'lucide-react';

export const AIAssistantScreen = () => {
  const { navigateTo, messages, sendChatMessage } = useApp();
  const [inputText, setInputText] = useState('');
  const chatBottomRef = useRef(null);

  const quickActionPrompts = [
    { label: 'Show code example', icon: Code },
    { label: 'Give a practice question', icon: HelpCircle },
    { label: 'Explain with diagram', icon: Layout }
  ];

  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = (e) => {
    e?.preventDefault();
    if (inputText.trim()) {
      sendChatMessage(inputText);
      setInputText('');
    }
  };

  const handleQuickClick = (promptText) => {
    sendChatMessage(promptText);
  };

  return (
    <div style={{
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justify: 'space-between',
      background: '#f8fafc',
      height: '100%',
      position: 'relative'
    }} className="animate-fade-in">

      {/* Screen Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        padding: '1rem 1.25rem',
        background: '#ffffff',
        borderBottom: '1px solid #e2e8f0'
      }}>
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

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{
            width: '32px',
            height: '32px',
            borderRadius: '10px',
            background: '#1a56db',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justify: 'center'
          }}>
            <Bot size={18} />
          </div>
          <div>
            <h2 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f172a' }}>
              Edu Nova AI
            </h2>
            <span style={{ fontSize: '0.72rem', color: '#10b981', fontWeight: 700 }}>● Active Mentor</span>
          </div>
        </div>
      </div>

      {/* Chat Conversation Stream */}
      <div style={{
        flex: 1,
        overflowY: 'auto',
        padding: '1.25rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
      }}>
        {messages.map((msg) => {
          const isAI = msg.sender === 'ai';
          return (
            <div
              key={msg.id}
              style={{
                display: 'flex',
                gap: '0.65rem',
                justifyContent: isAI ? 'flex-start' : 'flex-end',
                alignItems: 'flex-start'
              }}
            >
              {isAI && (
                <div style={{
                  width: '30px',
                  height: '30px',
                  borderRadius: '50%',
                  background: '#1a56db',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justify: 'center',
                  flexShrink: 0
                }}>
                  <Bot size={16} />
                </div>
              )}

              <div style={{
                maxWidth: '82%',
                background: isAI ? '#ffffff' : '#1a56db',
                color: isAI ? '#0f172a' : '#ffffff',
                border: isAI ? '1px solid #e2e8f0' : 'none',
                borderRadius: isAI ? '18px 18px 18px 4px' : '18px 18px 4px 18px',
                padding: '0.85rem 1.1rem',
                fontSize: '0.88rem',
                lineHeight: 1.5,
                boxShadow: isAI ? '0 2px 6px rgba(0,0,0,0.03)' : '0 4px 12px rgba(26,86,219,0.25)'
              }}>
                <p style={{ whitespace: 'pre-line' }}>{msg.text}</p>

                {/* Code Block if returned */}
                {msg.code && (
                  <pre style={{
                    marginTop: '0.75rem',
                    background: '#0f172a',
                    color: '#38bdf8',
                    padding: '0.75rem',
                    borderRadius: '12px',
                    fontSize: '0.78rem',
                    overflowX: 'auto',
                    fontFamily: 'monospace'
                  }}>
                    <code>{msg.code}</code>
                  </pre>
                )}

                {/* ASCII Diagram if returned */}
                {msg.diagram && (
                  <pre style={{
                    marginTop: '0.75rem',
                    background: '#eff6ff',
                    color: '#1e40af',
                    padding: '0.75rem',
                    borderRadius: '12px',
                    fontSize: '0.75rem',
                    overflowX: 'auto',
                    fontFamily: 'monospace',
                    border: '1px solid #bfdbfe'
                  }}>
                    <code>{msg.diagram}</code>
                  </pre>
                )}

                <span style={{
                  display: 'block',
                  fontSize: '0.68rem',
                  color: isAI ? '#94a3b8' : '#93c5fd',
                  marginTop: '4px',
                  textAlign: 'right'
                }}>
                  {msg.timestamp}
                </span>
              </div>
            </div>
          );
        })}
        <div ref={chatBottomRef} />
      </div>

      {/* Quick Action Buttons Pill Bar matching Screen 8 */}
      <div style={{
        padding: '0.5rem 1rem',
        background: '#ffffff',
        borderTop: '1px solid #f1f5f9',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.5rem'
      }}>
        <span style={{ width: '100%', fontSize: '0.72rem', fontWeight: 700, color: '#64748b' }}>
          Want to learn more?
        </span>
        {quickActionPrompts.map((item) => {
          const IconComp = item.icon;
          return (
            <button
              key={item.label}
              onClick={() => handleQuickClick(item.label)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                padding: '0.4rem 0.85rem',
                borderRadius: '99px',
                border: '1px solid #3b82f6',
                background: '#eff6ff',
                color: '#1a56db',
                fontSize: '0.75rem',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              <IconComp size={13} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>

      {/* Message Input Footer Bar */}
      <form
        onSubmit={handleSend}
        style={{
          padding: '0.85rem 1rem',
          background: '#ffffff',
          borderTop: '1px solid #e2e8f0',
          display: 'flex',
          alignItems: 'center',
          gap: '0.65rem'
        }}
      >
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type your message..."
          className="input-field"
          style={{
            borderRadius: '99px',
            fontSize: '0.85rem',
            padding: '0.65rem 1.1rem',
            background: '#f8fafc'
          }}
        />
        <button
          type="submit"
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: '#1a56db',
            color: '#ffffff',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justify: 'center',
            cursor: 'pointer',
            flexShrink: 0,
            boxShadow: '0 4px 10px rgba(26, 86, 219, 0.3)'
          }}
        >
          <Send size={16} />
        </button>
      </form>
    </div>
  );
};
