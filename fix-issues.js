// FIX UNTUK PRODUK DAN KALKULATOR
console.log("🔧 Loading fix-issues.js...");

// Pastikan DOM sudah ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initFixes);
} else {
  initFixes();
}

function initFixes() {
  console.log("✅ Initializing fixes...");

  // Fix 1: Pastikan produk di-render
  setTimeout(() => {
    if (typeof renderProducts === "function") {
      console.log("🔄 Re-rendering products...");
      renderProducts();
    }
  }, 500);

  // Fix 2: Pastikan kalkulator berfungsi
  setTimeout(() => {
    fixCalculator();
  }, 1000);
}

function fixCalculator() {
  console.log("🔧 Fixing calculator...");

  // Cek apakah kalkulator financing ada
  const jumlahPinjaman = document.getElementById("jumlahPinjaman");

  if (jumlahPinjaman) {
    console.log("✅ Calculator found, attaching events...");

    // Attach event listeners
    const jangkaWaktu = document.getElementById("jangkaWaktu");
    const dp = document.getElementById("dp");
    const margin = document.getElementById("margin");

    if (jangkaWaktu && dp && margin) {
      jumlahPinjaman.addEventListener("input", calculateAngsuran);
      jangkaWaktu.addEventListener("input", calculateAngsuran);
      dp.addEventListener("input", calculateAngsuran);
      margin.addEventListener("input", calculateAngsuran);

      // Trigger calculation
      calculateAngsuran();
      console.log("✅ Calculator fixed!");
    }
  } else {
    console.log("⚠️ Calculator not found, will retry...");
    setTimeout(fixCalculator, 1000);
  }
}
