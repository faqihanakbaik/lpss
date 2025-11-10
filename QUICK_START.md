# 🚀 Quick Start Guide - Bank Melasa Syariah

## Cara Membuka Website

### Metode 1: Double Click (Paling Mudah)

1. Cari file `index.html` di folder `lps 2`
2. Double-click file tersebut
3. Website akan terbuka di browser default Anda

### Metode 2: Drag & Drop

1. Buka browser (Chrome/Firefox/Edge)
2. Drag file `index.html` ke jendela browser
3. Website akan langsung terbuka

### Metode 3: Open With

1. Klik kanan pada file `index.html`
2. Pilih "Open with"
3. Pilih browser favorit Anda

## 🎯 Fitur yang Bisa Dicoba

### 1. Navigasi

- Klik menu di navbar bawah untuk pindah section
- Scroll halus otomatis ke section yang dipilih
- Indikator biru mengikuti menu aktif

### 2. Produk (35 Produk!)

- Klik tab "Funding", "Financing", atau "Fee Based"
- Scroll horizontal dengan:
  - Mouse wheel
  - Tombol panah kiri/kanan
  - Drag dengan mouse
- Klik card produk untuk lihat detail lengkap

### 3. Simulasi Pembiayaan

- Masukkan jumlah pembiayaan
- Geser slider jangka waktu
- Geser slider margin
- Klik "Hitung Angsuran" atau otomatis update
- Lihat hasil dengan animasi angka

### 4. Modal Detail

- Klik produk apapun
- Modal muncul dengan animasi zoom
- Lihat syarat, fitur, dan tarif
- Klik "Hubungi Kami" untuk WhatsApp
- Tutup dengan:
  - Tombol X
  - Klik di luar modal
  - Tekan ESC

### 5. Animasi

- Scroll perlahan untuk lihat animasi fade-in
- Hover mouse di card untuk zoom effect
- Perhatikan parallax di hero section
- Lihat counter animation di simulasi

## 📱 Test di Mobile

### Cara Test di HP:

1. **Metode 1: Transfer File**

   - Kirim folder `lps 2` ke HP via Bluetooth/USB
   - Buka file `index.html` dengan browser HP

2. **Metode 2: Local Server** (Butuh Python)

   ```bash
   cd "lps 2"
   python -m http.server 8000
   ```

   Buka di HP: `http://[IP-KOMPUTER]:8000`

3. **Metode 3: Upload ke Hosting**
   - Upload semua file ke hosting
   - Akses via URL

### Fitur Mobile:

- Navbar otomatis di bawah penuh
- Touch scroll untuk carousel
- Responsive layout
- Semua animasi tetap smooth

## 🎨 Customization Cepat

### Ganti Warna Utama

Buka `styles.css`, cari baris 10-20:

```css
:root {
  --primary: #06b6d4; /* Ganti warna tosca */
  --secondary: #1e40af; /* Ganti warna biru */
}
```

### Ganti Nomor WhatsApp

Cari di `index.html` dan `script.js`:

```
6281234567890
```

Ganti dengan nomor Anda (format: 628xxx)

### Ganti Logo

Replace file `logo bank.jpg` dengan logo Anda
(Pastikan nama file sama atau update di HTML)

## ⚡ Tips & Tricks

### Untuk Presentasi:

1. Buka di Chrome (animasi paling smooth)
2. Tekan F11 untuk fullscreen
3. Zoom 100% (Ctrl+0)
4. Scroll perlahan untuk tunjukkan animasi

### Untuk Development:

1. Buka Developer Tools (F12)
2. Toggle Device Toolbar (Ctrl+Shift+M)
3. Test berbagai ukuran layar
4. Check Console untuk error

### Untuk Performance:

- Semua gambar dari Unsplash (online)
- Jika lambat, ganti dengan gambar lokal
- GSAP loaded dari CDN
- Bisa download dan simpan lokal jika perlu

## 🐛 Troubleshooting

### Website Tidak Muncul?

- Pastikan semua file ada di folder yang sama
- Check apakah JavaScript enabled di browser
- Coba browser lain (Chrome recommended)

### Animasi Tidak Jalan?

- Check koneksi internet (GSAP dari CDN)
- Buka Console (F12) untuk lihat error
- Pastikan JavaScript tidak diblock

### Gambar Tidak Muncul?

- Check koneksi internet (gambar dari Unsplash)
- Logo bank: pastikan file `logo bank.jpg` ada
- Bisa ganti dengan gambar lokal

### Carousel Tidak Scroll?

- Coba drag dengan mouse
- Gunakan tombol panah kiri/kanan
- Di mobile: swipe dengan jari

## 📊 Checklist Testing

- [ ] Buka website di browser
- [ ] Test navigasi navbar
- [ ] Klik semua tab produk
- [ ] Scroll carousel kiri-kanan
- [ ] Klik minimal 3 produk berbeda
- [ ] Test simulasi pembiayaan
- [ ] Ubah semua input simulasi
- [ ] Scroll ke bawah sampai footer
- [ ] Test di mobile (jika bisa)
- [ ] Check semua animasi

## 🎓 Untuk Presentasi LPS

### Poin yang Bisa Dijelaskan:

1. **Modern UI/UX**

   - Navbar floating yang unik
   - Animasi smooth di semua elemen
   - Color scheme profesional

2. **35 Produk Lengkap**

   - Semua kategori tercakup
   - Detail lengkap setiap produk
   - Mudah dicari dengan tab

3. **Interaktivitas Tinggi**

   - Simulasi real-time
   - Modal detail
   - Smooth scroll
   - Hover effects

4. **Responsive Design**

   - Desktop, tablet, mobile
   - Ratio 16:9 optimal
   - Touch-friendly

5. **Performance**
   - Loading cepat
   - Animasi smooth
   - No lag

## 💡 Ide Pengembangan Lanjutan

1. **Backend Integration**

   - Connect ke database
   - Form submission
   - User authentication

2. **Fitur Tambahan**

   - Live chat
   - Booking appointment
   - Download brochure
   - Newsletter subscription

3. **Analytics**

   - Google Analytics
   - Heatmap tracking
   - User behavior analysis

4. **SEO Optimization**
   - Meta tags lengkap
   - Sitemap
   - Schema markup

---

**Selamat Mencoba! 🎉**

Jika ada pertanyaan atau butuh bantuan, jangan ragu untuk bertanya!

**Good luck dengan presentasi LPS Anda! 💪**
