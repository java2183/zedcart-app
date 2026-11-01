const merchants = [
  {
    id: "woodlands-market", name: "Woodlands Fresh Market", category: "Groceries", city: "Lusaka", province: "Lusaka Province",
    description: "Fresh produce and daily essentials, picked with care", cuisine: "Groceries · Produce",
    rating: "4.9", reviews: "320+", time: "20–30 min", fee: 25, badge: "NEIGHBORHOOD FAVORITE",
    photo: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1000&q=85",
    caption: "Fresh, every day",
    products: [
      { id: "tomatoes", name: "Fresh tomatoes", description: "Ripe and ready for today's relish · 1 kg", price: 38 },
      { id: "swee-potatoes", name: "Sweet potatoes", description: "Locally grown · 1 kg", price: 32 },
      { id: "rape", name: "Fresh rape", description: "A bunch of leafy greens", price: 18 },
      { id: "eggs", name: "Free-range eggs", description: "Farm fresh · 6 count", price: 42 },
      { id: "maize-meal", name: "Breakfast mealie meal", description: "Locally milled · 5 kg", price: 115 }
    ]
  },
  {
    id: "lusaka-kitchen", name: "Lusaka Kitchen", category: "Restaurants", city: "Lusaka", province: "Lusaka Province",
    description: "Comforting Zambian favorites, made fresh", cuisine: "Zambian · Local favorites",
    rating: "4.8", reviews: "180+", time: "25–35 min", fee: 20, badge: "FRESH & LOCAL",
    photo: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1000&q=85",
    caption: "A taste of home",
    products: [
      { id: "nshima-chicken", name: "Nshima & village chicken", description: "Served with seasonal vegetables", price: 145 },
      { id: "ifisashi", name: "Nshima & ifisashi", description: "Groundnut greens, a Zambian classic", price: 85 },
      { id: "kapenta", name: "Nshima & kapenta", description: "Dried kapenta with tomato and onion", price: 95 },
      { id: "chikanda", name: "Chikanda snack", description: "Traditional African polony · 2 slices", price: 35 }
    ]
  },
  {
    id: "garden-city-cafe", name: "Garden City Café", category: "Coffee", city: "Lusaka", province: "Lusaka Province",
    description: "Good coffee, fresh bakes, and a warm welcome", cuisine: "Coffee · Bakery",
    rating: "4.9", reviews: "240+", time: "15–25 min", fee: 15, badge: "LOCAL LOVE",
    photo: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1000&q=85",
    caption: "Your cozy corner",
    products: [
      { id: "cappuccino", name: "Zambian coffee cappuccino", description: "Locally roasted espresso, steamed milk", price: 55 },
      { id: "iced-coffee", name: "Iced coffee", description: "House-brewed and served over ice", price: 48 },
      { id: "scone", name: "Fresh-baked scone", description: "Baked this morning · 2 pieces", price: 35 },
      { id: "fritters", name: "Vitumbuwa", description: "Sweet fried dough · 4 pieces", price: 30 }
    ]
  },
  {
    id: "bloom-basket", name: "Bloom & Basket", category: "Shops", city: "Lusaka", province: "Lusaka Province",
    description: "Flowers, gifts, and thoughtful little finds", cuisine: "Flowers · Gifts",
    rating: "5.0", reviews: "96+", time: "30–45 min", fee: 35, badge: "MADE WITH LOVE",
    photo: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1000&q=85",
    caption: "A bunch of joy",
    products: [
      { id: "market-bunch", name: "Lusaka market bouquet", description: "A cheerful mix of seasonal blooms", price: 280 },
      { id: "sunflowers", name: "Sunflower bunch", description: "Brighten someone's day · 5 stems", price: 220 },
      { id: "gift-bag", name: "Handwoven gift basket", description: "Made by local artisans", price: 190 }
    ]
  },
  {
    id: "kamwala-pantry", name: "Kamwala Pantry", category: "Groceries", city: "Lusaka", province: "Lusaka Province",
    description: "Pantry staples and local everyday essentials", cuisine: "Groceries · Pantry",
    rating: "4.7", reviews: "140+", time: "15–25 min", fee: 18, badge: "PANTRY PICKS",
    photo: "https://images.unsplash.com/photo-1604719312566-8912e9c8a213?auto=format&fit=crop&w=1000&q=85",
    caption: "Stock up, stay in",
    products: [
      { id: "roller-meal", name: "Roller mealie meal", description: "Family size · 25 kg", price: 330 },
      { id: "cooking-oil", name: "Cooking oil", description: "Pure vegetable oil · 2 litres", price: 98 },
      { id: "beans", name: "Sugar beans", description: "Locally grown · 1 kg", price: 48 },
      { id: "peanut-butter", name: "Smooth peanut butter", description: "Locally made · 375 g", price: 62 }
    ]
  },
  {
    id: "moyo-goods", name: "Moyo Home & Care", category: "Wellness", city: "Lusaka", province: "Lusaka Province",
    description: "Everyday home and personal-care essentials", cuisine: "Home · Personal care",
    rating: "4.8", reviews: "87+", time: "25–35 min", fee: 22, badge: "FEEL-GOOD FINDS",
    photo: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=1000&q=85",
    caption: "A little care, close by",
    products: [
      { id: "handwash", name: "Gentle hand wash", description: "Fresh everyday clean · 500 ml", price: 48 },
      { id: "lotion", name: "Shea body lotion", description: "Daily moisture · 400 ml", price: 72 },
      { id: "laundry-soap", name: "Laundry soap powder", description: "Family pack · 1 kg", price: 58 }
    ]
  },
  {
    id: "lusaka-fuel-stop", name: "Lusaka Fuel Stop", category: "Filling stations", city: "Lusaka", province: "Lusaka Province",
    description: "Fuel, motoring essentials, and a handy station shop", cuisine: "Filling station · Convenience",
    rating: "4.7", reviews: "112+", time: "20–30 min", fee: 25, badge: "SAMPLE STATION",
    photo: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1000&q=85",
    caption: "Fuel up & go",
    products: [
      { id: "lusaka-petrol", name: "Petrol 95", description: "Per litre · Sample price, available at station only", price: 29.99, stationOnly: true },
      { id: "lusaka-diesel", name: "Diesel", description: "Per litre · Sample price, available at station only", price: 28.98, stationOnly: true },
      { id: "lusaka-engine-oil", name: "Engine oil", description: "1 litre · Sample convenience-shop item", price: 145 },
      { id: "lusaka-water", name: "Bottled water", description: "Still water · 1.5 litres", price: 18 }
    ]
  },
  {
    id: "woodlands-service-station", name: "Woodlands Service Station", category: "Filling stations", city: "Lusaka", province: "Lusaka Province",
    description: "A neighborhood fuel stop with everyday essentials", cuisine: "Filling station · Convenience",
    rating: "4.6", reviews: "74+", time: "25–35 min", fee: 22, badge: "SAMPLE STATION",
    photo: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1000&q=85",
    caption: "Your local pit stop",
    products: [
      { id: "woodlands-petrol", name: "Petrol 95", description: "Per litre · Sample price, available at station only", price: 29.99, stationOnly: true },
      { id: "woodlands-diesel", name: "Diesel", description: "Per litre · Sample price, available at station only", price: 28.98, stationOnly: true },
      { id: "woodlands-snack", name: "Crisps", description: "Ready-to-go snack · 100 g", price: 20 },
      { id: "woodlands-wiper", name: "Windshield washer fluid", description: "1 litre · Sample convenience-shop item", price: 55 }
    ]
  },
  {
    id: "ndola-fresh-market", name: "Ndola Fresh Market", category: "Groceries", city: "Ndola", province: "Copperbelt Province",
    description: "Fresh produce and pantry staples from local vendors", cuisine: "Groceries · Produce",
    rating: "4.8", reviews: "86+", time: "20–30 min", fee: 24, badge: "COPPERBELT FAVORITE",
    photo: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1000&q=85", caption: "Fresh from the market",
    products: [
      { id: "ndola-tomatoes", name: "Fresh tomatoes", description: "Locally grown · 1 kg", price: 38 },
      { id: "ndola-maize", name: "Mealie meal", description: "Breakfast meal · 5 kg", price: 115 },
      { id: "ndola-greens", name: "Fresh rape", description: "A bunch of leafy greens", price: 18 }
    ]
  },
  {
    id: "kitwe-kitchen", name: "Kitwe Kitchen", category: "Restaurants", city: "Kitwe", province: "Copperbelt Province",
    description: "Comfort food and Copperbelt favorites", cuisine: "Zambian · Meals",
    rating: "4.8", reviews: "92+", time: "25–35 min", fee: 22, badge: "MADE FRESH",
    photo: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1000&q=85", caption: "Good food, close by",
    products: [
      { id: "kitwe-nshima", name: "Nshima & beef stew", description: "Served with seasonal greens", price: 125 },
      { id: "kitwe-ifisashi", name: "Nshima & ifisashi", description: "Groundnut greens, cooked fresh", price: 82 },
      { id: "kitwe-vitumbuwa", name: "Vitumbuwa", description: "Sweet fried dough · 4 pieces", price: 30 }
    ]
  },
  {
    id: "livingstone-market", name: "Livingstone Market Basket", category: "Groceries", city: "Livingstone", province: "Southern Province",
    description: "Fresh local produce and everyday essentials", cuisine: "Groceries · Local produce",
    rating: "4.9", reviews: "78+", time: "20–35 min", fee: 25, badge: "SOUTHERN FAVORITE",
    photo: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1000&q=85", caption: "A basket of local",
    products: [
      { id: "livingstone-bananas", name: "Ripe bananas", description: "A fresh local bunch", price: 28 },
      { id: "livingstone-groundnuts", name: "Roasted groundnuts", description: "Locally grown · 500 g", price: 40 },
      { id: "livingstone-eggs", name: "Farm-fresh eggs", description: "6 count", price: 42 }
    ]
  },
  {
    id: "chipata-farm-basket", name: "Chipata Farm Basket", category: "Groceries", city: "Chipata", province: "Eastern Province",
    description: "Seasonal produce and pantry favorites", cuisine: "Groceries · Farm fresh",
    rating: "4.8", reviews: "61+", time: "25–35 min", fee: 20, badge: "EASTERN FAVORITE",
    photo: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1000&q=85", caption: "From nearby farms",
    products: [
      { id: "chipata-groundnuts", name: "Raw groundnuts", description: "Locally grown · 1 kg", price: 55 },
      { id: "chipata-maize", name: "White maize meal", description: "Locally milled · 5 kg", price: 110 },
      { id: "chipata-onions", name: "Red onions", description: "A market bag · 1 kg", price: 30 }
    ]
  },
  {
    id: "kabwe-corner-shop", name: "Kabwe Corner Shop", category: "Shops", city: "Kabwe", province: "Central Province",
    description: "Useful everyday finds from a local family shop", cuisine: "Local shop · Essentials",
    rating: "4.7", reviews: "54+", time: "20–30 min", fee: 20, badge: "LOCALLY OWNED",
    photo: "https://images.unsplash.com/photo-1604719312566-8912e9c8a213?auto=format&fit=crop&w=1000&q=85", caption: "Your everyday shop",
    products: [
      { id: "kabw-soap", name: "Laundry soap powder", description: "Family pack · 1 kg", price: 58 },
      { id: "kabw-sugar", name: "White sugar", description: "Locally packed · 2 kg", price: 52 },
      { id: "kabw-water", name: "Bottled water", description: "Still water · 1.5 litres", price: 18 }
    ]
  },
  {
    id: "solwezi-fuel-stop", name: "Solwezi Fuel Stop", category: "Filling stations", city: "Solwezi", province: "North-Western Province",
    description: "A local fuel stop and motoring essentials shop", cuisine: "Filling station · Convenience",
    rating: "4.7", reviews: "47+", time: "25–35 min", fee: 25, badge: "SAMPLE STATION",
    photo: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1000&q=85", caption: "Your local pit stop",
    products: [
      { id: "solwezi-petrol", name: "Petrol 95", description: "Per litre · Sample price, available at station only", price: 29.99, stationOnly: true },
      { id: "solwezi-oil", name: "Engine oil", description: "1 litre · Sample convenience-shop item", price: 145 },
      { id: "solwezi-water", name: "Bottled water", description: "Still water · 1.5 litres", price: 18 }
    ]
  },
  {
    id: "kasama-market", name: "Kasama Market Pantry", category: "Groceries", city: "Kasama", province: "Northern Province",
    description: "Market-fresh ingredients and kitchen staples", cuisine: "Groceries · Pantry",
    rating: "4.8", reviews: "52+", time: "25–35 min", fee: 22, badge: "NORTHERN FAVORITE",
    photo: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1000&q=85", caption: "Good things from up north",
    products: [
      { id: "kasama-beans", name: "Sugar beans", description: "Locally grown · 1 kg", price: 48 },
      { id: "kasama-tomatoes", name: "Fresh tomatoes", description: "Market-picked · 1 kg", price: 38 },
      { id: "kasama-greens", name: "Fresh greens", description: "A seasonal bunch", price: 18 }
    ]
  },
  {
    id: "mongu-fresh-market", name: "Mongu Fresh Market", category: "Groceries", city: "Mongu", province: "Western Province",
    description: "Fresh food and daily essentials from local sellers", cuisine: "Groceries · Produce",
    rating: "4.8", reviews: "49+", time: "25–35 min", fee: 22, badge: "WESTERN FAVORITE",
    photo: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1000&q=85", caption: "Fresh, close to home",
    products: [
      { id: "mongu-fish", name: "Dried fish", description: "Market portion · 500 g", price: 75 },
      { id: "mongu-maize", name: "Mealie meal", description: "Breakfast meal · 5 kg", price: 115 },
      { id: "mongu-onions", name: "Red onions", description: "A market bag · 1 kg", price: 30 }
    ]
  },
  {
    id: "mansa-home-care", name: "Mansa Home & Care", category: "Wellness", city: "Mansa", province: "Luapula Province",
    description: "Personal-care essentials and home comforts", cuisine: "Home · Personal care",
    rating: "4.7", reviews: "43+", time: "25–35 min", fee: 22, badge: "LOCALLY OWNED",
    photo: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=1000&q=85", caption: "A little care, close by",
    products: [
      { id: "mansa-soap", name: "Gentle hand wash", description: "Everyday clean · 500 ml", price: 48 },
      { id: "mansa-lotion", name: "Shea body lotion", description: "Daily moisture · 400 ml", price: 72 },
      { id: "mansa-washing", name: "Laundry soap powder", description: "Family pack · 1 kg", price: 58 }
    ]
  },
  {
    id: "chinsali-pantry", name: "Chinsali Pantry", category: "Groceries", city: "Chinsali", province: "Muchinga Province",
    description: "Locally sourced staples for your kitchen", cuisine: "Groceries · Pantry",
    rating: "4.8", reviews: "38+", time: "25–35 min", fee: 20, badge: "MUCHINGA FAVORITE",
    photo: "https://images.unsplash.com/photo-1604719312566-8912e9c8a213?auto=format&fit=crop&w=1000&q=85", caption: "From the heart of Muchinga",
    products: [
      { id: "chinsali-beans", name: "Sugar beans", description: "Locally grown · 1 kg", price: 48 },
      { id: "chinsali-maize", name: "Breakfast mealie meal", description: "Locally milled · 5 kg", price: 115 },
      { id: "chinsali-tomatoes", name: "Fresh tomatoes", description: "Market-picked · 1 kg", price: 38 }
    ]
  },
  {
    id: "choma-kitchen", name: "Choma Kitchen", category: "Restaurants", city: "Choma", province: "Southern Province",
    description: "Zambian comfort food, prepared fresh", cuisine: "Zambian · Local favorites",
    rating: "4.9", reviews: "58+", time: "25–35 min", fee: 22, badge: "MADE FRESH",
    photo: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1000&q=85", caption: "A taste of home",
    products: [
      { id: "choma-nshima", name: "Nshima & village chicken", description: "Served with seasonal vegetables", price: 145 },
      { id: "choma-ifisashi", name: "Nshima & ifisashi", description: "Groundnut greens, cooked fresh", price: 85 },
      { id: "choma-chikanda", name: "Chikanda snack", description: "Traditional African polony · 2 slices", price: 35 }
    ]
  }
];

const state = { category: "All", city: "All", query: "", cart: [], activeMerchant: null, checkout: false, ordered: false, orderProgress: 0, location: null, authRole: "customer", authMode: "login", authSubmitted: false, cartStorageMessage: "" };
const grid = document.querySelector("#merchant-grid");
const searchInput = document.querySelector("#search-input");
const resultLabel = document.querySelector("#result-label");
const merchantDialog = document.querySelector("#merchant-modal");
const cartDialog = document.querySelector("#cart-modal");
const authDialog = document.querySelector("#auth-modal");
let toastTimer;
let locationWatchId = null;
let locationWatchGeneration = 0;
let deliveryTimer = null;

const kwacha = amount => `K${amount.toFixed(2)}`;
const getMerchant = id => merchants.find(merchant => merchant.id === id);
const cartQuantity = productId => state.cart.find(item => item.productId === productId)?.quantity || 0;
const cartStorageKey = "zedcart-demo-cart-v1";
const getTimeGreeting = (date = new Date()) => {
  const hour = date.getHours();
  if (hour >= 5 && hour < 12) return "Good morning";
  if (hour >= 12 && hour < 17) return "Good afternoon";
  return "Good evening";
};

function loadSavedCart() {
  let stored;
  try {
    stored = localStorage.getItem(cartStorageKey);
  } catch {
    state.cartStorageMessage = "Your browser blocked local cart storage. Keep this tab open; your cart may not survive a refresh.";
    return;
  }
  if (!stored) return;
  let saved;
  try {
    saved = JSON.parse(stored);
  } catch {
    state.cartStorageMessage = "A saved cart could not be read, so it was not restored.";
    return;
  }
  if (!saved || saved.version !== 1 || !Array.isArray(saved.items) || saved.items.length > 100) {
    state.cartStorageMessage = "A saved cart has an unsupported format, so it was not restored.";
    return;
  }
  const restored = [];
  const seenProducts = new Set();
  for (const entry of saved.items) {
    const merchant = entry && typeof entry.merchantId === "string" ? getMerchant(entry.merchantId) : null;
    const product = merchant?.products.find(item => item.id === entry.productId);
    if (!product || product.stationOnly || seenProducts.has(product.id) || !Number.isInteger(entry.quantity) || entry.quantity < 1 || entry.quantity > 99) {
      state.cartStorageMessage = "A saved cart contained invalid or unavailable items, so it was not restored.";
      return;
    }
    seenProducts.add(product.id);
    restored.push({ merchantId: merchant.id, productId: product.id, name: product.name, price: product.price, quantity: entry.quantity });
  }
  if (restored.length && restored.some(item => item.merchantId !== restored[0].merchantId)) {
    state.cartStorageMessage = "A saved cart contained items from different businesses, so it was not restored.";
    return;
  }
  state.cart = restored;
}

function saveCart() {
  try {
    localStorage.setItem(cartStorageKey, JSON.stringify({ version: 1, items: state.cart.map(({ merchantId, productId, quantity }) => ({ merchantId, productId, quantity })) }));
    state.cartStorageMessage = "";
  } catch {
    state.cartStorageMessage = "Your browser could not save this cart. Keep this tab open; it may not survive a refresh.";
  }
}

function renderMerchants() {
  const query = state.query.trim().toLowerCase();
  const filtered = merchants.filter(merchant => {
    const matchesCategory = state.category === "All" ||
      (state.category === "Shops" ? ["Shops", "Wellness"].includes(merchant.category) : merchant.category === state.category);
    const searchable = [merchant.name, merchant.category, merchant.description, merchant.cuisine,
      ...merchant.products.flatMap(product => [product.name, product.description])].join(" ").toLowerCase();
    return matchesCategory && (state.city === "All" || merchant.city === state.city) && (!query || searchable.includes(query));
  });
  grid.innerHTML = filtered.map(merchant => `
    <article class="merchant-card">
      <button class="merchant-card-button" type="button" data-action="open-merchant" data-merchant="${merchant.id}" aria-label="View business profile for ${merchant.name}, ${merchant.city}">
        <div class="merchant-photo" style="background-image:url('${merchant.photo}')">
          <span class="merchant-badge">${merchant.badge}</span><span class="photo-caption">${merchant.caption}</span>
        </div>
        <div class="merchant-info">
          <div class="merchant-title-row"><h3 class="merchant-name">${merchant.name}</h3><span class="merchant-rating"><span aria-hidden="true">★</span> ${merchant.rating}</span></div>
          <div class="merchant-meta"><span>${merchant.cuisine}</span><span class="meta-dot">·</span><span>${merchant.city}</span><span class="meta-dot">·</span><span>${merchant.time}</span><span class="meta-dot">·</span><span>${kwacha(merchant.fee)} delivery</span></div>
          <p class="merchant-description">${merchant.description}</p>
        </div>
      </button>
    </article>`).join("");
  document.querySelector("#merchant-title").textContent = state.city === "All" ? "Across Zambia" : `Around ${state.city}`;
  resultLabel.textContent = `${filtered.length} ${filtered.length === 1 ? "place" : "places"} to explore`;
  document.querySelector("#empty-state").hidden = filtered.length > 0;
  grid.hidden = filtered.length === 0;
}

function renderMerchantDetail(merchant) {
  state.activeMerchant = merchant.id;
  document.querySelector("#merchant-detail").innerHTML = `
    <div class="detail-cover" style="background-image:url('${merchant.photo}')">
      <h2 id="modal-title">${merchant.name}</h2><p>${merchant.description}</p>
    </div>
    <div class="detail-summary"><span><strong>★ ${merchant.rating}</strong> (${merchant.reviews} reviews)</span><span>${merchant.category} · ${merchant.cuisine}</span><span>${merchant.city}, ${merchant.province}</span><span>${merchant.time} · ${kwacha(merchant.fee)} delivery</span></div>
    <h3 class="menu-heading">Products &amp; offerings</h3>
    <div class="product-list">${merchant.products.map(product => `
      <div class="product-row">
        <div><p class="product-name">${product.name}</p><p class="product-description">${product.description}</p><div class="product-price">${kwacha(product.price)}</div></div>
        <button class="add-button" type="button" data-action="add-item" data-merchant="${merchant.id}" data-product="${product.id}" ${product.stationOnly ? "disabled aria-label=\"Available at station only; not deliverable in this demo\"" : ""}>${product.stationOnly ? "At station" : cartQuantity(product.id) ? `Added · ${cartQuantity(product.id)}` : "Add +"}</button>
      </div>`).join("")}
    </div>
    <div class="modal-bottom-note">${merchant.category === "Filling stations" ? "Fuel is listed for discovery only and is available at the station; it cannot be added to delivery orders in this demo. Prices are illustrative." : `Delivery in ${merchant.time} · Sample menu for this demo`}</div>`;
  merchantDialog.showModal();
}

function currentCartMerchant() {
  return state.cart.length ? getMerchant(state.cart[0].merchantId) : null;
}

function cartSubtotal() {
  return state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function renderCart() {
  const content = document.querySelector("#cart-content");
  const merchant = currentCartMerchant();
  const count = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  document.querySelector(".cart-count").textContent = count;
  document.querySelector(".cart-button").setAttribute("aria-label", `Open cart, ${count} ${count === 1 ? "item" : "items"}`);
  if (state.ordered) {
    const deliveryStages = ["Order received", "Being prepared", "ZedCart agent assigned", "Demo delivery complete"];
    const progress = deliveryStages.map((stage, index) => `<li class="${index < state.orderProgress ? "complete" : index === state.orderProgress ? "current" : ""}">${stage}${index === 2 ? " · simulated" : index === 3 ? " · simulated" : ""}</li>`).join("");
    content.innerHTML = `<div class="order-success"><span class="success-mark" aria-hidden="true">✓</span><h2 id="cart-title">Demo order received</h2><p>This preview does not place a real order or dispatch a delivery agent. No payment was collected.</p><section class="agent-tracking" aria-label="Simulated ZedCart delivery progress"><div class="agent-tracking-heading"><span aria-hidden="true">✳</span><div><strong>ZedCart agent delivery</strong><small>Sample tracking preview · not a live delivery</small></div></div><ol class="tracking-steps" aria-live="polite">${progress}</ol><p class="agent-tracking-note">${deliveryStages[state.orderProgress]} · simulated status</p></section><button class="primary-button checkout-button" type="button" data-action="finish-order">Back to exploring</button></div>`;
    return;
  }
  if (!merchant) {
    content.innerHTML = `<div class="cart-body"><h2 id="cart-title">Your cart</h2><p class="cart-subtitle">Your neighborhood finds will show up here.</p>${state.cartStorageMessage ? `<p class="storage-notice" role="status">${state.cartStorageMessage}</p>` : ""}<div class="cart-empty"><span aria-hidden="true">🛍️</span><h3>Something good starts here</h3><p>Browse a local shop and add a favorite.</p><button class="primary-button" type="button" data-action="browse-shops">Explore neighborhood shops</button></div></div>`;
    return;
  }
  const subtotal = cartSubtotal();
  const delivery = merchant.fee;
  const deliveryCopy = subtotal >= 250 ? "Free delivery on orders over K250" : `Add ${kwacha(250 - subtotal)} more for free delivery`;
  content.innerHTML = `<div class="cart-body">
    <h2 id="cart-title">${state.checkout ? "Almost there" : "Your cart"}</h2>
    <p class="cart-subtitle">${state.checkout ? `From ${merchant.name} · ${merchant.time}` : `A little neighborhood love from ${merchant.name}`}</p>
    ${state.cart.map(item => `<div class="cart-item">
      <div><div class="cart-item-name">${item.name}</div><div class="cart-item-price">${kwacha(item.price)} each</div></div>
      <div class="quantity-control"><button type="button" data-action="change-quantity" data-product="${item.productId}" data-delta="-1" aria-label="Remove one ${item.name}">−</button><span>${item.quantity}</span><button type="button" data-action="change-quantity" data-product="${item.productId}" data-delta="1" aria-label="Add one ${item.name}">+</button></div>
    </div>`).join("")}
    <div class="cart-totals"><div class="total-row"><span>Subtotal</span><span>${kwacha(subtotal)}</span></div><div class="total-row"><span>Delivery</span><span>${subtotal >= 250 ? "Free" : kwacha(delivery)}</span></div><div class="total-row grand"><span>Estimated total</span><span>${kwacha(subtotal + (subtotal >= 250 ? 0 : delivery))}</span></div></div>
    ${state.cartStorageMessage ? `<p class="storage-notice" role="status">${state.cartStorageMessage}</p>` : `<p class="storage-notice">Cart saved on this device only; it is not synced across devices.</p>`}
    <button class="text-button clear-cart-button" type="button" data-action="clear-cart">Clear cart</button>
    <div class="delivery-callout">${deliveryCopy} <span>·</span> Usually ${merchant.time}</div>
    ${state.checkout ? `<form id="checkout-form">
      <div class="checkout-fields">
        <label>Your name<input name="name" autocomplete="name" required maxlength="80" placeholder="Name for the order"></label>
        <label>Delivery address<input name="address" autocomplete="street-address" required maxlength="160" placeholder="Street address, township"></label>
        <label>Town / city<input name="city" autocomplete="address-level2" required maxlength="80" placeholder="Town or city"></label>
        <label>Province<select name="province" autocomplete="address-level1" required><option value="">Choose a province</option><option>Central Province</option><option>Copperbelt Province</option><option>Eastern Province</option><option>Luapula Province</option><option>Lusaka Province</option><option>Muchinga Province</option><option>North-Western Province</option><option>Northern Province</option><option>Southern Province</option><option>Western Province</option></select></label>
        <label>Delivery note <span>(optional)</span><textarea name="note" maxlength="240" placeholder="Anything your local courier should know?"></textarea></label>
      </div>
      <div class="location-share"><button class="secondary-button" type="button" data-action="${locationWatchId === null ? "share-location" : "stop-location"}">${locationWatchId === null ? "Share my live location" : "Stop sharing location"}</button><p id="location-status" class="location-status" aria-live="polite">${state.location ? `Live location available on this device: ${state.location.latitude.toFixed(5)}, ${state.location.longitude.toFixed(5)} (±${Math.round(state.location.accuracy)} m). Nothing is sent from this demo.` : "Optional. Your browser will ask permission. Location stays on this device in this demo."}</p></div>
      <p class="demo-disclaimer">Demo checkout only: no payment is collected, and no real order or delivery agent is dispatched.</p>
      <button class="primary-button checkout-button" type="submit">Place demo order · ${kwacha(subtotal + (subtotal >= 250 ? 0 : delivery))}</button>
      <button class="text-button" type="button" data-action="back-to-cart">← Back to cart</button>
    </form>` : `<button class="primary-button checkout-button" type="button" data-action="start-checkout">Continue to delivery details</button>`}
  </div>`;
}

function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.textContent = message;
  toast.classList.add("visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("visible"), 2300);
}

function updateConnectionStatus(isOnline) {
  const status = document.querySelector("#connection-status");
  if (!status) return;
  status.hidden = isOnline;
  document.body.classList.toggle("is-offline", !isOnline);
  if (isOnline) showToast("You're back online");
}

function updateLocationStatus(message) {
  const status = document.querySelector("#location-status");
  const button = document.querySelector("[data-action='share-location'], [data-action='stop-location']");
  if (status) status.textContent = message;
  if (button) {
    const sharing = locationWatchId !== null;
    button.dataset.action = sharing ? "stop-location" : "share-location";
    button.textContent = sharing ? "Stop sharing location" : "Share my live location";
  }
}

function startLocationSharing() {
  if (!navigator.geolocation) {
    updateLocationStatus("Live location is not available in this browser.");
    return;
  }
  if (locationWatchId !== null) return;
  const generation = ++locationWatchGeneration;
  updateLocationStatus("Requesting location permission…");
  locationWatchId = navigator.geolocation.watchPosition(position => {
    if (generation !== locationWatchGeneration) return;
    state.location = {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
      accuracy: position.coords.accuracy
    };
    updateLocationStatus(`Live location available on this device: ${state.location.latitude.toFixed(5)}, ${state.location.longitude.toFixed(5)} (±${Math.round(state.location.accuracy)} m). Nothing is sent from this demo.`);
  }, error => {
    if (generation !== locationWatchGeneration) return;
    if (locationWatchId !== null) navigator.geolocation.clearWatch(locationWatchId);
    locationWatchId = null;
    const message = error.code === error.PERMISSION_DENIED
      ? "Location permission was declined. You can still enter your address manually."
      : error.code === error.POSITION_UNAVAILABLE
        ? "Your current location is unavailable. You can still enter your address manually."
        : "Location could not be determined. You can still enter your address manually.";
    updateLocationStatus(message);
  }, { enableHighAccuracy: true, maximumAge: 10000, timeout: 15000 });
  updateLocationStatus("Waiting for your location. You can stop sharing at any time.");
}

function stopLocationSharing() {
  locationWatchGeneration += 1;
  if (locationWatchId !== null && navigator.geolocation) navigator.geolocation.clearWatch(locationWatchId);
  locationWatchId = null;
  state.location = null;
  updateLocationStatus("Location sharing is off. You can still enter your address manually.");
}

let installPrompt = null;
window.addEventListener("beforeinstallprompt", event => {
  event.preventDefault();
  installPrompt = event;
  const installButton = document.querySelector("#install-app");
  if (installButton) installButton.hidden = false;
});

window.addEventListener("appinstalled", () => {
  installPrompt = null;
  const installButton = document.querySelector("#install-app");
  if (installButton) installButton.hidden = true;
  showToast("ZedCart was added to your device");
});

async function promptInstall() {
  if (!installPrompt) {
    showToast("Use your browser menu and choose Install app or Add to Home Screen");
    return;
  }
  await installPrompt.prompt();
  const { outcome } = await installPrompt.userChoice;
  installPrompt = null;
  const installButton = document.querySelector("#install-app");
  if (installButton) installButton.hidden = true;
  if (outcome === "accepted") showToast("Installing ZedCart");
}

function startDeliveryPreview() {
  window.clearInterval(deliveryTimer);
  state.orderProgress = 0;
  deliveryTimer = window.setInterval(() => {
    state.orderProgress = Math.min(state.orderProgress + 1, 3);
    renderCart();
    if (state.orderProgress === 3) window.clearInterval(deliveryTimer);
  }, 7000);
}

function renderAuth() {
  const roleDetails = {
    customer: {
      title: state.authMode === "signup" ? "Join your neighborhood" : "Welcome back",
      description: state.authMode === "signup" ? "Create a customer account to shop local across Zambia." : "Log in to your ZedCart customer account.",
      button: state.authMode === "signup" ? "Create customer account" : "Log in as customer"
    },
    business: {
      title: "Business & client login",
      description: "For registered businesses and clients managing a ZedCart profile.",
      button: "Log in to business account"
    },
    admin: {
      title: "Admin login",
      description: "For authorized ZedCart administrators.",
      button: "Log in as admin"
    }
  }[state.authRole];
  const isSignup = state.authRole === "customer" && state.authMode === "signup";
  const content = document.querySelector("#auth-content");
  if (state.authSubmitted) {
    content.innerHTML = `<div class="auth-body"><div class="auth-result-icon" aria-hidden="true">✳</div><h2 id="auth-title">${getTimeGreeting()}!</h2><p class="auth-description">Welcome to ZedCart. This is a front-end demo: authentication is not connected, no account was created, and your details were not sent or saved.</p><button class="primary-button checkout-button" type="button" data-action="auth-again">Back to sign in</button></div>`;
    return;
  }
  content.innerHTML = `<div class="auth-body">
    <p class="eyebrow">YOUR ACCOUNT, YOUR ZEDCART</p>
    <h2 id="auth-title">${roleDetails.title}</h2>
    <p class="auth-description">${roleDetails.description}</p>
    <div class="auth-roles" role="group" aria-label="Choose account type">
      <button type="button" data-auth-role="customer" aria-pressed="${state.authRole === "customer"}">Customer</button>
      <button type="button" data-auth-role="business" aria-pressed="${state.authRole === "business"}">Business</button>
      <button type="button" data-auth-role="admin" aria-pressed="${state.authRole === "admin"}">Admin</button>
    </div>
    ${state.authRole === "customer" ? `<div class="auth-mode"><span>${isSignup ? "Already have an account?" : "New to ZedCart?"}</span><button class="text-button" type="button" data-auth-mode="${isSignup ? "login" : "signup"}">${isSignup ? "Log in" : "Create an account"}</button></div>` : ""}
    <form id="auth-form">
      <div class="checkout-fields">
        ${isSignup ? `<label>Your name<input name="name" autocomplete="name" required maxlength="80" placeholder="Full name"></label>` : ""}
        <label>Email address<input name="email" type="email" autocomplete="email" required maxlength="160" placeholder="you@example.com"></label>
        <label>Password<input name="password" type="password" autocomplete="${isSignup ? "new-password" : "current-password"}" required minlength="8" maxlength="128" placeholder="${isSignup ? "At least 8 characters" : "Enter your password"}"></label>
      </div>
      <p class="demo-disclaimer">Demo interface only. Do not enter a real password. Sign-in and account creation are not connected.</p>
      <button class="primary-button checkout-button" type="submit">${roleDetails.button}</button>
    </form>
  </div>`;
}

function addItem(merchantId, productId) {
  const merchant = getMerchant(merchantId);
  const product = merchant.products.find(item => item.id === productId);
  const existingMerchant = currentCartMerchant();
  if (existingMerchant && existingMerchant.id !== merchant.id) {
    const shouldReplace = window.confirm(`Your cart has items from ${existingMerchant.name}. Start a new cart from ${merchant.name}?`);
    if (!shouldReplace) return;
    state.cart = [];
  }
  const inCart = state.cart.find(item => item.productId === product.id);
  if (inCart && inCart.quantity >= 99) {
    showToast("Maximum quantity of 99 reached for this item");
    return;
  }
  if (inCart) inCart.quantity += 1;
  else state.cart.push({ merchantId: merchant.id, productId: product.id, name: product.name, price: product.price, quantity: 1 });
  saveCart();
  renderCart();
  if (merchantDialog.open) renderMerchantDetail(merchant);
  showToast(`${product.name} added to your cart`);
}

document.addEventListener("click", event => {
  const target = event.target.closest("[data-action], [data-category], [data-auth-role], [data-auth-mode]");
  if (!target) return;
  if (target.hasAttribute("data-auth-role")) {
    state.authRole = target.dataset.authRole;
    state.authMode = "login";
    state.authSubmitted = false;
    renderAuth();
    return;
  }
  if (target.hasAttribute("data-auth-mode")) {
    state.authMode = target.dataset.authMode;
    state.authSubmitted = false;
    renderAuth();
    return;
  }
  if (target.hasAttribute("data-category")) {
    state.category = target.dataset.category;
    document.querySelectorAll(".category-chip").forEach(chip => chip.classList.toggle("active", chip === target));
    renderMerchants();
    return;
  }
  switch (target.dataset.action) {
    case "open-auth": state.authRole = "customer"; state.authMode = "login"; state.authSubmitted = false; renderAuth(); authDialog.showModal(); break;
    case "auth-again": state.authSubmitted = false; renderAuth(); break;
    case "install-app": promptInstall().catch(error => {
      console.error("Unable to start ZedCart installation prompt.", error);
      showToast("ZedCart could not start the installation prompt");
    }); break;
    case "open-merchant": renderMerchantDetail(getMerchant(target.dataset.merchant)); break;
    case "open-cart": state.checkout = false; renderCart(); cartDialog.showModal(); break;
    case "close-dialog": target.closest("dialog").close(); break;
    case "share-location": startLocationSharing(); break;
    case "stop-location": stopLocationSharing(); break;
    case "add-item": addItem(target.dataset.merchant, target.dataset.product); break;
    case "start-checkout": state.checkout = true; renderCart(); break;
    case "back-to-cart": stopLocationSharing(); state.checkout = false; renderCart(); break;
    case "change-quantity": {
      const item = state.cart.find(entry => entry.productId === target.dataset.product);
      if (item && item.quantity === 99 && Number(target.dataset.delta) > 0) {
        showToast("Maximum quantity of 99 reached for this item");
        break;
      }
      if (item) item.quantity += Number(target.dataset.delta);
      state.cart = state.cart.filter(entry => entry.quantity > 0);
      saveCart();
      renderCart();
      break;
    }
    case "clear-cart":
      state.cart = [];
      state.checkout = false;
      saveCart();
      renderCart();
      break;
    case "browse-shops": cartDialog.close(); document.querySelector("#category-title").scrollIntoView({ behavior: "smooth", block: "start" }); break;
    case "clear-filters":
      state.category = "All"; state.query = ""; searchInput.value = "";
      document.querySelectorAll(".category-chip").forEach(chip => chip.classList.toggle("active", chip.dataset.category === "All"));
      renderMerchants(); break;
    case "finish-order":
      window.clearInterval(deliveryTimer); stopLocationSharing(); state.cart = []; saveCart(); state.checkout = false; state.ordered = false; state.orderProgress = 0; renderCart(); cartDialog.close(); renderMerchants(); break;
  }
});

document.querySelector("#search-form").addEventListener("submit", event => {
  event.preventDefault();
  state.query = searchInput.value;
  renderMerchants();
  document.querySelector("#category-title").scrollIntoView({ behavior: "smooth", block: "start" });
});

document.querySelector("#city-select").addEventListener("change", event => {
  state.city = event.target.value;
  renderMerchants();
});

searchInput.addEventListener("input", () => {
  state.query = searchInput.value;
  renderMerchants();
});

document.addEventListener("submit", event => {
  if (event.target.id === "auth-form") {
    event.preventDefault();
    if (!event.target.reportValidity()) return;
    state.authSubmitted = true;
    renderAuth();
    return;
  }
  if (event.target.id !== "checkout-form") return;
  event.preventDefault();
  if (!event.target.reportValidity()) return;
  stopLocationSharing();
  state.ordered = true;
  state.checkout = false;
  startDeliveryPreview();
  renderCart();
});

document.querySelectorAll("dialog").forEach(dialog => {
  dialog.addEventListener("click", event => {
    if (event.target === dialog) dialog.close();
  });
  dialog.addEventListener("close", () => {
    if (dialog === cartDialog) stopLocationSharing();
  });
});

loadSavedCart();
renderMerchants();
renderCart();
updateConnectionStatus(navigator.onLine);
window.addEventListener("online", () => updateConnectionStatus(true));
window.addEventListener("offline", () => updateConnectionStatus(false));

if ("serviceWorker" in navigator && (location.protocol === "https:" || location.hostname === "localhost" || location.hostname === "127.0.0.1")) {
  navigator.serviceWorker.register("./service-worker.js").catch(error => {
    console.error("Unable to register the ZedCart offline app shell.", error);
    showToast("Offline support could not start. Check your connection and reload.");
  });
}
