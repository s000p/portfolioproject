fetch('menu.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('menu-placeholder').innerHTML = html;
  })
  .catch(err => console.error('Failed to load menu:', err));