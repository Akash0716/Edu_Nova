import React, { createContext, useContext, useState, useEffect } from 'react';
import { INITIAL_USER, MOCK_AI_RESPONSES, QUIZ_QUESTIONS, ACHIEVEMENTS_LIST } from '../data/mockData';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // Screen state
  const [activeScreen, setActiveScreen] = useState(() => {
    return localStorage.getItem('edunova_screen') || 'splash';
  });

  // Display view mode: 'phone' | 'desktop' | 'showcase'
  const [viewMode, setViewMode] = useState(() => {
    return localStorage.getItem('edunova_viewmode') || 'phone';
  });

  // User Profile state
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('edunova_user');
    return saved ? JSON.parse(saved) : INITIAL_USER;
  });

  // Achievements state
  const [achievements, setAchievements] = useState(() => {
    const saved = localStorage.getItem('edunova_achievements');
    return saved ? JSON.parse(saved) : ACHIEVEMENTS_LIST;
  });

  // Quiz interactive state
  const [quizState, setQuizState] = useState({
    currentQuestionIndex: 2, // Question 3 out of 5 (Q. 3/10 concept matching the reference image screenshot!)
    userAnswers: {},
    selectedOption: 1, // Pre-selected option matching image "O(log n)"
    isSubmitted: true, // Shown verified green in screen 5
    score: 2,
    timerSeconds: 12
  });

  // Chat interactive state
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'ai',
      text: 'Hello Akash! How can I help you today?',
      timestamp: '9:41 AM'
    },
    {
      id: 2,
      sender: 'user',
      text: 'Explain stack in simple terms.',
      timestamp: '9:42 AM'
    },
    {
      id: 3,
      sender: 'ai',
      text: 'A stack is a linear data structure that follows the LIFO (Last In First Out) principle.\n\nThink of it like a stack of plates — the last plate you keep is the first one you remove.',
      timestamp: '9:42 AM'
    }
  ]);

  // Persist user state changes
  useEffect(() => {
    localStorage.setItem('edunova_screen', activeScreen);
  }, [activeScreen]);

  useEffect(() => {
    localStorage.setItem('edunova_viewmode', viewMode);
  }, [viewMode]);

  useEffect(() => {
    localStorage.setItem('edunova_user', JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    localStorage.setItem('edunova_achievements', JSON.stringify(achievements));
  }, [achievements]);

  // Navigation action
  const navigateTo = (screenName) => {
    setActiveScreen(screenName);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Quiz submission action
  const submitAnswer = (optionIndex) => {
    const currentQuestion = QUIZ_QUESTIONS[quizState.currentQuestionIndex];
    const isCorrect = optionIndex === currentQuestion.correctIndex;
    
    setQuizState(prev => ({
      ...prev,
      selectedOption: optionIndex,
      isSubmitted: true,
      score: isCorrect ? prev.score + 1 : prev.score,
      userAnswers: { ...prev.userAnswers, [prev.currentQuestionIndex]: optionIndex }
    }));

    if (isCorrect) {
      // Increment completed quizzes & check user progress
      setUser(prev => {
        const newQuizzes = prev.completedQuizzesCount + 1;
        const newProgress = Math.min(100, prev.overallProgress + 2);
        return { ...prev, completedQuizzesCount: newQuizzes, overallProgress: newProgress };
      });
    }
  };

  const nextQuestion = () => {
    if (quizState.currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
      setQuizState(prev => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex + 1,
        selectedOption: null,
        isSubmitted: false
      }));
    } else {
      // Quiz completed! Navigate to progress or reset
      setQuizState(prev => ({
        ...prev,
        currentQuestionIndex: 0,
        selectedOption: null,
        isSubmitted: false
      }));
      navigateTo('progress');
    }
  };

  // AI Chat action
  const sendChatMessage = (userInputText) => {
    if (!userInputText || !userInputText.trim()) return;

    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: userInputText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);

    // Match response key in mock AI
    setTimeout(() => {
      const normalized = userInputText.toLowerCase().trim();
      let replyObj = MOCK_AI_RESPONSES[normalized];

      if (!replyObj) {
        replyObj = {
          type: 'text',
          content: `Great question! In Edu Nova, ${userInputText} is an essential topic. Let's break it down into key concepts: First, understand the core data definitions, then practice writing clean algorithm steps.`
        };
      }

      const aiMsg = {
        id: Date.now() + 1,
        sender: 'ai',
        text: replyObj.content,
        code: replyObj.type === 'code' ? replyObj.content : null,
        diagram: replyObj.type === 'diagram' ? replyObj.content : null,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, aiMsg]);
    }, 600);
  };

  // Reset demo state
  const resetDemoState = () => {
    localStorage.clear();
    setUser(INITIAL_USER);
    setAchievements(ACHIEVEMENTS_LIST);
    setActiveScreen('splash');
    setViewMode('phone');
    setQuizState({
      currentQuestionIndex: 2,
      userAnswers: {},
      selectedOption: 1,
      isSubmitted: true,
      score: 2,
      timerSeconds: 12
    });
  };

  return (
    <AppContext.Provider
      value={{
        activeScreen,
        navigateTo,
        viewMode,
        setViewMode,
        user,
        setUser,
        achievements,
        quizState,
        setQuizState,
        submitAnswer,
        nextQuestion,
        messages,
        sendChatMessage,
        resetDemoState
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
