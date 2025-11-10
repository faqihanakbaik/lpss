// Bank Melasa Syariah - Main Script
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
});

// ===== DATA PRODUK (35 PRODUK) =====
const productData = {
  funding: [
    {
      id: "tabungan-wadiah",
      title: "Tabungan iB Wadiah",
      desc: "Tabungan dengan akad wadiah (titipan) yang aman dan fleksibel",
      image:
        "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&q=80",
      details: {
        syarat: [
          "KTP/Paspor & NPWP",
          "Setoran Awal: Rp 50.000",
          "Akad: Wadiah (Titipan Murni)",
        ],
        fitur:
          "Kartu Debit GPN, Mobile Banking, E-Statement, Dana dijamin aman dan siap tarik. Bank dapat memberikan bonus (sukarela).",
        tarif:
          "Biaya Administrasi Bulanan: Rp 5.000. Biaya Penutupan Rekening: Rp 25.000. Bebas biaya tarik tunai ATM bersama (sesuai kuota).",
      },
    },
    {
      id: "tabungan-mudharabah",
      title: "Tabungan iB Mudharabah",
      desc: "Tabungan dengan sistem bagi hasil yang menguntungkan",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&q=80",
      details: {
        syarat: [
          "KTP/Paspor & NPWP",
          "Setoran Awal: Rp 100.000",
          "Akad: Mudharabah (Bagi Hasil)",
        ],
        fitur:
          "Nisbah Bagi Hasil (Profit Sharing) yang kompetitif, Mobile Banking, E-Statement. Cocok untuk investasi dana harian.",
        tarif:
          "Biaya Administrasi Bulanan: Rp 7.500. Biaya Penutupan Rekening: Rp 30.000.",
      },
    },
    {
      id: "deposito-mudharabah",
      title: "Deposito iB Mudharabah",
      desc: "Investasi berjangka dengan profit rate tertinggi",
      image:
        "https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?w=400&q=80",
      details: {
        syarat: [
          "KTP/Paspor & NPWP",
          "Minimal Penempatan: Rp 8.000.000",
          "Jangka Waktu: 1, 3, 6, 12 Bulan",
        ],
        fitur:
          "Profit Rate tertinggi, Bagi Hasil dihitung secara harian, dapat diperpanjang secara otomatis (ARO).",
        tarif:
          "Biaya Materai: Sesuai ketentuan. Biaya Pencairan Sebelum Jatuh Tempo: Denda pinalti sesuai nisbah Bank.",
      },
    },
    {
      id: "deposito-on-call",
      title: "Deposito On Call (DOC)",
      desc: "Deposito fleksibel untuk dana jangka pendek 7-30 hari",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&q=80",
      details: {
        syarat: [
          "Nasabah Giro/Tabungan Melasa",
          "Penempatan: Minimal 7 hari, Maksimal 30 hari",
          "Akad: Mudharabah",
        ],
        fitur:
          "Pencairan fleksibel, cocok untuk dana idle jangka pendek. Nisbah bagi hasil yang menarik untuk tenor singkat.",
        tarif: "Tidak ada biaya administrasi bulanan.",
      },
    },
    {
      id: "giro-wadiah",
      title: "Giro iB Wadiah",
      desc: "Rekening giro untuk transaksi bisnis yang lancar",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&q=80",
      details: {
        syarat: [
          "KTP/NPWP, SIUP & TDP (Untuk badan usaha)",
          "Setoran Awal: Rp 1.000.000",
          "Akad: Wadiah (Titipan Murni)",
        ],
        fitur:
          "Cek/Bilyet Giro, layanan RTGS/SKN, kemudahan transaksi bisnis. Bonus (jika ada) bersifat sukarela.",
        tarif:
          "Biaya Administrasi Bulanan: Rp 15.000. Biaya cetak Cek/BG (sesuai ketentuan Bank).",
      },
    },
    {
      id: "tabungan-haji",
      title: "Tabungan Haji & Umrah",
      desc: "Wujudkan impian ibadah haji dan umrah Anda",
      image:
        "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=400&q=80",
      details: {
        syarat: ["KTP & NPWP", "Setoran Awal: Rp 100.000", "Akad: Mudharabah"],
        fitur:
          "Bagi hasil kompetitif, dapat digunakan untuk pendaftaran haji, asuransi jiwa gratis.",
        tarif: "Bebas biaya administrasi bulanan.",
      },
    },
    {
      id: "tabungan-pendidikan",
      title: "Tabungan Rencana iB",
      desc: "Tabungan berjangka untuk masa depan pendidikan",
      image:
        "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400&q=80",
      details: {
        syarat: [
          "KTP & NPWP",
          "Setoran Bulanan: Mulai Rp 100.000",
          "Jangka Waktu: 1-10 tahun",
        ],
        fitur:
          "Setoran rutin bulanan, bagi hasil menarik, asuransi jiwa, cocok untuk dana pendidikan.",
        tarif: "Biaya Administrasi: Rp 5.000/bulan.",
      },
    },
    {
      id: "giro-valuta",
      title: "Giro Valuta Asing",
      desc: "Giro dalam mata uang asing untuk transaksi internasional",
      image:
        "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=400&q=80",
      details: {
        syarat: [
          "KTP/Paspor & NPWP",
          "Setoran Awal: USD 500 atau ekuivalen",
          "Mata Uang: USD, SGD, EUR",
        ],
        fitur:
          "Transaksi internasional mudah, layanan SWIFT, internet banking.",
        tarif: "Biaya Administrasi: Sesuai mata uang.",
      },
    },
    {
      id: "tabungan-bisnis",
      title: "Tabungan iB Bisnis",
      desc: "Solusi tabungan khusus untuk pelaku usaha",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&q=80",
      details: {
        syarat: [
          "SIUP/TDP/Akta Perusahaan",
          "Setoran Awal: Rp 500.000",
          "Akad: Mudharabah",
        ],
        fitur:
          "Bagi hasil kompetitif, transaksi unlimited, mobile banking bisnis.",
        tarif: "Biaya Administrasi: Rp 10.000/bulan.",
      },
    },
    {
      id: "giro-prioritas",
      title: "Giro iB Prioritas",
      desc: "Layanan giro premium dengan benefit eksklusif",
      image:
        "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&q=80",
      details: {
        syarat: ["Saldo Minimal: Rp 100.000.000", "KTP & NPWP", "Akad: Wadiah"],
        fitur:
          "Relationship Manager dedicated, lounge akses, bonus menarik, prioritas layanan.",
        tarif: "Bebas biaya administrasi.",
      },
    },
    {
      id: "tabungan-melasa-muda",
      title: "Tabungan Melasa Muda",
      desc: "Tabungan khusus untuk generasi muda dan pelajar",
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&q=80",
      details: {
        syarat: [
          "Usia 17-25 tahun",
          "Kartu Pelajar/Mahasiswa",
          "Setoran Awal: Rp 10.000",
        ],
        fitur:
          "Bebas biaya admin, bagi hasil menarik, kartu debit gratis, mobile banking.",
        tarif: "Bebas biaya administrasi hingga usia 25 tahun.",
      },
    },
    {
      id: "deposito-emas",
      title: "Deposito iB Emas",
      desc: "Investasi deposito dengan underlying emas",
      image:
        "https://images.unsplash.com/photo-1610375461246-83df859d849d?w=400&q=80",
      details: {
        syarat: [
          "Minimal: 10 gram emas",
          "Jangka Waktu: 3, 6, 12 bulan",
          "Akad: Mudharabah",
        ],
        fitur:
          "Return mengikuti harga emas, aman dari inflasi, dapat dicairkan dalam bentuk emas atau uang.",
        tarif: "Biaya Administrasi: 0.5% dari nilai emas.",
      },
    },
  ],
  financing: [
    {
      id: "pembiayaan-rumah",
      title: "Pembiayaan Rumah iB",
      desc: "Wujudkan rumah impian dengan akad murabahah",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&q=80",
      details: {
        syarat: [
          "WNI, Usia Min. 21 Tahun",
          "Lama Kerja/Usaha Min. 2 Tahun",
          "Jaminan: Objek yang dibiayai",
        ],
        fitur:
          "Akad Jual Beli (Murabahah), Cicilan Flat, Total Harga Jual Disepakati di Awal (Transparan). Tenor hingga 15 tahun.",
        tarif:
          "Biaya Administrasi: 1% dari Plafon. Biaya Provisi: 0,5% dari Plafon. Biaya Asuransi & Notaris (Sesuai Tagihan Pihak ke-3).",
      },
    },
    {
      id: "pembiayaan-kendaraan",
      title: "Pembiayaan Kendaraan iB",
      desc: "Miliki kendaraan impian dengan cicilan syariah",
      image:
        "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&q=80",
      details: {
        syarat: [
          "WNI, Usia Min. 21 Tahun",
          "Lama Kerja/Usaha Min. 1 Tahun",
          "DP: Minimal 20% (Mobil), 10% (Motor)",
        ],
        fitur:
          "Akad Jual Beli, Kepastian harga jual, Tenor hingga 5 tahun. Simulasi tersedia.",
        tarif:
          "Biaya Administrasi: 1% dari Plafon. Biaya Asuransi, Fidusia (Sesuai Tagihan Pihak ke-3).",
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
      id: "al-qardh-card",
      title: "Al-Qardh Card",
      desc: "Kartu kredit syariah dengan fitur cashback",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&q=80",
      details: {
        syarat: [
          "Usia Min. 21 Tahun",
          "Penghasilan Min. Rp 3.000.000/bulan",
          "Akad: Kafalah, Qardh, dan Ijarah",
        ],
        fitur:
          "Maksimal Transaksi: Rp 8.000.000. Welcome Bonus Cashback, Smartspending (cicilan 0%), Smartsaqadah, Smartbill (Autodebet Tagihan).",
        tarif:
          "Bebas Riba. Biaya Iuran Tahunan: Sesuai kategori kartu. Denda keterlambatan (Ta'widh) digunakan untuk dana sosial.",
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
      id: "pembiayaan-modal-kerja",
      title: "Pembiayaan Modal Kerja",
      desc: "Solusi modal usaha untuk UMKM",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80",
      details: {
        syarat: [
          "Usaha berjalan min. 2 tahun",
          "Laporan keuangan",
          "Jaminan sesuai plafon",
        ],
        fitur:
          "Plafon hingga Rp 2 miliar, tenor fleksibel, akad mudharabah/musyarakah.",
        tarif: "Nisbah bagi hasil kompetitif.",
      },
    },
    {
      id: "pembiayaan-investasi",
      title: "Pembiayaan Investasi iB",
      desc: "Pembiayaan untuk investasi aset produktif",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80",
      details: {
        syarat: ["Proposal investasi", "Feasibility study", "Jaminan aset"],
        fitur:
          "Plafon besar, tenor panjang hingga 15 tahun, akad musyarakah mutanaqisah.",
        tarif: "Margin kompetitif sesuai negosiasi.",
      },
    },
    {
      id: "pembiayaan-mikro",
      title: "Pembiayaan Mikro iB",
      desc: "Pembiayaan khusus untuk usaha mikro",
      image:
        "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=400&q=80",
      details: {
        syarat: ["Usaha mikro aktif", "KTP & KK", "Jaminan ringan"],
        fitur:
          "Plafon Rp 5-50 juta, proses mudah dan cepat, pendampingan usaha.",
        tarif: "Margin flat kompetitif.",
      },
    },
    {
      id: "pembiayaan-emas-cicil",
      title: "Cicil Emas iB",
      desc: "Miliki emas dengan cara mencicil",
      image:
        "https://images.unsplash.com/photo-1610375461246-83df859d849d?w=400&q=80",
      details: {
        syarat: ["Usia min. 21 tahun", "Penghasilan tetap", "DP 20%"],
        fitur:
          "Emas batangan bersertifikat, cicilan ringan, tenor hingga 3 tahun.",
        tarif: "Margin flat 8-12% per tahun.",
      },
    },
    {
      id: "pembiayaan-pensiun",
      title: "Pembiayaan Pensiun",
      desc: "Pembiayaan khusus untuk pensiunan",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80",
      details: {
        syarat: [
          "Pensiunan PNS/TNI/Polri/Swasta",
          "Usia max. 70 tahun",
          "SK Pensiun",
        ],
        fitur:
          "Plafon hingga Rp 200 juta, angsuran dipotong dari pensiun, proses mudah.",
        tarif: "Margin kompetitif untuk pensiunan.",
      },
    },
    {
      id: "pembiayaan-pendidikan",
      title: "Pembiayaan Pendidikan",
      desc: "Wujudkan pendidikan terbaik untuk buah hati",
      image:
        "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400&q=80",
      details: {
        syarat: [
          "Orang tua/wali",
          "Surat penerimaan sekolah/kampus",
          "Slip gaji",
        ],
        fitur:
          "Cover biaya kuliah/sekolah, tenor hingga masa studi, tanpa jaminan untuk nominal tertentu.",
        tarif: "Margin kompetitif, subsidi untuk prestasi.",
      },
    },
    {
      id: "pembiayaan-syariah-pegawai",
      title: "Pembiayaan Syariah Pegawai",
      desc: "Pembiayaan khusus karyawan dengan potongan gaji",
      image:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&q=80",
      details: {
        syarat: [
          "Karyawan tetap",
          "Masa kerja min. 1 tahun",
          "Kerjasama dengan perusahaan",
        ],
        fitur:
          "Plafon hingga 5x gaji, angsuran potong gaji, proses cepat tanpa survey.",
        tarif: "Margin khusus karyawan.",
      },
    },
  ],
  fee_based: [
    {
      id: "safe-deposit-box",
      title: "Safe Deposit Box (SDB) iB",
      desc: "Penyimpanan barang berharga dengan keamanan tinggi",
      image:
        "https://images.unsplash.com/photo-1582139329536-e7284fece509?w=400&q=80",
      details: {
        syarat: [
          "Nasabah Giro/Tabungan Melasa",
          "Akad: Ijarah (Sewa)",
          "Ukuran: Small, Medium, Large",
        ],
        fitur:
          "Penyimpanan barang berharga (Emas, Surat Berharga) dengan keamanan tinggi dan asuransi. Akses kantor pusat/cabang tertentu.",
        tarif:
          "Biaya Sewa Tahunan: Tergantung ukuran (Mulai dari Rp 300.000/tahun). Biaya Jaminan Kunci: Rp 1.000.000.",
      },
    },
    {
      id: "inkaso-syariah",
      title: "Layanan Inkaso iB",
      desc: "Layanan penagihan cek/bilyet giro",
      image:
        "https://images.unsplash.com/photo-1554224154-22dec7ec8818?w=400&q=80",
      details: {
        syarat: [
          "Nasabah Giro/Tabungan bisnis",
          "Akad: Wakalah (Perwakilan)",
          "Jenis: Inkaso Masuk & Inkaso Keluar",
        ],
        fitur:
          "Layanan penagihan cek/bilyet giro dari bank lain atas nama nasabah. Memudahkan transaksi bisnis jarak jauh.",
        tarif:
          "Biaya Jasa (Fee) Inkaso: Sesuai nominal dan jarak (Lokal/Luar Kota).",
      },
    },
    {
      id: "transfer-rtgs",
      title: "Transfer RTGS / SKN",
      desc: "Transfer dana antar bank real-time",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&q=80",
      details: {
        syarat: [
          "Nasabah Bank Melasa",
          "RTGS: Min. Rp 100 juta",
          "SKN: Semua nominal",
        ],
        fitur:
          "Transfer dana ke bank lain secara real-time (RTGS) atau kliring (SKN) melalui teller dan Mobile Banking.",
        tarif:
          "Biaya RTGS: Rp 25.000/transaksi. Biaya SKN: Rp 5.000/transaksi.",
      },
    },
    {
      id: "mobile-banking",
      title: "Melasa Mobile Banking",
      desc: "Banking di genggaman Anda 24/7",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&q=80",
      details: {
        syarat: [
          "Nasabah Bank Melasa",
          "Smartphone Android/iOS",
          "Registrasi di cabang/online",
        ],
        fitur:
          "Transfer antar/intra bank (RTGS/SKN), Pembayaran Tagihan (Listrik, Air, Internet), Top-Up E-Wallet, Zakat, Infaq, Sedekah (ZISWAF).",
        tarif:
          "Bebas biaya bulanan. Biaya Transfer Antar Bank (BI-FAST): Rp 2.500.",
      },
    },
    {
      id: "kliring",
      title: "Layanan Kliring",
      desc: "Kliring cek dan bilyet giro",
      image:
        "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=400&q=80",
      details: {
        syarat: ["Nasabah Giro", "Cek/BG dari bank lain", "Akad: Wakalah"],
        fitur:
          "Proses kliring cepat, notifikasi real-time, riwayat transaksi lengkap.",
        tarif: "Biaya Kliring: Rp 5.000/lembar.",
      },
    },
    {
      id: "bank-garansi",
      title: "Bank Garansi iB",
      desc: "Jaminan bank untuk tender dan kontrak",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&q=80",
      details: {
        syarat: [
          "Perusahaan/Perorangan",
          "Dokumen tender/kontrak",
          "Jaminan counter",
        ],
        fitur:
          "Bank Garansi untuk tender, pelaksanaan, uang muka, pemeliharaan. Proses cepat.",
        tarif: "Fee: 1-3% per tahun dari nilai garansi.",
      },
    },
    {
      id: "remittance",
      title: "Layanan Remittance",
      desc: "Kirim dan terima uang dari luar negeri",
      image:
        "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=400&q=80",
      details: {
        syarat: [
          "Nasabah Bank Melasa",
          "Dokumen identitas",
          "Tujuan pengiriman jelas",
        ],
        fitur:
          "Kirim uang ke 200+ negara, terima remittance dari luar negeri, kurs kompetitif.",
        tarif: "Fee mulai dari Rp 50.000, tergantung negara tujuan.",
      },
    },
    {
      id: "virtual-account",
      title: "Virtual Account Melasa",
      desc: "Solusi pembayaran untuk bisnis online",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&q=80",
      details: {
        syarat: ["Perusahaan/UMKM", "Rekening bisnis", "API integration"],
        fitur:
          "Virtual account unik untuk setiap customer, auto-reconciliation, notifikasi real-time.",
        tarif: "Setup fee: Rp 500.000. Transaction fee: Rp 2.000/transaksi.",
      },
    },
    {
      id: "bill-payment",
      title: "Bill Payment Otomatis",
      desc: "Bayar tagihan rutin secara otomatis",
      image:
        "https://images.unsplash.com/photo-1554224154-22dec7ec8818?w=400&q=80",
      details: {
        syarat: [
          "Nasabah Bank Melasa",
          "Saldo mencukupi",
          "Registrasi auto-debit",
        ],
        fitur:
          "Auto-debit untuk listrik, air, internet, telepon, asuransi. Tidak perlu ingat tanggal jatuh tempo.",
        tarif: "Bebas biaya layanan.",
      },
    },
    {
      id: "zakat-infaq",
      title: "Zakat & Infaq Digital",
      desc: "Salurkan zakat dan infaq dengan mudah",
      image:
        "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=400&q=80",
      details: {
        syarat: ["Nasabah Bank Melasa", "Mobile Banking/Internet Banking"],
        fitur:
          "Bayar zakat fitrah, zakat mal, infaq, sedekah. Tersalur ke lembaga amil zakat terpercaya. Laporan penyaluran transparan.",
        tarif: "Bebas biaya administrasi.",
      },
    },
    {
      id: "payroll-service",
      title: "Payroll Service iB",
      desc: "Layanan penggajian karyawan untuk perusahaan",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&q=80",
      details: {
        syarat: ["Perusahaan", "Kerjasama payroll", "Daftar karyawan"],
        fitur:
          "Transfer gaji massal, laporan lengkap, integrasi dengan sistem HR, notifikasi ke karyawan.",
        tarif: "Fee: Rp 2.000/karyawan/bulan.",
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

  modalInner.innerHTML = `
        <div class="modal-detail-grid">
            <img src="${product.image}" 
                 alt="${product.title}"
                 onerror="this.src='https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=400&q=80'">
            <div>
                <h2>${product.title}</h2>
                <h3>Syarat Pembukaan/Pengajuan</h3>
                <ul>${syaratList}</ul>
                <h3>Fitur & Keunggulan</h3>
                <p>${product.details.fitur}</p>
                <h3>Tarif & Biaya</h3>
                <p>${product.details.tarif}</p>
                <a href="https://wa.me/6281234567890?text=Halo, saya tertarik dengan ${product.title}" 
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

// ===== SIMULATOR =====
function initSimulator() {
  const jumlahInput = document.getElementById("jumlahPinjaman");
  const jangkaInput = document.getElementById("jangkaWaktu");
  const marginInput = document.getElementById("margin");
  const calculateBtn = document.getElementById("calculateBtn");

  // Update range values
  jangkaInput.addEventListener("input", () => {
    document.getElementById("jangkaWaktuValue").textContent = jangkaInput.value;
  });

  marginInput.addEventListener("input", () => {
    document.getElementById("marginValue").textContent = marginInput.value;
  });

  // Calculate on button click
  calculateBtn.addEventListener("click", calculateAngsuran);

  // Auto calculate on input change
  [jumlahInput, jangkaInput, marginInput].forEach((input) => {
    input.addEventListener("change", calculateAngsuran);
  });

  // Initial calculation
  calculateAngsuran();
}

function calculateAngsuran() {
  const jumlah = parseFloat(document.getElementById("jumlahPinjaman").value);
  const jangka = parseInt(document.getElementById("jangkaWaktu").value);
  const margin = parseFloat(document.getElementById("margin").value) / 100;

  if (isNaN(jumlah) || jumlah <= 0 || jangka <= 0) {
    return;
  }

  // Perhitungan Murabahah (Flat)
  const totalMargin = jumlah * margin * (jangka / 12);
  const totalPembiayaan = jumlah + totalMargin;
  const angsuranBulanan = totalPembiayaan / jangka;

  // Format currency
  const formatRupiah = (num) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(num);
  };

  // Animate result
  const resultValue = document.getElementById("hasilAngsuran");
  const totalPembiayaanEl = document.getElementById("totalPembiayaan");
  const totalMarginEl = document.getElementById("totalMargin");

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

  totalPembiayaanEl.textContent = formatRupiah(totalPembiayaan);
  totalMarginEl.textContent = formatRupiah(totalMargin);
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
