const theme = document.querySelector('#theme')

const isDark = localStorage.theme !== 'light'

if (isDark) {
  document.body.classList.add('dark')
  theme.textContent = '☀'
}

theme.onclick = () => {
  const dark = document.body.classList.toggle('dark')

  localStorage.theme = dark ? 'dark' : 'light'
  theme.textContent = dark ? '☀' : '☾'
}