// Get button and body elements
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Load saved theme if it exists
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'light-mode') {
  body.classList.add('light-mode');
  toggleButton.textContent = '🌞';
} else {
  toggleButton.textContent = '🌙';
}

// Toggle between light and dark mode
toggleButton.addEventListener('click', () => {
  body.classList.toggle('light-mode');
  const isLight = body.classList.contains('light-mode');

  toggleButton.textContent = isLight ? '🌞' : '🌙';
  localStorage.setItem('theme', isLight ? 'light-mode' : '');
});
