// Dynamic Calculator System for Bank Melasa Syariah
// Handles 3 types of calculators: Funding, Financing, Fee Based

// Calculator Functions for Funding (Bagi Hasil)
// Rumus: Bagi Hasil = (Nominal × Rate × Jangka Waktu / 12) × Nisbah Nasabah
function calculateBagiHasil() {
  const nominal = parseFloat(document.getElementById("nominalSimpanan").value);
  const jangka = parseInt(document.getElementById("jangkaWaktuFunding").value);
  const nisbah = parseFloat(document.getElementById("nisbah").value) / 100;
  const rate =
    parseFloat(document.getElementById("equivalentRate").value) / 100;

  if (isNaN(nominal) || nominal <= 0 || jangka <= 0) {
    return;
  }

  // Perhitungan Bagi Hasil Syariah (Mudharabah)
  // Step 1: Hitung pendapatan bank per tahun
  const pendapatanBankPerTahun = nominal * rate;

  // Step 2: Hitung porsi nasabah berdasarkan nisbah
  const porsiNasabahPerTahun = pendapatanBankPerTahun * nisbah;

  // Step 3: Hitung bagi hasil per bulan
  const bagiHasilPerBulan = porsiNasabahPerTahun / 12;

  // Step 4: Total bagi hasil selama jangka waktu
  const totalBagiHasil = bagiHasilPerBulan * jangka;

  // Step 5: Total akhir (pokok + bagi hasil)
  const totalAkhir = nominal + totalBagiHasil;

  // Update UI dengan animasi
  const resultValue = document.getElementById("hasilBagiHasil");
  const nominalResult = document.getElementById("nominalSimpananResult");
  const totalBagiHasilEl = document.getElementById("totalBagiHasil");
  const totalAkhirEl = document.getElementById("totalAkhirFunding");

  if (typeof gsap !== "undefined") {
    const obj = { value: 0 };
    gsap.to(obj, {
      value: bagiHasilPerBulan,
      duration: 1,
      ease: "power2.out",
      onUpdate: () => {
        resultValue.textContent = formatRupiah(obj.value);
      },
    });
  } else {
    resultValue.textContent = formatRupiah(bagiHasilPerBulan);
  }

  nominalResult.textContent = formatRupiah(nominal);
  totalBagiHasilEl.textContent = formatRupiah(totalBagiHasil);
  totalAkhirEl.textContent = formatRupiah(totalAkhir);

  // Tampilkan rumus perhitungan
  console.log("=== PERHITUNGAN BAGI HASIL ===");
  console.log("Nominal Simpanan:", formatRupiah(nominal));
  console.log("Jangka Waktu:", jangka, "bulan");
  console.log("Nisbah Nasabah:", nisbah * 100 + "%");
  console.log("Equivalent Rate:", rate * 100 + "% per tahun");
  console.log("---");
  console.log(
    "Pendapatan Bank per Tahun:",
    formatRupiah(pendapatanBankPerTahun)
  );
  console.log("Porsi Nasabah per Tahun:", formatRupiah(porsiNasabahPerTahun));
  console.log("Bagi Hasil per Bulan:", formatRupiah(bagiHasilPerBulan));
  console.log("Total Bagi Hasil:", formatRupiah(totalBagiHasil));
  console.log("Total Akhir:", formatRupiah(totalAkhir));
}

// Calculator Functions for Fee Based
function calculateBiayaLayanan() {
  const jenis = document.getElementById("jenisLayanan").value;
  const frekuensi = parseInt(document.getElementById("frekuensi").value);
  const nominal = parseFloat(document.getElementById("nominalTransaksi").value);

  // Tarif berdasarkan jenis layanan
  const tarif = {
    transfer: 6500,
    sms: 500,
    atm: 2500,
    admin: 15000,
    valas: nominal * 0.002, // 0.2% dari nominal
  };

  const jenisNama = {
    transfer: "Transfer Antar Bank",
    sms: "SMS Banking",
    atm: "Kartu ATM",
    admin: "Administrasi Bulanan",
    valas: "Transaksi Valas",
  };

  const biayaPerTransaksi = tarif[jenis];
  const totalBiayaBulan = biayaPerTransaksi * frekuensi;
  const totalBiayaTahun = totalBiayaBulan * 12;

  // Update UI
  const resultValue = document.getElementById("hasilBiaya");
  const jenisResult = document.getElementById("jenisLayananResult");
  const biayaPerTransaksiEl = document.getElementById("biayaPerTransaksi");
  const frekuensiResult = document.getElementById("frekuensiResult");
  const totalPerTahunEl = document.getElementById("totalPerTahun");

  if (typeof gsap !== "undefined") {
    const obj = { value: 0 };
    gsap.to(obj, {
      value: totalBiayaBulan,
      duration: 1,
      ease: "power2.out",
      onUpdate: () => {
        resultValue.textContent = formatRupiah(obj.value);
      },
    });
  } else {
    resultValue.textContent = formatRupiah(totalBiayaBulan);
  }

  jenisResult.textContent = jenisNama[jenis];
  biayaPerTransaksiEl.textContent = formatRupiah(biayaPerTransaksi);
  frekuensiResult.textContent = frekuensi + " kali";
  totalPerTahunEl.textContent = formatRupiah(totalBiayaTahun);
}
