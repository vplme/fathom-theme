(function () {
  var root = document.documentElement;
  var btn = document.getElementById('theme-toggle');
  if (!btn) return;

  function label() {
    btn.textContent = root.classList.contains('dark') ? '☀ light' : '☾ dark';
  }

  btn.addEventListener('click', function () {
    root.classList.toggle('dark');
    try {
      localStorage.setItem('fathom-theme', root.classList.contains('dark') ? 'dark' : 'light');
    } catch (e) {}
    label();
  });

  label();
})();
