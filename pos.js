// ===========================
// POS System - pos.js
// ===========================

// ===========================
// DATA
// ===========================

const CATEGORIES = [
  { id: 'coffee',       name: 'Coffee / Tea',     color: '#2196F3' },
  { id: 'daily',        name: 'Daily Special',    color: '#FF9800' },
  { id: 'cold_drinks',  name: 'Cold Drinks',      color: '#9C27B0' },
  { id: 'pasta',        name: 'Pasta',            color: '#E91E63' },
  { id: 'breakfast',    name: 'Breakfast',        color: '#4CAF50' },
  { id: 'kids',         name: 'Kids',             color: '#00BCD4' },
  { id: 'light',        name: 'Something Light',  color: '#607D8B' },
  { id: 'allday',       name: 'All Day Menu',     color: '#3F51B5' },
  { id: 'cabinet',      name: 'Front Cabinet',    color: '#009688' },
  { id: 'alcohol',      name: 'Alcohol',          color: '#FFC107' },
];

const PRODUCTS = {
  coffee: [
    { id: 'c1',  name: 'Cappuccino',         price: 5.20,  color: '#FFC107' },
    { id: 'c2',  name: 'Latte',              price: 5.20,  color: '#FFC107' },
    { id: 'c3',  name: 'Chai Latte',         price: 5.20,  color: '#9C27B0' },
    { id: 'c4',  name: 'Coffee Bean 1kg',    price: 55.00, color: '#9C27B0' },
    { id: 'c5',  name: 'Open Drink',         price: null,  color: '#4CAF50', variable: true },
    { id: 'c6',  name: 'Flat White',         price: 5.20,  color: '#3F51B5' },
    { id: 'c7',  name: 'Long Black',         price: 5.20,  color: '#4CAF50' },
    { id: 'c8',  name: 'Matcha',             price: 5.20,  color: '#607D8B' },
    { id: 'c9',  name: 'Baby Chino',         price: 2.00,  color: '#4CAF50' },
    { id: 'c10', name: 'Alt Milk Full Bottle',price: 6.00, color: '#FF9800' },
    { id: 'c11', name: 'Mocha',              price: 5.20,  color: '#FFC107' },
    { id: 'c12', name: 'Dirty Chai',         price: 5.20,  color: '#E91E63' },
    { id: 'c13', name: 'Tea',                price: 5.00,  color: '#FF9800' },
    { id: 'c14', name: 'Espresso',           price: 3.00,  color: '#FFC107' },
    { id: 'c15', name: 'Custom Item',        price: null,  color: '#3F51B5', variable: true },
    { id: 'c16', name: 'Piccolo',            price: 3.50,  color: '#4CAF50' },
    { id: 'c17', name: 'Hot Chocolate',      price: 5.20,  color: '#E91E63' },
    { id: 'c18', name: 'Coffee Beans 250g',  price: 15.00, color: '#FF9800' },
    { id: 'c19', name: 'Macchiato',          price: 5.20,  color: '#E91E63' },
  ],
  cold_drinks: [
    { id: 'cd1',  name: 'Iced Long Black',       price: 9.00, color: '#3F51B5' },
    { id: 'cd2',  name: 'Iced Mocha',            price: 6.50, color: '#3F51B5' },
    { id: 'cd3',  name: 'Energy Drink',          price: 5.50, color: '#4CAF50' },
    { id: 'cd4',  name: 'Pop Top',               price: 3.50, color: '#E91E63' },
    { id: 'cd5',  name: 'Crush Drink',           price: 9.00, color: '#FFC107' },
    { id: 'cd6',  name: 'Iced Strawberry Matcha Latte', price: 8.00, color: '#4CAF50' },
    { id: 'cd7',  name: 'Iced Latte',            price: 7.00, color: '#9C27B0' },
    { id: 'cd8',  name: 'Iced Coffee',           price: 8.00, color: '#4CAF50' },
    { id: 'cd9',  name: 'Water',                 price: 4.00, color: '#607D8B' },
    { id: 'cd10', name: 'Open Drink',            price: null, color: '#9C27B0', variable: true },
    { id: 'cd11', name: 'Refreshing Drink',      price: 8.00, color: '#FF9800' },
    { id: 'cd12', name: "Noah's Juice",          price: 6.50, color: '#FF9800' },
    { id: 'cd13', name: 'Iced Cappuccino',       price: 8.50, color: '#FFC107' },
    { id: 'cd14', name: 'Iced Chocolate',        price: 8.00, color: '#E91E63' },
    { id: 'cd15', name: 'Sparkling Water',       price: 6.00, color: '#4CAF50' },
    { id: 'cd16', name: 'Iced Dirty Chai',       price: 8.00, color: '#E91E63' },
    { id: 'cd17', name: 'Espresso Sunrise',      price: 8.00, color: '#FF9800' },
    { id: 'cd18', name: 'Cold Brew',             price: 7.50, color: '#607D8B' },
    { id: 'cd19', name: 'Iced Chai Latte',       price: 6.50, color: '#9C27B0' },
    { id: 'cd20', name: 'Soft Drink',            price: 3.50, color: '#FF9800' },
    { id: 'cd21', name: 'Iced Latte',            price: 8.00, color: '#9C27B0' },
    { id: 'cd22', name: 'Iced Matcha',           price: 9.50, color: '#4CAF50' },
    { id: 'cd23', name: 'Iced Coconut Americano',price: 8.00, color: '#FF9800' },
    { id: 'cd24', name: 'Custom Item',           price: null, color: '#3F51B5', variable: true },
  ],
  breakfast: [
    { id: 'b1',  name: 'Eggs Benedict',        price: 22.00, color: '#FFC107' },
    { id: 'b2',  name: 'Smashed Avo',          price: 20.00, color: '#4CAF50' },
    { id: 'b3',  name: 'Big Breakfast',        price: 26.00, color: '#FF9800' },
    { id: 'b4',  name: 'Pancakes',             price: 18.00, color: '#E91E63' },
    { id: 'b5',  name: 'Granola Bowl',         price: 16.00, color: '#9C27B0' },
    { id: 'b6',  name: 'French Toast',         price: 19.00, color: '#FFC107' },
    { id: 'b7',  name: 'Bacon & Egg Roll',     price: 13.00, color: '#607D8B' },
    { id: 'b8',  name: 'Omelette',             price: 21.00, color: '#3F51B5' },
  ],
  light: [
    { id: 'sl1', name: 'Sandwich / Toastie', price: 0.00,  color: '#FF9800' },
    { id: 'sl2', name: 'Bagel',              price: 0.00,  color: '#3F51B5' },
    { id: 'sl3', name: 'Croissant',          price: 0.00,  color: '#E91E63' },
    { id: 'sl4', name: 'Muffin',             price: 6.00,  color: '#4CAF50' },
    { id: 'sl5', name: 'Cookie',             price: 4.50,  color: '#FFC107' },
    { id: 'sl6', name: 'Banana Bread',       price: 6.50,  color: '#FF9800' },
  ],
  pasta: [
    { id: 'p1', name: 'Spaghetti Bolognese', price: 24.00, color: '#E91E63' },
    { id: 'p2', name: 'Carbonara',           price: 25.00, color: '#FFC107' },
    { id: 'p3', name: 'Penne Arrabbiata',    price: 22.00, color: '#FF9800' },
    { id: 'p4', name: 'Gnocchi',             price: 26.00, color: '#9C27B0' },
  ],
  kids: [
    { id: 'k1', name: 'Kids Pasta',    price: 12.00, color: '#4CAF50' },
    { id: 'k2', name: 'Kids Nuggets',  price: 11.00, color: '#FF9800' },
    { id: 'k3', name: 'Kids Sandwich', price: 10.00, color: '#3F51B5' },
  ],
  allday: [
    { id: 'ad1', name: 'Club Sandwich',  price: 18.00, color: '#FFC107' },
    { id: 'ad2', name: 'Caesar Salad',   price: 20.00, color: '#4CAF50' },
    { id: 'ad3', name: 'Burger',         price: 22.00, color: '#FF9800' },
    { id: 'ad4', name: 'Chips',          price: 9.00,  color: '#E91E63' },
    { id: 'ad5', name: 'Soup of Day',    price: 14.00, color: '#607D8B' },
  ],
  daily: [
    { id: 'ds1', name: 'Chef\'s Special', price: 28.00, color: '#FF9800' },
    { id: 'ds2', name: 'Soup + Roll',     price: 16.00, color: '#4CAF50' },
    { id: 'ds3', name: 'Pie of the Day',  price: 14.00, color: '#9C27B0' },
  ],
  cabinet: [
    { id: 'fc1', name: 'Slice of Cake',  price: 8.50, color: '#E91E63' },
    { id: 'fc2', name: 'Tart',           price: 7.00, color: '#FF9800' },
    { id: 'fc3', name: 'Brownie',        price: 6.00, color: '#607D8B' },
    { id: 'fc4', name: 'Bliss Ball',     price: 4.00, color: '#4CAF50' },
  ],
  alcohol: [
    { id: 'a1', name: 'House Wine',     price: 10.00, color: '#9C27B0' },
    { id: 'a2', name: 'Beer',           price: 9.00,  color: '#FFC107' },
    { id: 'a3', name: 'Sparkling Wine', price: 12.00, color: '#E91E63' },
    { id: 'a4', name: 'Spirits',        price: 10.00, color: '#3F51B5' },
  ],
};

const MODIFIERS = {
  coffee: {
    'MILK': [
      { name: 'Full Cream', price: 0 },
      { name: 'Skim',       price: 0 },
      { name: 'Almond',     price: 0.80 },
      { name: 'Oat',        price: 0.80 },
      { name: 'Soy',        price: 0.80 },
      { name: 'Lactose Free',price: 0.80 },
    ],
    'SIZE': [
      { name: 'Regular',   price: 0 },
      { name: 'Large',     price: 0.50 },
      { name: 'Extra Large',price: 1.00 },
    ],
    'EXTRAS': [
      { name: 'Extra Shot', price: 0.50 },
      { name: 'Decaf',      price: 0.50 },
      { name: 'Weak',       price: 0 },
      { name: 'Strong',     price: 0 },
      { name: 'No Sugar',   price: 0 },
      { name: 'Honey',      price: 0.50 },
    ],
  },
  light: {
    'TOASTED/FRESH': [
      { name: 'Toasted',  price: 0 },
      { name: 'Fresh',    price: 0 },
      { name: 'DO NOT MAKE', price: 0 },
    ],
    'MUFFIN': [
      { name: 'Apple Raisin',      price: 0 },
      { name: 'Butterscotch',      price: 0 },
      { name: 'Raspberry White Choc', price: 0 },
      { name: 'Double Choc',       price: 0 },
    ],
    'ICE CREAM / CREAM': [
      { name: 'Ice Cream',    price: 2.00 },
      { name: 'Cream',        price: 0.80 },
      { name: 'Butter',       price: 0.20 },
      { name: 'Blueberry',    price: 0 },
      { name: 'Banana Nut',   price: 0 },
      { name: 'Toasted',      price: 0 },
    ],
  },
};

const TABLES = [
  { id: 'takeaway', name: 'Take Away' },
  { id: 'table1',   name: 'Table 1' },
  { id: 'table2',   name: 'Table 2' },
  { id: 'table3',   name: 'Table 3' },
  { id: 'table4',   name: 'Table 4' },
  { id: 'table5',   name: 'Table 5' },
  { id: 'table6',   name: 'Table 6' },
  { id: 'table7',   name: 'Table 7' },
  { id: 'table8',   name: 'Table 8' },
  { id: 'table9',   name: 'Table 9' },
  { id: 'table10',  name: 'Table 10' },
];

// ===========================
// STATE
// ===========================

const state = {
  activeTable: 'takeaway',
  activeCategory: 'coffee',
  selectedQty: 1,
  orders: {},     // tableId -> [{ id, product, qty, mods, modSelections, unitPrice, lineTotal }]
  modalProduct: null,
  modalSelections: {},
  paymentMethod: 'card',
};

// Init orders per table
TABLES.forEach(t => { state.orders[t.id] = []; });

// ===========================
// HELPERS
// ===========================

function fmt(n) {
  return '$' + n.toFixed(2);
}

function getOrder() {
  return state.orders[state.activeTable];
}

function getOrderTotal() {
  return getOrder().reduce((s, item) => s + item.lineTotal, 0);
}

function getModPrice(product, selections) {
  let extra = 0;
  for (const [group, chosenName] of Object.entries(selections)) {
    const mods = (MODIFIERS[product.catId] || {})[group] || [];
    const mod = mods.find(m => m.name === chosenName);
    if (mod) extra += mod.price;
  }
  return extra;
}

function getModLabel(selections) {
  const vals = Object.values(selections).filter(Boolean);
  return vals.length ? vals.join(', ') : '';
}

function tableHasOrder(tableId) {
  return (state.orders[tableId] || []).length > 0;
}

// ===========================
// RENDER
// ===========================

function renderAll() {
  renderTableBar();
  renderCategoryBar();
  renderProducts();
  renderOrder();
}

// Table bar
function renderTableBar() {
  const bar = document.getElementById('tableBar');
  bar.innerHTML = TABLES.map(t => `
    <div class="table-tab ${t.id === state.activeTable ? 'active' : ''} ${tableHasOrder(t.id) ? 'has-order' : ''}"
         onclick="selectTable('${t.id}')">
      <div class="tab-dot"></div>
      <div class="tab-name">${t.name}</div>
    </div>
  `).join('');
}

// Category bar
function renderCategoryBar() {
  const bar = document.getElementById('categoryBar');
  bar.innerHTML = CATEGORIES.map(c => `
    <div class="cat-tab ${c.id === state.activeCategory ? 'active' : ''}"
         onclick="selectCategory('${c.id}')">
      <div class="cat-color-bar" style="background:${c.color}"></div>
      <div class="cat-name">${c.name}</div>
    </div>
  `).join('');
}

// Product grid
function renderProducts() {
  const grid = document.getElementById('productGrid');
  const products = (PRODUCTS[state.activeCategory] || []);

  grid.innerHTML = products.map((p, i) => `
    <div class="product-card ${p.variable ? 'variable' : ''}"
         style="animation-delay:${i * 0.02}s"
         onclick="onProductClick('${p.id}', '${state.activeCategory}')">
      <div class="corner-tag" style="border-color: transparent ${p.color} transparent transparent"></div>
      <div class="product-name">${p.name}</div>
      <div class="product-price">${p.variable ? 'Variable' : fmt(p.price)}</div>
    </div>
  `).join('');
}

// Order panel
function renderOrder() {
  const items = getOrder();
  const wrapper = document.getElementById('orderItems');
  const totalEl = document.getElementById('orderTotal');
  const subtotalEl = document.getElementById('orderSubtotal');
  const payBtn = document.getElementById('payBtn');
  const headerType = document.getElementById('headerOrderType');

  headerType.textContent = TABLES.find(t => t.id === state.activeTable)?.name || 'Take Away';

  if (items.length === 0) {
    wrapper.innerHTML = `
      <div class="order-empty">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
          <line x1="3" y1="6" x2="21" y2="6"/>
          <path d="M16 10a4 4 0 01-8 0"/>
        </svg>
        <p>Tap an item to start a new order.</p>
      </div>`;
    subtotalEl.textContent = '$0.00';
    totalEl.textContent = '$0.00';
    payBtn.disabled = true;
    return;
  }

  const total = getOrderTotal();
  subtotalEl.textContent = fmt(total);
  totalEl.textContent = fmt(total);
  payBtn.disabled = false;

  wrapper.innerHTML = items.map((item, idx) => `
    <div class="order-item" data-idx="${idx}">
      <div class="item-qty-ctrl">
        <button class="qty-btn" onclick="changeItemQty(${idx}, 1)">+</button>
        <span class="item-qty">${item.qty}</span>
        <button class="qty-btn" onclick="changeItemQty(${idx}, -1)">−</button>
      </div>
      <div class="item-info">
        <div class="item-name">${item.product.name}</div>
        ${item.modLabel ? `<div class="item-mods">${item.modLabel}</div>` : ''}
      </div>
      <div class="item-price">${fmt(item.lineTotal)}</div>
      <button class="item-remove" onclick="removeItem(${idx})" title="Remove">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
    </div>
  `).join('');
}

// ===========================
// INTERACTIONS
// ===========================

function selectTable(id) {
  state.activeTable = id;
  renderTableBar();
  renderOrder();
}

function selectCategory(id) {
  state.activeCategory = id;
  renderCategoryBar();
  renderProducts();
}

function setQty(qty) {
  state.selectedQty = qty;
  document.querySelectorAll('.qty-chip').forEach(el => {
    el.classList.toggle('active', parseInt(el.dataset.qty) === qty);
  });
}

function onProductClick(productId, catId) {
  const product = (PRODUCTS[catId] || []).find(p => p.id === productId);
  if (!product) return;

  const catMods = MODIFIERS[catId];
  const hasMods = catMods && Object.keys(catMods).length > 0;

  if (hasMods) {
    openModifierModal(product, catId);
  } else {
    addToOrder(product, catId, {});
  }
}

function addToOrder(product, catId, selections) {
  product = { ...product, catId };
  const basePrice = product.variable ? 0 : product.price;
  const modExtra = getModPrice(product, selections);
  const unitPrice = basePrice + modExtra;
  const lineTotal = unitPrice * state.selectedQty;
  const modLabel = getModLabel(selections);

  const order = getOrder();

  // Try to merge with existing identical item
  const existing = order.find(i =>
    i.product.id === product.id && i.modLabel === modLabel
  );

  if (existing) {
    existing.qty += state.selectedQty;
    existing.lineTotal = existing.unitPrice * existing.qty;
  } else {
    order.push({
      id: Date.now(),
      product,
      qty: state.selectedQty,
      modLabel,
      unitPrice,
      lineTotal,
    });
  }

  renderOrder();
  renderTableBar();
  showToast(`Added: ${product.name}${modLabel ? ' · ' + modLabel : ''}`);
}

function changeItemQty(idx, delta) {
  const order = getOrder();
  order[idx].qty += delta;
  if (order[idx].qty <= 0) {
    order.splice(idx, 1);
  } else {
    order[idx].lineTotal = order[idx].unitPrice * order[idx].qty;
  }
  renderOrder();
  renderTableBar();
}

function removeItem(idx) {
  getOrder().splice(idx, 1);
  renderOrder();
  renderTableBar();
}

// ===========================
// MODIFIER MODAL
// ===========================

function openModifierModal(product, catId) {
  state.modalProduct = { ...product, catId };
  state.modalSelections = {};

  const modal = document.getElementById('modModal');
  const title = document.getElementById('modModalTitle');
  const subtitle = document.getElementById('modModalSubtitle');
  const body = document.getElementById('modModalBody');

  title.textContent = product.name;
  subtitle.textContent = product.variable ? 'Variable price' : fmt(product.price);

  const catMods = MODIFIERS[catId] || {};
  body.innerHTML = Object.entries(catMods).map(([group, mods]) => `
    <div class="modifier-group-label">${group}</div>
    <div class="mod-grid">
      ${mods.map(m => `
        <div class="mod-chip" data-group="${group}" data-name="${m.name}"
             onclick="toggleMod('${group}', '${m.name}')">
          <div class="mod-name">${m.name}</div>
          <div class="mod-price">${m.price > 0 ? '+' + fmt(m.price) : 'incl.'}</div>
        </div>
      `).join('')}
    </div>
  `).join('');

  modal.classList.add('open');
}

function toggleMod(group, name) {
  // Single-select per group
  state.modalSelections[group] =
    state.modalSelections[group] === name ? '' : name;

  document.querySelectorAll(`.mod-chip[data-group="${group}"]`).forEach(el => {
    el.classList.toggle('selected', el.dataset.name === state.modalSelections[group]);
  });
}

function closeModModal() {
  document.getElementById('modModal').classList.remove('open');
  state.modalProduct = null;
  state.modalSelections = {};
}

function confirmMod() {
  if (!state.modalProduct) return;
  addToOrder(state.modalProduct, state.modalProduct.catId, state.modalSelections);
  closeModModal();
}

// ===========================
// PAYMENT MODAL
// ===========================

function openPayModal() {
  const total = getOrderTotal();
  if (total <= 0) return;

  document.getElementById('payAmount').textContent = fmt(total);
  document.getElementById('payModal').classList.add('open');
  selectPayMethod('card');
}

function closePayModal() {
  document.getElementById('payModal').classList.remove('open');
}

function selectPayMethod(method) {
  state.paymentMethod = method;
  document.querySelectorAll('.pay-method-btn').forEach(el => {
    el.classList.toggle('selected', el.dataset.method === method);
  });
}

function confirmPayment() {
  const total = getOrderTotal();
  state.orders[state.activeTable] = [];
  closePayModal();
  renderAll();
  showToast(`✓ Paid ${fmt(total)} via ${state.paymentMethod}`);
}

// ===========================
// TOAST
// ===========================

let toastTimer = null;

function showToast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 2200);
}

// ===========================
// INIT
// ===========================

document.addEventListener('DOMContentLoaded', () => {
  renderAll();

  // Close modals on overlay click
  document.getElementById('modModal').addEventListener('click', function(e) {
    if (e.target === this) closeModModal();
  });
  document.getElementById('payModal').addEventListener('click', function(e) {
    if (e.target === this) closePayModal();
  });
});
