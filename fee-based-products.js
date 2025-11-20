// FEE BASED INCOME PRODUCTS - Bank Melasa Syariah
// Total: 7 Products (Complete from prodduukks.txt)

const feeBasedProducts = [
  // 1. AL-QARDH CARD (Kartu Kredit Syariah)
  {
    id: "al-qardh-card",
    title: "Al-Qardh Card",
    desc: "Kartu kredit syariah dengan fitur cashback dan smartspending",
    definisi:
      "Kartu Al-Qardh Card adalah alat pembayaran non-tunai yang menggunakan tiga akad syariah yaitu Kafalah (penjaminan), Qardh (pinjaman), dan Ijarah (sewa jasa) kepada masyarakat yang ingin melakukan kegiatan bertransaksi tanpa riba dengan tujuan memudahkan pembayaran di berbagai merchant dan menyediakan fasilitas dana talangan yang sesuai syariah sehingga transaksi dapat diselesaikan secara fleksibel dan aman.",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&q=80",
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
        "Welcome Bonus - Cashback hingga Rp 150 ribu dengan aktivasi dan transaksi pertama minimal Rp 1. Smartspending - Fitur keringanan pembayaran tagihan melalui cicilan 0% hingga 12 bulan. Smartsadaqah - Fitur donasi secara rutin setiap bulan secara autodebet dengan Lazis yang bekerja sama dengan Bank Brilliant Core syariah. Smartbill - Fitur pembayaran tagihan rutin bulanan secara autodebet seperti tagihan listrik, air, asuransi, internet/wifi, dll. Maximal Transaksi sebesar Rp 8.000.000.",
      tarif:
        "Ijarah Fee: Rp 300.000 per tahun. Biaya Penarikan Tunai: Rp 25.000 - Rp 50.000 per transaksi penarikan. Biaya Penggantian Kartu Hilang/Rusak: Rp 50.000. Biaya Kelebihan Limit (Overlimit Fee): Rp 100.000 - Rp 250.000 per kejadian. Denda Keterlambatan (Ta'widh): Rp 45.000. Biaya Cetak Tagihan Kertas: Rp 20.000 per lembar",
    },
  },

  // 2. STANDING INSTRUCTIONS
  {
    id: "standing-instructions",
    title: "Standing Instructions",
    desc: "Layanan transfer otomatis untuk pembayaran rutin",
    definisi:
      "Standing Instruction Syariah dengan Akad Wakalah Bil Ujrah adalah layanan pelimpahan kuasa dari nasabah kepada Bank Syariah untuk melaksanakan perintah transfer atau pembayaran rutin secara otomatis dari rekening nasabah ke rekening tujuan (seperti rekening tabungan berencana, pembiayaan, atau donasi) secara periodik. Tujuannya adalah membantu nasabah memenuhi kewajiban finansial dan tujuan menabung (saving) secara disiplin dan tepat waktu.",
    image:
      "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=400&q=80",
    details: {
      syarat: [
        "Memiliki Rekening Aktif di bank penyedia layanan",
        "Saldo Mencukupi untuk setiap transaksi yang dijadwalkan",
        "Mengisi Formulir Standing Instruction berisi: Nama dan nomor rekening sumber, Nama dan nomor rekening tujuan, Nominal transaksi, Frekuensi & tanggal pelaksanaan",
        "Menandatangani Akad/Perjanjian Layanan (untuk bank syariah: sesuai akad wakalah bil ujrah)",
        "Menyetujui Biaya dan Syarat Penggunaan Layanan",
      ],
      fitur:
        "Transfer Otomatis Berkala - Bank akan secara otomatis mentransfer dana ke rekening tujuan sesuai jadwal (harian, mingguan, atau bulanan). Pembayaran Tagihan Otomatis - Dapat digunakan untuk membayar tagihan listrik, air, internet, zakat, infaq, atau cicilan pembiayaan secara otomatis. Setoran ke Tabungan/Investasi - Otomatis menyetor dana ke rekening tabungan berjangka, deposito, atau reksa dana syariah. Notifikasi Transaksi - Nasabah akan menerima SMS/email setiap kali transaksi. Perubahan dan Pembatalan Mudah - Nasabah dapat mengubah nominal, tanggal, atau menghentikan layanan kapan pun melalui mobile banking atau datang ke cabang.",
      tarif:
        "Biaya Pendaftaran: Rp 15.000. Biaya Transaksi otomatis (UJRAH) per transaksi: Rp 6.500. Biaya Pembatalan: Jika dilakukan sebelum jangka waktu Rp 5.000. Pajak/Fee Tambahan: Sesuai ketentuan OJK & Bank Indonesia",
    },
  },
];

  // 3. PAYROLL
  ,{
    id: "payroll",
    title: "Payroll",
    desc: "Layanan penggajian karyawan untuk perusahaan",
    definisi: "Layanan Payroll Syariah adalah produk perbankan yang menggunakan akad Wadiah Yad Dhamanah (Titipan dengan Jaminan), ditujukan oleh Bank Syariah (sebagai penjamin) kepada perusahaan dan instansi (sebagai mitra) untuk mendistribusikan gaji karyawannya (sebagai penitip dana). Tujuannya adalah memastikan transfer gaji berjalan aman, efisien, dan real-time setiap periode pembayaran.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&q=80",
    details: {
      syarat: [
        "Kartu identitas diri (KTP) dan NPWP",
        "Melampirkan dokumen Perjanjian Kerja Sama (PKS)",
        "Mengisi dan menandatangani formulir pembukaan rekening secara lengkap dan benar",
        "Memiliki tabungan di bank melasa syariah"
      ],
      fitur: "Mendapat fasilitas Electronic Statement (e-statement). Kemudahan bertransaksi menggunakan layanan SMS notifikasi dan aplikasi mobile banking M-Syariah. Mendapatkan Pelaporan keuangan: Menyediakan laporan pengeluaran gaji yang jelas dan rapi untuk kebutuhan audit atau pemantauan kesehatan keuangan. Transfer gaji massal, laporan lengkap, integrasi dengan sistem HR, notifikasi ke karyawan. Akad Wadiah Yad Dhamanah.",
      tarif: "Saldo Awal: Berdasarkan Gaji. Biaya Payroll: 20 - < 25 pegawai: Rp 2.000, > 25 pegawai: Gratis. Biaya Cetak Laporan Keuangan: Rp 10.000-Rp 25.000"
    }
  },

  // 4. KIRIMAN UANG MELALUI SKNBI
  {
    id: "sknbi",
    title: "Kiriman Uang melalui SKNBI",
    desc: "Transfer antarbank melalui sistem kliring nasional",
    definisi: "Kiriman Uang melalui SKNBI adalah layanan jasa yang ditawarkan oleh bank syariah sebagai wakil (Wakil/Al-Wakil) atas perintah Nasabah selaku pemberi kuasa (Muwakkil) untuk melakukan pemindahan dana elektronik (transfer) dengan batas nominal maksimum tertentu Rp 1 miliar melalui mekanisme Sistem Kliring Nasional Bank Indonesia (SKNBI), di mana proses penyelesaian (settlement) dana dilakukan secara kolektif (netting) dan terjadwal dalam beberapa kali siklus kliring per hari kerja Senin-jumat pukul 08.00-15.00 WIB.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&q=80",
    details: {
      syarat: [
        "Menunjukkan bukti identitas asli, (KTP), SIM, atau Paspor",
        "Mengisi formulir secara lengkap dan sesuai",
        "Menyerahkan warkat (untuk kliring)",
        "Menyetorkan dana sesuai jumlah yang di transfer, baik secara tunai, debet",
        "Batas Nominal SKNBI maksimal Rp 1 Miliar per transaksi",
        "Membayar biaya layanan transfer/kliring sebesar Rp 2.900",
        "Transaksi harus dilakukan pada Hari Kerja Bank dan dalam Jam Operasional"
      ],
      fitur: "Layanan transfer antarbank berbasis syariah. Adanya imbalan jasa (ujrah) yang sah dan disepakati. Efisiensi biaya (lebih murah dari RTGS). Cocok untuk nominal menengah (hingga Rp 1 M). Transaksi dilakukan dengan prinsip kepercayaan (wakalah) antara nasabah dan bank.",
      tarif: "Biaya kiriman uang SKNBI (non-RTGS): Rp 2.900. Layanan Kliring Warkat Debit sebesar Rp 5.000/DKE. Layanan Pembayaran Reguler sebesar Rp 5.000/rincian DKE. Layanan Penagihan Reguler sebesar Rp 5.000/rincian DKE. Biaya Administrasi Kliring Debet (Setoran Cek/BG): Rp 3.000. Biaya warkat debit (jika ada): Rp 1.000. Biaya pembatalan: Rp 5.000"
    }
  },

  // 5. BI-RTGS
  {
    id: "bi-rtgs",
    title: "BI-RTGS",
    desc: "Transfer real-time untuk nominal besar",
    definisi: "Produk Kiriman Uang melalui RTGS Syariah adalah layanan jasa yang disediakan oleh bank syariah sebagai wakil (Wakil/Al-Wakil) atas perintah Nasabah selaku pemberi kuasa (Muwakkil) untuk memindahkan dana elektronik dalam jumlah besar (minimal di atas Rp 100 juta) melalui Sistem Bank Indonesia – Real Time Gross Settlement (BI-RTGS) ke rekening bank lain, di mana penyelesaian transaksi dilakukan secara individual dan seketika (real-time) sehingga dana diterima di bank tujuan dengan cepat, aman, dan pasti.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&q=80",
    details: {
      syarat: [
        "Nasabah memiliki rekening aktif di Bank",
        "Mengisi formulir BI-RTGS lengkap dan benar",
        "Transaksi dilakukan pada jam operasional BI-RTGS (06.30 s/d 16.30)",
        "Nominal transfer besar (umumnya ≥ Rp 100 juta)",
        "Membayar ujrah (biaya imbalan jasa)",
        "Tujuan transaksi harus jelas dan halal"
      ],
      fitur: "Transaksi dapat dilakukan di Counter Bank (Teller) dan tidak harus datang ke Bank bisa melalui Handphone aplikasi perbankan digital (Internet Banking, Mobile Banking). Mendapatkan bukti transaksi dan nomor referensi BI. Real Time (Transaksi diproses secara langsung saat instruksi diterima). Dilengkapi dengan manajemen risiko untuk meminimalkan risiko kegagalan dan penipuan.",
      tarif: "JAM OPERASIONAL DAN TARIF BIAYA: 06.30-10.00 WIB: Rp 6.000, 10.00-14.00 WIB: Rp 15.000, 14.00-16.30 WIB: Rp 21.000. Minimal Nominal Transaksi: Rp 100.000.000"
    }
  }

  // 6. UJRAH POINT (Payment Point)
  ,{
    id: "ujrah-point",
    title: "UJRAH POINT (Payment Point)",
    desc: "Pembayaran multi tagihan dalam satu platform",
    definisi: "Payment Point Online Bank (PPOB) adalah layanan sistem pembayaran berbasis online yang memanfaatkan infrastruktur perbankan, yang disediakan kepada masyarakat dan pelaku usaha (agen) untuk memfasilitasi transaksi pembayaran berbagai jenis tagihan rutin (seperti listrik, air, pulsa, BPJS, dan cicilan) secara kolektif di satu tempat atau platform, sehingga transaksi dapat diselesaikan dengan mudah, cepat, dan real-time tanpa perlu mendatangi kantor penyedia tagihan secara fisik.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&q=80",
    details: {
      syarat: [
        "Memiliki rekening di bank syariah penyedia layanan",
        "Mengisi dan menandatangani Formulir wakalah bil ujrah",
        "Menyediakan saldo yang cukup untuk pembayaran dan biaya ujrah",
        "Menyertakan data lengkap tagihan (ID pelanggan, nomor meter, dsb)"
      ],
      fitur: "LAYANAN PEMBAYARAN MULTI TAGIHAN {PLN, PDAM, Telpon dan Internet, BPJS, Zakat, Infaq, dan tagihan lainnya}. Jaringan Luas (dapat dilakukan melalui kantor cabang, ATM syariah, mobile banking syariah, dan mitra agen bank). KONFIRMASI OTOMATIS (bukti pembayaran atau notifikasi langsung setelah transaksi berhasil). TRANSAKSI REAL-TIME (pembayaran diproses secara langsung ke pihak penyedia layanan).",
      tarif: "BIAYA TRANSAKSI/UJRAH: Misalnya: Rp 3.000-Rp 5.000 per transaksi tergantung jenis tagihan (disepakati di awal sebagai imbalan jasa perwakilan bank). BIAYA ADMINISTRASI BULANAN: Jika Menggunakan layanan autodebet, bisa dikenakan Rp 2.000/bulan"
    }
  },

  // 7. INKASO
  {
    id: "inkaso",
    title: "INKASO",
    desc: "Layanan penagihan warkat/surat berharga",
    definisi: "Inkaso Syariah adalah layanan jasa perbankan syariah yang dilakukan oleh bank sebagai wakil (Wakil/Al-Wakil) atas amanat Nasabah selaku pemberi kuasa (Muwakkil) untuk melakukan penagihan warkat atau surat berharga (seperti Cek, Bilyet Giro, atau dokumen berharga lainnya) dari pihak ketiga yang berada di luar wilayah kliring atau kota bank Nasabah, dengan imbalan berupa Ujrah (fee) yang disepakati, sehingga Nasabah dapat mencairkan dana dari warkat tersebut secara aman dan efisien. Prosesnya bisa memakan waktu 1–3 hari kerja, tergantung lokasi dan jenis inkaso (dalam kota atau luar kota).",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&q=80",
    details: {
      syarat: [
        "Dokumen Identitas: WNI (Kartu Tanda Penduduk/KTP), WNA (Paspor dan KIMS/KITAS/KITAP)",
        "Pengirim inkaso menyerahkan surat atau dokumen berharga kepada cabang untuk ditagihkan kepada pembayaran inkaso di tempat/kota lain di Indonesia"
      ],
      fitur: "Dapat dilaksanakan diseluruh kantor cabang tersedia bagi nasabah maupun bukan nasabah. Pembayaran hasil penagihan dapat dilaksanakan secara tunai/non tunai. Warkat yang dapat diinkasokan: 1. Warkat yang tertariknya Bank/Lembaga Keuangan Bukan Bank: Wesel, Cel, Bilyet Giro dan Cek Perjalanan. 2. Warkat yang tertariknya bukan bank & juga bukan LKBB: Wesel, Promissory Notes (Promes) yang tertariknya perorangan atau perusahaan.",
      tarif: "Nasabah Bank Melasa Syariah: Rp 10.000. Non Nasabah As-salam Bank/titipan bank lain: Rp 25.000"
    }
  }
];

// Export untuk digunakan di script.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = feeBasedProducts;
}
