import express from 'express';
import cors from 'cors';
import { LEARNING_PATH_COURSES, QUIZ_QUESTIONS, ACHIEVEMENTS_LIST, MOCK_AI_RESPONSES } from '../src/data/mockData.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// API Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'Edu Nova Backend API', timestamp: new Date() });
});

// Courses API
app.get('/api/courses', (req, res) => {
  res.json({ success: true, courses: LEARNING_PATH_COURSES });
});

// Quizzes API
app.get('/api/quizzes', (req, res) => {
  res.json({ success: true, questions: QUIZ_QUESTIONS });
});

// Achievements API
app.get('/api/achievements', (req, res) => {
  res.json({ success: true, achievements: ACHIEVEMENTS_LIST });
});

// AI Chat completion endpoint
app.post('/api/ai/chat', (req, res) => {
  const { prompt } = req.body;
  if (!prompt) {
    return res.status(400).json({ error: 'Prompt is required' });
  }

  const normalized = prompt.toLowerCase().trim();
  const matched = MOCK_AI_RESPONSES[normalized];

  if (matched) {
    return res.json({ success: true, response: matched.content, type: matched.type });
  }

  res.json({
    success: true,
    response: `Edu Nova AI Mentor response for: "${prompt}". Remember to break problem statements into simpler algorithmic steps!`,
    type: 'text'
  });
});

app.listen(PORT, () => {
  console.log(`Edu Nova Express Server running on port ${PORT}`);
});
