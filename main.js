document.addEventListener('DOMContentLoaded', function() {
  const htmlElement = document.documentElement;
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
  
  function updateDarkMode() {
    const isDark = prefersDarkMode.matches;
    if (isDark) {
      htmlElement.style.colorScheme = 'dark';
      if (darkModeToggle) {
        darkModeToggle.textContent = '☀️';
      }
    } else {
      htmlElement.style.colorScheme = 'light';
      if (darkModeToggle) {
        darkModeToggle.textContent = '🌙';
      }
    }
  }
  
  updateDarkMode();
  
  if (darkModeToggle) {
    darkModeToggle.addEventListener('click', function() {
      const isDark = htmlElement.style.colorScheme === 'dark';
      htmlElement.style.colorScheme = isDark ? 'light' : 'dark';
      this.textContent = isDark ? '🌙' : '☀️';
      localStorage.setItem('colorScheme', isDark ? 'light' : 'dark');
    });
  }
  
  prefersDarkMode.addEventListener('change', updateDarkMode);
  
  const storedScheme = localStorage.getItem('colorScheme');
  if (storedScheme) {
    htmlElement.style.colorScheme = storedScheme;
    if (darkModeToggle) {
      darkModeToggle.textContent = storedScheme === 'dark' ? '☀️' : '🌙';
    }
  }
});
