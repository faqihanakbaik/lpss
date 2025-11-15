// Bank Melasa Syariah - Main Script
let currentCalculatorType = "financing"; // Default calculator type

document.addEventListener("DOMContentLoaded", () => {
  // Set current year
  document.getElementById("year").textContent = new Date().getFullYear();

  // Initialize GSAP
  if (typeof gsap !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
    initAnimations();
  }

  // Initialize components
  initNavigation();
  initProductCarousel();
  initSimulator();
  initModal();
  initFAQ();

  // Set default calculator to financing
  currentCalculatorType = "financing";
  renderCalculator("financing");
});

// ===== DATA PRODUK (35 PRODUK) =====
const productData = {
  funding: [
    {
      id: "tabungan-t-trip",
      title: "Tabungan T-Trip iB",
      desc: "Tabungan wisata syariah untuk merencanakan perjalanan Anda",
      definisi:
        "Tabungan T-Trip iB adalah produk simpanan berjangka dengan akad Mudharabah Muthlaqah yang dirancang khusus untuk membantu nasabah merencanakan dan mewujudkan perjalanan wisata impian mereka dengan cara menabung secara rutin dan terencana.",
      image:
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&q=80",
      details: {
        syarat: [
          "WNI berusia minimal 17 tahun atau diwakili wali",
          "Mengisi formulir pembukaan rekening",
          "Fotokopi KTP/paspor dan Pas Foto baru",
          "Setoran awal minimal Rp50.000",
        ],
        fitur:
          "Setoran awal dan setoran rutin bulanan ringan. Nasabah mendapat bagi hasil sesuai nisbah yang disepakati bank. Mobile banking. Mendapatkan laporan transaksi (e-statement). Akad mudharabah Muthlaqah. Tabungan hanya dapat diambil ketika perjanjian telah selesai.",
        tarif:
          "Setoran awal Rp. 50.000. Penutupan Rekening Rp. 20.000. Penutupan sebelum Jatuh Tempo Rp. 50.000. Penutupan saat jatuh tempo Gratis. Biaya penggantian buku Rp. 10.000. Perpanjangan kontrak: Rp 20.000",
      },
    },
    {
      id: "tabungan-hijrah-baitullah",
      title: "Tabungan Hijrah Baitullah iB",
      desc: "Tabungan haji dan umroh untuk mewujudkan ibadah Anda",
      definisi:
        "Tabungan Hijrah Baitullah iB adalah produk simpanan syariah yang dirancang khusus untuk membantu nasabah mempersiapkan dana ibadah haji dan umroh dengan setoran yang fleksibel, terhubung langsung dengan sistem SISKOHAT untuk kemudahan pendaftaran haji.",
      image:
        "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=400&q=80",
      details: {
        syarat: [
          "Memberikan Identitas Diri KITAP/KITAS/KTP",
          "Membawa NPWP",
          "Mengisi Formulir Pembukaan Rekening",
          "Memiliki Paspor",
        ],
        fitur:
          "Setoran awal ringan. Bebas Biaya Administrasi. Setoran fleksibel. Terhubung dengan SISKOHAT. Aman dan dijamin LPS. Tabungan hanya dapat diambil jika perjanjian telah usai.",
        tarif:
          "Pembukaan Rekening Tabungan Haji Dewasa: Rp100.000, Tabungan Haji Anak: Rp50.000. Setoran awal minimum Rp 100.000. Biaya Haji Reguler Rp. 90.000.000. Biaya Umrah Reguler Rp. 25.000.000-30.000.000. Setoran Porsi Haji: Rp25.100.000, Setoran Porsi Umrah: Rp 2.000.000. Biaya Penutupan Rekening Sebelum Mendapatkan Porsi Haji: Rp 100.000",
      },
    },
    {
      id: "deposito-lock",
      title: "Deposito Lock iB",
      desc: "Investasi berjangka dengan bagi hasil yang menarik",
      definisi:
        "Deposito Lock iB adalah produk investasi berjangka dengan akad Mudharabah Muthlaqah yang menawarkan bagi hasil kompetitif dengan jangka waktu 1, 3, 6, dan 12 bulan, memberikan kepastian dan keamanan investasi sesuai prinsip syariah.",
      image:
        "https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?w=400&q=80",
      details: {
        syarat: [
          "KTP atau identitas diri lain yang berlaku (paspor/KITAS untuk WNA)",
          "NPWP atau surat pernyataan jika tidak punya",
          "Mengisi formulir pembukaan rekening deposito",
          "Memiliki rekening relasi dengan mata uang yang sama",
        ],
        fitur:
          "Pokok Deposito diperpanjang otomatis saat jatuh tempo (ARO). Pokok dan bagi hasil Deposito diperpanjang otomatis saat jatuh tempo (ARO Kapitalisir). Deposito Cair saat jatuh tempo (Non ARO). Fitur Zakat atau Non Zakat. Jangka waktu: 1, 3, 6, dan 12 bulan.",
        tarif:
          "Setoran Awal: Rp 5.000.000. Biaya Penutupan Rp. 30.000 Bila terjadi perubahan biaya akan diinformasikan melalui media yang dianggap cukup oleh Bank. Biaya Pajak 20%. Bea meterai pada advis dan atau biaya lainnya jika ada sesuai dengan regulasi atau ketentuan yang berlaku.",
      },
    },
    {
      id: "deposito-on-call",
      title: "Deposito On Call iB Amanah",
      desc: "Deposito fleksibel untuk dana jangka pendek 7-30 hari",
      definisi:
        "Deposito On Call dengan akad Mudharabah Mutlaqah adalah produk simpanan investasi berjangka pendek yang memungkinkan nasabah memperoleh bagi hasil optimal dan kompetitif dengan jangka waktu singkat 7-30 hari, pencairan disertai pemberitahuan sebelumnya (on call) minimal 3 hari kerja.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&q=80",
      details: {
        syarat: [
          "Individu: KTP atau identitas diri lain yang berlaku (paspor/KITAS untuk WNA)",
          "NPWP atau surat pernyataan jika tidak punya",
          "Mengisi formulir pembukaan rekening deposito",
          "Memiliki rekening relasi dengan mata uang yang sama dengan deposito",
        ],
        fitur:
          "Penempatan Deposito: Rp 1.000.000.000,-. Tenor/Bagi Hasil Nisbah: 1-7 Hari: 25%, 8-14 Hari: 30%, 15-21 Hari: 35%, 22-29 Hari: 40%. Penempatan Bagi Hasil: Giro/Tabungan. Status Perpanjangan: Non ARO. Bukti Kepemilikan: Bilyet Deposito. Pencairan disertai pemberitahuan sebelumnya (on call) minimal 3 hari kerja.",
        tarif:
          "Biaya Materai Saat Pencairan: Rp 10.000. Pajak bagi hasil: 20%. Biaya transfer antarbank berlaku.",
      },
    },
    {
      id: "tabunganku",
      title: "Tabunganku iB",
      definisi:
        "Tabunganku iB adalah produk simpanan tabungan syariah dengan akad Wadiah Yad Dhamanah yang diperuntukkan bagi seseorang yang telah mempunyai KTP dengan setoran awal ringan, membantu nasabah mengelola keuangan dengan mudah dan dapat diambil kapan saja saat jam operasional.",
      desc: "Tabungan dengan setoran awal ringan untuk semua kalangan",
      image:
        "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&q=80",
      details: {
        syarat: [
          "Warga Negara Indonesia berusia minimal 17 tahun",
          "Mengisi dan menandatangani formulir pembukaan rekening tabungan",
          "Melampirkan fotokopi KTP/paspor",
          "Menyetorkan saldo awal minimal Rp100.000",
          "NPWP (jika ada)",
        ],
        fitur:
          "Setoran awal ringan. Kartu Debit dan Buku Tabungan. Mobile banking. e-chanel BMS Mobile, BNS net banking, notifikasi sms dan email. Akad Wadiah Yad Dhamanah. Tabungan dapat diambil kapan saja ketika jam operasional.",
        tarif:
          "Setoran awal Rp. 100.000. Biaya Administrasi GRATIS. Penutupan Rekening Rp. 20.000. Biaya Dormant Rp. 5.000. Biaya pengecekan saldo di ATM bank lain Rp 4.000. Biaya penggantian buku tabungan Rp. 5.000. Biaya pergantian Kartu ATM BNS Debit Rp 25.000. Transfer antar bank: Transfer Online Rp 6.500, BI FAST Rp 2.500. Biaya Penarikan Rp 2.500 di bawah Rp 5.000.000",
      },
    },
    {
      id: "tabungan-prioritas-safwah",
      title: "Tabungan Prioritas Safwah iB",
      desc: "Tabungan prioritas dengan layanan eksklusif dan bagi hasil menarik",
      definisi:
        "Tabungan Prioritas Safwah iB adalah produk simpanan prioritas berakad Mudharabah Mutlaqah, secara eksklusif ditujukan untuk nasabah individu dengan saldo dana kelolaan besar dan frekuensi transaksi tinggi, memberikan pelayanan premium yang cepat, aman, bebas riba, serta menawarkan imbal hasil berupa porsi bagi hasil dan reward berupa hibah yang lebih kompetitif.",
      image:
        "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&q=80",
      details: {
        syarat: [
          "Saldo Akumulatif Minimum Rp. 300.000.000",
          "Mengisi dan menyetujui syarat layanan prioritas",
          "WNA (Paspor)/WNI (KTP)",
          "Tidak tercatat daftar Hitam di OJK",
          "Dana berasal dari sumber yang Halal",
          "Aktif bertransaksi di bank BMS Syariah",
        ],
        fitur:
          "Kartu Shar-E Debit Prioritas. Mobile Banking. Limit transaksi yang lebih besar. Ruangan Khusus. M-Banking. Buku Tabungan. Layanan SMS Dan Notifikasi. Gmail. Mendapatkan Merchendice hari special. Bagi Hasil Yang menarik yaitu 40%(nasabah) : 60%(bank). Akad Mudharabah Mutlaqah.",
        tarif:
          "Setoran Awal: Rp. 50.000.000 - Rp 100.000.000. Saldo Minimum Mengendap: Rp. 500.000.000. Biaya Administrasi Kartu Debit: Rp. Rp 20.000 per bulan. Biaya Penutupan Rekening: Rp. 100.000. Biaya Rekening Dormant: Rp. 10.000",
      },
    },
    {
      id: "tabungan-si-pintar",
      title: "Tabungan Si-Pintar iB",
      desc: "Tabungan khusus untuk pelajar dari PAUD hingga SMA",
      definisi:
        "Tabungan Si-Pintar iB adalah produk simpanan syariah dengan akad Wadiah Yad Dhamanah yang dirancang khusus untuk pelajar dari PAUD hingga SMA, membantu menumbuhkan kebiasaan menabung sejak dini dengan setoran awal yang sangat ringan dan berbagai fasilitas edukatif.",
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&q=80",
      details: {
        syarat: [
          "Merupakan siswa PAUD/TK/RA, SD/MI, SMP/MTs, SMA/MA atau sederajat",
          "Mengisi formulir aplikasi pembukaan rekening",
          "Melakukan setoran awal minimal Rp1.000",
          "Melampirkan E-KTP Orang Tua/Wali, Kartu Keluarga, KIA atau Akta Kelahiran atau Kartu Pelajar",
          "Nama dan Alamat Sekolah atau Pondok Pesantren/Madrasah",
        ],
        fitur:
          "Mendapatkan Buku Tabungan. Mendapatkan Kartu Debit. Mendapatkan Sosialisasi Pengetahuan. Setoran Awal Minimum. Mendapatkan SMS dan Notifikasi. Akad Wadiah Yad Dhamanah. Penarikan dapat dilakukan kapan saja ketika jam operasional.",
        tarif:
          "Setoran Awal: Rp5.000. Saldo Minimal: Rp10.000. Setoran Minimal: Rp5.000. Sms Notifikasi: All Provider. Fasilitas Kartu ATM Silver Batas Transfer Harian: On Us Rp 50.000.000, Off Us Rp 20.000.000. Batas Transfer Per Transaksi: On Us Rp 25.000.000, Off Us Rp 10.000.000. Batas Penarikan Harian di ATM: On Us Rp 5.000.000, Off Us Rp 5.000.000",
      },
    },
    {
      id: "tabungan-tijarah",
      title: "Tabungan Tijarah iB",
      desc: "Tabungan bisnis untuk pelaku usaha dengan bagi hasil menarik",
      definisi:
        "Tabungan Tijarah iB adalah produk simpanan bisnis dengan akad Mudharabah Mutlaqah yang dirancang khusus untuk pelaku usaha dan perusahaan, menawarkan kemudahan transaksi bisnis dengan bagi hasil yang menarik (40% nasabah : 60% bank) serta berbagai fasilitas perbankan modern.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&q=80",
      details: {
        syarat: [
          "UNTUK INDIVIDU MELAMPIRKAN KARTU IDENTITAS DIRI (KTP) DAN NPWP",
          "DOKUMEN TAMBAHAN UNTUK PERUSAHAAN (NON INDIVIDU) MELIPUTI KTP PEJABAT PERUSAHAAN YANG BERWENANG, AKTA PENDIRIAN PERUSAHAAN DAN PERUBAHAN TERAKHIR, NPWP, SIUP/TDP, NIB SERTA DOMISILI PERUSAHAAN",
          "MENGISI DAN MENANDATANGANI FORMULIR PEMBUKAAN REKENING SECARA LENGKAP DAN BENAR",
        ],
        fitur:
          "PEMBAYARAN BILL PAYMENT (LISTRIK, INTERNET, AIR, DAN TELEPON). AKSES MOBILE BANKING APLIKASI TIJA-SYARIAH. BUKU FISIK TABUNGAN. KARTU DEBIT, TERSEDIA DUA PILIHAN JENIS KARTU ATM YAITU PLATINUM DAN DZAHABUN UNTUK NASABAH PERORANGAN SERTA ATM DZAHABUN UNTUK NON PERORANGAN. BAGI HASIL YANG MENARIK UNTUK NASABAH 40% DAN BANK 60%. Akad Mudharabah Mutlaqah.",
        tarif:
          "Setoran Awal Mininum: Rp 100.000. Setoran Minimum Selanjutnya: Rp50.000. Saldo Minimum: Rp 500.000. Biaya Penutupan Atau Pembukaan Rekening: Rp25.000. Biaya Kartu Debit yang rusak/hilang: Rp25.000. Biaya Penggantian Buku Tabungan yang Hilang: Rp25.000. Biaya Dormant: Rp 10.000",
      },
    },
    {
      id: "tabungan-mulia-pensiunan",
      title: "Tabungan iB Mulia Pensiunan",
      desc: "Tabungan khusus untuk persiapan masa pensiun",
      definisi:
        "Tabungan iB Mulia Pensiunan Syariah adalah produk simpanan berjangka dengan akad Mudharabah Mutlaqah yang diperuntukan bagi nasabah perorangan atau karyawan perusahaan yang berkeinginan mempersiapkan jaminan finansial untuk masa hari tua atau purnabakti, dana hanya dapat dicairkan saat nasabah mencapai usia pensiun atau batas waktu yang disepakati.",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80",
      details: {
        syarat: [
          "Mengisi formulir aplikasi pembukaan rekening",
          "Melakukan setoran awal minimal Rp10.000",
          "Melampirkan E-KTP, Surat Keterangan Bukti Perekaman dari Dukcapil setempat (bagi calon nasabah yang belum memiliki e-KTP)",
          "Surat Keterangan Domisili (bagi calon nasabah yang berasal dari luar daerah)",
          "NPWP (Khusus Nasabah wajib pajak), Kartu Keluarga, Surat Keterangan Pensiun",
          "Surat Keterangan Jabatan Terakhir (untuk nasabah pra pensiun)",
        ],
        fitur:
          "Setoran awal: Rp.10.000. Setoran minimal: Rp.10.000. Fasilitas kartu ATM: Gold. Batas transfer harian: on us Rp. 75.000.000, off us Rp. 30.000.000. Batas transfer per transaksi: on us Rp. 25.000.000, off us Rp. 10.000.000. Batas penarikan harian di ATM: on us Rp. 10,000.000, off us Rp. 5.000.000. Bagi Hasil yang menarik yaitu 40% untuk nasabah dan 60% untuk bank. Akad Mudharabah Mutlaqah.",
        tarif:
          "Biaya Materai: Rp 10.000. Biaya Penutupan Rekening: Rp 10.000. Biaya Adm. Rekening Dorman Per Bulan: Rp 5.000. Biaya Aktivasi Rekening Dorman: Rp 2.500. Biaya Administrasi Rekening Dibawah Saldo Minimum: Rp 5.000. Biaya Pergantian Buku Tabungan Karena Habis/Penuh: Rp 2.500. Biaya Pergantian Buku Tabungan Karena Rusak: Rp 5.000. Biaya Penerbitan Kartu ATM: Rp 16.500. Biaya Administrasi ATM Per Bulan: Rp 6.500. Biaya Pergantian Kartu Expired, hilang, rusak: Rp 25.000. Biaya Transfer ke Atm Bank Lain: Rp 6.500",
      },
    },
    {
      id: "tabungan-my-qurbani",
      title: "Tabungan My Qurbani iB",
      desc: "Tabungan berencana untuk persiapan qurban",
      definisi:
        "Tabungan My Qurbani iB adalah produk simpanan dengan akad Wadiah Yad Dhamanah yang dirancang khusus untuk membantu nasabah mempersiapkan dana qurban dengan cara menabung secara rutin, penarikan hanya dapat dilakukan menjelang Idul Adha atau sesuai kesepakatan.",
      image:
        "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=400&q=80",
      details: {
        syarat: [
          "WNI",
          "Mengisi Formulir pembukaan tabungan Qurban",
          "Fotokopi KTP dan dokumen pendukung",
        ],
        fitur:
          "Setoran awal ringan. Setoran dapat dilakukan harian, mingguan, atau bulanan. Tidak ada biaya administrasi bulanan. Penarikan hanya dapat dilakukan menjelang Idul Adha atau sesuai kesepakatan. Tidak ada bagi hasil karena menggunakan akad wadiah (titipan). Akad Wadiah Yad Dhamanah.",
        tarif:
          "Setoran Awal Minimum: Rp50.000. Setoran Selanjutnya Minimum Rp100.000. Saldo Minimum Mengendap: Umumnya antara Rp10.000 hingga Rp50.000. Biaya Penutupan Rekening: Dikenakan jika rekening ditutup di luar tujuan qurban atau sebelum jatuh tempo, berkisar antara Rp5.000 hingga Rp25.000. Penarikan Dana: Bersifat non-transaksional, dana biasanya tidak dapat ditarik sewaktu-waktu dan hanya bisa diambil saat mendekati Hari Raya Idul Adha atau setelah target qurban tercapai.",
      },
    },
    {
      id: "tabungan-emas-slahah",
      title: "Tabungan Emas-slahah",
      desc: "Investasi emas dengan cara mencicil secara syariah",
      definisi:
        "Tabungan Emas-slahah dengan Akad Wadiah Yad Dhamanah adalah layanan simpanan dalam bentuk saldo emas digital atau fisik yang memungkinkan nasabah berinvestasi dalam emas dengan cara mencicil atau menabung secara rutin, emas dapat dicairkan atau ditarik kapan saja dengan datang langsung ke kantor cabang.",
      image:
        "https://images.unsplash.com/photo-1610375461246-83df859d849d?w=400&q=80",
      details: {
        syarat: [
          "Rekening dapat berlaku untuk warga Negara Indonesia (WNI)",
          "Wajib melampirkan kelengkapan dokumen (KTP,NPWP,Paspor)",
          "Tidak tercantum dalam daftar hitam yang masih berlaku yang diterbitkan oleh BI",
          "Mempunyai rekening tabungan reguler di Bank Melasa Syariah",
          "Berumur minimal 17 tahun",
        ],
        fitur:
          "Setoran ringan. BMS Mobile Banking. Fasilitas E-Mas untuk melihat Saldo. Buku Tabungan. Investasi Emas Syariah. Auto Debet Infaq. Akad Wadiah Yad Dhamanah. Emas dapat dicairkan atau ditarik kapan saja dengan datang langsung ke kantor cabang.",
        tarif:
          "Setoran Awal: Rp50.000. Minimal Setoran Wajib Auto Debet: Rp50.000. Minimal Setoran Manual/Top Up: Rp10.000. Saldo Minimum: Rp10.000. Minimal target dana (hold): Rp600.000. Penarikan darurat: Rp50.000. Penutupan rekening: Rp50.000. Ganti buku karena rusak: Rp15.000",
      },
    },
    {
      id: "tabungan-edudream",
      title: "Tabungan EduDream iB",
      desc: "Tabungan pendidikan untuk masa depan anak",
      definisi:
        "Tabungan EduDream iB adalah produk simpanan dengan akad Wadiah Yad Dhamanah yang dirancang khusus untuk membantu orang tua mempersiapkan dana pendidikan anak dengan setoran ringan dan bebas biaya administrasi, dana hanya dapat ditarik pada waktu tertentu seperti saat pembayaran uang sekolah atau awal tahun ajaran.",
      image:
        "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400&q=80",
      details: {
        syarat: [
          "Perorangan WNI",
          "Mengisi formulir pembukaan rekening Tabungan Pendidikan Al-'Ilm",
          "FC KTP/SIM/Paspor (untuk orang tua/wali)",
          "FC NPWP",
          "Kartu Pelajar (untuk pelajar)",
        ],
        fitur:
          "Setoran ringan dan bebas biaya administrasi. Buku Tabungan. BLS Mobile Banking. Notifikasi dan sms. Beasiswa. Dana hanya dapat ditarik pada waktu tertentu, seperti saat pembayaran uang sekolah, semester, atau awal tahun ajaran. Akad Wadiah Yad Dhamanah.",
        tarif:
          "Setoran Awal: Rp 50.000. Setoran Rutin Minimum per Bulan: Rp 20.000. Biaya Administrasi: Gratis. Biaya Penutupan Rekening: Rp 10.000",
      },
    },
    {
      id: "tabungan-globalunity",
      title: "Tabungan GlobalUnity iB",
      desc: "Tabungan valuta asing untuk transaksi internasional",
      definisi:
        "Tabungan GlobalUnity iB adalah produk simpanan valuta asing dengan akad Wadiah Yad Dhamanah dan Sharf yang tersedia dalam mata uang USD, GBP, EUR, SGD, dan AUD, memungkinkan nasabah melakukan transaksi internasional dengan mudah dan sesuai prinsip syariah.",
      image:
        "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=400&q=80",
      details: {
        syarat: [
          "WNI: Berusia minimal 18 tahun atau sudah menikah, Mengisi formulir pembukaan rekening, Menyerahkan fotokopi KTP dan NPWP (jika ada), Menyetorkan dana awal USD 300 atau setara Rp 4.800.000",
          "WNA: Berusia minimal 18 tahun, Mengisi formulir pembukaan rekening, Menyerahkan Paspor dan Kartu Izin Tinggal (KITAS/KITAP) yang masih berlaku, Menyetorkan dana awal USD 300 atau setara Rp 4.800.000",
        ],
        fitur:
          "Mata Uang Tersedia USD, GBP, EUR, SGD, AUD. Akad Syariah: Wadiah Yad Dhamanah & Sharf. Imbalan (Hibah) Dapat diberikan sukarela oleh bank. Akses Transaksi Online Banking, Mobile Banking, Kantor Cabang. Kartu Debit Global Bisa digunakan untuk transaksi internasional. Kepatuhan Syariah Disertifikasi oleh Dewan Pengawas Syariah. Tabungan dapat digunakan untuk transaksi atau penarikan valuta asing kapan saja.",
        tarif:
          "Setoran Awal Minimum: Rp 4.800.000 (setara USD 300). Saldo Minimum: Rp3.200.000 (setara USD 200). Administrasi Bulanan Gratis, jika saldo ≥USD 200. Biaya Saldo di Bawah Minimum USD 2 per bulan (jika saldo < USD 200). Biaya Penutupan Rekening USD 5. Transfer Antar Negara Mengikuti biaya bank koresponden (sekitar USD 10–15). Tarik Tunai di ATM Luar Negeri Gratis di jaringan Bank Nusantara Syariah dan mitra global",
      },
    },
    {
      id: "giro-mytijarah",
      title: "Giro MyTijarah iB",
      desc: "Giro bisnis syariah untuk transaksi perusahaan",
      definisi:
        "Giro Bisnis Syariah adalah simpanan rekening giro yang dikelola sesuai prinsip Islam tanpa riba menggunakan akad Mudharabah Muthlaqah, digunakan oleh perusahaan, lembaga, dan pengusaha untuk transaksi non-tunai harian seperti pembayaran dan transfer dana, nasabah dapat menyetor dan menarik dana kapan saja serta memperoleh bagi hasil sesuai kesepakatan.",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&q=80",
      details: {
        syarat: [
          "Nasabah perorangan: KTP/Paspor KITAS/KITAP, NPWP, Mengisi formulir aplikasi pembukaan rekening giro syariah, Menyetor dana sesuai dengan ketentuan minimal yang ditetapkan bank, Menyiapkan contoh tanda tangan sebagai otorisasi transaksi",
          "Nasabah perusahaan/badan usaha: Fotokopi KTP/Paspor KITAS/KITAP dari setiap pengurus yang berwenang, NPWP pengurus, Fotokopi Akta Pendirian dan Anggaran Dasar perusahaan beserta perubahannya (jika ada), Fotokopi SIUP, TDP, atau dokumen izin usaha lainnya, Surat Keterangan Domisili Usaha (SKDU)",
        ],
        fitur:
          "Berdasarkan akad Mudharabah Muthlaqah. Bukti kepemilikan electronic statement. Tersedia fitur Virtual Account Cash Management Service (CMS). Multi-Currency. Media Penarikan Fleksibel.",
        tarif:
          "IDR: Setoran Awal Mininum: Rp1.000.000, Setoran Minimum Selanjutnya: Rp100.000, Saldo Minimum: Rp1.000.000, Biaya Administrasi per Bulan: Rp20.000, Biaya Administrasi ATM per Bulan: Rp15.000 (Kartu ATM Platinum), Biaya Penutupan Rekening: Rp100.000, Biaya Dormant: Rp25.000. USD: Setoran Awal Minimal: $100, Setoran Minimum: $100, Biaya Administrasi Bulanan: $5, Biaya Administrasi Bulanan Tambahan Jika Saldo di Bawah $500: $2, Biaya Penutupan Rekening: $10, Biaya Setoran Bank Notes Cabang Jakarta: 0.2%, Cabang Luar Jakarta: 0.3%, Biaya Penarikan Bank Notes Cabang Jakarta: 0.12%, Cabang Luar Jakarta: 0.14%, Biaya Materai: Rp10.000/bulan",
      },
    },
    {
      id: "giro-platinum",
      title: "Giro Platinum iB",
      desc: "Giro premium dengan layanan eksklusif",
      definisi:
        "Giro Platinum iB adalah produk simpanan syariah premium dengan akad Wadiah yang memungkinkan kemudahan transaksi karena dapat dicairkan kapan saja dengan cek/bilyet giro, memberikan keamanan dan kepastian manfaat bagi nasabah perorangan maupun badan usaha.",
      image:
        "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&q=80",
      details: {
        syarat: [
          "Nasabah perorangan: KTP/Paspor KITAS/KITAP, NPWP, Mengisi formulir aplikasi pembukaan rekening giro syariah, Menyetor dana sesuai dengan ketentuan minimal yang ditetapkan bank, Menyiapkan contoh tanda tangan sebagai otorisasi transaksi",
          "Nasabah perusahaan/badan usaha: Fotokopi KTP/Paspor KITAS/KITAP dari setiap pengurus yang berwenang, NPWP pengurus, Fotokopi Akta Pendirian dan Anggaran Dasar perusahaan beserta perubahannya (jika ada), Fotokopi SIUP, TDP, atau dokumen izin usaha lainnya, Surat Keterangan Domisili Usaha (SKDU)",
        ],
        fitur:
          "Kartu Shar-e Debit (untuk rekening perorangan). Cek dan Bilyet Giro. Layanan Mobile Banking (untuk rekening perorangan). Akad Wadiah.",
        tarif:
          "PERORANGAN: Setoran Awal: Rp500.000. Setoran Minimal: Rp500.000. Penutupan Rekening: Rp50.000. NON-PERORANGAN: Setoran Awal: Rp1.000.000. Setoran Minimal: Rp1.000.000. Penutupan Rekening: Rp50.000. Biaya Administrasi: Rp15.000. Biaya Buku Cek/BG 10 Lembar: Rp130.000. Biaya Buku Cek/BG 25 Lembar: Rp300.000. Biaya Cetak Rek Koran Per Lembar: Rp500. Biaya Materai: Rp10.000",
      },
    },
    {
      id: "reksa-dana",
      title: "Reksa Dana Syariah",
      desc: "Investasi reksa dana sesuai prinsip syariah",
      definisi:
        "Reksa Dana Syariah adalah produk investasi dengan akad Mudharabah Muqayyadah yang berbasis prinsip syariah, diawasi Dewan Pengawas Syariah (DPS), investasi hanya pada efek syariah dengan mekanisme cleansing (pembersihan pendapatan non-halal) untuk memastikan kehalalan investasi.",
      image:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&q=80",
      details: {
        syarat: [
          "Formulir data nasabah & pembukaan rekening nasabah perorangan atau non perorangan (apabila nasabah belum memiliki rekening di Bank Melasa Syariah)",
          "Formulir pembukaan reksa dana nasabah perorangan atau non-perorangan",
          "Formulir investasi reksa dana nasabah perorangan atau non-perorangan",
          "Nasabah Perorangan (WNI): e-KTP, NPWP (jika ada)",
          "Nasabah Non-Perorangan: NPWP, e-KTP Pengurus, Akta Pendirian, SKDU/SITU/SKDP, SIUP/Izin Usaha Lainnya, Analisis Yuridis",
        ],
        fitur:
          "Berbasis prinsip syariah. Diawasi Dewan Pengawas Syariah (DPS). Investasi pada Efek Syariah. Cleansing (Pembersihan Pendapatan Non-Halal). Akad Mudharabah Muqayyadah.",
        tarif:
          "Biaya pengelolaan: Selama berinvestasi. Biaya pengalihan: Saat ganti produk. Biaya penjualan unit: Saat mencairkan dana. Biaya pembelian unit: Saat membeli unit. Minimum transaksi awal Rp1.000.000. Minimum Top Up Rp100.000",
      },
    },
    {
      id: "sya-inves-go",
      title: "Sya-Inves GO",
      desc: "Special Investment dengan akad Mudharabah Muqayadah",
      definisi:
        "Sya-Inves GO adalah produk investasi khusus dengan akad Mudharabah Muqayadah yang ditujukan untuk nasabah dengan dana kelolaan besar (minimum Rp100 juta), menawarkan diversifikasi aset halal dengan transparansi penuh, bagi hasil langsung (profit sharing), dan pencatatan off-balance sheet.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80",
      details: {
        syarat: [
          "Mengisi formulir aplikasi pembukaan rekening",
          "Melakukan setoran sebagai saldo penempatan minimal Rp1.000.000.000 (Satu Milyar Rupiah)",
          "Melampirkan Kartu identitas: Fotocopy KTP Pengurus, Fotocopy Akta Pendirian, Fotocopy NIB, Fotocopy NPWP, Ijin Domisili dan atau Keterangan Perusahaan dan Pemerintah Setempat",
        ],
        fitur:
          "Nilai investasi - Minimum Rp100 juta atau setara untuk mata uang asing dalam bentuk USD. Jangka waktu/tenor - Dapat dilakukan baik untuk jangka pendek maupun jangka panjang Tenor investasi dana disesuaikan dengan aset dasar yang didanai, sehingga jatuh tempo investasi dana sama dengan jatuh tempo aset dasar. Pilihan jangka waktu yang fleksibel. Diversifikasi aset yang halal. Transparansi dan Pengawasan. Pencatatan Off-Balance Sheet. Bagi Hasil Langsung (Profit Sharing). Akad Mudharabah Muqayadah.",
        tarif:
          "Biaya Materai Saat Pencairan: Rp 10.000. Pajak bagi hasil: 20%. Biaya transfer antarbank berlaku",
      },
    },
  ],
  financing: [
    {
      id: "al-qardh-social",
      title: "Al-Qardh Social",
      desc: "Pinjaman sosial tanpa imbalan untuk keperluan darurat",
      definisi:
        "Al-Qardh Social adalah produk pinjaman kebajikan dengan akad Qard yang diperuntukkan bagi kebutuhan sosial, kemanusiaan, atau darurat tanpa margin keuntungan, bank hanya meminta pengembalian pokok pinjaman, dana berasal dari dana sosial (zakat, infaq, dana kebajikan bank) dan seluruh proses bebas riba dan gharar.",
      image:
        "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=400&q=80",
      details: {
        syarat: [
          "Warga Negara Indonesia (WNI) Berusia minimal 18 tahun atau sudah menikah",
          "Memiliki KTP dan KK Sebagai identitas dan verifikasi",
          "Surat Keterangan Tidak Mampu / Tujuan Sosial Dibutuhkan untuk menilai kelayakan sosial",
          "Rekening di Bank Syariah Terkait Untuk pencairan dan pengembalian dana",
          "Bersedia Mengembalikan Pokok Pinjaman Dengan komitmen moral dan tertulis",
        ],
        fitur:
          "Akad Qard: Akad pinjaman kebajikan tanpa tambahan imbalan (bunga). Tujuan Sosial: Diperuntukkan bagi kebutuhan sosial, kemanusiaan, atau darurat. Tanpa Margin Keuntungan: Bank tidak mengambil keuntungan, hanya pengembalian pokok. Tenor Pendek-Menengah: Jangka waktu pengembalian biasanya 3-24 bulan. Cicilan Fleksibel: Dapat dicicil sesuai kemampuan nasabah. Sumber Dana Sosial: Dana berasal dari dana sosial (zakat, infaq, dana kebajikan bank). Bebas Riba dan Gharar: Seluruh proses mengikuti prinsip syariah.",
        tarif:
          "Biaya Administrasi Sekadar untuk menutup biaya operasional (misalnya Rp10.000-Rp25.000). Denda (opsional & non-profit) Jika ada keterlambatan, denda tidak menjadi keuntungan bank, tapi disalurkan untuk dana sosial. Biaya Materai Sesuai ketentuan transaksi",
      },
    },
    {
      id: "gadai-emas",
      title: "Gadai Emas Albarkah Syariah",
      desc: "Solusi dana cepat dengan jaminan emas",
      definisi:
        "Gadai Emas Albarkah Syariah adalah produk pembiayaan dengan akad Rahn dan Ijarah yang memberikan solusi dana cepat dengan jaminan emas perhiasan atau batangan, maksimal pinjaman 80% dari taksiran harga pasar dengan jangka waktu hingga 4 bulan dan dapat diperpanjang.",
      image:
        "https://images.unsplash.com/photo-1610375461246-83df859d849d?w=400&q=80",
      details: {
        syarat: [
          "Perorangan (WNI), pemilik usaha, dan badan usaha yang memiliki legalitas",
          "Mengisi formulir permohonan",
          "Menunjukkan asli bukti identitas dan menyerahkan foto copy bukti identitas",
          "Menyerahkan barang gadai berupa emas perhiasan atau lantakkan",
          "Menandatangani Akad/Perjanjian Gadai",
        ],
        fitur:
          "Reservasi gadai via aplikasi mobile. Pembayaran produk digital (tebus ulang/perpanjang). Simulasi info harga emas real-time. Layanan pick-up emas. Jenis Agunan: Emas Perhiasan, Emas batangan/bersertifikat. Maksimal Pinjaman: 80% dari taksiran harga pasar. Akad Rahn dan Ijarah. Proses: Nasabah datang bawa persyaratan → Petugas menaksir Emas dan memberi info pinjaman optimal → Tandatangan Akad oleh Nasabah dan petugas → Pencairan pinjaman pada rekening nasabah.",
        tarif:
          "Biaya Pendaftaran: Rp 15.000. Biaya Transaksi (UJRAH) per transaksi: Rp 6.500. Biaya Pembatalan: Rp 5.000. Jangka waktu pinjaman hingga 4 bulan, dapat diperpanjang.",
      },
    },
    {
      id: "pembiayaan-multiguna",
      title: "Pembiayaan Hijrah Multiguna",
      desc: "Pembiayaan fleksibel untuk berbagai kebutuhan",
      definisi:
        "Pembiayaan Hijrah Multiguna adalah produk pembiayaan dengan akad Murabahah yang memberikan solusi fleksibel untuk berbagai kebutuhan nasabah perorangan dengan angsuran tetap, proses mudah dan cepat, tanpa agunan, dan tidak diwajibkan uang muka.",
      image:
        "https://images.unsplash.com/photo-1554224154-22dec7ec8818?w=400&q=80",
      details: {
        syarat: [
          "Nasabah Perorangan",
          "Tidak termasuk dalam Daftar Pembiayaan Bermasalah",
          "Dapat Dicover asuransi (opsional)",
        ],
        fitur:
          "Menenangkan karena sesuai dengan prinsip syariah. Angsuran tetap hingga akhir pembiayaan sesuai perjanjian. Mudah, dapatkan persetujuan pembiayaan Anda dengan persyaratan pengajuan yang mudah dan proses pembiayaan yang singkat. Tidak memerlukan agunan. Tidak diwajibkan adanya uang muka. Akad Murabahah.",
        tarif:
          "Waktu pembiayaan 12-96 bulan. Limit pembiayaan 5 juta-200 juta. Income - Jabodetabek: 3 juta, Non Jabodetabek: 2 juta. Biaya Administrasi. Biaya Materai. Biaya Asuransi (jika ada)",
      },
    },
    {
      id: "pembiayaan-rumah",
      title: "Sakinah Home Financing (KPR)",
      desc: "Wujudkan rumah impian dengan akad murabahah",
      definisi:
        "Sakinah Home Financing (KPR) adalah produk pembiayaan kepemilikan rumah dengan akad Jual Beli (Murabahah) yang membantu nasabah mewujudkan rumah impian dengan cicilan flat, total harga jual disepakati di awal (transparan), tenor hingga 20 tahun, dan dapat digunakan untuk rumah baru maupun bekas.",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&q=80",
      details: {
        syarat: [
          "Warga Negara Indonesia (WNI)",
          "Berusia minimal 21 tahun atau telah menikah",
          "Usia maksimal saat pelunasan adalah 55 tahun",
          "Minimal masa kerja 6 bulan - 1 tahun (untuk karyawan)",
          "Minimal masa usaha 1 - 2 tahun (untuk wiraswasta)",
          "Melengkapi dokumen permohonan",
        ],
        fitur:
          "Proses permohonan yang mudah serta cepat. Fleksibel untuk membeli rumah baru maupun bekas. Plafon pembiayaan yang besar. Jangka waktu pembiayaan yang panjang. Fasilitas auto debit dari tabungan induk. Akad Jual Beli (Murabahah), Cicilan Flat, Total Harga Jual Disepakati di Awal (Transparan). Tenor hingga 20 tahun.",
        tarif:
          "Biaya Administrasi: Sesuai Kebijakan Bank. Biaya Notaris: Sesuai kebijakan bank. Biaya Materai: Bervariasi sesuai jumlah dokumen. Biaya Asuransi: Mengikuti tarif yang diberlakukan perusahaan asuransi syariah. Biaya Appraisal: Rp 500.000 - Rp.1.000.000. Biaya Pelunasan Dipercepat: Gratis. Biaya Ta'widh: ± 0,1% - 0,2% dari cicilan yang yang terlambat. Margin Pertahun adalah 2,5%, Margin Selama 20 Tahun adalah 50%",
      },
    },
    {
      id: "pembiayaan-kendaraan",
      title: "Vehicle Syariah Financing (VEHIRA)",
      desc: "Miliki kendaraan impian dengan cicilan syariah",
      definisi:
        "Vehicle Syariah Financing (VEHIRA) adalah produk pembiayaan kendaraan dengan akad Murabahah untuk kendaraan roda dua atau roda empat, baik baru, bekas, maupun berbasis listrik, dengan maksimal pembiayaan Rp 500 juta, margin 12% per tahun, dan jangka waktu maksimal 5 tahun.",
      image:
        "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&q=80",
      details: {
        syarat: [
          "Warga Negara Indonesia (WNI)",
          "Berusia minimal 21 tahun atau telah menikah",
          "Usia maksimal saat pelunasan adalah 55 tahun",
          "Minimal masa kerja 1 tahun (untuk karyawan)",
          "Minimal masa usaha 2 tahun (untuk wiraswasta)",
          "Melengkapi dokumen permohonan",
        ],
        fitur:
          "Pokok Pembiayaan - Maksimal sebesar Rp 500.000.000. Margin - 12% per tahun. Jangka Waktu Pembiayaan - Maksimal s.d 5 Tahun. Jenis Agunan - Kendaraan bermotor yang menjadi objek pembiayaan. Uang Muka - 10%. Akad Murabahah. Untuk kendaraan roda dua atau roda empat, baik baru, bekas, maupun berbasis listrik.",
        tarif:
          "Biaya Administrasi: Sesuai Kebijakan Bank. Biaya Notaris: Sesuai kebijakan bank. Biaya Materai: Bervariasi sesuai jumlah dokumen. Biaya Asuransi: Mengikuti tarif yang diberlakukan perusahaan asuransi syariah. Biaya Appraisal: Rp 300.000. Biaya Pelunasan Dipercepat: Rp 100.000. Biaya Ta'widh: Rp 50.000",
      },
    },
    {
      id: "gadai-emas",
      title: "Gadai Emas iB (Rahn)",
      desc: "Solusi dana cepat dengan jaminan emas",
      image:
        "https://images.unsplash.com/photo-1610375461246-83df859d849d?w=400&q=80",
      details: {
        syarat: [
          "Emas Perhiasan/Batangan dengan kadar min. 70%",
          "Maksimal Pinjaman: 80% dari taksiran harga pasar",
        ],
        fitur:
          "Akad Rahn (Gadai), Cepat Cair, Jaminan Emas Aman. Jangka waktu pinjaman hingga 4 bulan, dapat diperpanjang.",
        tarif:
          "Biaya Pendaftaran: Rp 15.000. Biaya Transaksi (UJRAH) per transaksi: Rp 6.500. Biaya Pembatalan: Rp 5.000.",
      },
    },
    {
      id: "pembiayaan-emas",
      title: "C&E Cicilan Emas",
      desc: "Miliki emas batangan dengan cara mencicil",
      definisi:
        "C&E Cicilan Emas adalah produk pembiayaan dengan akad Murabahah yang memungkinkan nasabah memiliki emas batangan bersertifikat dengan cara mencicil, memberikan kemudahan berinvestasi emas tanpa harus membayar tunai sekaligus.",
      image:
        "https://images.unsplash.com/photo-1610375461246-83df859d849d?w=400&q=80",
      details: {
        syarat: [
          "KTP",
          "NPWP (Pembiayaan > Rp50 juta) (Maksimal Limit Rp150 juta)",
          "Minimal usia 21 tahun, maksimal 60 tahun",
        ],
        fitur:
          "Fasilitas pembayaran Online/Offline. Jangka waktu pembiayaan fleksibel. Mendapatkan sertifikat emas/bukti kepemilikan. Akad Murabahah. Uang Muka (DP): 10%-30% dari harga emas.",
        tarif:
          "Uang Muka (DP): 10%-30% dari harga emas. Sebagai tanda keseriusan dan mengurangi jumlah cicilan. Biaya Administrasi: 1% dari total pembiayaan. Untuk menutupi biaya proses dan pengurusan akad. Denda Keterlambatan: Dikenakan jika nasabah terlambat membayar. Tidak menjadi keuntungan bank, tapi disalurkan untuk dana sosial. Margin Keuntungan Bank: Disepakati di awal antara bank dan nasabah. Bersifat tetap (tidak berubah selama masa cicilan).",
      },
    },
    {
      id: "pembiayaan-multiguna",
      title: "Pembiayaan Multiguna",
      desc: "Pembiayaan fleksibel untuk berbagai kebutuhan",
      image:
        "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=400&q=80",
      details: {
        syarat: [
          "Usia 21-55 tahun",
          "Penghasilan tetap",
          "Jaminan: Sertifikat rumah/BPKB",
        ],
        fitur:
          "Plafon hingga Rp 500 juta, tenor hingga 10 tahun, proses cepat.",
        tarif: "Biaya Administrasi: 1% dari plafon.",
      },
    },
    {
      id: "al-qardh-card",
      title: "Al-Qardh Card",
      desc: "Kartu kredit syariah dengan fitur cashback dan smartspending",
      definisi:
        "Al-Qardh Card adalah kartu kredit syariah dengan akad Kafalah, Qardh, dan Ijarah yang menawarkan berbagai fitur modern seperti welcome bonus cashback, smartspending (cicilan 0%), smartsadaqah (donasi rutin), dan smartbill (autodebet tagihan), dengan maksimal transaksi Rp 8 juta.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&q=80",
      details: {
        syarat: [
          "Warga Negara Indonesia (WNI)",
          "Minimum 21 tahun",
          "Menyerahkan Fotokopi KTP, NPWP, dan Paspor",
          "Memiliki rekening Tabungan di Bank BMS",
          "Mengisi formulir (data diri, profil resiko)",
          "Menandatangani akad",
          "Penghasilan Minimum Rp 3.000.000 hingga Rp 5.000.000 per bulan",
          "Tidak masuk blacklist SLIK OJK",
        ],
        fitur:
          "Welcome Bonus - Cashback hingga Rp150 ribu dengan aktivasi dan transaksi pertama minimal Rp1. Smartspending - Fitur keringanan pembayaran tagihan melalui cicilan 0% hingga 12 bulan. Smartsadaqah - Fitur donasi secara rutin setiap bulan secara autodebet dengan Lazis yang berkerja sama dengan Bank Brilliant Core syariah. Smartbill - Fitur pembayaran tagihan rutin bulanan secara autodebet seperti tagihan listrik, air, asuransi, internet/wifi, dll. Maximal Transaksi sebesar Rp 8.000.000. Akad: Kafalah, Qardh, dan Ijarah.",
        tarif:
          "Ijarah Fee: Rp. 300.000 per tahun. Biaya Penarikan Tunai: Rp 25.000 - Rp 50.000 per transaksi penarikan. Biaya Penggantian Kartu Hilang/Rusak: Rp 50.000. Biaya Kelebihan Limit (Overlimit Fee) Rp 100.000 - Rp 250.000 per kejadian. Denda Keterlambatan (Ta'widh): Rp 45.000. Biaya Cetak Tagihan Kertas: Rp 20.000 per lembar",
      },
    },
  ],
  fee_based: [
    {
      id: "safe-deposit-box",
      title: "Safe Deposit Box (SDB) iB",
      desc: "Penyimpanan barang berharga dengan keamanan tinggi",
      definisi:
        "Safe Deposit Box (SDB) iB adalah layanan penyewaan kotak penyimpanan dengan akad Ijarah yang menyediakan tempat aman untuk menyimpan barang berharga dengan sistem keamanan 24 jam, akses kunci ganda, dan kerahasiaan aset terjamin.",
      image:
        "https://images.unsplash.com/photo-1582139329536-e7284fece509?w=400&q=80",
      details: {
        syarat: [
          "Merupakan nasabah Bank Melasa Syariah",
          "Mengisi dan menandatangani formulir permohonan penyewaan SDB dan perjanjian sewa-menyewa (Akad Ijarah)",
          "Memberi Dokumen KTP, NPWP, Pas Foto, Kartu Keluarga (KK) atau akta kelahiran, Paspor",
          "Surat Kuasa, SIUP, TDP, atau NIB (Nomor Induk Berusaha), Fotokopi Akta Pendirian Perusahaan dan perubahannya (nonperorangan)",
          "Menandatangani surat pernyataan bahwa barang yang disimpan bukan barang terlarang",
        ],
        fitur:
          "Akses Kunci Ganda. Ruang Khazanah (Vault) Khusus. Sistem Keamanan 24 Jam. Berbagai Pilihan Ukuran. Kerahasiaan Aset Terjamin. Mendapat Kartu SDB. Ruang Khusus Pemeriksaan Aset. Akad Ijarah. Aset hanya dapat diambil jika nasabah mengkonfirmasi dan datang langsung ke cabang membawa tanda kepemilikan SDB.",
        tarif:
          "Ukuran Box [Sewa per Tahun]: Kecil (3 inch x 10 inch x 24 inch) > Rp. 500.000. Sedang (5 inch x 10 inch x 24 inch) > Rp. 600.000. Besar (10 inch x 10 inch x 24 inch) > Rp. 800.000. Biaya administrasi perpanjangan Rp75.000. Harga jaminan Kunci Rp900.000/2 kunci. Kehilangan Kunci (1 kunci): Rp 580.000",
      },
    },
    {
      id: "inkaso-syariah",
      title: "Layanan Inkaso iB",
      desc: "Layanan penagihan cek/bilyet giro",
      definisi:
        "Layanan Inkaso iB adalah layanan penagihan dengan akad Wakalah untuk warkat berharga seperti cek, bilyet giro, wesel, dan promissory notes yang dapat dilaksanakan di seluruh kantor cabang, tersedia bagi nasabah maupun non-nasabah dengan proses 1-3 hari kerja.",
      image:
        "https://images.unsplash.com/photo-1554224154-22dec7ec8818?w=400&q=80",
      details: {
        syarat: [
          "Dokumen Identitas WNI: Kartu Tanda Penduduk (KTP), WNA: Paspor dan KIMS/KITAS/KITAP",
          "Pengirim inkaso menyerahkan surat atau dokumen berharga kepada cabang untuk ditagihkan kepada pembayaran inkaso di tempat/kota lain di Indonesia",
        ],
        fitur:
          "Dapat dilaksanakan diseluruh kantor cabang tersedia bagi nasabah maupun bukan nasabah. Pembayaran hasil penagihan dapat dilaksanakan secara tunai/non tunai. Warkat yang dapat diinkasokan: Warkat yang tertariknya Bank/Lembaga Keuangan Bukan Bank: Wesel, Cel, Bilyet Giro dan Cek Perjalanan. Warkat yang tertariknya bukan bank & juga bukan LKBB: Wesel, Promissory Notes (Promes) yang tertariknya perorangan atau perusahaan. Akad Wakalah. Proses bisa memakan waktu 1–3 hari kerja, tergantung lokasi dan jenis inkaso (dalam kota atau luar kota).",
        tarif:
          "Nasabah Bank Melasa Syariah: Rp. 10.000. Non Nasabah As-salam Bank/titipan bank lain: Rp. 25.000",
      },
    },
    {
      id: "transfer-rtgs",
      title: "Kiriman uang melalui RTGS",
      desc: "Transfer dana antar bank real-time untuk nominal besar",
      definisi:
        "Kiriman uang melalui RTGS adalah layanan transfer dengan akad Wakalah untuk transaksi dana antar bank secara real-time dengan nominal besar (≥ Rp100 juta), dana diterima di bank tujuan dalam waktu sangat cepat dan terverifikasi langsung di sistem Bank Indonesia.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&q=80",
      details: {
        syarat: [
          "Nasabah memiliki rekening aktif di Bank",
          "Mengisi formulir BI-RTGS lengkap dan benar",
          "Transaksi dilakukan pada jam operasional BI-RTGS (06.30 s/d 16.30)",
          "Nominal transfer besar (umumnya ≥ Rp100 juta)",
          "Membayar ujrah (biaya imbalan jasa)",
          "Tujuan transaksi harus jelas dan halal",
        ],
        fitur:
          "Transaksi dapat dilakukan di Counter Bank (Teller) dan tidak harus datang ke Bank bisa melalui Handphone aplikasi perbankan digital (Internet Banking, Mobile Banking). Mendapatkan bukti transaksi dan nomor referensi BI (menunjukkan bahwa transaksi tersebut terverifikasi dan tercatat di sistem BI.). Real Time (Transaksi diproses secara langsung saat instruksi diterima, sehingga dana diterima di bank tujuan dalam waktu yang sangat cepat). Dilengkapi dengan manajemen risiko untuk meminimalkan risiko kegagalan dan penipuan. Akad Wakalah.",
        tarif:
          "Biaya Ujrah (Belum termasuk pajak) JAM OPERASIONAL DAN TARIF BIAYA: 06.30-10.00 WIB > Rp. 6.000, 10.00-14.00 WIB > Rp. 15.000, 14.00-16.30 WIB > Rp. 21.000. Minimal Nominal Transaksi Rp. 100.000.000",
      },
    },
    {
      id: "kiriman-uang-sknbi",
      title: "Kiriman uang melalui SKNBI",
      desc: "Transfer antar bank dengan biaya efisien",
      definisi:
        "Kiriman uang melalui SKNBI adalah layanan transfer antarbank dengan akad Wakalah yang berbasis syariah, cocok untuk nominal menengah (hingga Rp 1 M) dengan biaya lebih efisien dari RTGS, proses penyelesaian dana dilakukan secara kolektif dalam beberapa siklus kliring per hari kerja.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&q=80",
      details: {
        syarat: [
          "Menunjukkan bukti identitas asli, (KTP), SIM, atau Paspor",
          "Mengisi formulir secara lengkap dan sesuai",
          "Menyerahkan warkat (untuk kliring)",
          "Menyetorkan dana sesuai jumlah yang di transfer, baik secara tunai, debet",
          "Batas Nominal SKNBI maksimal Rp 1 Miliar per transaksi",
          "Membayar biaya layanan transfer/kliring sebesar Rp2.900",
          "Transaksi harus dilakukan pada Hari Kerja Bank dan dalam Jam Operasional",
        ],
        fitur:
          "Layanan transfer antarbank berbasis syariah. Adanya imbalan jasa (ujrah) yang sah dan disepakati. Efisiensi biaya (lebih murah dari RTGS). Cocok untuk nominal menengah (hingga Rp 1 M). Transaksi dilakukan dengan prinsip kepercayaan (wakalah) antara nasabah dan bank. Akad Wakalah. Proses penyelesaian (settlement) dana dilakukan secara kolektif (netting) dan terjadwal dalam beberapa kali siklus kliring per hari kerja Senin-jumat pukul 08.00-15.00 WIB.",
        tarif:
          "Biaya kiriman uang SKNBI (non-RTGS) Rp 2.900. Layanan Kliring Warkat Debit sebesar Rp. 5.000/DKE. Layanan Pembayaran Reguler sebesar Rp. 5.000/rincian DKE. Layanan Penagihan Reguler sebesar Rp. 5.000/rincian DKE. Biaya Administrasi Kliring Debet (Setoran Cek/BG): Rp. 3.000. Biaya warkat debit (jika ada) Rp 1.000, Komponen tambahan untuk pengiriman warkat debit. Biaya pembatalan Rp 5.000, Jika kiriman dibatalkan oleh pengirim (contoh bank syariah)",
      },
    },
    {
      id: "bank-garansi",
      title: "Bank Garansi iB (Garansi Ta'awun)",
      desc: "Jaminan bank untuk tender dan kontrak",
      definisi:
        "Bank Garansi iB (Garansi Ta'awun) adalah layanan jaminan bank dengan akad Kafalah Bil Ujroh yang diberikan kepada nasabah perorangan dan badan usaha untuk keperluan tender, pelaksanaan proyek, uang muka, dan pemeliharaan, merupakan non-funded facility tanpa pencairan dana.",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&q=80",
      details: {
        syarat: [
          "Pemohon adalah perorangan, badan usaha, atau badan hukum",
          "Usaha minimal telah berjalan 3 tahun",
          "Tidak masuk ke dalam Daftar Hitam Bank Indonesia dan hasil SLIK OJK dinyatakan clear",
          "Menyertakan underlying penerbitan bank garansi",
          "Dokumen identitas pemohon dan legalitas usaha",
          "Copy rekening 6 bulan terakhir",
          "Copy laporan keuangan atau catatan transaksi usaha minimal 3 tahun terakhir",
        ],
        fitur:
          "Jenis Akad: Kafalah Bil Ujroh. Target Nasabah: Nasabah perorangan dan badan usaha. Jangka Waktu Bank Garansi: Sesuai dokumen tender/kontrak kerja/SPK/dokumen lainnya dari pemilik proyek. Non-funded facility (tanpa pencairan dana). Ada surat jaminan dari bank. Dikenakan ujrah (fee jasa). Untuk berbagai tujuan (tender, pelaksanaan, pembayaran). Bank Garansi untuk tender, pelaksanaan, uang muka, pemeliharaan. Proses cepat.",
        tarif:
          "Biaya Penerbitan Bank Garansi: Admin: Rp150.000, Komisi: sesuai ketentuan yang berlaku. Biaya Administrasi (Bank Handling Fee): RP. 200.000. Bea Materai Rp 10.000. Fee: 1-3% per tahun dari nilai garansi.",
      },
    },
    {
      id: "jual-beli-valuta-asing",
      title: "Jual Beli Valuta Asing",
      desc: "Transaksi valuta asing sesuai prinsip syariah",
      definisi:
        "Jual Beli Valuta Asing adalah layanan transaksi jual beli valuta asing dengan akad Sharf secara tunai (spot) untuk berbagai mata uang seperti USD, SGD, EUR, JPY, AUD, SAR dengan kurs transparan mengikuti pergerakan pasar, hanya untuk tujuan syar'i seperti perjalanan, pendidikan, atau dagang internasional.",
      image:
        "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=400&q=80",
      details: {
        syarat: [
          "Memiliki rekening tabungan atau giro syariah di bank",
          "Membawa KTP/paspor (untuk individu)",
          "Untuk transaksi bisnis: dokumen legal usaha (SIUP, NPWP, Akta Usaha)",
          "Mengisi formulir transaksi valas syariah",
          "Transaksi dilakukan tunai atau transfer langsung (spot), tidak boleh ditunda",
        ],
        fitur:
          "Transaksi jual beli valuta asing (valas) antar dua mata uang yang berbeda berdasarkan akad sharf secara tunai (spot). Dapat dilakukan melalui counter bank atau aplikasi mobile banking syariah. Kurs jual dan beli transparan, mengikuti pergerakan pasar. Hanya berlaku untuk tujuan syar'i, seperti: Keperluan perjalanan ke luar negeri, Pembayaran biaya pendidikan di luar negeri, Keperluan dagang internasional. Mata uang yang dilayani: USD, SGD, EUR, JPY, AUD, SAR, dan lainnya. Akad Sharf.",
        tarif:
          "Biaya Administrasi Per transaksi Rp10.000 - Rp25.000. Kurs Jual/Beli Mengikuti Kurs Harian BSI Berdasarkan Update pada transaksi. Pajak Transaksi (jika berlaku) Sesuai Peraturan pemerintah Mengacu ketentuan BI",
      },
    },
    {
      id: "payment-point",
      title: "Payment Point (PPOB)",
      desc: "Pembayaran multi tagihan dalam satu platform",
      definisi:
        "Payment Point (PPOB) adalah layanan pembayaran multi tagihan dalam satu platform yang memudahkan nasabah membayar berbagai tagihan seperti listrik, air, telepon, internet, BPJS, dan lainnya secara praktis melalui counter bank atau aplikasi mobile banking.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&q=80",
      details: {
        syarat: [
          "Memiliki rekening di bank syariah penyedia layanan",
          "Mengisi dan mendatangani Formulir wakalah bil ujrah",
          "Menyediakan saldo yang cukup untuk pembayaran dan biaya ujrah",
          "Menyertakan data lengkap tagihan (ID pelanggan, nomor meter, dsb)",
        ],
        fitur:
          "LAYANAN PEMBAYARAN MULTI TAGIHAN {PLN, PDAM, Telpon dan Internet, BPJS, Zakat, Infaq, dan tagihan lainnya}. Jaringan Luas (dapat dilakukan melalui kantor cabang, ATM syariah, mobile banking syariah, dan mitra agen bank). KONFIRMASI OTOMATIS (bukti pembayaran atau notifikasi langsung setelah transaksi berhasil). TRANSAKSI REAL-TIME (pembayaran diproses secara langsung ke pihak penyedia layanan). Akad Wakalah Bil Ujrah.",
        tarif:
          "BIAYA TRANSAKSI/UJRAH Misalnya: Rp 3.000-Rp 5.000 per transaksi tergantung jenis tagihan (disepakati di awal sebagai imbalan jasa perwakilan bank). BIAYA ADMINISTRASI BULANAN Jika Menggunakan layanan autodebet, bisa dikenakan Rp 2.000/bulan",
      },
    },
    {
      id: "letter-of-credit",
      title: "Letter of Credit (L/C) Syariah",
      desc: "Jasa penjaminan pembayaran untuk transaksi perdagangan",
      definisi:
        "Letter of Credit (L/C) Syariah adalah jasa penjaminan pembayaran untuk transaksi perdagangan internasional atau domestik yang dikeluarkan oleh bank atas permintaan importir untuk menjamin pembayaran kepada eksportir, menggunakan prinsip syariah dengan akad Wakalah Bil Ujrah atau Kafalah Bil Ujrah.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&q=80",
      details: {
        syarat: [
          "Memiliki rekening di Bank Melasa Syariah",
          "Untuk LC kebutuhan luar negeri, nasabah wajib memiliki tanda pengenal sebagai importir atau Angka Pengenal Impor (API)",
          "Menyerahkan agunan yang ditentukan Bank Melasa Syariah",
          "Memiliki legalitas usaha (akta pendirian & perubahan, NIB & NPWP)",
          "Mempunyai dokumen transaksi (kontrak invoice dsb)",
        ],
        fitur:
          "Akad: wakalah bil ujrah (akad perwakilan dengan imbalan jasa). Pembayaran berbasis dokumen. Fee berupa ujrah transparan. Verifikasi Dokumen (Document Checking). Notifikasi Pembayaran. Jasa penjaminan pembayaran untuk importir (muwakkil) sebagai pembeli, untuk menjamin pembayaran kepada eksportir (beneficiary) dengan syarat penyerahan dokumen pengiriman yang lengkap. Transaksi perdagangan internasional/domestik menjadi aman dan dapat diselesaikan segera setelah dokumen diverifikasi.",
        tarif:
          "Biaya Pelayanan Impor dan Ekspor sesuai dengan tarif yang berlaku di bank. L/C hijra advising dan L/C hijra transfer (pengalihan) tersedia.",
      },
    },
    {
      id: "standing-instruction",
      title: "Standing Instruction",
      desc: "Transfer atau pembayaran rutin secara otomatis",
      definisi:
        "Standing Instruction adalah layanan instruksi berdiri yang memungkinkan nasabah melakukan transfer atau pembayaran rutin secara otomatis pada tanggal yang telah ditentukan, memudahkan pembayaran cicilan, tagihan bulanan, atau transfer rutin lainnya tanpa harus melakukan transaksi manual setiap bulan.",
      image:
        "https://images.unsplash.com/photo-1554224154-22dec7ec8818?w=400&q=80",
      details: {
        syarat: [
          "Memiliki Rekening Aktif di bank penyedia layanan",
          "Saldo Mencukupi untuk setiap transaksi yang dijadwalkan",
          "Mengisi Formulir Standing Instruction berisi: Nama dan nomor rekening sumber, Nama dan nomor rekening tujuan, Nominal transaksi, frekuensi & tanggal pelaksanaan",
          "Menandatangani Akad/Perjanjian Layanan (untuk bank syariah: sesuai akad wakalah bil ujrah)",
          "Menyetujui Biaya dan Syarat Penggunaan Layanan",
        ],
        fitur:
          "Transfer Otomatis Berkala - Bank akan secara otomatis mentransfer dana ke rekening tujuan sesuai jadwal (harian, mingguan, atau bulanan). Pembayaran Tagihan Otomatis - Dapat digunakan untuk membayar tagihan listrik, air, internet, zakat, infaq, atau cicilan pembiayaan secara otomatis. Setoran ke Tabungan/Investasi - Otomatis menyetor dana ke rekening tabungan berjangka, deposito, atau reksa dana syariah. Notifikasi Transaksi - Nasabah akan menerima SMS/email setiap kali transaksi. Perubahan dan Pembatalan Mudah - Nasabah dapat mengubah nominal, tanggal, atau menghentikan layanan kapan pun melalui mobile banking atau datang ke cabang. Akad Wakalah Bil Ujrah.",
        tarif:
          "Biaya Pendaftaran Rp 15.000. Biaya Transaksi otomatis (UJRAH) per transaksi Rp 6.500. Biaya Pembatalan Jika dilakukan sebelum jangka waktu Rp 5.000. Pajak/Fee Tambahan Sesuai ketentuan OJK & Bank Indonesia",
      },
    },
    {
      id: "payroll-service",
      title: "Payroll Service iB",
      desc: "Layanan penggajian karyawan untuk perusahaan",
      definisi:
        "Payroll Service iB adalah layanan penggajian karyawan yang memudahkan perusahaan dalam mendistribusikan gaji karyawan secara otomatis dan terjadwal ke rekening masing-masing karyawan, dilengkapi dengan laporan lengkap dan sistem yang terintegrasi sesuai prinsip syariah.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&q=80",
      details: {
        syarat: [
          "Kartu identitas diri (KTP) dan NPWP",
          "Melampirkan dokumen Perjanjian Kerja Sama (PKS)",
          "Mengisi dan menandatangani formulir pembukaan rekening secara lengkap dan benar",
          "Memiliki tabungan di bank melasa syariah",
        ],
        fitur:
          "Mendapat fasilitas Electronic Statement (e-statement). Kemudahan bertransaksi menggunakan layanan SMS notifikasi dan aplikasi mobile banking M-Syariah. Mendapatkan Pelaporan keuangan: Menyediakan laporan pengeluaran gaji yang jelas dan rapi untuk kebutuhan audit atau pemantauan kesehatan keuangan. Transfer gaji massal, laporan lengkap, integrasi dengan sistem HR, notifikasi ke karyawan. Akad Wadiah Yad Dhamanah.",
        tarif:
          "Saldo Awal: Berdasarkan Gaji. Biaya Payroll: 20 - < 25 pegawai: Rp2.000, > 25 pegawai: Gratis. Biaya Cetak Laporan Keuangan: Rp. 10.000-Rp.25.000",
      },
    },
  ],
};

// ===== NAVIGATION =====
function initNavigation() {
  const navBtns = document.querySelectorAll(".nav-btn");
  const indicator = document.getElementById("activeIndicator");

  // Set initial indicator position
  updateIndicator(document.querySelector(".nav-btn.active"));

  navBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Remove active from all
      navBtns.forEach((b) => b.classList.remove("active"));
      // Add active to clicked
      btn.classList.add("active");
      // Update indicator
      updateIndicator(btn);

      // Smooth scroll to section
      const targetId = btn.dataset.target;
      if (targetId) {
        const target = document.getElementById(targetId);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    });
  });

  // Update active nav on scroll
  const sections = document.querySelectorAll("section[id]");
  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.pageYOffset >= sectionTop - 200) {
        current = section.getAttribute("id");
      }
    });

    navBtns.forEach((btn) => {
      btn.classList.remove("active");
      if (btn.dataset.target === current) {
        btn.classList.add("active");
        updateIndicator(btn);
      }
    });
  });
}

function updateIndicator(btn) {
  const indicator = document.getElementById("activeIndicator");
  if (!btn || !indicator) return;

  const btnRect = btn.getBoundingClientRect();
  const navRect = btn.closest(".nav").getBoundingClientRect();
  const left = btnRect.left - navRect.left;
  const width = btnRect.width;

  indicator.style.width = `${width}px`;
  indicator.style.transform = `translateX(${left}px)`;
}

// ===== PRODUCT CAROUSEL =====
let currentCategory = "funding";

function initProductCarousel() {
  const tabBtns = document.querySelectorAll(".tab-btn");
  const carousel = document.getElementById("productCarousel");
  const prevBtn = document.querySelector(".carousel-btn.prev");
  const nextBtn = document.querySelector(".carousel-btn.next");

  // Tab switching
  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      tabBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.dataset.category;
      renderProducts();

      // Change calculator based on category
      renderCalculator(currentCategory);
    });
  });

  // Carousel navigation - MANUAL SCROLL ONLY (satu card per klik)
  prevBtn.addEventListener("click", () => {
    const cardWidth = 320 + 24; // card width + gap
    carousel.scrollBy({ left: -cardWidth, behavior: "smooth" });
  });

  nextBtn.addEventListener("click", () => {
    const cardWidth = 320 + 24; // card width + gap
    carousel.scrollBy({ left: cardWidth, behavior: "smooth" });
  });

  // Enable drag to scroll (manual by user)
  let isDown = false;
  let startX;
  let scrollLeft;

  carousel.addEventListener("mousedown", (e) => {
    isDown = true;
    carousel.style.cursor = "grabbing";
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
  });

  carousel.addEventListener("mouseleave", () => {
    isDown = false;
    carousel.style.cursor = "grab";
  });

  carousel.addEventListener("mouseup", () => {
    isDown = false;
    carousel.style.cursor = "grab";
  });

  carousel.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 1.5; // scroll speed (reduced for smoother control)
    carousel.scrollLeft = scrollLeft - walk;
  });

  // Initial render
  renderProducts();
}

function renderProducts() {
  const carousel = document.getElementById("productCarousel");
  const products = productData[currentCategory];

  console.log(
    `Rendering ${products.length} products for category: ${currentCategory}`
  );

  carousel.innerHTML = "";
  carousel.scrollLeft = 0; // Reset scroll position

  products.forEach((product, index) => {
    const card = document.createElement("div");
    card.className = "product-card";
    // Tambahkan class untuk CSS animation
    card.classList.add("fade-in-card");
    card.style.animationDelay = `${index * 0.1}s`;
    card.innerHTML = `
            <img src="${product.image}" 
                 alt="${product.title}" 
                 class="product-image"
                 onerror="this.src='https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=400&q=80'">
            <div class="product-content">
                <h4 class="product-title">${product.title}</h4>
                <p class="product-desc">${product.desc}</p>
                <span class="product-badge">Lihat Detail</span>
            </div>
        `;

    card.addEventListener("click", () => openModal(product));
    carousel.appendChild(card);
  });

  console.log(`✅ ${products.length} product cards added to carousel`);

  // TIDAK PAKAI GSAP ANIMATION LAGI - pakai CSS animation saja
  // Card akan muncul dengan CSS animation yang sudah didefinisikan
}

// ===== MODAL =====
function initModal() {
  const modal = document.getElementById("modal");
  const closeBtn = document.getElementById("modalClose");
  const overlay = document.querySelector(".modal-overlay");

  closeBtn.addEventListener("click", closeModal);
  overlay.addEventListener("click", closeModal);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.getAttribute("aria-hidden") === "false") {
      closeModal();
    }
  });
}

function openModal(product) {
  const modal = document.getElementById("modal");
  const modalInner = document.getElementById("modalInner");

  console.log("Opening modal for:", product.title);

  const syaratList = product.details.syarat
    .map((s) => `<li>${s}</li>`)
    .join("");

  const definisiSection = product.definisi
    ? `<div style="background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%); 
                   padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem; border-left: 4px solid #667eea;">
                <h3 style="margin-top: 0; color: #667eea; font-size: 1.1rem;">📖 Definisi Produk</h3>
                <p style="margin-bottom: 0; line-height: 1.8; color: #334155;">${product.definisi}</p>
            </div>`
    : "";

  modalInner.innerHTML = `
        <div class="modal-detail-grid">
            <img src="${product.image}" 
                 alt="${product.title}"
                 onerror="this.src='https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=400&q=80'">
            <div>
                <h2>${product.title}</h2>
                ${definisiSection}
                <h3>Syarat Pembukaan/Pengajuan</h3>
                <ul>${syaratList}</ul>
                <h3>Fitur & Keunggulan</h3>
                <p>${product.details.fitur}</p>
                <h3>Tarif & Biaya</h3>
                <p>${product.details.tarif}</p>
                <a href="https://wa.me/6281296163263?text=Halo, saya tertarik dengan ${product.title}" 
                   target="_blank" class="btn btn-primary" style="margin-top: 1.5rem;">
                    Hubungi Kami
                </a>
            </div>
        </div>
    `;

  // Set modal visible FIRST
  modal.setAttribute("aria-hidden", "false");
  modal.style.display = "flex"; // Pastikan modal terlihat
  document.body.style.overflow = "hidden";

  // Animate modal dengan CSS animation (lebih stabil)
  const modalPanel = modal.querySelector(".modal-panel");
  if (modalPanel) {
    modalPanel.style.animation =
      "modalSlideUp 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards";
  }

  console.log("✅ Modal opened successfully");
}

function closeModal() {
  const modal = document.getElementById("modal");
  const modalPanel = modal.querySelector(".modal-panel");

  console.log("Closing modal");

  // Animate close dengan CSS
  if (modalPanel) {
    modalPanel.style.animation = "modalSlideDown 0.3s ease-in forwards";
  }

  // Tunggu animasi selesai baru hide modal
  setTimeout(() => {
    modal.setAttribute("aria-hidden", "true");
    modal.style.display = "none";
    document.body.style.overflow = "";
    console.log("✅ Modal closed");
  }, 300);
}

// ===== CALCULATOR RENDERER =====
function renderCalculator(category) {
  currentCalculatorType = category;
  const panel = document.getElementById("simulasiPanel");
  const title = document.getElementById("simulasiTitle");
  const desc = document.getElementById("simulasiDesc");

  if (category === "funding") {
    // Kalkulator Bagi Hasil Tabungan/Deposito
    title.textContent = "Kalkulator Bagi Hasil Simpanan";
    desc.textContent = "Hitung estimasi bagi hasil tabungan atau deposito Anda";

    panel.innerHTML = `
      <div class="simulasi-form">
        <div class="form-group">
          <label for="nominalSimpanan">Nominal Simpanan</label>
          <div class="input-wrapper">
            <span class="input-prefix">Rp</span>
            <input type="number" id="nominalSimpanan" value="10000000" min="100000" step="100000" />
          </div>
        </div>
        <div class="form-group">
          <label for="jangkaWaktuFunding">Jangka Waktu (Bulan)</label>
          <input type="range" id="jangkaWaktuFunding" min="1" max="60" value="12" step="1" />
          <div class="range-value">
            <span id="jangkaWaktuFundingValue">12</span> Bulan
          </div>
        </div>
        <div class="form-group">
          <label for="nisbah">Nisbah Bagi Hasil (%)</label>
          <input type="range" id="nisbah" min="30" max="60" value="40" step="5" />
          <div class="range-value">
            <span id="nisbahValue">40</span>% untuk Nasabah
          </div>
        </div>
        <div class="form-group">
          <label for="equivalentRate">Equivalent Rate (% per tahun)</label>
          <input type="range" id="equivalentRate" min="2" max="8" value="5" step="0.5" />
          <div class="range-value">
            <span id="equivalentRateValue">5</span>%
          </div>
        </div>
      </div>
      <div class="simulasi-result">
        <h4>Estimasi Bagi Hasil Funding</h4>
        <div class="result-box">
          <p class="result-label">Bagi Hasil per Bulan (Funding)</p>
          <p class="result-value" id="hasilBagiHasil">Rp 0</p>
          <div class="result-details">
            <div class="detail-item">
              <span>Nominal Simpanan</span>
              <strong id="nominalSimpananResult">Rp 0</strong>
            </div>
            <div class="detail-item">
              <span>Total Bagi Hasil</span>
              <strong id="totalBagiHasil">Rp 0</strong>
            </div>
            <div class="detail-item">
              <span>Total Akhir</span>
              <strong id="totalAkhirFunding">Rp 0</strong>
            </div>
          </div>
        </div>
        <p class="small-note">
          * Perhitungan ini adalah simulasi. Bagi hasil aktual tergantung kinerja bank dan nisbah yang disepakati.
        </p>
        <div style="margin-top: 1.5rem; padding: 1.25rem; background: rgba(102, 126, 234, 0.08); border-left: 4px solid #667eea; border-radius: 12px;">
          <h5 style="margin: 0 0 0.75rem 0; color: #667eea; font-size: 0.95rem; font-weight: 700;">📊 Rumus Perhitungan:</h5>
          <div style="font-size: 0.85rem; line-height: 1.7; color: #475569;">
            <p style="margin: 0.5rem 0;"><strong>1. Pendapatan Bank per Tahun</strong> = Nominal × Rate</p>
            <p style="margin: 0.5rem 0;"><strong>2. Porsi Nasabah per Tahun</strong> = Pendapatan × Nisbah</p>
            <p style="margin: 0.5rem 0;"><strong>3. Bagi Hasil per Bulan</strong> = Porsi Nasabah ÷ 12</p>
            <p style="margin: 0.5rem 0;"><strong>4. Total Bagi Hasil</strong> = Bagi Hasil per Bulan × Jangka Waktu</p>
            <p style="margin: 0.5rem 0;"><strong>5. Total Akhir</strong> = Nominal + Total Bagi Hasil</p>
          </div>
        </div>
      </div>
    `;
  } else if (category === "financing") {
    // Kalkulator Pembiayaan (yang sudah ada)
    title.textContent = "Kalkulator Pembiayaan Syariah";
    desc.textContent = "Hitung angsuran Anda sekarang. Transparan dan amanah.";

    panel.innerHTML = `
      <div class="simulasi-form">
        <div class="form-group">
          <label for="jumlahPinjaman">Harga Total / OTR</label>
          <div class="input-wrapper">
            <span class="input-prefix">Rp</span>
            <input type="number" id="jumlahPinjaman" value="50000000" min="1000000" step="1000000" />
          </div>
        </div>
        <div class="form-group">
          <label for="jangkaWaktu">Jangka Waktu (Bulan)</label>
          <input type="range" id="jangkaWaktu" min="6" max="180" value="36" step="6" />
          <div class="range-value">
            <span id="jangkaWaktuValue">36</span> Bulan
          </div>
        </div>
        <div class="form-group">
          <label for="dp">Uang Muka / DP (%)</label>
          <input type="range" id="dp" min="0" max="50" value="20" step="5" />
          <div class="range-value">
            <span id="dpValue">20</span>% = <span id="dpRupiah">Rp 10.000.000</span>
          </div>
        </div>
        <div class="form-group">
          <label for="margin">Nisbah/Margin (%)</label>
          <input type="range" id="margin" min="4" max="15" value="7.5" step="0.5" />
          <div class="range-value">
            <span id="marginValue">7.5</span>%
          </div>
        </div>
      </div>
      <div class="simulasi-result">
        <h4>Estimasi Angsuran Financing</h4>
        <div class="result-box">
          <p class="result-label">Angsuran Bulanan (Financing)</p>
          <p class="result-value" id="hasilAngsuran">Rp 0</p>
          <div class="result-details">
            <div class="detail-item">
              <span>Harga Total</span>
              <strong id="hargaTotal">Rp 0</strong>
            </div>
            <div class="detail-item">
              <span>Uang Muka (DP)</span>
              <strong id="uangMuka">Rp 0</strong>
            </div>
            <div class="detail-item">
              <span>Jumlah Pembiayaan</span>
              <strong id="jumlahPembiayaan">Rp 0</strong>
            </div>
            <div class="detail-item">
              <span>Total Margin</span>
              <strong id="totalMargin">Rp 0</strong>
            </div>
            <div class="detail-item">
              <span>Total Pembiayaan</span>
              <strong id="totalPembiayaan">Rp 0</strong>
            </div>
          </div>
        </div>
        <p class="small-note">
          * Perhitungan ini adalah simulasi awal. Nilai akhir ditentukan berdasarkan akad dan negosiasi Bank.
        </p>
        <div style="margin-top: 1.5rem; padding: 1.25rem; background: rgba(102, 126, 234, 0.08); border-left: 4px solid #667eea; border-radius: 12px;">
          <h5 style="margin: 0 0 0.75rem 0; color: #667eea; font-size: 0.95rem; font-weight: 700;">📊 Rumus Perhitungan (Murabahah):</h5>
          <div style="font-size: 0.85rem; line-height: 1.7; color: #475569;">
            <p style="margin: 0.5rem 0;"><strong>1. Uang Muka (DP)</strong> = Harga Total × DP%</p>
            <p style="margin: 0.5rem 0;"><strong>2. Jumlah Pembiayaan</strong> = Harga Total - Uang Muka</p>
            <p style="margin: 0.5rem 0;"><strong>3. Total Margin</strong> = Jumlah Pembiayaan × Margin × (Jangka Waktu ÷ 12)</p>
            <p style="margin: 0.5rem 0;"><strong>4. Total Pembiayaan</strong> = Jumlah Pembiayaan + Total Margin</p>
            <p style="margin: 0.5rem 0;"><strong>5. Angsuran Bulanan</strong> = Total Pembiayaan ÷ Jangka Waktu</p>
            <p style="margin: 0.75rem 0 0 0; font-style: italic; color: #667eea;">
              💡 Margin bersifat flat (tetap) sesuai prinsip Murabahah
            </p>
          </div>
        </div>
      </div>
    `;
  } else if (category === "fee_based") {
    // Kalkulator Biaya Layanan
    title.textContent = "Kalkulator Biaya Layanan";
    desc.textContent = "Hitung estimasi biaya layanan fee based income";

    panel.innerHTML = `
      <div class="simulasi-form">
        <div class="form-group">
          <label for="jenisLayanan">Jenis Layanan</label>
          <select id="jenisLayanan" style="width: 100%; padding: 0.875rem 1rem; border: 2px solid var(--border); border-radius: 12px; font-size: 1rem; font-weight: 600;">
            <option value="transfer">Transfer Antar Bank</option>
            <option value="sms">SMS Banking</option>
            <option value="atm">Kartu ATM</option>
            <option value="admin">Administrasi Bulanan</option>
            <option value="valas">Transaksi Valas</option>
          </select>
        </div>
        <div class="form-group">
          <label for="frekuensi">Frekuensi Transaksi per Bulan</label>
          <input type="range" id="frekuensi" min="1" max="100" value="10" step="1" />
          <div class="range-value">
            <span id="frekuensiValue">10</span> kali
          </div>
        </div>
        <div class="form-group">
          <label for="nominalTransaksi">Nominal per Transaksi (jika ada)</label>
          <div class="input-wrapper">
            <span class="input-prefix">Rp</span>
            <input type="number" id="nominalTransaksi" value="1000000" min="0" step="100000" />
          </div>
        </div>
      </div>
      <div class="simulasi-result">
        <h4>Estimasi Biaya Fee Based</h4>
        <div class="result-box">
          <p class="result-label">Total Biaya per Bulan (Fee Based)</p>
          <p class="result-value" id="hasilBiaya">Rp 0</p>
          <div class="result-details">
            <div class="detail-item">
              <span>Jenis Layanan</span>
              <strong id="jenisLayananResult">-</strong>
            </div>
            <div class="detail-item">
              <span>Biaya per Transaksi</span>
              <strong id="biayaPerTransaksi">Rp 0</strong>
            </div>
            <div class="detail-item">
              <span>Frekuensi</span>
              <strong id="frekuensiResult">0 kali</strong>
            </div>
            <div class="detail-item">
              <span>Total per Tahun</span>
              <strong id="totalPerTahun">Rp 0</strong>
            </div>
          </div>
        </div>
        <p class="small-note">
          * Biaya dapat berubah sesuai kebijakan bank. Cek tarif terbaru di kantor cabang.
        </p>
        <div style="margin-top: 1.5rem; padding: 1.25rem; background: rgba(102, 126, 234, 0.08); border-left: 4px solid #667eea; border-radius: 12px;">
          <h5 style="margin: 0 0 0.75rem 0; color: #667eea; font-size: 0.95rem; font-weight: 700;">📊 Rumus Perhitungan:</h5>
          <div style="font-size: 0.85rem; line-height: 1.7; color: #475569;">
            <p style="margin: 0.5rem 0;"><strong>1. Biaya per Transaksi</strong> = Tarif sesuai jenis layanan</p>
            <p style="margin: 0.5rem 0;"><strong>2. Total Biaya per Bulan</strong> = Biaya per Transaksi × Frekuensi</p>
            <p style="margin: 0.5rem 0;"><strong>3. Total Biaya per Tahun</strong> = Total Biaya per Bulan × 12</p>
            <p style="margin: 0.75rem 0 0 0; font-style: italic; color: #667eea;">
              💡 Tarif: Transfer Rp 6.500 | SMS Rp 500 | ATM Rp 2.500 | Admin Rp 15.000 | Valas 0.2%
            </p>
          </div>
        </div>
      </div>
    `;
  }

  // Re-initialize calculator after rendering
  initSimulator();
}

// ===== SIMULATOR =====
function initSimulator() {
  if (currentCalculatorType === "funding") {
    initFundingCalculator();
  } else if (currentCalculatorType === "financing") {
    initFinancingCalculator();
  } else if (currentCalculatorType === "fee_based") {
    initFeeBasedCalculator();
  }
}

function initFundingCalculator() {
  const nominalInput = document.getElementById("nominalSimpanan");
  const jangkaInput = document.getElementById("jangkaWaktuFunding");
  const nisbahInput = document.getElementById("nisbah");
  const rateInput = document.getElementById("equivalentRate");

  if (!nominalInput) return;

  jangkaInput.addEventListener("input", () => {
    document.getElementById("jangkaWaktuFundingValue").textContent =
      jangkaInput.value;
    calculateBagiHasil();
  });

  nisbahInput.addEventListener("input", () => {
    document.getElementById("nisbahValue").textContent = nisbahInput.value;
    calculateBagiHasil();
  });

  rateInput.addEventListener("input", () => {
    document.getElementById("equivalentRateValue").textContent =
      rateInput.value;
    calculateBagiHasil();
  });

  [nominalInput, jangkaInput, nisbahInput, rateInput].forEach((input) => {
    input.addEventListener("change", calculateBagiHasil);
    input.addEventListener("input", calculateBagiHasil);
  });

  calculateBagiHasil();
}

function initFinancingCalculator() {
  const jumlahInput = document.getElementById("jumlahPinjaman");
  const jangkaInput = document.getElementById("jangkaWaktu");
  const marginInput = document.getElementById("margin");
  const dpInput = document.getElementById("dp");

  if (!jumlahInput) return;

  jangkaInput.addEventListener("input", () => {
    document.getElementById("jangkaWaktuValue").textContent = jangkaInput.value;
    calculateAngsuran();
  });

  marginInput.addEventListener("input", () => {
    document.getElementById("marginValue").textContent = marginInput.value;
    calculateAngsuran();
  });

  dpInput.addEventListener("input", () => {
    const jumlah = parseFloat(jumlahInput.value) || 0;
    const dpPersen = parseFloat(dpInput.value);
    const dpRupiah = jumlah * (dpPersen / 100);

    document.getElementById("dpValue").textContent = dpPersen;
    document.getElementById("dpRupiah").textContent = formatRupiah(dpRupiah);
    calculateAngsuran();
  });

  [jumlahInput, jangkaInput, marginInput, dpInput].forEach((input) => {
    input.addEventListener("change", calculateAngsuran);
    input.addEventListener("input", calculateAngsuran);
  });

  calculateAngsuran();
}

function initFeeBasedCalculator() {
  const jenisInput = document.getElementById("jenisLayanan");
  const frekuensiInput = document.getElementById("frekuensi");
  const nominalInput = document.getElementById("nominalTransaksi");

  if (!jenisInput) return;

  frekuensiInput.addEventListener("input", () => {
    document.getElementById("frekuensiValue").textContent =
      frekuensiInput.value;
    calculateBiayaLayanan();
  });

  [jenisInput, frekuensiInput, nominalInput].forEach((input) => {
    input.addEventListener("change", calculateBiayaLayanan);
    input.addEventListener("input", calculateBiayaLayanan);
  });

  calculateBiayaLayanan();
}

// Format currency helper function
function formatRupiah(num) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(num);
}

function calculateAngsuran() {
  const hargaTotal = parseFloat(
    document.getElementById("jumlahPinjaman").value
  );
  const jangka = parseInt(document.getElementById("jangkaWaktu").value);
  const margin = parseFloat(document.getElementById("margin").value) / 100;
  const dpPersen = parseFloat(document.getElementById("dp").value) / 100;

  if (isNaN(hargaTotal) || hargaTotal <= 0 || jangka <= 0) {
    return;
  }

  // Perhitungan dengan DP
  const uangMuka = hargaTotal * dpPersen;
  const jumlahPembiayaan = hargaTotal - uangMuka;

  // Perhitungan Murabahah (Flat)
  const totalMargin = jumlahPembiayaan * margin * (jangka / 12);
  const totalPembiayaan = jumlahPembiayaan + totalMargin;
  const angsuranBulanan = totalPembiayaan / jangka;

  // Update all result elements
  const resultValue = document.getElementById("hasilAngsuran");
  const hargaTotalEl = document.getElementById("hargaTotal");
  const uangMukaEl = document.getElementById("uangMuka");
  const jumlahPembiayaanEl = document.getElementById("jumlahPembiayaan");
  const totalPembiayaanEl = document.getElementById("totalPembiayaan");
  const totalMarginEl = document.getElementById("totalMargin");

  // Animate result
  if (typeof gsap !== "undefined") {
    const obj = { value: 0 };
    gsap.to(obj, {
      value: angsuranBulanan,
      duration: 1,
      ease: "power2.out",
      onUpdate: () => {
        resultValue.textContent = formatRupiah(obj.value);
      },
    });
  } else {
    resultValue.textContent = formatRupiah(angsuranBulanan);
  }

  // Update all details
  hargaTotalEl.textContent = formatRupiah(hargaTotal);
  uangMukaEl.textContent = formatRupiah(uangMuka);
  jumlahPembiayaanEl.textContent = formatRupiah(jumlahPembiayaan);
  totalPembiayaanEl.textContent = formatRupiah(totalPembiayaan);
  totalMarginEl.textContent = formatRupiah(totalMargin);

  // Update DP rupiah display
  document.getElementById("dpRupiah").textContent = formatRupiah(uangMuka);

  // Tampilkan rumus perhitungan di console
  console.log("=== PERHITUNGAN PEMBIAYAAN MURABAHAH ===");
  console.log("Harga Total:", formatRupiah(hargaTotal));
  console.log("DP:", dpPersen * 100 + "% =", formatRupiah(uangMuka));
  console.log("Jangka Waktu:", jangka, "bulan");
  console.log("Margin:", margin * 100 + "% per tahun");
  console.log("---");
  console.log("Jumlah Pembiayaan:", formatRupiah(jumlahPembiayaan));
  console.log("Total Margin:", formatRupiah(totalMargin));
  console.log("Total Pembiayaan:", formatRupiah(totalPembiayaan));
  console.log("Angsuran Bulanan:", formatRupiah(angsuranBulanan));
}

// ===== GSAP ANIMATIONS =====
function initAnimations() {
  // Hero animation
  gsap.from(".hero-content > *", {
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 1,
    ease: "power3.out",
  });

  // Section animations on scroll
  gsap.utils.toArray(".section").forEach((section) => {
    gsap.from(
      section.querySelectorAll(
        ".section-head, .tab-nav, .simulasi-panel, .kantor-grid, .tentang-grid"
      ),
      {
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
      }
    );
  });

  // Parallax effect on hero
  gsap.to(".hero-image", {
    scrollTrigger: {
      trigger: ".hero-section",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
    y: 100,
    scale: 1.1,
  });
}

// ===== UTILITY FUNCTIONS =====
// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// Add hover effect to buttons
document
  .querySelectorAll(".btn, .product-card, .cabang-card, .tentang-card")
  .forEach((el) => {
    el.addEventListener("mouseenter", function () {
      if (typeof gsap !== "undefined") {
        gsap.to(this, { scale: 1.05, duration: 0.3, ease: "power2.out" });
      }
    });

    el.addEventListener("mouseleave", function () {
      if (typeof gsap !== "undefined") {
        gsap.to(this, { scale: 1, duration: 0.3, ease: "power2.out" });
      }
    });
  });

console.log("Bank Melasa Syariah - Website Loaded Successfully! 🚀");
console.log(
  "35 Produk Syariah Tersedia | Carousel Manual Scroll | Visi Misi Added"
);

// ===== FAQ ACCORDION =====
function initFAQ() {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {
      // Close other items
      faqItems.forEach((otherItem) => {
        if (otherItem !== item && otherItem.classList.contains("active")) {
          otherItem.classList.remove("active");
        }
      });

      // Toggle current item
      item.classList.toggle("active");
    });
  });
}

// Live Chat Widget
const chatBubble = document.getElementById("chatBubble");
const chatWindow = document.getElementById("chatWindow");
const chatClose = document.getElementById("chatClose");
const chatBody = document.querySelector(".chat-body");

if (chatBubble && chatWindow) {
  chatBubble.addEventListener("click", () => {
    chatWindow.classList.toggle("active");
    const badge = document.querySelector(".chat-badge");
    if (badge && chatWindow.classList.contains("active")) {
      badge.style.display = "none";
    }
  });

  if (chatClose) {
    chatClose.addEventListener("click", (e) => {
      e.stopPropagation();
      chatWindow.classList.remove("active");
    });
  }

  // Quick replies
  document.querySelectorAll(".quick-reply").forEach((button) => {
    button.addEventListener("click", function () {
      const message = this.dataset.message;

      // Add user message
      const userMsg = document.createElement("div");
      userMsg.className = "chat-message user";
      userMsg.innerHTML = `
        <div class="message-avatar">👤</div>
        <div class="message-content">
          <p>${message}</p>
        </div>
      `;

      // Insert before quick replies
      const quickReplies = document.querySelector(".chat-quick-replies");
      chatBody.insertBefore(userMsg, quickReplies);

      // Scroll to bottom
      chatBody.scrollTop = chatBody.scrollHeight;

      // Bot response after delay
      setTimeout(() => {
        const botMsg = document.createElement("div");
        botMsg.className = "chat-message bot";

        let response = "";
        if (message.includes("rekening")) {
          response = `
            <div class="message-avatar">🤖</div>
            <div class="message-content">
              <p>Untuk membuka rekening, Anda bisa:</p>
              <p>1. Kunjungi kantor cabang terdekat<br>2. Hubungi kami via WhatsApp<br>3. Gunakan Product Finder untuk menemukan produk yang tepat</p>
              <p>Dokumen yang diperlukan: KTP, NPWP (jika ada), dan setoran awal.</p>
            </div>
          `;
        } else if (message.includes("pembiayaan")) {
          response = `
            <div class="message-avatar">🤖</div>
            <div class="message-content">
              <p>Kami menyediakan berbagai produk pembiayaan syariah:</p>
              <p>🏠 KPR Syariah<br>🚗 Pembiayaan Kendaraan<br>💼 Modal Kerja<br>💰 Multiguna</p>
              <p>Gunakan kalkulator simulasi di website untuk estimasi angsuran!</p>
            </div>
          `;
        } else if (message.includes("cabang")) {
          response = `
            <div class="message-avatar">🤖</div>
            <div class="message-content">
              <p>Kami memiliki kantor cabang di:</p>
              <p>📍 Jakarta Utara (Kantor Pusat)<br>📍 Surabaya<br>📍 Bandung</p>
              <p>Lihat detail alamat di section Kantor Cabang di website kami.</p>
            </div>
          `;
        } else {
          response = `
            <div class="message-avatar">🤖</div>
            <div class="message-content">
              <p>Terima kasih! Tim kami siap membantu Anda.</p>
              <p>📧 Email: layanan@melasasyariah.co.id<br>💬 WhatsApp: +62 812-9616-3263</p>
              <p>Jam operasional: Senin-Jumat 08:00-17:00 WIB</p>
            </div>
          `;
        }

        botMsg.innerHTML = response;
        chatBody.insertBefore(botMsg, quickReplies);
        chatBody.scrollTop = chatBody.scrollHeight;
      }, 1000);
    });
  });
}
