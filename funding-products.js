// FUNDING PRODUCTS - Bank Melasa Syariah
// Total: 17 Products (Sesuai kategori Funding)

console.log("📦 Loading funding-products.js...");

const fundingProducts = [
  // 1. TABUNGAN T-TRIP iB
  {
    id: "tabungan-t-trip",
    title: "Tabungan T-Trip iB",
    desc: "Tabungan wisata syariah untuk merencanakan perjalanan Anda",
    definisi:
      "Tabungan Wisata Syariah adalah produk simpanan berencana dari bank syariah yang memungkinkan nasabah menabung secara khusus untuk keperluan wisata umum (liburan, perjalanan, rekreasi), dengan akad Wadiah Yad Dhamanah, tanpa unsur riba. Tabungan ini dirancang agar nasabah bisa merencanakan dan memenuhi dana perjalanan dengan lebih terstruktur, aman, dan sesuai prinsip Islam. Tabungan hanya dapat diambil ketika perjanjian telah selesai.",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&q=80",
    details: {
      syarat: [
        "Warga Negara Indonesia berusia minimal 17 tahun atau diwakili wali (untuk di bawah umur)",
        "Mengisi dan menandatangani formulir pembukaan rekening tabungan perjalanan wisata syariah",
        "Melampirkan fotokopi KTP/paspor",
        "Menyetorkan saldo awal minimal Rp50.000",
        "Menyetujui jadwal setoran rutin dan nisbah bagi hasil",
        "Pas Foto baru",
      ],
      fitur:
        "Setoran awal dan setoran rutin bulanan ringan. Nasabah mendapat bagi hasil sesuai nisbah yang disepakati bank. Mobile banking. Mendapatkan laporan transaksi (e-statement). Akad mudharabah Muthlaqah.",
      tarif:
        "Setoran awal Rp. 50.000. Penutupan Rekening Rp. 20.000. Penutupan sebelum Jatuh Tempo Rp. 50.000. Penutupan saat jatuh tempo Gratis. Biaya penggantian buku Rp. 10.000. Perpanjangan kontrak: Rp 20.000",
    },
  },

  // 2. TABUNGAN HIJRAH BAITULLAH iB
  {
    id: "tabungan-hijrah-baitullah",
    title: "Tabungan Hijrah Baitullah iB",
    desc: "Tabungan haji dan umroh untuk mewujudkan ibadah Anda",
    definisi:
      "Tabungan Haji dan Umroh dengan akad Wadiah Yad Dhamanah adalah produk simpanan berencana di Bank Syariah yang diperuntukkan bagi nasabah individu dengan tujuan khusus untuk mengumpulkan dana secara teratur guna membiayai pendaftaran dan/atau pelaksanaan ibadah Haji atau Umroh di masa depan, di mana Bank bertindak sebagai wakil atau agen nasabah untuk mengelola dana tersebut. Tabungan hanya dapat diambil jika perjanjian telah usai.",
    image:
      "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=400&q=80",
    details: {
      syarat: [
        "Memberikan Identitas Diri KITAP/KITAS/KTP",
        "Membawa NPWP",
        "Mengisi Formulir Pembukaan Rekening",
        "Memiliki Paspor",
      ],
      fitur:
        "Setoran awal ringan. Bebas Biaya Administrasi. Setoran fleksibel. Terhubung dengan SISKOHAT. Aman dan dijamin LPS.",
      tarif:
        "Pembukaan Rekening: Tabungan Haji Dewasa Rp100.000, Tabungan Haji Anak Rp50.000. Setoran awal minimum Rp 100.000. Biaya Haji Reguler Rp. 90.000.000. Biaya Umrah Reguler Rp. 25.000.000-30.000.000. Setoran Porsi Haji: Rp25.100.000, Setoran Porsi Umrah: Rp 2.000.000. Biaya Penutupan Rekening Sebelum Mendapatkan Porsi Haji: Rp 100.000",
    },
  },

  // 3. TABUNGAN PRIORITAS SAFWAH iB
  {
    id: "tabungan-prioritas-safwah",
    title: "Tabungan Prioritas Safwah iB",
    desc: "Tabungan prioritas eksklusif untuk nasabah premium",
    definisi:
      "Tabungan Prioritas Safwah iB adalah produk simpanan prioritas berakad Mudharabah Mutlaqah, secara eksklusif ditujukan untuk nasabah individu dengan saldo dana kelolaan besar dan frekuensi transaksi tinggi, dengan tujuan untuk memberikan pelayanan premium yang cepat, aman, bebas dari unsur riba, serta menawarkan imbal hasil berupa porsi bagi hasil dan reward berupa hibah yang lebih kompetitif dari Bank, di mana nasabah dapat melakukan pembukaan rekening kapan saja.",
    image:
      "https://images.unsplash.com/photo-1559526324-593bc073d938?w=400&q=80",
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
        "Kartu Shar-E Debit Prioritas. Mobile Banking. Limit transaksi yang lebih besar. Ruangan Khusus. M-Banking. Buku Tabungan. Layanan SMS Dan Notifikasi. Gimal. Mendapatkan Merchendice hari special. Bagi Hasil Yang menarik yaitu 40%(nasabah) : 60%(bank).",
      tarif:
        "Setoran Awal: Rp. 50.000.000 - Rp 100.000.000. Saldo Minimum Mengendap: Rp. 500.000.000. Biaya Administrasi Kartu Debit: Rp 20.000 per bulan. Biaya Penutupan Rekening: Rp. 100.000. Biaya Rekening Dormant: Rp. 10.000",
    },
  },

  // 4. TABUNGANKU iB
  {
    id: "tabunganku",
    title: "Tabunganku iB",
    desc: "Tabungan syariah dengan setoran ringan untuk semua",
    definisi:
      "Tabunganku' iB adalah produk simpanan tabungan syariah dengan akad wadiah yad dhamanah, yang diperuntukkan bagi seseorang yang telah mempunyai KTP dan dapat melakukan pembukaan rekening ketika jam operasional, produk Tabunganku' iB dapat membantu nasabah untuk mengelola keuangannya. Tabungan dapat diambil kapan saja ketika jam operasional.",
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
        "Setoran awal ringan. Kartu Debit dan Buku Tabungan. Mobile banking. e-chanel BMS Mobile, BNS net banking, notifikasi sms dan email. Akad Wadiah Yad Dhamanah.",
      tarif:
        "Setoran awal Rp. 100.000. Biaya Administrasi GRATIS. Penutupan Rekening Rp. 20.000. Biaya Dormant Rp. 5.000. Biaya pengecekan saldo di ATM bank lain Rp 4.000. Biaya penggantian buku tabungan Rp. 5.000. Biaya pergantian Kartu ATM BNS Debit Rp 25.000. Transfer antar bank: Transfer Online Rp 6.500, BI FAST Rp 2.500. Biaya Penarikan Rp 2.500 di bawah Rp 5.000.000",
    },
  },

  // 5. TABUNGAN SI-PINTAR iB
  {
    id: "tabungan-si-pintar",
    title: "Tabungan Si-Pintar iB",
    desc: "Tabungan pelajar untuk mendorong budaya menabung sejak dini",
    definisi:
      "Tabungan SimPel adalah Simpanan Pelajar, yaitu tabungan khusus untuk siswa dari PAUD hingga SMA/sederajat. Tujuannya adalah untuk mendorong budaya menabung sejak dini melalui persyaratan yang mudah dan sederhana, serta fitur yang menarik untuk edukasi dan inklusi keuangan. Menggunakan akad Wadiah Yad Dhamanah, penarikan dapat dilakukan kapan saja ketika jam operasional.",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=80",
    details: {
      syarat: [
        "Merupakan siswa PAUD/TK/RA, SD/MI, SMP/MTs, SMA/MA atau sederajat",
        "Mengisi formulir aplikasi pembukaan rekening",
        "Melakukan setoran awal minimal Rp1.000",
        "Elektronik Kartu Tanda Penduduk Orang Tua/Wali (E-KTP)",
        "Kartu Keluarga",
        "Kartu Identitas Anak (KIA) atau Akta Kelahiran atau Kartu Pelajar",
        "Nama dan Alamat Sekolah atau Pondok Pesantren/Madrasah",
      ],
      fitur:
        "Mendapatkan Buku Tabungan. Mendapatkan Kartu Debit. Mendapatkan Sosialisasi Pengetahuan. Setoran Awal Minimum. Mendapatkan SMS dan Notifikasi.",
      tarif:
        "Setoran Awal: Rp5.000. Saldo Minimal: Rp10.000. Setoran Minimal: Rp5.000. Sms Notifikasi: All Provider. Fasilitas Kartu ATM Silver. Batas Transfer Harian: On Us Rp 50.000.000, Off Us Rp 20.000.000. Batas Transfer Per Transaksi: On Us Rp 25.000.000, Off Us Rp 10.000.000. Batas Penarikan Harian di ATM: On Us Rp 5.000.000, Off Us Rp 5.000.000",
    },
  },

  // 6. TABUNGAN TIJARAH iB
  {
    id: "tabungan-tijarah",
    title: "Tabungan Tijarah iB",
    desc: "Tabungan usaha untuk pelaku bisnis dengan bagi hasil menarik",
    definisi:
      "Tabungan Tijarah iB dirancang untuk memudahkan transaksi bagi pelaku usaha, baik perorangan wiraswasta maupun non perorangan (badan usaha), dilengkapi dengan fasilitas yang mendukung fleksibilitas transaksi bisnis serta sesuai prinsip syariah dengan menggunakan akad Mudharabah Mutlaqah dengan bagi hasil yang menarik, dan dapat melakukan pembukaan rekening ketika jam operasional, dengan syarat dan ketentuan yang mudah bagi wirausaha dapat membantu untuk mengelola keuangan untuk bisnis nya.",
    image:
      "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=400&q=80",
    details: {
      syarat: [
        "Untuk individu melampirkan Kartu Identitas Diri (KTP) dan NPWP",
        "Dokumen tambahan untuk perusahaan (non individu) meliputi KTP pejabat perusahaan yang berwenang, Akta pendirian perusahaan dan perubahan terakhir, NPWP, SIUP/TDP, NIB serta domisili perusahaan",
        "Mengisi dan menandatangani formulir pembukaan rekening secara lengkap dan benar",
      ],
      fitur:
        "Pembayaran Bill Payment (listrik, internet, air, dan telepon). Akses Mobile Banking aplikasi Tija-Syariah. Buku Fisik Tabungan. Kartu Debit, tersedia dua pilihan jenis kartu ATM yaitu Platinum dan Dzahabun untuk nasabah perorangan serta ATM Dzahabun untuk non perorangan. Bagi Hasil yang menarik untuk nasabah 40% dan Bank 60%.",
      tarif:
        "Setoran Awal Minimum: Rp 100.000. Setoran Minimum Selanjutnya: Rp50.000. Saldo Minimum: Rp 500.000. Biaya Penutupan Atau Pembukaan Rekening: Rp25.000. Biaya Kartu Debit yang rusak/hilang: Rp25.000. Biaya Penggantian Buku Tabungan yang Hilang: Rp25.000. Biaya Dormant: Rp 10.000",
    },
  },

  // 7. TABUNGAN iB MULIA PENSIUNAN
  {
    id: "tabungan-mulia-pensiunan",
    title: "Tabungan iB Mulia Pensiunan",
    desc: "Tabungan khusus untuk persiapan masa pensiun",
    definisi:
      "Tabungan iB Mulia Pensiunan Syariah adalah produk simpanan berjangka yang menggunakan akad Mudharabah Mutlaqah diperuntukan bagi nasabah perorangan atau karyawan perusahaan yang berkeinginan mempersiapkan jaminan finansial untuk masa hari tua atau purnabakti dengan tujuan agar nasabah dapat mempersiapkan dananya di hari tua ketika sudah memasuki masa pensiun di mana dana yang terkumpul hanya dapat dicairkan pada saat nasabah mencapai usia pensiun atau batas waktu yang disepakati.",
    image:
      "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?w=400&q=80",
    details: {
      syarat: [
        "Mengisi formulir aplikasi pembukaan rekening",
        "Melakukan setoran awal minimal Rp10.000",
        "Warga Negara Indonesia: Elektronik Kartu Tanda Penduduk (E-KTP), Surat Keterangan Bukti Perekaman dari Dukcapil setempat (bagi calon nasabah yang belum memiliki e-KTP), Surat Keterangan Domisili (bagi calon nasabah yang berasal dari luar daerah), NPWP (Khusus Nasabah wajib pajak), Kartu Keluarga, Surat Keterangan Pensiun, Surat Keterangan Jabatan Terakhir (untuk nasabah pra pensiun)",
        "Warga Negara Asing: Paspor dan KIMS/KITAS/KITAP",
      ],
      fitur:
        "Setoran awal: Rp.10.000. Setoran minimal: Rp.10.000. Fasilitas kartu ATM: Gold. Batas transfer harian: on us Rp. 75.000.000, off us Rp. 30.000.000. Sms notifikasi: All provider. Bagi Hasil yang menarik yaitu 40% untuk nasabah dan 60% untuk bank.",
      tarif:
        "Biaya Materai: Rp 10.000. Biaya Penutupan Rekening: Rp 10.000. Biaya Adm. Rekening Dorman Per Bulan: Rp 5.000. Biaya Aktivasi Rekening Dorman: Rp 2.500. Biaya Administrasi Rekening Dibawah Saldo Minimum: Rp 5.000. Biaya Pergantian Buku Tabungan Karena Habis/Penuh: Rp 2.500. Biaya Pergantian Buku Tabungan Karena Rusak: Rp 5.000. Biaya Penerbitan Kartu ATM: Rp 16.500. Biaya Administrasi ATM Per Bulan: Rp 6.500. Biaya Pergantian Kartu Expired, hilang, rusak: Rp 25.000. Biaya Transfer ke Atm Bank Lain: Rp 6.500",
    },
  },

  // 8. TABUNGAN MY QURBANI iB
  {
    id: "tabungan-my-qurbani",
    title: "Tabungan My Qurbani iB",
    desc: "Tabungan berencana untuk persiapan qurban",
    definisi:
      "Tabungan Qurban Syariah adalah produk simpanan berencana yang ditujukan bagi nasabah perorangan yang ingin mempersiapkan dana untuk pembelian hewan kurban secara terencana dan disiplin di mana dana tersebut disetorkan secara rutin dalam jangka waktu tertentu, dikelola oleh Bank dengan akad Wadiah Yad Dhamanah dan hanya dapat dicairkan atau digunakan untuk pembelian kurban pada saat mendekati Hari Raya Idul Adha.",
    image:
      "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&q=80",
    details: {
      syarat: [
        "WNI",
        "Mengisi Formulir pembukaan tabungan Qurban",
        "Fotokopi KTP dan dokumen pendukung",
      ],
      fitur:
        "Setoran awal ringan. Setoran dapat dilakukan harian, mingguan, atau bulanan. Tidak ada biaya administrasi bulanan. Penarikan hanya dapat dilakukan menjelang Idul Adha atau sesuai kesepakatan. Tidak ada bagi hasil karena menggunakan akad wadiah (titipan).",
      tarif:
        "Setoran Awal Minimum: Rp50.000. Setoran Selanjutnya Minimum Rp100.000. Saldo Minimum Mengendap: Umumnya antara Rp10.000 hingga Rp50.000. Biaya Penutupan Rekening: Dikenakan jika rekening ditutup di luar tujuan qurban atau sebelum jatuh tempo, berkisar antara Rp5.000 hingga Rp25.000. Penarikan Dana: Bersifat non-transaksional, dana biasanya tidak dapat ditarik sewaktu-waktu dan hanya bisa diambil saat mendekati Hari Raya Idul Adha atau setelah target qurban tercapai.",
    },
  },

  // 9. TABUNGAN EMAS-SLAHAH
  {
    id: "tabungan-emas-slahah",
    title: "Tabungan Emas-Slahah",
    desc: "Investasi emas dengan cara mencicil secara syariah",
    definisi:
      "Tabungan Emas-slahah dengan Akad Wadhi'ah Yad Dhamanah adalah layanan simpanan dalam bentuk saldo emas digital atau fisik, kepada nasabah/masyarakat umum yang ingin berinvestasi dalam emas dengan cara mencicil atau menabung secara rutin, emas tersebut dapat nasabah lakukan pencairan atau penarikan kapan saja, dengan datang langsung ke kantor cabang.",
    image:
      "https://images.unsplash.com/photo-1610375461246-83df859d849d?w=400&q=80",
    details: {
      syarat: [
        "Rekening dapat berlaku untuk warga Negara Indonesia (WNI)",
        "Rekening dinyatakan aktif dan bisa digunakan secara efektif setelah disetujui dan diaktifkan oleh Bank sesuai dengan ketentuan yang berlaku di Bank",
        "Wajib melampirkan kelengkapan dokumen (KTP,NPWP,Paspor)",
        "Tidak tercantum dalam daftar hitam yang masih berlaku yang diterbitkan oleh BI",
        "Perorangan atas nama rekening yang dibuka bertanggung jawab sepenuhnya terhadap segala kewajiban yang timbul dari rekening tersebut",
        "Mempunyai rekening tabungan reguler di Bank Melasa Syariah",
        "Berumur minimal 17 tahun",
      ],
      fitur:
        "Setoran ringan. BMS Mobile Banking. Fasilitas E-Mas untuk melihat Saldo. Buku Tabungan. Investasi Emas Syariah. Auto Debet Infaq.",
      tarif:
        "Setoran Awal: Rp50.000. Minimal Setoran Wajib Auto Debet: Rp50.000. Minimal Setoran Manual/Top Up: Rp10.000. Saldo Minimum: Rp10.000. Minimal target dana (hold): Rp600.000. Penarikan darurat: Rp50.000. Penutupan rekening: Rp50.000. Ganti buku karena rusak: Rp15.000",
    },
  },

  // 10. TABUNGAN EDUDREAM iB
  {
    id: "tabungan-edudream",
    title: "Tabungan EduDream iB",
    desc: "Tabungan pendidikan untuk masa depan anak",
    definisi:
      "Tabungan Pendidikan Al-'Ilm adalah produk simpanan yang membantu nasabah mempersiapkan dana pendidikan secara aman dan terencana sesuai prinsip syariah. Ditujukan untuk orang tua, wali, dan pelajar, produk ini mendorong kebiasaan menabung rutin dengan pencairan pada waktu tertentu untuk persiapan masa depan dengan Menggunakan akad Wadiah Yad Dhamanah.",
    image:
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400&q=80",
    details: {
      syarat: [
        "Perorangan WNI",
        "Mengisi formulir pembukaan rekening Tabungan Pendidikan Al-'Ilm",
        "FC KTP/SIM/Paspor (untuk orang tua/wali)",
        "FC NPWP",
        "Kartu Pelajar (untuk pelajar)",
        "Dana hanya dapat ditarik pada waktu tertentu, seperti saat pembayaran uang sekolah, semester, atau awal tahun ajaran",
      ],
      fitur:
        "Setoran ringan dan bebas biaya administrasi. Buku Tabungan. BLS Mobile Banking. Notifikasi dan sms. Beasiswa.",
      tarif:
        "Setoran Awal: Rp 50.000. Setoran Rutin Minimum per Bulan: Rp 20.000. Biaya Administrasi: Gratis. Biaya Penutupan Rekening: Rp 10.000",
    },
  },

  // 11. TABUNGAN GLOBALUNITY iB
  {
    id: "tabungan-globalunity",
    title: "Tabungan GlobalUnity iB",
    desc: "Tabungan valuta asing untuk transaksi internasional",
    definisi:
      "Tabungan Valuta Asing (Valas) iB adalah produk simpanan dalam mata uang asing seperti USD diperuntukan bagi nasabah perorangan atau badan usaha untuk memfasilitasi transaksi internasional, diversifikasi aset, dan lindung nilai terhadap fluktuasi kurs Rupiah dan tabungan ini dapat digunakan untuk transaksi atau penarikan valuta asing kapan saja, baik di dalam maupun di luar negeri, dengan menggunakan akad Wadiah Yad Dhamanah dan Shaf.",
    image:
      "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=400&q=80",
    details: {
      syarat: [
        "Berusia minimal 18 tahun atau sudah menikah",
        "Mengisi formulir pembukaan rekening Tabungan Asing Syariah-i",
        "Menyerahkan fotokopi KTP dan NPWP (jika ada)",
        "Menyetorkan dana awal USD 300 atau setara Rp 4.800.000",
        "Menyetujui prinsip dan ketentuan akad syariah yang berlaku",
        "Untuk WNA: Menyerahkan Paspor dan Kartu Izin Tinggal (KITAS/KITAP) yang masih berlaku",
      ],
      fitur:
        "Mata Uang Tersedia USD, GBP, EUR, SGD, AUD. Akad Syariah: Wadiah Yad Dhamanah & Sharf. Imbalan (Hibah) Dapat diberikan sukarela oleh bank. Akses Transaksi Online Banking, Mobile Banking, Kantor Cabang. Kartu Debit Global Bisa digunakan untuk transaksi internasional. Kepatuhan Syariah Disertifikasi oleh Dewan Pengawas Syariah.",
      tarif:
        "Setoran Awal Minimum: Rp 4.800.000 (setara USD 300). Saldo Minimum: Rp3.200.000 (setara USD 200). Administrasi Bulanan Gratis, jika saldo ≥USD 200. Biaya Saldo di Bawah Minimum USD 2 per bulan (jika saldo < USD 200). Biaya Penutupan Rekening USD 5. Transfer Antar Negara Mengikuti biaya bank koresponden (sekitar USD 10–15). Tarik Tunai di ATM Luar Negeri Gratis di jaringan Bank Nusantara Syariah dan mitra global",
    },
  },

  // 12. GIRO MYTIJARAH iB
  {
    id: "giro-mytijarah",
    title: "Giro MyTijarah iB",
    desc: "Giro bisnis syariah untuk transaksi perusahaan",
    definisi:
      "Giro Bisnis Syariah adalah simpanan rekening giro yang dikelola sesuai prinsip Islam tanpa riba, menggunakan akad Mudharabah Muthlaqah. Produk ini digunakan oleh perusahaan, lembaga, dan pengusaha untuk transaksi non-tunai harian seperti pembayaran dan transfer dana, yang dilakukan di bank syariah atau unit usaha syariah. Cara kerjanya, nasabah menyetor dan menarik dana kapan saja, serta dapat memperoleh bagi hasil sesuai kesepakatan.",
    image:
      "https://images.unsplash.com/photo-1554224154-22dec7ec8818?w=400&q=80",
    details: {
      syarat: [
        "Identitas diri: WNI (KTP), WNA (Paspor, KITAS, atau KITAP)",
        "Nomor Pokok Wajib Pajak (NPWP): Sesuai ketentuan bank",
        "Mengisi formulir aplikasi pembukaan rekening giro syariah",
        "Menyetor dana sesuai dengan ketentuan minimal yang ditetapkan bank",
        "Menyiapkan contoh tanda tangan sebagai otorisasi transaksi",
        "Untuk Perusahaan: Fotokopi Akta Pendirian dan Anggaran Dasar perusahaan beserta perubahannya, Fotokopi SIUP, TDP, atau dokumen izin usaha lainnya, Surat Keterangan Domisili Usaha (SKDU)",
      ],
      fitur:
        "Berdasarkan akad Mudharabah Muthlaqah. Bukti kepemilikan electronic statement. Tersedia fitur Virtual Account. Cash Management Service (CMS). Multi-Currency. Media Penarikan Fleksibel (IDR).",
      tarif:
        "IDR: Setoran Awal Minimum Rp1.000.000, Setoran Minimum Selanjutnya Rp100.000, Saldo Minimum Rp1.000.000, Biaya Administrasi per Bulan Rp20.000, Biaya Administrasi ATM per Bulan Rp15.000 (Kartu ATM Platinum), Biaya Penutupan Rekening Rp100.000, Biaya Dormant Rp25.000. USD: Setoran Awal Minimal $100, Setoran Minimum $100, Biaya Administrasi $5 Bulanan, Biaya Administrasi Bulanan Tambahan Jika Saldo di Bawah $500: $2, Biaya Penutupan Rekening $10. Biaya Materai Rp10.000/bulan",
    },
  },

  // 13. GIRO PLATINUM iB
  {
    id: "giro-platinum",
    title: "Giro Platinum iB",
    desc: "Giro utama untuk kemudahan transaksi dengan cek/bilyet giro",
    definisi:
      "Giro Utama Sahanah iB adalah produk simpanan syariah Bank Sahanah Syariah untuk perorangan atau badan usaha yang memungkinkan kemudahan transaksi karena dapat dicairkan kapan saja dengan cek/bilyet giro. Keamanan, dan Kepastian Manfaat.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&q=80",
    details: {
      syarat: [
        "Identitas diri: WNI (KTP), WNA (Paspor, KITAS, atau KITAP)",
        "Nomor Pokok Wajib Pajak (NPWP): Sesuai ketentuan bank",
        "Mengisi formulir aplikasi pembukaan rekening giro syariah",
        "Menyetor dana sesuai dengan ketentuan minimal yang ditetapkan bank",
        "Menyiapkan contoh tanda tangan sebagai otorisasi transaksi",
        "Untuk Perusahaan: Fotokopi Akta Pendirian dan Anggaran Dasar perusahaan beserta perubahannya, Fotokopi SIUP, TDP, atau dokumen izin usaha lainnya, Surat Keterangan Domisili Usaha (SKDU)",
      ],
      fitur:
        "Kartu Shar-e Debit (untuk rekening perorangan). Cek dan Bilyet Giro. Layanan Mobile Banking (untuk rekening perorangan).",
      tarif:
        "PERORANGAN: Setoran Awal Rp500.000, Setoran Minimal Rp500.000, Penutupan Rekening Rp50.000. NON-PERORANGAN: Setoran Awal Rp1.000.000, Setoran Minimal Rp1.000.000, Penutupan Rekening Rp50.000. Biaya Tambahan: Biaya Administrasi Rp15.000, Biaya Buku Cek/BG 10 Lembar Rp130.000, Biaya Buku Cek/BG 25 Lembar Rp300.000, Biaya Cetak Rek Koran Per Lembar Rp500, Biaya Materai Rp10.000",
    },
  },

  // 14. DEPOSITO ON CALL iB AMANAH
  {
    id: "deposito-on-call",
    title: "Deposito On Call iB Amanah",
    desc: "Deposito fleksibel untuk dana jangka pendek 7-30 hari",
    definisi:
      "Deposito On Call dengan akad Mudharabah Mutlaqah adalah produk simpanan investasi berjangka pendek yang menggunakan akad Mudharabah Mutlaqah, Nasabah dapat memperoleh bagi hasil yang optimal, kompetitif, dan dapat dinegosiasikan dengan Bank yang akan dibayarkan setelah jangka waktu penempatan yang singkat tersebut berakhir, yang mekanismenya disepakati dan diadministrasikan langsung di kantor Bank. Pencairan disertai pemberitahuan sebelumnya (on call) minimal 3 hari kerja.",
    image:
      "https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?w=400&q=80",
    details: {
      syarat: [
        "KTP atau identitas diri lain yang berlaku (paspor/KITAS untuk WNA)",
        "Nomor Pokok Wajib Pajak (NPWP) atau surat pernyataan jika tidak punya",
        "Mengisi formulir pembukaan rekening deposito",
        "Memiliki rekening relasi dengan mata uang yang sama dengan deposito yang akan dibuka",
        "Untuk Badan Usaha: Identitas diri pejabat yang berwenang (KTP/Paspor), NPWP perusahaan, Akta pendirian perusahaan dan perubahannya, Izin usaha (seperti SIUP, NIB) dan dokumen legalitas lainnya yang relevan",
      ],
      fitur:
        "Penempatan Deposito Rp 1.000.000.000. Tenor/Bagi Hasil Nisbah: 1-7 Hari 25%, 8-14 Hari 30%, 15-21 Hari 35%, 22-29 Hari 40%. Penempatan Bagi Hasil: Giro atau Tabungan. Status Perpanjangan: Non ARO. Bukti Kepemilikan: Bilyet Deposito.",
      tarif:
        "Biaya Materai Saat Pencairan: Rp 10.000. Pajak bagi hasil: 20%. Biaya transfer antarbank berlaku",
    },
  },

  // 15. DEPOSITO LOCK iB
  {
    id: "deposito-lock",
    title: "Deposito Lock iB",
    desc: "Investasi berjangka dengan bagi hasil yang menarik",
    definisi:
      "Deposito Syariah merupakan produk simpanan berjangka atau investasi dana, Penyedia dana atau shohibul mal menyediakan dana kepada pihak pengelola dana (mudharib). Deposito ini menggunakan akad Mudharabah Muthlaqah, deposito bertujuan memberikan jaminan pengembalian modal yang stabil dan bagi hasil yang lebih tinggi daripada tabungan biasa, dengan jangka waktu pencairan (1, 3, 6, dan 12 bulan) sesuai kesepakatan.",
    image:
      "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&q=80",
    details: {
      syarat: [
        "KTP atau identitas diri lain yang berlaku (paspor/KITAS untuk WNA)",
        "Nomor Pokok Wajib Pajak (NPWP) atau surat pernyataan jika tidak punya",
        "Mengisi formulir pembukaan rekening deposito",
        "Memiliki rekening relasi dengan mata uang yang sama dengan deposito yang akan dibuka",
        "Untuk Badan Usaha: Identitas diri pejabat yang berwenang (KTP/Paspor), NPWP perusahaan, Akta pendirian perusahaan dan perubahannya, Izin usaha (seperti SIUP, NIB) dan dokumen legalitas lainnya yang relevan",
      ],
      fitur:
        "Pokok Deposito diperpanjang otomatis saat jatuh tempo (ARO). Pokok dan bagi hasil Deposito diperpanjang otomatis saat jatuh tempo (ARO Kapitalisir). Deposito Cair saat jatuh tempo (Non ARO). Fitur Zakat atau Non Zakat. Jangka waktu: 1, 3, 6, dan 12 bulan.",
      tarif:
        "Setoran Awal: Rp 5.000.000. Biaya Penutupan Rp. 30.000 Bila terjadi perubahan biaya akan diinformasikan melalui media yang dianggap cukup oleh Bank. Biaya Pajak 20%. Bea meterai pada advis dan atau biaya lainnya jika ada sesuai dengan regulasi atau ketentuan yang berlaku.",
    },
  },

  // 16. REKSA DANA SYARIAH
  {
    id: "reksa-dana-syariah",
    title: "Reksa Dana Syariah",
    desc: "Investasi syariah dengan diversifikasi portofolio",
    definisi:
      "Reksa Dana dengan Akad Mudharabah Muqayyadah adalah produk investasi syariah yang menghimpun dana dari masyarakat umum (Shahibul Maal / Investor) dan menyerahkannya kepada Manajer Investasi atau Bank Syariah (Mudharib / Pengelola) dengan ketentuan bahwa dana tersebut hanya boleh disalurkan atau diinvestasikan pada portofolio atau sektor usaha tertentu yang telah disepakati dan dibatasi secara spesifik oleh Investor, untuk memperoleh imbal hasil berupa bagi hasil (profit sharing) yang besarnya sangat tergantung pada kinerja riil dari aset yang terikat tersebut, dan pembagian keuntungannya dilakukan secara periodik sesuai jadwal yang disepakati.",
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
        "Berbasis prinsip syariah. Diawasi Dewan Pengawas Syariah (DPS). Investasi pada Efek Syariah. Cleansing (Pembersihan Pendapatan Non-Halal).",
      tarif:
        "Biaya pengelolaan: Selama berinvestasi. Biaya pengalihan: Saat ganti produk. Biaya penjualan unit: Saat mencairkan dana. Biaya pembelian unit: Saat membeli unit. Minimum transaksi awal: Rp 1.000.000. Minimum Top Up: Rp 100.000",
    },
  },

  // 17. SYA-INVES GO (SPECIAL INVESTMENT)
  {
    id: "sya-inves-go",
    title: "Sya-Inves GO",
    desc: "Investasi khusus dengan batasan dan persyaratan tertentu",
    definisi:
      "Special Investment dengan akad Mudharabah Muqayadah adalah skema investasi syariah non-tabungan dan non-deposito yang berfungsi sebagai sarana penempatan dana oleh investor dalam jumlah besar dari Nasabah (sebagai pemilik dana/Shahibul Maal) kepada Bank Syariah (sebagai pengelola dana/Mudharib) untuk diinvestasikan dengan menetapkan batasan dan persyaratan tertentu yang ketat kepada Bank, seperti menentukan jenis proyek, sektor usaha untuk mengelola dana tersebut, demi memperoleh potensi bagi hasil yang optimal, yang akan dibagikan sesuai nisbah yang disepakati dan dihitung berdasarkan kinerja Bank dalam periode tertentu.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80",
    details: {
      syarat: [
        "Mengisi formulir aplikasi pembukaan rekening",
        "Melakukan setoran sebagai saldo penempatan minimal Rp1.000.000.000,- (Satu Milyar Rupiah)",
        "Fotocopy KTP Pengurus",
        "Fotocopy Akta Pendirian",
        "Fotocopy NIB",
        "Fotocopy NPWP",
        "Ijin Domisili dan atau Keterangan Perusahaan dan Pemerintah Setempat",
      ],
      fitur:
        "Nilai investasi - Minimum Rp100 juta atau setara untuk mata uang asing dalam bentuk USD. Jangka waktu/tenor - Dapat dilakukan baik untuk jangka pendek maupun jangka panjang. Tenor investasi dana disesuaikan dengan aset dasar yang didanai, sehingga jatuh tempo investasi dana sama dengan jatuh tempo aset dasar. Pilihan jangka waktu yang fleksibel. Diversifikasi aset yang halal. Transparansi dan Pengawasan. Pencatatan Off-Balance Sheet. Bagi Hasil Langsung (Profit Sharing).",
      tarif:
        "Biaya Materai Saat Pencairan: Rp 10.000. Pajak bagi hasil: 20%. Biaya transfer antarbank berlaku",
    },
  },
];

console.log("✅ fundingProducts loaded:", fundingProducts.length, "products");

// Export untuk digunakan di script.js
if (typeof module !== "undefined" && module.exports) {
  module.exports = fundingProducts;
}
