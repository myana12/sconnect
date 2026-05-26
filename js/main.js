/* ── Shared utilities ── */

function showToast(msg) {
  const t = document.getElementById('toast');
  document.getElementById('toastMsg').textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2800);
}

/* Redirect to products page with optional category filter */
function filterAndGo(cat) {
  const url = cat && cat !== 'All'
    ? 'products.html?cat=' + encodeURIComponent(cat)
    : 'products.html';
  window.location.href = url;
}

/* Back-to-top visibility */
window.addEventListener('scroll', () => {
  const btn = document.getElementById('backTop');
  if (btn) btn.classList.toggle('show', window.scrollY > 400);
});
