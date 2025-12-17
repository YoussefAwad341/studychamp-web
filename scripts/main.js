document.addEventListener('DOMContentLoaded', () => {
  let userData = JSON.parse(localStorage.getItem('study_pro_gold')) || null;
  let isDarkMode = false;
  const root = document.documentElement;

  function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    root.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }
});