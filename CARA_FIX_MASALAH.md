# 🔧 Cara Memperbaiki Masalah Produk & Kalkulator

## 🎯 Masalah yang Dilaporkan

1. ❌ Produk tidak muncul di website
2. ❌ Kalkulator tidak bisa digunakan

---

## ✅ Solusi Cepat

### Langkah 1: Buka Website

1. Buka browser (Chrome/Firefox/Edge)
2. Ketik di address bar: `http://localhost:8000/index.html`
3. Atau buka file `test-produk.html` untuk testing

### Langkah 2: Buka Developer Console

- **Windows**: Tekan `F12` atau `Ctrl + Shift + I`
- **Mac**: Tekan `Cmd + Option + I`

### Langkah 3: Jalankan Diagnostic

Di console, ketik:

```javascript
// Copy paste script ini ke console
fetch("diagnostic.js")
  .then((r) => r.text())
  .then(eval);
```

Atau buka file `diagnostic.js` dan copy-paste isinya ke console.

---

## 🔍 Cek Manual

### Cek 1: Apakah Produk Muncul?

1. Scroll ke bagian "Produk Unggulan Kami"
2. Klik tab "Funding (Simpanan)"
3. Apakah ada card produk yang muncul?

**Jika TIDAK muncul:**

- Buka console (F12)
- Lihat apakah ada error merah
- Screenshot dan kirim ke developer

### Cek 2: Apakah Kalkulator Berfungsi?

1. Scroll ke bagian "Simulasi"
2. Geser slider "Harga Total / OTR"
3. Apakah angka "Angsuran Bulanan" berubah?

**Jika TIDAK berubah:**

- Buka console (F12)
- Ketik: `calculateAngsuran()`
- Lihat apakah ada error

---

## 🛠️ Perbaikan yang Sudah Dilakukan

### File Baru yang Ditambahkan:

1. ✅ `fix-issues.js` - Script perbaikan otomatis
2. ✅ `test-produk.html` - Halaman testing
3. ✅ `diagnostic.js` - Script diagnostic
4. ✅ `preview-foto-produk.html` - Preview foto produk
5. ✅ `DAFTAR_FOTO_PRODUK_URL.md` - Daftar URL foto

### Perubahan di `index.html`:

```html
<!-- Script yang ditambahkan -->
<script src="fix-issues.js"></script>
```

---

## 📋 Checklist Debugging

### A. Produk Tidak Muncul

- [ ] Buka `http://localhost:8000/index.html`
- [ ] Scroll ke section "Produk Unggulan Kami"
- [ ] Buka console (F12)
- [ ] Cek apakah ada error
- [ ] Ketik di console: `productData.funding.length`
- [ ] Harusnya muncul angka (contoh: 17)
- [ ] Ketik di console: `renderProducts()`
- [ ] Apakah produk muncul sekarang?

### B. Kalkulator Tidak Berfungsi

- [ ] Scroll ke section "Simulasi"
- [ ] Buka console (F12)
- [ ] Ketik: `document.getElementById("jumlahPinjaman")`
- [ ] Harusnya muncul element HTML
- [ ] Ketik: `calculateAngsuran()`
- [ ] Apakah angka berubah?

---

## 🚀 Testing Files

### 1. Test Produk

Buka: `http://localhost:8000/test-produk.html`

- Klik semua tombol test
- Lihat hasilnya (hijau = OK, merah = error)

### 2. Preview Foto

Buka: `http://localhost:8000/preview-foto-produk.html`

- Lihat semua foto produk
- Pastikan foto loading dengan baik

---

## 💡 Tips Debugging

### Jika Produk Masih Tidak Muncul:

```javascript
// Jalankan di console
console.log("Total produk funding:", productData.funding.length);
console.log("Carousel element:", document.getElementById("productCarousel"));
renderProducts();
```

### Jika Kalkulator Masih Tidak Berfungsi:

```javascript
// Jalankan di console
const input = document.getElementById("jumlahPinjaman");
console.log("Input element:", input);
console.log("Input value:", input?.value);
calculateAngsuran();
```

### Force Reload:

- **Windows**: `Ctrl + Shift + R` atau `Ctrl + F5`
- **Mac**: `Cmd + Shift + R`

---

## 📞 Jika Masih Bermasalah

### Screenshot yang Dibutuhkan:

1. Screenshot halaman website (full page)
2. Screenshot console (F12) yang menunjukkan error
3. Screenshot hasil dari `diagnostic.js`

### Informasi yang Dibutuhkan:

- Browser yang digunakan (Chrome/Firefox/Edge)
- Versi browser
- Operating System (Windows/Mac/Linux)
- Apakah ada error di console?

---

## ✅ Verifikasi Sukses

### Produk Berhasil Muncul Jika:

- ✅ Ada minimal 17 card produk di tab "Funding"
- ✅ Ada minimal 10 card produk di tab "Financing"
- ✅ Ada minimal 8 card produk di tab "Fee Based"
- ✅ Foto produk loading dengan baik
- ✅ Bisa klik card untuk lihat detail

### Kalkulator Berhasil Jika:

- ✅ Slider bisa digeser
- ✅ Angka berubah saat slider digeser
- ✅ Hasil perhitungan muncul
- ✅ Detail perhitungan tampil lengkap

---

## 🔄 Reset Total (Jika Perlu)

Jika semua cara di atas tidak berhasil:

1. **Clear Browser Cache:**

   - Chrome: `Ctrl + Shift + Delete`
   - Pilih "Cached images and files"
   - Klik "Clear data"

2. **Hard Reload:**

   - `Ctrl + Shift + R` (Windows)
   - `Cmd + Shift + R` (Mac)

3. **Restart Server:**

   ```bash
   # Stop server (Ctrl + C)
   # Start lagi
   python -m http.server 8000
   ```

4. **Buka Incognito/Private Mode:**
   - Chrome: `Ctrl + Shift + N`
   - Firefox: `Ctrl + Shift + P`

---

**Dibuat oleh: Kiro AI Assistant**
**Tanggal: 19 November 2025**
