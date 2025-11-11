# 📤 Panduan Upload ke GitHub

## 🎯 Pilih Metode yang Paling Mudah untuk Kamu

### **Metode 1: Via GitHub Website** ⭐ (PALING MUDAH)

### **Metode 2: Via Git Command Line** 💻 (Lebih Pro)

### **Metode 3: Via GitHub Desktop** 🖱️ (User-Friendly)

---

## 📝 **Persiapan (Wajib untuk Semua Metode)**

### 1. Buat Akun GitHub (Jika Belum Punya)

- Buka https://github.com
- Klik **"Sign up"**
- Isi email, password, username
- Verifikasi email

### 2. File yang Sudah Siap

✅ Semua file di folder `lps 2` sudah siap upload:

- index.html
- styles.css
- script.js
- logo bank.jpg
- README_GITHUB.md (rename jadi README.md saat upload)
- LICENSE
- .gitignore
- Semua file dokumentasi

---

## 🌐 **METODE 1: Via GitHub Website** (RECOMMENDED)

### Step 1: Buat Repository Baru

1. **Login** ke GitHub
2. Klik tombol **"+"** di kanan atas
3. Pilih **"New repository"**

4. **Isi Form:**

   ```
   Repository name: bank-melasa-syariah
   Description: Website Bank Melasa Syariah - Modern Islamic Banking

   ○ Public  (Bisa dilihat semua orang)
   ● Private (Hanya kamu yang bisa lihat)

   ☐ Add a README file (JANGAN DICENTANG, kita punya sendiri)
   ☐ Add .gitignore (JANGAN DICENTANG, kita punya sendiri)
   ☐ Choose a license (JANGAN DICENTANG, kita punya sendiri)
   ```

5. Klik **"Create repository"**

### Step 2: Upload Files

1. Di halaman repository baru, klik **"uploading an existing file"**
   (atau klik **"Add file"** → **"Upload files"**)

2. **Drag & Drop** semua file dari folder `lps 2` ke browser

   - Atau klik **"choose your files"** dan pilih semua file
   - **PENTING:** Rename `README_GITHUB.md` jadi `README.md` sebelum upload

3. **Tunggu upload selesai** (progress bar akan muncul)

4. **Scroll ke bawah**, isi commit message:

   ```
   Initial commit - Bank Melasa Syariah website
   ```

5. Klik **"Commit changes"**

### Step 3: Aktifkan GitHub Pages (Opsional)

Untuk membuat website bisa diakses online:

1. Di repository, klik **"Settings"**
2. Scroll ke bawah, klik **"Pages"** di sidebar kiri
3. Di **"Source"**, pilih **"main"** branch
4. Klik **"Save"**
5. Tunggu beberapa menit
6. Website akan tersedia di: `https://username.github.io/bank-melasa-syariah/`

✅ **DONE!** Website sudah di GitHub dan bisa diakses online!

---

## 💻 **METODE 2: Via Git Command Line**

### Step 1: Install Git

**Windows:**

- Download dari https://git-scm.com/download/win
- Install dengan setting default
- Restart Command Prompt

**Mac:**

```bash
brew install git
```

**Linux:**

```bash
sudo apt-get install git
```

### Step 2: Konfigurasi Git (Pertama Kali)

Buka **Command Prompt** atau **PowerShell**:

```bash
git config --global user.name "Nama Kamu"
git config --global user.email "email@example.com"
```

### Step 3: Buat Repository di GitHub

1. Login ke GitHub
2. Klik **"+"** → **"New repository"**
3. Nama: `bank-melasa-syariah`
4. **JANGAN** centang apapun
5. Klik **"Create repository"**
6. **COPY** URL repository (contoh: `https://github.com/username/bank-melasa-syariah.git`)

### Step 4: Upload via Command Line

Buka **Command Prompt** atau **PowerShell**, masuk ke folder `lps 2`:

```bash
# 1. Masuk ke folder lps 2
cd "C:\Users\YourName\OneDrive\Desktop\Lps\lps 2"

# 2. Initialize Git
git init

# 3. Rename README_GITHUB.md jadi README.md
ren README_GITHUB.md README.md

# 4. Add semua file
git add .

# 5. Commit
git commit -m "Initial commit - Bank Melasa Syariah website"

# 6. Tambah remote (GANTI dengan URL kamu!)
git remote add origin https://github.com/USERNAME/bank-melasa-syariah.git

# 7. Push ke GitHub
git branch -M main
git push -u origin main
```

**Catatan:**

- Ganti `USERNAME` dengan username GitHub kamu
- Ganti URL dengan URL repository yang kamu copy tadi
- Jika diminta login, masukkan username dan password GitHub

✅ **DONE!** Website sudah di GitHub!

---

## 🖱️ **METODE 3: Via GitHub Desktop**

### Step 1: Install GitHub Desktop

1. Download dari https://desktop.github.com/
2. Install aplikasi
3. Buka GitHub Desktop
4. Login dengan akun GitHub

### Step 2: Add Repository

1. Klik **"File"** → **"Add local repository"**
2. Klik **"Choose..."**
3. Pilih folder `lps 2`
4. Klik **"Add repository"**

Jika muncul error "not a git repository":

1. Klik **"create a repository"**
2. Isi nama: `bank-melasa-syariah`
3. Klik **"Create repository"**

### Step 3: Rename README

1. Di File Explorer, rename `README_GITHUB.md` jadi `README.md`
2. Kembali ke GitHub Desktop
3. Akan muncul perubahan di sidebar kiri

### Step 4: Commit & Push

1. Di GitHub Desktop, lihat semua file di sidebar kiri
2. Di bawah, isi **Summary**: `Initial commit`
3. Klik **"Commit to main"**
4. Klik **"Publish repository"** di atas
5. Isi:
   ```
   Name: bank-melasa-syariah
   Description: Website Bank Melasa Syariah
   ☐ Keep this code private (centang jika mau private)
   ```
6. Klik **"Publish repository"**

✅ **DONE!** Website sudah di GitHub!

---

## 🌍 **Deploy ke GitHub Pages**

Setelah upload, buat website bisa diakses online:

### Via GitHub Website:

1. Buka repository di GitHub
2. Klik **"Settings"**
3. Klik **"Pages"** di sidebar
4. **Source**: Pilih **"main"** branch
5. Klik **"Save"**
6. Tunggu 2-5 menit
7. Refresh halaman
8. Link website akan muncul: `https://username.github.io/bank-melasa-syariah/`

### Via Command Line:

```bash
# Enable GitHub Pages via gh CLI (jika sudah install)
gh repo edit --enable-pages --pages-branch main
```

---

## 📝 **Update Website di Masa Depan**

### Via GitHub Website:

1. Buka file yang mau diedit
2. Klik icon pensil (Edit)
3. Edit file
4. Scroll ke bawah, klik **"Commit changes"**

### Via Git Command Line:

```bash
# 1. Edit file di local
# 2. Add changes
git add .

# 3. Commit
git commit -m "Update: deskripsi perubahan"

# 4. Push
git push
```

### Via GitHub Desktop:

1. Edit file di local
2. Buka GitHub Desktop
3. Lihat perubahan di sidebar
4. Isi commit message
5. Klik **"Commit to main"**
6. Klik **"Push origin"**

---

## 🎯 **Checklist Sebelum Upload**

- [ ] Akun GitHub sudah dibuat
- [ ] Repository sudah dibuat
- [ ] File `README_GITHUB.md` sudah direname jadi `README.md`
- [ ] Semua file sudah siap di folder `lps 2`
- [ ] Nomor WhatsApp sudah diganti (jika perlu)
- [ ] Logo bank sudah ada
- [ ] Test website di local (buka index.html)

---

## 🐛 **Troubleshooting**

### Error: "Permission denied"

**Solusi:** Login ulang ke GitHub atau generate Personal Access Token

### Error: "Repository not found"

**Solusi:** Check URL repository, pastikan sudah dibuat di GitHub

### Error: "Failed to push"

**Solusi:** Pull dulu dengan `git pull origin main` lalu push lagi

### Website tidak muncul di GitHub Pages

**Solusi:**

- Tunggu 5-10 menit
- Check Settings → Pages, pastikan sudah enabled
- Pastikan file `index.html` ada di root folder

### Gambar tidak muncul di GitHub Pages

**Solusi:**

- Check path gambar (harus relative, bukan absolute)
- Pastikan file gambar sudah terupload
- Hard refresh browser (Ctrl+F5)

---

## 📞 **Butuh Bantuan?**

- **GitHub Docs**: https://docs.github.com
- **GitHub Support**: https://support.github.com
- **Git Tutorial**: https://git-scm.com/docs/gittutorial

---

## 🎉 **Selamat!**

Website Bank Melasa Syariah kamu sekarang sudah di GitHub! 🎊

**Next Steps:**

1. ✅ Share link repository ke teman/dosen
2. ✅ Aktifkan GitHub Pages untuk demo online
3. ✅ Tambahkan screenshot di README
4. ✅ Update dokumentasi jika ada perubahan

**Link Repository:** `https://github.com/USERNAME/bank-melasa-syariah`
**Link Website:** `https://USERNAME.github.io/bank-melasa-syariah/`

_(Ganti USERNAME dengan username GitHub kamu)_

---

**Good luck! 🚀**
