// DIAGNOSTIC SCRIPT - Jalankan di browser console
console.log("=== DIAGNOSTIC BANK MELASA SYARIAH ===");

// 1. Cek Data Produk
console.log("\n1️⃣ CEK DATA PRODUK:");
if (typeof productData !== "undefined") {
  console.log("✅ productData exists");
  console.log("   - Funding:", productData.funding?.length || 0, "produk");
  console.log("   - Financing:", productData.financing?.length || 0, "produk");
  console.log("   - Fee Based:", productData.fee_based?.length || 0, "produk");
} else {
  console.error("❌ productData NOT FOUND!");
}

// 2. Cek Fungsi Render
console.log("\n2️⃣ CEK FUNGSI RENDER:");
console.log("   - renderProducts:", typeof renderProducts);
console.log("   - renderCalculator:", typeof renderCalculator);
console.log("   - initProductCarousel:", typeof initProductCarousel);

// 3. Cek Fungsi Kalkulator
console.log("\n3️⃣ CEK FUNGSI KALKULATOR:");
console.log("   - calculateAngsuran:", typeof calculateAngsuran);
console.log("   - calculateBagiHasil:", typeof calculateBagiHasil);
console.log("   - calculateBiayaLayanan:", typeof calculateBiayaLayanan);

// 4. Cek DOM Elements
console.log("\n4️⃣ CEK DOM ELEMENTS:");
const carousel = document.getElementById("productCarousel");
const simulasiPanel = document.getElementById("simulasiPanel");
console.log("   - productCarousel:", carousel ? "✅ Found" : "❌ Not found");
console.log("   - simulasiPanel:", simulasiPanel ? "✅ Found" : "❌ Not found");

if (carousel) {
  console.log("   - Carousel children:", carousel.children.length);
}

// 5. Cek Current State
console.log("\n5️⃣ CEK CURRENT STATE:");
console.log(
  "   - currentCategory:",
  typeof currentCategory !== "undefined" ? currentCategory : "undefined"
);
console.log(
  "   - currentCalculatorType:",
  typeof currentCalculatorType !== "undefined"
    ? currentCalculatorType
    : "undefined"
);

// 6. Test Render Produk
console.log("\n6️⃣ TEST RENDER PRODUK:");
if (typeof renderProducts === "function") {
  try {
    renderProducts();
    console.log("✅ renderProducts() executed successfully");
  } catch (e) {
    console.error("❌ Error rendering products:", e);
  }
} else {
  console.error("❌ renderProducts function not available");
}

// 7. Test Kalkulator
console.log("\n7️⃣ TEST KALKULATOR:");
const jumlahPinjaman = document.getElementById("jumlahPinjaman");
if (jumlahPinjaman) {
  console.log("✅ Kalkulator financing found");
  console.log("   - Value:", jumlahPinjaman.value);
  if (typeof calculateAngsuran === "function") {
    try {
      calculateAngsuran();
      console.log("✅ calculateAngsuran() executed successfully");
    } catch (e) {
      console.error("❌ Error calculating:", e);
    }
  }
} else {
  console.log("⚠️ Kalkulator financing not found (might be on different tab)");
}

console.log("\n=== END DIAGNOSTIC ===");
