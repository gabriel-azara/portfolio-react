const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', function() {
  document.body.classList.toggle('dark-theme');
  themeToggle.classList.toggle('dark');
});

const themeToggle1 = document.getElementById('theme-toggle');

themeToggle1.addEventListener('click', function () {
  document.body.classList.toggle('dark');
  const theme = document.body.classList.contains('dark') ? 'dark' : 'light';
  setTheme(theme);
});

function setTheme(theme) {
  const themeStyle = document.getElementById('theme-style');
  if (theme === 'dark') {
    themeStyle.href = './styles/styles-dark.css';
  } else {
    themeStyle.href = './styles/styles-light.css';
  }
}
