/* ── Cart — persisted in localStorage ── */
let cart = JSON.parse(localStorage.getItem('sc_cart') || '[]');

function saveCart() {
  localStorage.setItem('sc_cart', JSON.stringify(cart));
}

function addToCart(id) {
  const p = products.find(x => x.id === id);
  const ex = cart.find(x => x.id === id);
  if (ex) ex.qty++;
  else cart.push({ ...p, qty: 1 });
  saveCart();
  updateCartUI();
  showToast(p.name + ' added to cart!');
}

function removeFromCart(id) {
  cart = cart.filter(x => x.id !== id);
  saveCart();
  updateCartUI();
}

function changeQty(id, d) {
  const item = cart.find(x => x.id === id);
  if (!item) return;
  item.qty += d;
  if (item.qty <= 0) removeFromCart(id);
  else { saveCart(); updateCartUI(); }
}

function updateCartUI() {
  const tot = cart.reduce((s, i) => s + i.qty, 0);
  document.getElementById('cartCount').textContent = tot;
  const sum = cart.reduce((s, i) => s + i.price * i.qty, 0);
  document.getElementById('cartTotal').textContent = '₹' + sum.toLocaleString('en-IN');

  const el = document.getElementById('cartItems');
  if (!cart.length) {
    el.innerHTML = `<div class="cart-empty">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" opacity="0.3">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
        <line x1="3" y1="6" x2="21" y2="6"/>
        <path d="M16 10a4 4 0 01-8 0"/>
      </svg>
      <p>Your cart is empty</p>
    </div>`;
    return;
  }

  el.innerHTML = cart.map(i => {
    const thumb = svgFor(i.svg, i.color).replace(/width="\d+" height="\d+"/, 'width="50" height="50"');
    return `<div class="cart-item">
      <div class="cart-item-img">${thumb}</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${i.name}</div>
        <div class="cart-item-price">₹${i.price.toLocaleString('en-IN')}</div>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="changeQty(${i.id},-1)">−</button>
          <span class="qty-num">${i.qty}</span>
          <button class="qty-btn" onclick="changeQty(${i.id},1)">+</button>
        </div>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart(${i.id})">✕</button>
    </div>`;
  }).join('');
}

function toggleCart() {
  document.getElementById('cartOverlay').classList.toggle('open');
  document.getElementById('cartDrawer').classList.toggle('open');
}

function checkout() {
  showToast('Redirecting to checkout…');
  setTimeout(toggleCart, 800);
}
