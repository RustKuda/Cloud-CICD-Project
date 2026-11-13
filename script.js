'use strict';

const toggleButton = document.getElementById('theme-toggle');

function updateThemeLabel() {
  const isDark = document.body.classList.contains('dark');
  toggleButton.setAttribute('aria-pressed', String(isDark));
  toggleButton.textContent = isDark ? 'Включить светлую тему' : 'Включить тёмную тему';
}

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  updateThemeLabel();
});

updateThemeLabel();
