// ADVANCED LIVE CHAT WIDGET - SUPER CANGGIH & MODERN
(function () {
  "use strict";

  const chatBubble = document.getElementById("chatBubble");
  const chatWindow = document.getElementById("chatWindow");
  const chatClose = document.getElementById("chatClose");
  const minimizeChat = document.getElementById("minimizeChat");
  const chatBody = document.getElementById("chatBody");
  const chatInput = document.getElementById("chatInput");
  const sendBtn = document.getElementById("sendBtn");
  const chatBadge = document.getElementById("chatBadge");
  const chatNotification = document.getElementById("chatNotification");
  const typingIndicator = document.getElementById("typingIndicator");
  const quickReplies = document.getElementById("quickReplies");

  let messageCount = 2;

  // Show notification after 3 seconds
  setTimeout(() => {
    if (chatNotification && !chatWindow.classList.contains("active")) {
      chatNotification.classList.add("show");
      setTimeout(() => {
        chatNotification.classList.remove("show");
      }, 5000);
    }
  }, 3000);

  // Toggle chat window
  if (chatBubble && chatWindow) {
    chatBubble.addEventListener("click", () => {
      const isActive = chatWindow.classList.contains("active");
      chatWindow.classList.toggle("active");
      chatBubble.classList.toggle("active");

      if (!isActive && chatBadge) {
        chatBadge.style.display = "none";
      }

      // Focus input when opening
      if (chatWindow.classList.contains("active") && chatInput) {
        setTimeout(() => chatInput.focus(), 300);
      }
    });
  }

  // Close chat
  if (chatClose) {
    chatClose.addEventListener("click", (e) => {
      e.stopPropagation();
      chatWindow.classList.remove("active");
      chatBubble.classList.remove("active");
    });
  }

  // Minimize chat
  if (minimizeChat) {
    minimizeChat.addEventListener("click", (e) => {
      e.stopPropagation();
      chatWindow.classList.toggle("minimized");
    });
  }

  // Get current time
  function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  }

  // Add user message
  function addUserMessage(text) {
    messageCount++;
    const userMsg = document.createElement("div");
    userMsg.className = "chat-message user";
    userMsg.dataset.messageId = messageCount;
    userMsg.innerHTML = `
      <div class="message-avatar">
        <img src="https://ui-avatars.com/api/?name=You&background=e2e8f0&color=334155" alt="You">
      </div>
      <div class="message-wrapper">
        <div class="message-content">
          <p>${text}</p>
        </div>
        <span class="message-time">${getCurrentTime()}</span>
      </div>
    `;

    chatBody.insertBefore(userMsg, quickReplies);
    scrollToBottom();

    // Clear input
    if (chatInput) {
      chatInput.value = "";
    }
  }

  // Show typing indicator
  function showTyping() {
    if (typingIndicator) {
      typingIndicator.style.display = "flex";
      scrollToBottom();
    }
  }

  // Hide typing indicator
  function hideTyping() {
    if (typingIndicator) {
      typingIndicator.style.display = "none";
    }
  }

  // Add bot message
  function addBotMessage(text, delay = 1500) {
    showTyping();

    setTimeout(() => {
      hideTyping();
      messageCount++;

      const botMsg = document.createElement("div");
      botMsg.className = "chat-message bot";
      botMsg.dataset.messageId = messageCount;
      botMsg.innerHTML = `
        <div class="message-avatar">
          <img src="https://ui-avatars.com/api/?name=CS&background=667eea&color=fff" alt="CS">
        </div>
        <div class="message-wrapper">
          <div class="message-content">
            <p>${text}</p>
          </div>
          <span class="message-time">${getCurrentTime()}</span>
        </div>
      `;

      chatBody.insertBefore(botMsg, quickReplies);
      scrollToBottom();
    }, delay);
  }

  // Scroll to bottom
  function scrollToBottom() {
    if (chatBody) {
      setTimeout(() => {
        chatBody.scrollTop = chatBody.scrollHeight;
      }, 100);
    }
  }

  // Get bot response based on message
  function getBotResponse(message) {
    const msg = message.toLowerCase();

    if (msg.includes("rekening") || msg.includes("buka")) {
      return `Untuk membuka rekening, Anda bisa:<br><br>
        1️⃣ Kunjungi kantor cabang terdekat<br>
        2️⃣ Hubungi kami via WhatsApp<br>
        3️⃣ Gunakan <a href="product-finder.html" style="color: #667eea; font-weight: 600;">Product Finder</a> untuk menemukan produk yang tepat<br><br>
        📋 Dokumen yang diperlukan: KTP, NPWP (jika ada), dan setoran awal.`;
    } else if (msg.includes("pembiayaan") || msg.includes("financing")) {
      return `Kami menyediakan berbagai produk pembiayaan syariah:<br><br>
        🏠 <strong>KPR Syariah</strong> - Kepemilikan rumah<br>
        🚗 <strong>Pembiayaan Kendaraan</strong> - Motor & mobil<br>
        💼 <strong>Modal Kerja</strong> - Pengembangan usaha<br>
        💰 <strong>Multiguna</strong> - Berbagai kebutuhan<br><br>
        Gunakan <a href="#simulasi" style="color: #667eea; font-weight: 600;">kalkulator simulasi</a> untuk estimasi angsuran!`;
    } else if (msg.includes("tabungan") || msg.includes("saving")) {
      return `Produk tabungan kami:<br><br>
        💰 <strong>Tabunganku iB</strong> - Tanpa biaya admin<br>
        💎 <strong>Tabungan Tijarah iB</strong> - Bagi hasil kompetitif<br>
        🎓 <strong>Tabungan Si-Pintar iB</strong> - Khusus pelajar<br>
        🕌 <strong>Tabungan Hijrah Baitullah iB</strong> - Persiapan umroh<br><br>
        Lihat <a href="#produk" style="color: #667eea; font-weight: 600;">semua produk</a> kami!`;
    } else if (
      msg.includes("cabang") ||
      msg.includes("lokasi") ||
      msg.includes("branch")
    ) {
      return `Kami memiliki kantor cabang di:<br><br>
        📍 <strong>Jakarta Utara</strong> (Kantor Pusat)<br>
        &nbsp;&nbsp;&nbsp;&nbsp;Kelapa Gading - (021) 8567-9000<br><br>
        📍 <strong>Surabaya</strong><br>
        &nbsp;&nbsp;&nbsp;&nbsp;Pangkalan Jati Baru - (031) 500-2000<br><br>
        📍 <strong>Bandung</strong><br>
        &nbsp;&nbsp;&nbsp;&nbsp;Pondok Labu - (022) 420-3000<br><br>
        Lihat <a href="#kantor" style="color: #667eea; font-weight: 600;">detail lokasi</a> di website kami.`;
    } else if (
      msg.includes("kalkulator") ||
      msg.includes("simulasi") ||
      msg.includes("hitung")
    ) {
      return `Silakan gunakan <a href="#simulasi" style="color: #667eea; font-weight: 600;">Kalkulator Pembiayaan</a> kami untuk menghitung estimasi angsuran.<br><br>
        Anda bisa mengatur:<br>
        • Jumlah pembiayaan<br>
        • Jangka waktu<br>
        • Nisbah/margin<br><br>
        Hasilnya akan ditampilkan secara real-time! 🧮`;
    } else if (
      msg.includes("hubungi") ||
      msg.includes("contact") ||
      msg.includes("cs")
    ) {
      return `Hubungi kami melalui:<br><br>
        📧 <strong>Email:</strong> layanan@melasasyariah.co.id<br>
        💬 <strong>WhatsApp:</strong> <a href="https://wa.me/6281296163263" target="_blank" style="color: #667eea; font-weight: 600;">+62 812-9616-3263</a><br><br>
        ⏰ <strong>Jam Operasional:</strong><br>
        Senin-Jumat: 08:00-17:00 WIB<br>
        Sabtu: 08:00-12:00 WIB`;
    } else if (msg.includes("syariah") || msg.includes("halal")) {
      return `Bank Melasa Syariah beroperasi sesuai prinsip syariah:<br><br>
        ✅ Tanpa riba<br>
        ✅ Diawasi Dewan Pengawas Syariah<br>
        ✅ Terdaftar di OJK<br>
        ✅ Dana dijamin LPS hingga Rp 2 Miliar<br><br>
        Kami menggunakan akad-akad syariah seperti Mudharabah, Murabahah, Musyarakah, dan lainnya.`;
    } else if (msg.includes("terima kasih") || msg.includes("thanks")) {
      return `Sama-sama! 😊<br><br>
        Senang bisa membantu Anda. Jika ada pertanyaan lain, jangan ragu untuk bertanya ya!<br><br>
        Jazakallahu khairan! 🤲`;
    } else {
      return `Terima kasih atas pertanyaan Anda! 😊<br><br>
        Untuk informasi lebih detail, Anda bisa:<br>
        • Hubungi <a href="https://wa.me/6281296163263" target="_blank" style="color: #667eea; font-weight: 600;">WhatsApp</a> kami<br>
        • Email ke layanan@melasasyariah.co.id<br><br>
        Tim kami siap membantu Anda! 💪`;
    }
  }

  // Handle quick reply click
  document.querySelectorAll(".quick-reply").forEach((button) => {
    button.addEventListener("click", function () {
      const message = this.dataset.message;

      // Add user message
      addUserMessage(message);

      // Get and add bot response
      const response = getBotResponse(message);
      addBotMessage(response);
    });
  });

  // Handle send button
  if (sendBtn) {
    sendBtn.addEventListener("click", () => {
      const message = chatInput.value.trim();
      if (message) {
        addUserMessage(message);
        const response = getBotResponse(message);
        addBotMessage(response);
      }
    });
  }

  // Handle enter key
  if (chatInput) {
    chatInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        const message = chatInput.value.trim();
        if (message) {
          addUserMessage(message);
          const response = getBotResponse(message);
          addBotMessage(response);
        }
      }
    });
  }

  // Click notification to open chat
  if (chatNotification) {
    chatNotification.addEventListener("click", () => {
      chatNotification.classList.remove("show");
      if (!chatWindow.classList.contains("active")) {
        chatBubble.click();
      }
    });
  }

  // Add welcome sound effect (optional)
  function playNotificationSound() {
    // You can add a subtle notification sound here
    // const audio = new Audio('notification.mp3');
    // audio.play();
  }
})();
