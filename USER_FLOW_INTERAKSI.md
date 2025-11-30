# 🖱️ USER FLOW & INTERAKSI - BANK MELASA SYARIAH

## 📋 PANDUAN: Klik Ini → Pindah Kemana → Pakai Kode Apa

---

## 1️⃣ KLIK MENU NAVBAR

### 🏠 Klik "Home" di Navbar

**Apa yang terjadi:**

- Halaman scroll smooth ke bagian Hero (paling atas)
- Active indicator bergerak ke posisi Home
- Menu Home berubah warna jadi aktif

**Kode yang dipakai:**

**HTML:** `index.html` baris 30-38

```html
<button data-target="hero" class="nav-btn active">
  <svg>...</svg>
  <span>Home</span>
</button>
```

**JavaScript:** `script.js` baris 60-95

```javascript
// Event listener untuk navbar
document.querySelectorAll(".nav-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    const target = this.getAttribute("data-target");
    const section = document.getElementById(target);

    // Smooth scroll ke section
    section.scrollIntoView({ behavior: "smooth" });

    // Update active state
    document
      .querySelectorAll(".nav-btn")
      .forEach((b) => b.classList.remove("active"));
    this.classList.add("active");

    // Gerakkan indicator
    updateActiveIndicator(this);
  });
});
```

**CSS:** `styles.css` baris 250-280

```css
.nav-btn.active {
  color: var(--primary);
  background: rgba(6, 182, 212, 0.1);
}
```

---

### ℹ️ Klik "Tentang Kami" di Navbar

**Apa yang terjadi:**

- Browser pindah ke halaman `about.html`
- Halaman baru terbuka

**Kode yang dipakai:**

**HTML:** `index.html` baris 40-48

```html
<a href="about.html" class="nav-btn">
  <svg>...</svg>
  <span>Tentang Kami</span>
</a>
```

**Tidak pakai JavaScript** - Ini link biasa HTML

---

### 💚 Klik "Buka Rekening" (Tombol Tengah Hijau)

**Apa yang terjadi:**

- Browser buka WhatsApp Web/App
- Langsung chat ke nomor +62 812-9616-3263
- Pesan otomatis (jika ada)

**Kode yang dipakai:**

**HTML:** `index.html` baris 50-62

```html
<a
  class="center-btn"
  href="https://wa.me/6281296163263"
  target="_blank"
  title="Buka Rekening"
>
  <svg>...</svg>
  <span class="center-text">Buka Rekening</span>
</a>
```

**Tidak pakai JavaScript** - Link langsung ke WhatsApp

**Format URL WhatsApp:**

- `https://wa.me/[nomor]` - Chat langsung
- `https://wa.me/[nomor]?text=[pesan]` - Chat dengan pesan

---

### 📊 Klik "Simulasi" di Navbar

**Apa yang terjadi:**

- Halaman scroll smooth ke section Kalkulator Pembiayaan
- Active indicator bergerak ke Simulasi

**Kode yang dipakai:**

**HTML:** `index.html` baris 64-72

```html
<button data-target="simulasi" class="nav-btn">
  <svg>...</svg>
  <span>Simulasi</span>
</button>
```

**JavaScript:** `script.js` baris 60-95 (sama seperti Home)

```javascript
// Scroll ke section dengan id="simulasi"
document.getElementById("simulasi").scrollIntoView({
  behavior: "smooth",
});
```

---

### 📍 Klik "Cabang" di Navbar

**Apa yang terjadi:**

- Halaman scroll smooth ke section Kantor Cabang
- Tampil peta dan daftar cabang

**Kode yang dipakai:**

**HTML:** `index.html` baris 74-82

```html
<button data-target="kantor" class="nav-btn">
  <svg>...</svg>
  <span>Cabang</span>
</button>
```

**JavaScript:** `script.js` baris 60-95 (sama seperti Home)

---

## 2️⃣ KLIK TOMBOL DI HERO SECTION

### 🟢 Klik "Buka Rekening" (Tombol Hijau)

**Apa yang terjadi:**

- Browser buka WhatsApp
- Chat ke +62 812-9616-3263

**Kode yang dipakai:**

**HTML:** `index.html` baris 115-120

```html
<a href="https://wa.me/6281296163263" class="btn btn-primary" target="_blank">
  Buka Rekening
</a>
```

---

### ⚪ Klik "Lihat Produk" (Tombol Putih)

**Apa yang terjadi:**

- Halaman scroll smooth ke section Produk
- Tampil carousel produk

**Kode yang dipakai:**

**HTML:** `index.html` baris 121-123

```html
<button data-target="produk" class="btn btn-secondary">Lihat Produk</button>
```

**JavaScript:** `script.js` baris 100-110

```javascript
document
  .querySelector('[data-target="produk"]')
  .addEventListener("click", function () {
    document.getElementById("produk").scrollIntoView({ behavior: "smooth" });
  });
```

---

## 3️⃣ KLIK TAB PRODUK

### 📑 Klik Tab "Funding" / "Financing" / "Fee Based"

**Apa yang terjadi:**

1. Tab yang diklik jadi aktif (warna hijau)
2. Tab lain jadi tidak aktif (warna abu)
3. Carousel produk berubah sesuai kategori
4. Produk di-load dari file JavaScript yang sesuai

**Kode yang dipakai:**

**HTML:** `index.html` baris 135-145

```html
<div class="product-tabs">
  <button class="tab-btn active" data-category="funding">
    Funding (Simpanan)
  </button>
  <button class="tab-btn" data-category="financing">
    Financing (Pembiayaan)
  </button>
  <button class="tab-btn" data-category="fee-based">Fee Based Income</button>
</div>
```

**JavaScript:** `script.js` baris 200-280

```javascript
// Event listener untuk tab
document.querySelectorAll(".tab-btn").forEach((tab) => {
  tab.addEventListener("click", function () {
    const category = this.getAttribute("data-category");

    // Update active tab
    document
      .querySelectorAll(".tab-btn")
      .forEach((t) => t.classList.remove("active"));
    this.classList.add("active");

    // Load produk sesuai kategori
    loadProducts(category);
  });
});

function loadProducts(category) {
  let products = [];

  if (category === "funding") {
    products = fundingProducts; // dari funding-products.js
  } else if (category === "financing") {
    products = financingProducts; // dari financing-products.js
  } else if (category === "fee-based") {
    products = feeBasedProducts; // dari fee-based-products.js
  }

  // Render cards
  renderProductCards(products);
}
```

**CSS:** `styles.css` baris 750-780

```css
.tab-btn.active {
  background: var(--success);
  color: white;
  border-color: var(--success);
}
```

**Data Produk:**

- `funding-products.js` - 10 produk simpanan
- `financing-products.js` - 10 produk pembiayaan
- `fee-based-products.js` - 11 produk layanan

---

## 4️⃣ KLIK CARD PRODUK

### 🃏 Klik "Lihat Detail" di Card Produk

**Apa yang terjadi:**

1. Modal popup muncul dengan animasi fade in
2. Background jadi blur (backdrop)
3. Data produk di-load ke modal:
   - Gambar produk
   - Judul produk
   - Tab: Definisi, Syarat, Fitur, Tarif
4. Body tidak bisa di-scroll (overflow hidden)

**Kode yang dipakai:**

**HTML Card:** `script.js` baris 300-350 (generated by JS)

```javascript
function renderProductCards(products) {
  const carousel = document.getElementById("productCarousel");
  carousel.innerHTML = "";

  products.forEach((product) => {
    const card = `
      <div class="product-card" data-id="${product.id}">
        <img src="${product.image}" alt="${product.title}" />
        <h3>${product.title}</h3>
        <p>${product.desc}</p>
        <button 
          class="btn-detail" 
          onclick="openModal('${product.id}')"
        >
          Lihat Detail
        </button>
      </div>
    `;
    carousel.innerHTML += card;
  });
}
```

**HTML Modal:** `index.html` baris 550-580

```html
<div id="productModal" class="modal">
  <div class="modal-content">
    <button class="modal-close" onclick="closeModal()">×</button>
    <img class="modal-image" id="modalImage" />
    <h2 class="modal-title" id="modalTitle"></h2>

    <div class="modal-tabs">
      <button class="modal-tab active" data-tab="definisi">Definisi</button>
      <button class="modal-tab" data-tab="syarat">Syarat</button>
      <button class="modal-tab" data-tab="fitur">Fitur</button>
      <button class="modal-tab" data-tab="tarif">Tarif</button>
    </div>

    <div class="modal-body" id="modalBody"></div>
  </div>
</div>
```

**JavaScript:** `script.js` baris 450-550

```javascript
function openModal(productId) {
  // Cari produk berdasarkan ID
  const product = findProductById(productId);

  // Isi data ke modal
  document.getElementById("modalImage").src = product.image;
  document.getElementById("modalTitle").textContent = product.title;
  document.getElementById("modalBody").innerHTML = product.definisi;

  // Tampilkan modal
  const modal = document.getElementById("productModal");
  modal.style.display = "flex";
  document.body.style.overflow = "hidden"; // Disable scroll

  // Animasi fade in
  setTimeout(() => {
    modal.classList.add("active");
  }, 10);
}

function closeModal() {
  const modal = document.getElementById("productModal");
  modal.classList.remove("active");

  // Tunggu animasi selesai
  setTimeout(() => {
    modal.style.display = "none";
    document.body.style.overflow = "auto"; // Enable scroll
  }, 300);
}
```

**CSS:** `styles.css` baris 1100-1250

```css
.modal {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  z-index: 1000;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.modal.active {
  opacity: 1;
}

.modal-content {
  background: white;
  border-radius: 20px;
  padding: 2rem;
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
  transform: scale(0.9);
  transition: transform 0.3s ease;
}

.modal.active .modal-content {
  transform: scale(1);
}
```

---

## 5️⃣ KLIK TAB DI MODAL

### 📑 Klik Tab "Definisi" / "Syarat" / "Fitur" / "Tarif"

**Apa yang terjadi:**

1. Tab yang diklik jadi aktif (border bawah hijau)
2. Tab lain jadi tidak aktif
3. Content modal berubah sesuai tab
4. Animasi fade in untuk content baru

**Kode yang dipakai:**

**JavaScript:** `script.js` baris 550-650

```javascript
// Event listener untuk modal tabs
document.querySelectorAll(".modal-tab").forEach((tab) => {
  tab.addEventListener("click", function () {
    const tabName = this.getAttribute("data-tab");
    const product = currentProduct; // Product yang sedang dibuka

    // Update active tab
    document
      .querySelectorAll(".modal-tab")
      .forEach((t) => t.classList.remove("active"));
    this.classList.add("active");

    // Update content
    const modalBody = document.getElementById("modalBody");

    if (tabName === "definisi") {
      modalBody.innerHTML = `<p>${product.definisi}</p>`;
    } else if (tabName === "syarat") {
      const syaratList = product.details.syarat
        .map((s) => `<li>${s}</li>`)
        .join("");
      modalBody.innerHTML = `<ul>${syaratList}</ul>`;
    } else if (tabName === "fitur") {
      modalBody.innerHTML = `<p>${product.details.fitur}</p>`;
    } else if (tabName === "tarif") {
      modalBody.innerHTML = `<p>${product.details.tarif}</p>`;
    }

    // Animasi fade in
    modalBody.style.opacity = "0";
    setTimeout(() => {
      modalBody.style.opacity = "1";
    }, 50);
  });
});
```

**CSS:** `styles.css` baris 1200-1230

```css
.modal-tab.active {
  color: var(--success);
  border-bottom: 3px solid var(--success);
}

.modal-body {
  transition: opacity 0.2s ease;
}
```

---

## 6️⃣ KLIK ARROW CAROUSEL

### ◀️ Klik Arrow Kiri (Prev)

**Apa yang terjadi:**

1. Carousel scroll ke kiri
2. Tampil produk sebelumnya
3. Smooth scroll animation

**Kode yang dipakai:**

**HTML:** `index.html` baris 150-155

```html
<button class="carousel-btn prev" onclick="scrollCarousel('prev')">
  <svg>
    <path d="M15 18l-6-6 6-6" />
  </svg>
</button>
```

**JavaScript:** `script.js` baris 350-400

```javascript
function scrollCarousel(direction) {
  const carousel = document.getElementById("productCarousel");
  const cardWidth = 320; // Lebar card + gap
  const scrollAmount = cardWidth * 3; // Scroll 3 cards

  if (direction === "prev") {
    carousel.scrollBy({
      left: -scrollAmount,
      behavior: "smooth",
    });
  } else {
    carousel.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  }
}
```

**CSS:** `styles.css` baris 891-926

```css
.carousel-btn {
  position: absolute !important;
  top: 20px !important;
  width: 48px;
  height: 48px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.carousel-btn.prev {
  right: 80px !important;
  top: 20px !important;
}

.carousel-btn.next {
  right: 20px !important;
  top: 20px !important;
}
```

---

### ▶️ Klik Arrow Kanan (Next)

**Sama seperti arrow kiri, tapi scroll ke kanan**

---

## 7️⃣ KLIK TOMBOL KALKULATOR

### 🧮 Klik "Hitung Angsuran"

**Apa yang terjadi:**

1. Ambil nilai dari input:
   - Jumlah Pembiayaan
   - Jangka Waktu
   - Margin Rate
2. Hitung angsuran dengan rumus
3. Tampilkan hasil:
   - Angsuran per Bulan
   - Total Pokok
   - Total Margin
   - Total Pembayaran
4. Animasi counter (angka naik dari 0)

**Kode yang dipakai:**

**HTML:** `index.html` baris 250-350

```html
<div class="simulasi-panel">
  <input
    type="range"
    id="jumlahPembiayaan"
    min="1000000"
    max="500000000"
    step="1000000"
  />
  <input type="number" id="jumlahPembiayaanInput" />

  <input type="range" id="jangkaWaktu" min="6" max="240" step="6" />
  <input type="number" id="jangkaWaktuInput" />

  <select id="marginRate">
    <option value="8">8%</option>
    <option value="10">10%</option>
    <option value="12">12%</option>
  </select>

  <button onclick="calculateAngsuran()">Hitung Angsuran</button>

  <div class="result-panel">
    <div class="result-item">
      <span>Angsuran per Bulan</span>
      <span class="result-value" id="angsuranBulanan">Rp 0</span>
    </div>
  </div>
</div>
```

**JavaScript:** `calculator-dynamic.js` baris 1-150

```javascript
function calculateAngsuran() {
  // Ambil nilai input
  const jumlah = parseFloat(document.getElementById("jumlahPembiayaan").value);
  const bulan = parseInt(document.getElementById("jangkaWaktu").value);
  const rate = parseFloat(document.getElementById("marginRate").value);

  // Hitung margin
  const margin = jumlah * (rate / 100) * (bulan / 12);

  // Hitung total
  const total = jumlah + margin;

  // Hitung angsuran per bulan
  const angsuran = total / bulan;

  // Tampilkan hasil dengan animasi
  animateValue("angsuranBulanan", 0, angsuran, 1000);
  animateValue("totalPokok", 0, jumlah, 1000);
  animateValue("totalMargin", 0, margin, 1000);
  animateValue("totalPembayaran", 0, total, 1000);
}

function animateValue(id, start, end, duration) {
  const element = document.getElementById(id);
  const range = end - start;
  const increment = range / (duration / 16);
  let current = start;

  const timer = setInterval(() => {
    current += increment;
    if (current >= end) {
      current = end;
      clearInterval(timer);
    }
    element.textContent = formatRupiah(Math.floor(current));
  }, 16);
}

function formatRupiah(angka) {
  return "Rp " + angka.toLocaleString("id-ID");
}
```

**CSS:** `styles.css` baris 950-1050

```css
.result-value {
  font-size: 2rem;
  font-weight: 700;
  color: var(--success);
  transition: all 0.3s ease;
}
```

---

## 8️⃣ KLIK FAQ

### ❓ Klik Pertanyaan di FAQ

**Apa yang terjadi:**

1. Jika FAQ tertutup → Buka dengan animasi slide down
2. Jika FAQ terbuka → Tutup dengan animasi slide up
3. FAQ lain yang terbuka akan otomatis tertutup
4. Icon arrow berputar 180 derajat

**Kode yang dipakai:**

**HTML:** `index.html` baris 437-545

```html
<div class="faq-container">
  <div class="faq-item">
    <button class="faq-question">
      <span>Apa itu Bank Syariah?</span>
      <svg class="faq-icon">
        <path d="M7 10l5 5 5-5z" />
      </svg>
    </button>
    <div class="faq-answer">
      <p>Bank Syariah adalah bank yang menjalankan...</p>
    </div>
  </div>
</div>
```

**JavaScript:** `smooth-enhancements.js` baris 182-202

```javascript
function initAccordion() {
  document.querySelectorAll(".faq-question").forEach((question) => {
    question.addEventListener("click", function () {
      const faqItem = this.parentElement;
      const answer = faqItem.querySelector(".faq-answer");
      const isOpen = faqItem.classList.contains("active");

      // Tutup semua FAQ
      document.querySelectorAll(".faq-item").forEach((item) => {
        item.classList.remove("active");
        item.querySelector(".faq-answer").style.maxHeight = "0";
      });

      // Buka FAQ yang diklik (jika sebelumnya tertutup)
      if (!isOpen) {
        faqItem.classList.add("active");
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });
}

// Panggil saat halaman load
initAccordion();
```

**CSS:** `styles.css` baris 1443-1502

```css
.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s ease-in-out, opacity 0.3s ease;
  opacity: 0;
}

.faq-item.active .faq-answer {
  max-height: 1000px;
  opacity: 1;
}

.faq-icon {
  transition: transform 0.3s ease;
}

.faq-item.active .faq-icon {
  transform: rotate(180deg);
}
```

---

## 9️⃣ KLIK WHATSAPP BUTTON

### 💬 Klik Floating WhatsApp Button (Kanan Bawah)

**Apa yang terjadi:**

1. Browser buka WhatsApp Web (desktop) atau WhatsApp App (mobile)
2. Langsung ke chat dengan nomor +62 812-9616-3263
3. Tab/window baru terbuka

**Kode yang dipakai:**

**HTML:** `index.html` baris 643-660

```html
<a
  href="https://wa.me/6281296163263"
  class="whatsapp-float"
  target="_blank"
  title="Chat WhatsApp"
>
  <svg viewBox="0 0 32 32">
    <!-- Icon WhatsApp -->
  </svg>
</a>
```

**CSS:** `styles.css` baris 1638-1660

```css
.whatsapp-float {
  position: fixed !important;
  bottom: 2rem !important;
  right: 2rem !important;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  z-index: 999;
  transition: all 0.3s ease;
}

.whatsapp-float:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 30px rgba(37, 211, 102, 0.5);
}
```

**Tidak pakai JavaScript** - Link langsung HTML

---

## 🔟 KLIK LINK FOOTER

### 📄 Klik "Tim LPS" di Footer

**Apa yang terjadi:**

1. Browser buka file `lps.pdf`
2. PDF terbuka di tab baru atau download (tergantung browser)

**Kode yang dipakai:**

**HTML:** `index.html` baris 635-640

```html
<div class="footer-bottom">
  <p>© 2025 Bank Melasa Syariah</p>
  <a href="lps.pdf" target="_blank"> 📄 Tim LPS </a>
</div>
```

**Tidak pakai JavaScript** - Link langsung ke file PDF

---

## 🔄 INTERAKSI OTOMATIS (Tanpa Klik)

### 📜 Scroll Halaman

**Apa yang terjadi:**

1. Progress bar di atas bergerak sesuai posisi scroll
2. Navbar active indicator update otomatis
3. Animasi fade in untuk elemen yang masuk viewport
4. Back to top button muncul/hilang

**Kode yang dipakai:**

**JavaScript:** `smooth-enhancements.js` baris 10-50

```javascript
// Progress bar
window.addEventListener("scroll", () => {
  const windowHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrolled = (window.scrollY / windowHeight) * 100;

  const progressBar = document.querySelector(".scroll-progress");
  progressBar.style.width = scrolled + "%";
});

// Back to top button
window.addEventListener("scroll", () => {
  const backToTop = document.querySelector(".back-to-top");

  if (window.scrollY > 500) {
    backToTop.classList.add("visible");
  } else {
    backToTop.classList.remove("visible");
  }
});

// Fade in animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
    }
  });
});

document.querySelectorAll(".animate-on-scroll").forEach((el) => {
  observer.observe(el);
});
```

---

### ⌨️ Ketik di Input Slider

**Apa yang terjadi:**

1. Slider bergerak sesuai angka yang diketik
2. Angka di input number update
3. Real-time sync antara slider dan input

**Kode yang dipakai:**

**JavaScript:** `calculator-dynamic.js` baris 150-200

```javascript
// Sync slider dengan input number
const jumlahSlider = document.getElementById("jumlahPembiayaan");
const jumlahInput = document.getElementById("jumlahPembiayaanInput");

jumlahSlider.addEventListener("input", function () {
  jumlahInput.value = this.value;
});

jumlahInput.addEventListener("input", function () {
  jumlahSlider.value = this.value;
});
```

---

## 📊 RINGKASAN FLOW

```
USER ACTION                 → TRIGGER          → HANDLER                → RESULT
─────────────────────────────────────────────────────────────────────────────────
Klik Menu Navbar           → click event      → script.js (line 60)    → Smooth scroll
Klik Tab Produk            → click event      → script.js (line 200)   → Load products
Klik Card Produk           → click event      → script.js (line 450)   → Open modal
Klik Tab Modal             → click event      → script.js (line 550)   → Change content
Klik Arrow Carousel        → click event      → script.js (line 350)   → Scroll carousel
Klik Hitung Angsuran       → click event      → calculator.js (line 1) → Calculate & show
Klik FAQ                   → click event      → smooth-enhancements.js  → Toggle accordion
Klik WhatsApp Button       → HTML link        → (no JS)                → Open WhatsApp
Scroll Halaman             → scroll event     → smooth-enhancements.js  → Update progress
Ketik di Input             → input event      → calculator.js (line 150)→ Sync slider
```

---

## 🎯 TIPS DEBUGGING

### Cara Cek Apakah Event Listener Berjalan:

1. **Buka Console Browser** (F12)
2. **Tambah console.log di function:**

```javascript
function openModal(productId) {
  console.log("Modal dibuka untuk produk:", productId); // ← Tambah ini
  // ... kode lainnya
}
```

3. **Klik element** → Lihat console
4. **Jika tidak muncul** → Event listener tidak jalan
5. **Cek:**
   - Apakah function dipanggil? (`onclick="openModal()"`)
   - Apakah ID/class benar?
   - Apakah JavaScript ter-load?

---

**Dibuat oleh:** Kiro AI Assistant  
**Tanggal:** 30 November 2025  
**Versi:** v3.8
