# 🚀 Panduan Deploy ke Netlify

## 🎯 3 Cara Deploy ke Netlify

### **Metode 1: Drag & Drop** ⭐ (PALING MUDAH - NO GIT REQUIRED)

### **Metode 2: Via GitHub** 💻 (Otomatis Update)

### **Metode 3: Via Netlify CLI** 🖥️ (Advanced)

---

## 🔧 **Troubleshooting Error Authentication**

### Error: "Email address is invalid"

**Penyebab:**

- Format email salah
- Email belum diverifikasi
- Browser cache issue

**Solusi:**

#### 1. Check Format Email

Pastikan format email benar:

- ✅ `nama@gmail.com`
- ✅ `nama@student.ac.id`
- ❌ `nama@` (tidak lengkap)

#### 2. Buat Akun Baru

1. Buka https://app.netlify.com/signup
2. Pilih **"Sign up with email"**
3. Isi email yang **VALID**
4. Isi password (min. 8 karakter)
5. Klik **"Sign up"**
6. **Check inbox email** untuk verifikasi
7. Klik link verifikasi
8. Login kembali

#### 3. Clear Browser Cache

- **Chrome**: Ctrl+Shift+Delete → Clear data
- **Firefox**: Ctrl+Shift+Delete → Clear data
- Refresh halaman Netlify

#### 4. Coba Browser Lain

- Chrome (recommended)
- Firefox
- Edge
- Incognito/Private mode

#### 5. Gunakan Sign Up dengan Google/GitHub

Lebih mudah dan tidak perlu verifikasi email:

1. Klik **"Sign up with GitHub"** atau **"Sign up with Google"**
2. Authorize Netlify
3. Done!

---

## 🎨 **METODE 1: Drag & Drop** (PALING MUDAH!)

### Keuntungan:

- ✅ Tidak perlu Git
- ✅ Tidak perlu GitHub
- ✅ Langsung upload folder
- ✅ Cepat dan mudah

### Step-by-step:

#### Step 1: Buat Akun Netlify

1. Buka https://app.netlify.com/signup
2. **Sign up with Google** (paling mudah) atau email
3. Jika pakai email, verifikasi email dulu
4. Login ke Netlify

#### Step 2: Siapkan Folder

1. Buat folder baru bernama `bank-melasa-syariah-deploy`
2. Copy semua file dari `lps 2` ke folder baru:
   - index.html
   - styles.css
   - script.js
   - logo bank.jpg
   - (JANGAN copy file .md dan .txt)

#### Step 3: Deploy

1. Login ke Netlify
2. Di dashboard, scroll ke bawah
3. Lihat kotak **"Want to deploy a new site without connecting to Git?"**
4. **Drag & drop** folder `bank-melasa-syariah-deploy` ke kotak tersebut
5. Tunggu upload selesai (1-2 menit)
6. ✅ Website sudah online!

#### Step 4: Custom Domain (Opsional)

1. Klik **"Site settings"**
2. Klik **"Change site name"**
3. Isi nama: `bank-melasa-syariah` (atau nama lain)
4. Klik **"Save"**
5. URL jadi: `https://bank-melasa-syariah.netlify.app`

### Update Website:

1. Edit file di local
2. Drag & drop folder lagi ke Netlify
3. Netlify akan update otomatis

---

## 💻 **METODE 2: Via GitHub** (Otomatis Update)

### Keuntungan:

- ✅ Auto-deploy saat push ke GitHub
- ✅ Version control
- ✅ Rollback mudah
- ✅ Collaboration friendly

### Prerequisite:

- Website sudah di GitHub (lihat GITHUB_GUIDE.md)

### Step-by-step:

#### Step 1: Login Netlify

1. Buka https://app.netlify.com
2. Login dengan **GitHub account** (recommended)
   - Atau login dengan email yang sudah diverifikasi

#### Step 2: Import dari GitHub

1. Klik **"Add new site"** → **"Import an existing project"**
2. Klik **"Deploy with GitHub"**
3. Authorize Netlify (jika diminta)
4. Pilih repository: `bank-melasa-syariah`
5. **Build settings:**
   ```
   Branch to deploy: main
   Build command: (kosongkan)
   Publish directory: (kosongkan atau isi dengan /)
   ```
6. Klik **"Deploy site"**
7. Tunggu 1-2 menit
8. ✅ Website sudah online!

#### Step 3: Custom Domain

1. Klik **"Site settings"**
2. Klik **"Change site name"**
3. Isi nama yang diinginkan
4. URL jadi: `https://nama-kamu.netlify.app`

### Auto-Deploy:

Setiap kali push ke GitHub, Netlify akan auto-deploy!

```bash
git add .
git commit -m "Update website"
git push
# Netlify akan auto-deploy dalam 1-2 menit
```

---

## 🖥️ **METODE 3: Via Netlify CLI** (Advanced)

### Prerequisite:

- Node.js sudah terinstall

### Step 1: Install Netlify CLI

```bash
npm install -g netlify-cli
```

### Step 2: Login

```bash
netlify login
```

Browser akan terbuka, authorize Netlify CLI

### Step 3: Deploy

```bash
# Masuk ke folder project
cd "C:\Users\YourName\OneDrive\Desktop\Lps\lps 2"

# Deploy
netlify deploy

# Pilih "Create & configure a new site"
# Pilih team
# Isi site name
# Publish directory: . (titik)

# Deploy production
netlify deploy --prod
```

### Update Website:

```bash
netlify deploy --prod
```

---

## 🎯 **Perbandingan Metode**

| Fitur           | Drag & Drop | GitHub | CLI  |
| --------------- | ----------- | ------ | ---- |
| Mudah           | ⭐⭐⭐⭐⭐  | ⭐⭐⭐ | ⭐⭐ |
| Auto-deploy     | ❌          | ✅     | ❌   |
| Version control | ❌          | ✅     | ✅   |
| Rollback        | ❌          | ✅     | ✅   |
| Collaboration   | ❌          | ✅     | ✅   |

**Rekomendasi:**

- **Pemula**: Metode 1 (Drag & Drop)
- **Tim/Kolaborasi**: Metode 2 (GitHub)
- **Developer**: Metode 3 (CLI)

---

## 🌐 **Custom Domain (Opsional)**

### Netlify Subdomain (Gratis)

1. Site settings → Site details
2. Change site name
3. Isi: `bank-melasa-syariah`
4. URL: `https://bank-melasa-syariah.netlify.app`

### Custom Domain (Berbayar)

1. Beli domain (Namecheap, GoDaddy, dll)
2. Site settings → Domain management
3. Add custom domain
4. Update DNS settings
5. Tunggu propagasi (24-48 jam)

---

## 🔒 **HTTPS & Security**

Netlify otomatis provide:

- ✅ HTTPS/SSL (gratis)
- ✅ CDN global
- ✅ DDoS protection
- ✅ Automatic compression

---

## ⚙️ **Environment Variables (Jika Perlu)**

Jika website butuh API key atau secret:

1. Site settings → Environment variables
2. Add variable:
   ```
   Key: API_KEY
   Value: your-api-key-here
   ```
3. Redeploy site

---

## 📊 **Analytics (Opsional)**

### Netlify Analytics (Berbayar)

1. Site settings → Analytics
2. Enable analytics
3. $9/month per site

### Google Analytics (Gratis)

Tambahkan di `index.html` sebelum `</head>`:

```html
<!-- Google Analytics -->
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "GA_MEASUREMENT_ID");
</script>
```

---

## 🐛 **Troubleshooting**

### Website tidak muncul

**Solusi:**

- Check publish directory (harus `/` atau kosong)
- Pastikan `index.html` ada di root folder
- Check deploy log untuk error

### Gambar tidak muncul

**Solusi:**

- Check path gambar (harus relative)
- Pastikan file gambar terupload
- Check case-sensitive filename

### CSS/JS tidak load

**Solusi:**

- Check path di `index.html`
- Pastikan file terupload
- Hard refresh (Ctrl+F5)

### Deploy failed

**Solusi:**

- Check deploy log
- Pastikan tidak ada file yang corrupt
- Try deploy ulang

### Authentication error

**Solusi:**

- Clear browser cache
- Try browser lain
- Sign up dengan Google/GitHub
- Verifikasi email

---

## 📝 **Checklist Deploy**

### Sebelum Deploy:

- [ ] Test website di local (buka index.html)
- [ ] Semua gambar terlihat
- [ ] Semua link berfungsi
- [ ] Responsive di mobile
- [ ] Ganti nomor WhatsApp (jika perlu)

### Saat Deploy:

- [ ] Akun Netlify sudah dibuat dan verified
- [ ] Folder/repository sudah siap
- [ ] Deploy berhasil (check URL)
- [ ] Website bisa diakses

### Setelah Deploy:

- [ ] Test semua fitur
- [ ] Test di berbagai device
- [ ] Share link ke teman/dosen
- [ ] Bookmark URL

---

## 🎉 **Selamat!**

Website Bank Melasa Syariah kamu sekarang sudah online di Netlify! 🎊

**URL Website:** `https://your-site-name.netlify.app`

**Next Steps:**

1. ✅ Share link ke teman/dosen
2. ✅ Test di berbagai device
3. ✅ Custom domain (opsional)
4. ✅ Setup analytics (opsional)

---

## 📞 **Butuh Bantuan?**

- **Netlify Docs**: https://docs.netlify.com
- **Netlify Support**: https://www.netlify.com/support/
- **Community Forum**: https://answers.netlify.com

---

**Good luck! 🚀**
