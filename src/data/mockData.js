export const INITIAL_USER = {
  name: "Akash",
  email: "akash@example.com",
  overallProgress: 60,
  streakDays: 7,
  activeCoursesCount: 3,
  completedQuizzesCount: 48,
  earnedBadgesCount: 5,
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
};

export const LEARNING_PATH_COURSES = [
  {
    id: "python-basics",
    title: "Basics of Python",
    status: "Start here",
    statusType: "green", // green | blue | gray
    isLocked: false,
    progress: 100,
    description: "Learn variables, loops, functions, and object-oriented concepts in Python.",
    lessons: 12,
    icon: "code",
    color: "#10B981"
  },
  {
    id: "data-structures",
    title: "Data Structures",
    status: "In Progress",
    statusType: "blue",
    isLocked: false,
    progress: 40,
    description: "Master arrays, stacks, queues, trees, and graphs with practical implementations.",
    lessons: 18,
    icon: "layers",
    color: "#1A56DB"
  },
  {
    id: "algorithms",
    title: "Algorithms",
    status: "Locked",
    statusType: "gray",
    isLocked: true,
    progress: 0,
    description: "Explore sorting, searching, dynamic programming, and greedy algorithms.",
    lessons: 20,
    icon: "cpu",
    color: "#64748B"
  },
  {
    id: "web-dev",
    title: "Web Development",
    status: "Locked",
    statusType: "gray",
    isLocked: true,
    progress: 0,
    description: "Build modern full-stack web applications with HTML, CSS, React, and Node.js.",
    lessons: 25,
    icon: "globe",
    color: "#64748B"
  }
];

export const CONTINUING_COURSE = {
  id: "data-structures",
  title: "Data Structures",
  subtitle: "Arrays and Strings",
  progress: 40
};

export const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "What is the time complexity of binary search?",
    options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
    correctIndex: 1,
    explanation: "Binary search reduces the search space by half in each step, giving O(log n) time complexity."
  },
  {
    id: 2,
    question: "Which data structure operates on a Last-In, First-Out (LIFO) basis?",
    options: ["Queue", "Stack", "Array", "Linked List"],
    correctIndex: 1,
    explanation: "A Stack pushes and pops items from the top, obeying the LIFO principle."
  },
  {
    id: 3,
    question: "What is the worst-case time complexity of Quick Sort?",
    options: ["O(n log n)", "O(n²)", "O(n)", "O(log n)"],
    correctIndex: 1,
    explanation: "In worst-case scenarios (e.g. sorted input with worst pivot selection), Quick Sort degrades to O(n²)."
  },
  {
    id: 4,
    question: "In Python, which keyword is used to define a custom function?",
    options: ["function", "def", "fn", "create"],
    correctIndex: 1,
    explanation: "Python uses the `def` keyword followed by the function signature."
  },
  {
    id: 5,
    question: "Which HTTP method is typically used to request data from a server?",
    options: ["POST", "PUT", "GET", "DELETE"],
    correctIndex: 2,
    explanation: "The GET method requests a representation of the specified resource without modifying data."
  }
];

export const SUBJECT_PROGRESS_DATA = [
  { subject: "Data Structures", percentage: 80, color: "#1A56DB" },
  { subject: "Web Development", percentage: 60, color: "#10B981" },
  { subject: "Machine Learning", percentage: 40, color: "#F59E0B" },
  { subject: "Database Systems", percentage: 20, color: "#EF4444" }
];

export const ACHIEVEMENTS_LIST = [
  {
    id: "quick-learner",
    title: "Quick Learner",
    requirement: "Complete 5 quizzes",
    earned: true,
    icon: "star",
    color: "#F59E0B"
  },
  {
    id: "python-pro",
    title: "Python Pro",
    requirement: "Finish Python Basics",
    earned: true,
    icon: "code",
    color: "#10B981"
  },
  {
    id: "consistent",
    title: "Consistent Learner",
    requirement: "7-day streak",
    earned: true,
    icon: "flame",
    color: "#EF4444"
  },
  {
    id: "problem-solver",
    title: "Problem Solver",
    requirement: "Solve 50 questions",
    earned: true,
    icon: "target",
    color: "#3B82F6"
  },
  {
    id: "web-explorer",
    title: "Web Explorer",
    requirement: "Complete Web Dev",
    earned: true,
    icon: "globe",
    color: "#6366F1"
  },
  {
    id: "ml-explorer",
    title: "ML Explorer",
    requirement: "Complete ML Basics",
    earned: false,
    icon: "cpu",
    color: "#94A3B8"
  }
];

export const MOCK_AI_RESPONSES = {
  "explain stack in simple terms": {
    type: "text",
    content: "A stack is a linear data structure that follows the LIFO (Last In First Out) principle.\n\nThink of it like a stack of plates — the last plate you keep is the first one you remove."
  },
  "show code example": {
    type: "code",
    language: "python",
    content: `class Stack:
    def __init__(self):
        self.items = []
        
    def push(self, item):
        self.items.append(item)
        
    def pop(self):
        if not self.is_empty():
            return self.items.pop()
            
    def peek(self):
        return self.items[-1]
        
    def is_empty(self):
        return len(self.items) == 0

# Usage
s = Stack()
s.push("Plate 1")
s.push("Plate 2")
print(s.pop()) # Output: Plate 2`
  },
  "give a practice question": {
    type: "question",
    content: "Quiz Question:\nWhat operation is used to add an element to the top of a stack?",
    options: ["Enqueue", "Push", "Insert", "Append"],
    correctIndex: 1
  },
  "explain with diagram": {
    type: "diagram",
    content: `  [ Top ] -> |  Plate 3  | <- Push / Pop (LIFO)
             |  Plate 2  |
             |  Plate 1  |
             +-----------+`
  }
};
