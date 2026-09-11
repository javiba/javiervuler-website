document.addEventListener('DOMContentLoaded', function() {
  const htmlElement = document.documentElement;
  const darkModeToggle = document.getElementById('dark-mode-toggle');

  function applyMode(isDark) {
    htmlElement.classList.toggle('dark-mode', isDark);
    htmlElement.style.colorScheme = isDark ? 'dark' : 'light';
    if (darkModeToggle) {
      darkModeToggle.textContent = isDark ? '☀️' : '🌙';
    }
  }

  // El sitio siempre arranca en modo claro, salvo que el visitante
  // haya elegido modo oscuro antes (se guarda en su navegador).
  const storedScheme = localStorage.getItem('colorScheme');
  applyMode(storedScheme === 'dark');

  if (darkModeToggle) {
    darkModeToggle.addEventListener('click', function() {
      const nowDark = !htmlElement.classList.contains('dark-mode');
      applyMode(nowDark);
      localStorage.setItem('colorScheme', nowDark ? 'dark' : 'light');
    });
  }
});
