(function () {
  document.querySelectorAll('[data-shuffle]').forEach(function (grid) {
    var items = Array.prototype.slice.call(grid.children);
    for (var i = items.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = items[i];
      items[i] = items[j];
      items[j] = t;
    }
    items.forEach(function (el) {
      grid.appendChild(el);
    });
  });
})();

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
