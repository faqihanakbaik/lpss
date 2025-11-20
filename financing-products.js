// FINANCING PRODUCTS - Bank Melasa Syariah
// Total: 7 Products (Sesuai kategori Financing)

console.log("📦 Loading financing-products.js...");

const financingProducts = [
  // 1. AL-QARDH SOCIAL
  {
    id: "al-qardh-social",
    title: "Al-Qardh Social",
    desc: "Pinjaman sosial tanpa imbalan untuk keperluan darurat",
    definisi:
      "Pinjaman Sosial Syariah (Qardh) adalah fasilitas pembiayaan tanpa imbalan yang diberikan oleh bank syariah kepada nasabah yang membutuhkan dana untuk keperluan sosial atau darurat, seperti biaya pendidikan, kesehatan, atau perbaikan rumah. Nasabah hanya wajib mengembalikan pokok pinjaman tanpa bunga, sesuai dengan akad Qardh (pinjaman kebajikan).",
    image:
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&q=80",
    details: {
      syarat: [
        "Warga Negara Indonesia (WNI) Berusia minimal 18 tahun atau sudah menikah",
        "Memiliki KTP dan KK Sebagai identitas dan verifikasi",
        "Surat Keterangan Tidak Mampu/Tujuan Sosial Dibutuhkan untuk menilai kelayakan sosial",
        "Rekening di Bank Syariah Terkait Untuk pencairan dan pengembalian dana",
        "Bersedia Mengembalikan Pokok Pinjaman Dengan komitmen moral dan tertulis",
      ],
      fitur:
        "Akad Qard: Akad pinjaman kebajikan tanpa tambahan imbalan (bunga). Tujuan Sosial: Diperuntukkan bagi kebutuhan sosial, kemanusiaan, atau darurat. Tanpa Margin Keuntungan: Bank tidak mengambil keuntungan, hanya pengembalian pokok. Tenor Pendek-Menengah: Jangka waktu pengembalian biasanya 3-24 bulan. Cicilan Fleksibel: Dapat dicicil sesuai kemampuan nasabah. Sumber Dana Sosial: Dana berasal dari dana sosial (zakat, infaq, dana kebajikan bank). Bebas Riba dan Gharar: Seluruh proses mengikuti prinsip syariah.",
      tarif:
        "Biaya Administrasi: Sekadar untuk menutup biaya operasional (misalnya Rp 10.000-Rp 25.000). Denda (opsional & non-profit): Jika ada keterlambatan, denda tidak menjadi keuntungan bank, tapi disalurkan untuk dana sosial. Biaya Materai: Sesuai ketentuan transaksi",
    },
  },

  // 2. GADAI EMAS ALBARKAH SYARIAH
  {
    id: "gadai-emas",
    title: "Gadai Emas Alberkah Syariah",
    desc: "Solusi dana cepat dengan jaminan emas",
    definisi:
      "GEMASSA atau Gadai Emas Alberkah Syariah menggunakan prinsip syariah dengan akad Rahn dan Ijarah, yaitu penyerahan hak penguasaan secara fisik atas barang berharga berupa emas (perhiasan beserta aksesorisnya) dari nasabah kepada bank sebagai agunan atas pembiayaan yang diterima. Qardh Beragun Emas adalah solusi tepat dalam memenuhi kebutuhan dana bersifat segera yang sesuai dengan Prinsip Syariah. Proses pencairan sangat mudah dan cepat dengan fasilitas tempat penyimpanan barang jaminan yang aman.",
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
        "Reservasi gadai via aplikasi mobile. Pembayaran produk digital (tebus ulang/perpanjang). Simulasi info harga emas real-time. Layanan pick-up emas. Jenis Agunan: Emas Perhiasan dan Emas batangan/bersertifikat. Proses: Nasabah datang bawa persyaratan → Petugas menaksir Emas dan memberi info pinjaman optimal → Tandatangan Akad oleh Nasabah dan petugas → Pencairan pinjaman pada rekening nasabah.",
      tarif:
        "Biaya administrasi dan ujrah ijarah sesuai dengan ketentuan bank. Biaya materai sesuai ketentuan yang berlaku.",
    },
  },

  // 3. PEMBIAYAAN HIJRAH MULTIGUNA
  {
    id: "pembiayaan-hijrah-multiguna",
    title: "Pembiayaan Hijrah Multiguna",
    desc: "Pembiayaan fleksibel untuk berbagai kebutuhan",
    definisi:
      "Pembiayaan Multiguna dengan Akad Murabahah adalah fasilitas pembiayaan syariah, kepada nasabah perorangan atau pelaku usaha untuk membeli barang atau jasa tertentu yang menjadi kebutuhan multiguna (seperti renovasi rumah, pendidikan, atau pembelian aset konsumtif lainnya dengan mekanisme harga pokok ditambah margin keuntungan yang disepakati secara transparan, di mana pembayaran dilakukan secara cicilan/angsuran dalam jangka waktu yang telah ditentukan di awal akad dan dengan uang muka.",
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

  // 4. SAKINAH HOME FINANCING (KPR)
  {
    id: "sakinah-home-financing",
    title: "Sakinah Home Financing (KPR)",
    desc: "Pembiayaan kepemilikan rumah sesuai syariah",
    definisi:
      "Pembiayaan KPR Syariah dengan Akad Murabahah adalah fasilitas pembiayaan jual beli rumah/properti, kepada nasabah perorangan atau pelaku usaha untuk memiliki properti (seperti rumah, ruko, atau apartemen, di mana mekanismenya adalah terdiri dari harga pokok Bank ditambah margin keuntungan yang disepakati secara transparan, yang kemudian dibayar oleh Nasabah secara cicilan/angsuran dengan jangka waktu tetap yang telah ditentukan di awal akad dan dengan menggunakan uang muka.",
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
        "Proses permohonan yang mudah serta cepat. Fleksibel untuk membeli rumah baru maupun bekas. Plafon pembiayaan yang besar. Jangka waktu pembiayaan yang panjang. Fasilitas auto debit dari tabungan induk.",
      tarif:
        "Biaya Administrasi: Sesuai Kebijakan Bank. Biaya Notaris: Sesuai kebijakan bank. Biaya Materai: Bervariasi sesuai jumlah dokumen. Biaya Asuransi: Mengikuti tarif yang diberlakukan perusahaan asuransi syariah. Biaya Appraisal: Rp 500.000 - Rp 1.000.000. Biaya Pelunasan Dipercepat: Gratis. Biaya Ta'widh: 0,1% - 0,2% dari cicilan yang terlambat",
    },
  },

  // 5. VEHICLE SYARIAH FINANCING
  {
    id: "vehicle-syariah-financing",
    title: "Vehicle Syariah Financing",
    desc: "Pembiayaan kendaraan bermotor sesuai syariah",
    definisi:
      "VEHIRA (Vehicle Syariah Financing) adalah produk pembiayaan kepemilikan kendaraan bermotor dari Bank Melasa Syariah yang dirancang untuk membantu nasabah individu, baik karyawan dan wiraswasta dalam mewujudkan kepemilikan kendaraan roda dua atau roda empat, baik baru, bekas, maupun berbasis listrik, secara mudah dan sesuai prinsip syariah. Melalui akad Murabahah dimana menggunakan uang muka, nasabah dapat memperoleh kendaraan impian tanpa khawatir melanggar prinsip keadilan dan transparansi.",
    image:
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=400&q=80",
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
        "Pokok Pembiayaan - Maksimal sebesar Rp 500.000.000. Margin - 12% per tahun. Jangka Waktu Pembiayaan - Maksimal s.d 5 Tahun. Jenis Agunan - Kendaraan bermotor yang menjadi objek pembiayaan. Uang Muka - 10%.",
      tarif:
        "Biaya Administrasi: Sesuai Kebijakan Bank. Biaya Notaris: Sesuai kebijakan bank. Biaya Materai: Bervariasi sesuai jumlah dokumen. Biaya Asuransi: Mengikuti tarif yang diberlakukan perusahaan asuransi syariah. Biaya Appraisal: Rp 300.000. Biaya Pelunasan Dipercepat: Rp 100.000. Biaya Ta'widh: Rp 50.000",
    },
  },

  // 6. C&E CICILAN EMAS
  {
    id: "cicilan-emas",
    title: "C&E Cicilan Emas",
    desc: "Pembiayaan kepemilikan emas batangan dengan cicilan",
    definisi:
      "Pembiayaan Emas dengan Akad Murabahah adalah fasilitas pembiayaan syariah, kepada nasabah perorangan yang memiliki tujuan untuk memiliki emas batangan/logam mulia sebagai sarana investasi atau lindung nilai jangka panjang, di mana mekanismenya Lembaga membeli emas yang diinginkan Nasabah dan menjualnya kembali dengan harga jual (harga pokok ditambah margin keuntungan tetap) yang dibayar Nasabah secara angsuran/cicilan tetap dalam jangka waktu yang disepakati di awal akad dengan menggunakan uang muka.",
    image:
      "https://images.unsplash.com/photo-1610375461246-83df859d849d?w=400&q=80",
    details: {
      syarat: [
        "KTP",
        "NPWP (Pembiayaan > Rp 50 juta) (Maksimal Limit Rp 150 juta)",
        "Minimal usia 21 tahun, maksimal 60 tahun",
      ],
      fitur:
        "Fasilitas pembayaran Online/Offline. Jangka waktu pembiayaan fleksibel. Mendapatkan sertifikat emas/bukti kepemilikan.",
      tarif:
        "Uang Muka (DP): 10%-30% dari harga emas. Sebagai tanda keseriusan dan mengurangi jumlah cicilan. Biaya Administrasi: 1% dari total pembiayaan. Untuk menutupi biaya proses dan pengurusan akad. Denda Keterlambatan: Dikenakan jika nasabah terlambat membayar. Tidak menjadi keuntungan bank, tapi disalurkan untuk dana sosial. Margin Keuntungan Bank: Disepakati di awal antara bank dan nasabah. Bersifat tetap (tidak berubah selama masa cicilan)",
    },
  },

  // 7. PEMBIAYAAN USAHA RAKYAT SYARIAH
  {
    id: "pembiayaan-usaha-rakyat",
    title: "Pembiayaan Usaha Rakyat Syariah",
    desc: "Pembiayaan untuk UMKM dengan skema bagi hasil",
    definisi:
      "Pembiayaan Usaha Rakyat (PUR) Syariah dengan Akad Murabahah adalah skema penyediaan dana 100% oleh Bank Syariah sebagai Shahibul Maal atau pemilik modal kepada pelaku Usaha Mikro, Kecil, dan Menengah (UMKM) atau masyarakat sebagai Mudharib untuk membiayai dan mengembangkan usaha produktif yang halal dan keuntungan usaha akan dibagi bersama berdasarkan nisbah yang disepakati di awal akad, yang pembayaran bagi hasilnya dilakukan sesuai periode yang ditentukan.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&q=80",
    details: {
      syarat: [
        "Warga Negara Indonesia (WNI)",
        "Usia minimal 21 tahun",
        "Memiliki usaha produktif yang sudah berjalan minimal 6 bulan",
        "Tidak sedang menerima kredit lain (kecuali kredit konsumtif seperti KPR, KKB, atau kartu kredit)",
        "Memiliki dokumen pendukung seperti KTP, NPWP (untuk pinjaman di atas Rp 50 juta), surat izin usaha, formulir aplikasi pengajuan pembiayaan wajib dilengkapi dan ditandatangani oleh nasabah",
      ],
      fitur:
        "Tenor fleksibel hingga 5 tahun. Margin setara 3-6 persen per tahun. Bebas Biaya Administrasi dan provisi. Cicilan lebih ringan. Pinjaman lebih ringan dan transparan. Persyaratan mudah.",
      tarif:
        "Biaya administrasi: tidak ada. Provisi: tidak ada. Margin: 3%-6% per tahun",
    },
  },
];

console.log(
  "✅ financingProducts loaded:",
  financingProducts.length,
  "products"
);

// Export untuk digunakan di script.js
if (typeof module !== "undefined" && module.exports) {
  module.exports = financingProducts;
}
