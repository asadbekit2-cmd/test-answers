// State Management
let tests = [];
let currentTest = null;
let currentTestId = null;

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  loadTests();
  updateDashboard();
  setupEventListeners();
});

// Event Listeners
function setupEventListeners() {
  document.getElementById('takeTestForm').addEventListener('submit', handleSubmitTest);
}

// View Management
function showView(viewId) {
  const views = ['dashboardView', 'takeTestView', 'resultsView'];
  views.forEach(view => {
    document.getElementById(view).classList.add('hidden');
  });
  document.getElementById(viewId).classList.remove('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showDashboard() {
  showView('dashboardView');
  updateDashboard();
}

// Dashboard Functions
function updateDashboard() {
  const totalTests = tests.length;
  const totalQuestions = tests.reduce((sum, test) => sum + test.questions.length, 0);
  const completedTests = tests.filter(test => test.completed).length;
  const completionRate = totalTests > 0 ? Math.round((completedTests / totalTests) * 100) : 0;

  document.getElementById('totalTests').textContent = totalTests;
  document.getElementById('totalQuestions').textContent = totalQuestions;
  document.getElementById('completionRate').textContent = completionRate + '%';

  renderTestCards();
}

function renderTestCards() {
  const testsGrid = document.getElementById('testsGrid');
  const emptyState = document.getElementById('emptyState');

  if (tests.length === 0) {
    testsGrid.classList.add('hidden');
    emptyState.classList.remove('hidden');
    return;
  }

  testsGrid.classList.remove('hidden');
  emptyState.classList.add('hidden');

  testsGrid.innerHTML = tests.map((test, index) => `
    <div class="card">
      <h3 style="font-size: 1.5rem; font-weight: 700; margin-bottom: var(--spacing-sm);">${test.title}</h3>
      <p style="color: var(--color-text-secondary); margin-bottom: var(--spacing-md);">${test.description || 'No description'}</p>
      <div style="display: flex; gap: var(--spacing-md); margin-bottom: var(--spacing-lg);">
        <span style="color: var(--color-text-muted); font-size: 0.9rem;">
          📝 ${test.questions.length} Questions
        </span>
        ${test.completed ? `
          <span style="color: var(--color-success); font-size: 0.9rem;">
            ✓ Score: ${test.score}%
          </span>
        ` : ''}
      </div>
      <div style="display: flex; gap: var(--spacing-sm);">
        <button class="btn btn-primary" onclick="startTest(${index})" style="flex: 1;">
          ${test.completed ? '🔄 Retake' : '▶️ Start Test'}
        </button>
      </div>
    </div>
  `).join('');
}

// Start Test
function startTest(testIndex) {
  currentTestId = testIndex;
  currentTest = tests[testIndex];

  document.getElementById('testTitleDisplay').textContent = currentTest.title;
  renderTestQuestions();
  updateProgress(0);
  showView('takeTestView');
}

function renderTestQuestions() {
  const container = document.getElementById('testQuestionsContainer');

  container.innerHTML = currentTest.questions.map((q, index) => `
    <div class="question-item">
      <div class="question-header">
        <span class="question-number">Question ${index + 1}</span>
      </div>
      
      <p style="font-size: 1.1rem; margin-bottom: var(--spacing-lg); color: var(--color-text-primary);">
        ${q.question}
      </p>
      
      <div class="answer-options">
        ${q.options.map((option, optionIndex) => `
          <div class="answer-option">
            <input type="radio" id="q${index}_o${optionIndex}" name="question${index}" value="${optionIndex}" required>
            <label for="q${index}_o${optionIndex}">${option}</label>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');

  // Add change listeners to update progress
  const inputs = container.querySelectorAll('input');
  inputs.forEach(input => {
    input.addEventListener('change', updateProgressFromAnswers);
  });
}

function updateProgressFromAnswers() {
  const totalQuestions = currentTest.questions.length;
  let answeredQuestions = 0;

  for (let i = 0; i < totalQuestions; i++) {
    const checked = document.querySelector(`[name="question${i}"]:checked`);
    if (checked) answeredQuestions++;
  }

  updateProgress(answeredQuestions);
}

function updateProgress(answeredQuestions) {
  const totalQuestions = currentTest.questions.length;
  const percentage = (answeredQuestions / totalQuestions) * 100;

  document.getElementById('progressFill').style.width = percentage + '%';
  document.getElementById('progressText').textContent = `Question ${answeredQuestions} of ${totalQuestions}`;
}

// Submit Test Handler
function handleSubmitTest(e) {
  e.preventDefault();

  let correctAnswers = 0;
  const results = [];

  currentTest.questions.forEach((question, index) => {
    let userAnswer = null;
    let isCorrect = false;

    const selected = document.querySelector(`[name="question${index}"]:checked`);
    if (selected) {
      userAnswer = parseInt(selected.value);
      isCorrect = userAnswer === question.correctAnswer;
    }

    if (isCorrect) correctAnswers++;

    results.push({
      question: question.question,
      userAnswer,
      correctAnswer: question.correctAnswer,
      isCorrect,
      options: question.options
    });
  });

  const score = Math.round((correctAnswers / currentTest.questions.length) * 100);

  // Update test in storage
  tests[currentTestId].completed = true;
  tests[currentTestId].score = score;
  saveProgress();

  // Show results
  showResults(score, correctAnswers, currentTest.questions.length, results);
}

// Show Results
function showResults(score, correct, total, results) {
  document.getElementById('scorePercentage').textContent = score + '%';

  let message = '';
  if (score >= 90) message = '🎉 Outstanding!';
  else if (score >= 70) message = '✨ Great Job!';
  else if (score >= 50) message = '👍 Good Effort!';
  else message = '💪 Keep Practicing!';

  document.getElementById('resultMessage').textContent = message;
  document.getElementById('resultSummary').textContent = `You got ${correct} out of ${total} questions correct.`;

  const detailsContainer = document.getElementById('resultDetails');
  detailsContainer.innerHTML = results.map((result, index) => `
    <div class="result-item ${result.isCorrect ? 'correct' : 'incorrect'}">
      <div style="flex: 1;">
        <div style="font-weight: 600; margin-bottom: var(--spacing-xs);">
          ${index + 1}. ${result.question}
        </div>
        <div>
          <strong>Your answer:</strong> ${result.userAnswer !== null ? result.options[result.userAnswer] : 'Not answered'}
        </div>
        ${!result.isCorrect ? `
          <div style="color: var(--color-success);">
            <strong>Correct answer:</strong> ${result.options[result.correctAnswer]}
          </div>
        ` : ''}
      </div>
      <div style="font-size: 1.5rem;">
        ${result.isCorrect ? '✓' : '✗'}
      </div>
    </div>
  `).join('');

  showView('resultsView');
}

function retakeTest() {
  if (currentTestId !== null) {
    startTest(currentTestId);
  }
}

// Data Loading
function loadTests() {
  // Load preloaded tests
  if (typeof PRELOADED_TESTS !== 'undefined') {
    tests = JSON.parse(JSON.stringify(PRELOADED_TESTS));

    // Check for saved progress
    const savedProgress = localStorage.getItem('testProgress');
    if (savedProgress) {
      const progress = JSON.parse(savedProgress);

      // Merge progress
      tests.forEach(test => {
        const savedTest = progress.find(p => p.id === test.id);
        if (savedTest) {
          test.completed = savedTest.completed;
          test.score = savedTest.score;
        }
      });
    }
  }
}

function saveProgress() {
  const progress = tests.map(t => ({
    id: t.id,
    completed: t.completed,
    score: t.score
  }));
  localStorage.setItem('testProgress', JSON.stringify(progress));
}

// Add slide animations to CSS
const style = document.createElement('style');
style.textContent = `
  @keyframes slideInRight {
    from {
      transform: translateX(400px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes slideOutRight {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(400px);
      opacity: 0;
    }
  }
  
  @keyframes slideOut {
    from {
      opacity: 1;
      transform: translateX(0);
    }
    to {
      opacity: 0;
      transform: translateX(-20px);
    }
  }
`;
document.head.appendChild(style);
