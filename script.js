// State Management
let tests = [];
let currentTest = null;
let currentTestId = null;
let currentQuestions = [];
let currentUser = null;

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  checkUserRegistration();
  loadTests();
  setupEventListeners();
});

// Event Listeners
function setupEventListeners() {
  document.getElementById('takeTestForm').addEventListener('submit', handleSubmitTest);
  document.getElementById('registrationForm').addEventListener('submit', handleRegistration);
}

// User Management
function checkUserRegistration() {
  const savedUser = localStorage.getItem('quizUser');
  if (savedUser) {
    currentUser = savedUser;
    document.getElementById('userWelcome').textContent = `Welcome back, ${currentUser}!`;
    updateDashboard(); // Update dashboard after we know who the user is
  } else {
    document.getElementById('registrationModal').classList.remove('hidden');
  }
}

async function handleRegistration(e) {
  e.preventDefault();
  const input = document.getElementById('nicknameInput');
  const nickname = input.value.trim();
  const errorDiv = document.getElementById('registrationError');

  if (!nickname) return;

  try {
    const response = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nickname })
    });

    if (response.ok) {
      currentUser = nickname;
      localStorage.setItem('quizUser', nickname);
      document.getElementById('registrationModal').classList.add('hidden');
      document.getElementById('userWelcome').textContent = `Welcome, ${currentUser}!`;
      updateDashboard();
    } else {
      const data = await response.json();
      errorDiv.textContent = data.error || 'Registration failed';
      errorDiv.style.display = 'block';
    }
  } catch (error) {
    console.error('Error registering:', error);
    // Fallback for demo without backend
    errorDiv.textContent = 'Could not connect to server. Please ensure server.py is running.';
    errorDiv.style.display = 'block';
  }
}

// View Management
function showView(viewId) {
  const views = ['dashboardView', 'takeTestView', 'resultsView', 'leaderboardView'];
  views.forEach(view => {
    const el = document.getElementById(view);
    if (el) el.classList.add('hidden');
  });
  document.getElementById(viewId).classList.remove('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showDashboard() {
  showView('dashboardView');
  updateDashboard();
}

function showLeaderboard() {
  showView('leaderboardView');
  loadLeaderboard();
}

async function loadLeaderboard() {
  const container = document.getElementById('leaderboardContainer');
  container.innerHTML = '<p class="text-center">Loading leaderboard...</p>';

  try {
    const response = await fetch('/api/leaderboard');
    if (!response.ok) throw new Error('Failed to fetch leaderboard');

    const scores = await response.json();
    renderLeaderboard(scores);
  } catch (error) {
    console.error('Error loading leaderboard:', error);
    container.innerHTML = '<p class="text-center" style="color: var(--color-error)">Failed to load leaderboard. Please make sure server is running.</p>';
  }
}

function renderLeaderboard(scores) {
  const container = document.getElementById('leaderboardContainer');

  if (Object.keys(scores).length === 0) {
    container.innerHTML = '<p class="text-center" style="color: var(--color-text-secondary)">No scores yet. Be the first!</p>';
    return;
  }

  let html = '';

  // Sort tests by title for consistent order
  const testIds = Object.keys(scores).sort();

  testIds.forEach(testId => {
    const test = tests.find(t => t.id === testId);
    const title = test ? test.title : testId;
    const testScores = scores[testId];

    html += `
      <div style="margin-bottom: var(--spacing-xl);">
        <h3 style="margin-bottom: var(--spacing-md); border-bottom: 2px solid var(--color-border); padding-bottom: var(--spacing-sm);">
          ${title}
        </h3>
        <div style="background: var(--color-surface-alt); border-radius: var(--radius-md); overflow: hidden;">
          <table style="width: 100%; border-collapse: collapse;">
            <thead>
              <tr style="background: rgba(0,0,0,0.05); text-align: left;">
                <th style="padding: 12px; width: 60px;">Rank</th>
                <th style="padding: 12px;">Player</th>
                <th style="padding: 12px; text-align: right;">Score</th>
              </tr>
            </thead>
            <tbody>
              ${testScores.map((entry, index) => `
                <tr style="border-top: 1px solid var(--color-border);">
                  <td style="padding: 12px; text-align: center; font-weight: bold; color: ${index < 3 ? 'var(--color-primary)' : 'inherit'}">
                    ${index + 1}
                  </td>
                  <td style="padding: 12px;">
                    ${entry.nickname === currentUser ? '<strong>' + entry.nickname + ' (You)</strong>' : entry.nickname}
                  </td>
                  <td style="padding: 12px; text-align: right; font-weight: bold;">
                    ${entry.score}%
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
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

  // Randomize and select up to 25 questions
  // Deep clone to avoid permanently modifying the source test data with shuffled answers
  // This ensures if we retake, we start fresh (though re-shuffling is also fine)
  const allQuestions = JSON.parse(JSON.stringify(currentTest.questions));

  for (let i = allQuestions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [allQuestions[i], allQuestions[j]] = [allQuestions[j], allQuestions[i]];
  }
  currentQuestions = allQuestions.slice(0, 25);

  // Randomize options for each question
  currentQuestions.forEach(q => {
    // Create array of indices [0, 1, 2, ...] corresponding to current options
    const indices = q.options.map((_, i) => i);

    // Shuffle indices
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }

    // Map options to new order
    const newOptions = indices.map(i => q.options[i]);

    // Find where the correct answer moved to
    // q.correctAnswer is the index of the correct option in the original options array
    // We need to find the index k in 'indices' such that indices[k] == q.correctAnswer
    const newCorrectAnswer = indices.indexOf(q.correctAnswer);

    q.options = newOptions;
    q.correctAnswer = newCorrectAnswer;
  });

  document.getElementById('testTitleDisplay').textContent = currentTest.title;
  renderTestQuestions();
  updateProgress(0);
  showView('takeTestView');
}

function renderTestQuestions() {
  const container = document.getElementById('testQuestionsContainer');

  container.innerHTML = currentQuestions.map((q, index) => `
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
  const totalQuestions = currentQuestions.length;
  let answeredQuestions = 0;

  for (let i = 0; i < totalQuestions; i++) {
    const checked = document.querySelector(`[name="question${i}"]:checked`);
    if (checked) answeredQuestions++;
  }

  updateProgress(answeredQuestions);
}

function updateProgress(answeredQuestions) {
  const totalQuestions = currentQuestions.length;
  const percentage = (answeredQuestions / totalQuestions) * 100;

  document.getElementById('progressFill').style.width = percentage + '%';
  document.getElementById('progressText').textContent = `Question ${answeredQuestions} of ${totalQuestions}`;
}

// Submit Test Handler
async function handleSubmitTest(e) {
  e.preventDefault();

  let correctAnswers = 0;
  const results = [];

  currentQuestions.forEach((question, index) => {
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

  const totalQuestions = currentQuestions.length;
  const score = Math.round((correctAnswers / totalQuestions) * 100);

  // Update test in storage
  // Note: we are updating the global currentTest, not the cloned questions
  tests[currentTestId].completed = true;
  tests[currentTestId].score = score;
  saveProgress();

  // Submit score to backend
  if (currentUser) {
    try {
      await fetch('/api/submit-score', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nickname: currentUser,
          testId: currentTest.id,
          score: score
        })
      });
    } catch (error) {
      console.error('Error submitting score:', error);
    }
  }

  // Show results
  showResults(score, correctAnswers, totalQuestions, results);
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

  const mistakes = total - correct;
  document.getElementById('resultSummary').innerHTML = `
    <div style="display: flex; gap: 2rem; justify-content: center; margin-bottom: 1rem;">
      <div style="color: var(--color-success); font-weight: 600;">
        ✅ Correct: ${correct}
      </div>
      <div style="color: var(--color-error); font-weight: 600;">
        ❌ Mistakes: ${mistakes}
      </div>
    </div>
    <div style="font-size: 0.9em; opacity: 0.8;">
      Total Questions: ${total}
    </div>
  `;

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
