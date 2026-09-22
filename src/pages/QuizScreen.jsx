import React from 'react';
import { useApp } from '../context/AppContext';
import { ChevronLeft, Clock, CheckCircle2, XCircle, ArrowRight, RotateCcw } from 'lucide-react';
import { QUIZ_QUESTIONS } from '../data/mockData';
import confetti from 'canvas-confetti';

export const QuizScreen = () => {
  const { navigateTo, quizState, submitAnswer, nextQuestion } = useApp();
  const currentQuestion = QUIZ_QUESTIONS[quizState.currentQuestionIndex] || QUIZ_QUESTIONS[0];
  const isCorrect = quizState.selectedOption === currentQuestion.correctIndex;

  const handleOptionSelect = (index) => {
    submitAnswer(index);
    if (index === currentQuestion.correctIndex) {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 }
      });
    }
  };

  return (
    <div style={{
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justify: 'space-between',
      gap: '1.25rem',
      background: '#f8fafc',
      padding: '1.25rem',
      paddingBottom: '2rem'
    }} className="animate-fade-in">

      <div>
        {/* Header Bar with Back Button & Timer */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <button
              onClick={() => navigateTo('learning-path')}
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
            <h2 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a' }}>
              Practice Quiz
            </h2>
          </div>

          {/* Timer Pill */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem',
            background: '#ffffff',
            border: '1px solid #e2e8f0',
            padding: '0.35rem 0.75rem',
            borderRadius: '99px',
            fontSize: '0.8rem',
            fontWeight: 700,
            color: '#64748b'
          }}>
            <Clock size={14} style={{ color: '#1a56db' }} />
            <span>00:{quizState.timerSeconds < 10 ? `0${quizState.timerSeconds}` : quizState.timerSeconds}</span>
          </div>
        </div>

        {/* Question Counter */}
        <span style={{
          fontSize: '0.85rem',
          fontWeight: 700,
          color: '#64748b',
          display: 'block',
          marginBottom: '0.5rem'
        }}>
          Q. {quizState.currentQuestionIndex + 1}/{QUIZ_QUESTIONS.length}
        </span>

        {/* Question Prompt */}
        <h3 style={{
          fontSize: '1.15rem',
          fontWeight: 800,
          color: '#0f172a',
          lineHeight: 1.35,
          marginBottom: '1.5rem'
        }}>
          {currentQuestion.question}
        </h3>

        {/* Multi-choice Radio Options */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {currentQuestion.options.map((option, idx) => {
            const isSelected = quizState.selectedOption === idx;
            const isAnswerKey = idx === currentQuestion.correctIndex;
            
            let optionBg = '#ffffff';
            let optionBorder = '#e2e8f0';
            let optionTextColor = '#0f172a';
            let radioColor = '#cbd5e1';

            if (quizState.isSubmitted) {
              if (isSelected && isCorrect) {
                optionBg = '#f0fdf4';
                optionBorder = '#10b981';
                optionTextColor = '#15803d';
                radioColor = '#10b981';
              } else if (isSelected && !isCorrect) {
                optionBg = '#fef2f2';
                optionBorder = '#ef4444';
                optionTextColor = '#b91c1c';
                radioColor = '#ef4444';
              } else if (isAnswerKey) {
                optionBg = '#f0fdf4';
                optionBorder = '#10b981';
                optionTextColor = '#15803d';
              }
            } else if (isSelected) {
              optionBorder = '#1a56db';
              optionBg = '#eff6ff';
              radioColor = '#1a56db';
            }

            return (
              <button
                key={idx}
                onClick={() => handleOptionSelect(idx)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.85rem',
                  padding: '1rem',
                  borderRadius: '16px',
                  background: optionBg,
                  border: `1.5px solid ${optionBorder}`,
                  color: optionTextColor,
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.2s ease'
                }}
              >
                {/* Radio Circle Indicator */}
                <div style={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  border: `2px solid ${radioColor}`,
                  display: 'flex',
                  alignItems: 'center',
                  justify: 'center',
                  flexShrink: 0
                }}>
                  {isSelected && (
                    <div style={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      background: radioColor
                    }} />
                  )}
                </div>

                <span>{option}</span>
              </button>
            );
          })}
        </div>

        {/* Answer Explanation Banner (Green/Red Feedback box matching Screen 5) */}
        {quizState.isSubmitted && (
          <div style={{
            marginTop: '1.25rem',
            padding: '1rem 1.1rem',
            borderRadius: '16px',
            background: isCorrect ? '#ecfdf5' : '#fef2f2',
            border: `1px solid ${isCorrect ? '#a7f3d0' : '#fecaca'}`,
            display: 'flex',
            flexDirection: 'column',
            gap: '0.4rem'
          }} className="animate-fade-in">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              {isCorrect ? (
                <CheckCircle2 size={20} style={{ color: '#10b981' }} />
              ) : (
                <XCircle size={20} style={{ color: '#ef4444' }} />
              )}
              <h4 style={{
                fontSize: '0.95rem',
                fontWeight: 800,
                color: isCorrect ? '#047857' : '#b91c1c'
              }}>
                {isCorrect ? 'Correct!' : 'Incorrect'}
              </h4>
            </div>
            <p style={{
              fontSize: '0.82rem',
              color: isCorrect ? '#065f46' : '#7f1d1d',
              lineHeight: 1.45
            }}>
              {currentQuestion.explanation}
            </p>
          </div>
        )}
      </div>

      {/* Action Footer Button */}
      <div style={{ width: '100%', marginTop: '1rem' }}>
        <button
          onClick={nextQuestion}
          className="btn-primary"
          style={{ width: '100%', padding: '0.95rem' }}
        >
          <span>Next Question</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};
