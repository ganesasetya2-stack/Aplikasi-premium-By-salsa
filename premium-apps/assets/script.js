// ===== DATA PRODUK ASLI (TIDAK DIUBAH) =====
      const products = [
        {
          id: 1,
          category: "streaming",
          name: "Netflix Premium",
          icon: "🎬",
          plans: [
            { duration: "7 hari", price: "Rp 16.000" },
            { duration: "1 bulan 1 user", price: "Rp 42.000" },
            { duration: "1 bulan 2 user", price: "Rp 30.000" },
            { duration: "3 bulan 1 user", price: "Rp 110.000" },
            { duration: "1 bulan 2 device", price: "Rp 60.000" },
            { duration: "Private", price: "Rp 175.000" },
          ],
        },
        {
          id: 2,
          category: "streaming",
          name: "Disney+",
          icon: "🏰",
          plans: [
            { duration: "1 Hari", price: "Rp 7.000" },
            { duration: "3 Hari", price: "Rp 11.000" },
            { duration: "7 Hari", price: "Rp 18.000" },
            { duration: "1 Bulan 6 user Plan Prem", price: "Rp 31.000" },
            { duration: "1 Bulan 5 user Plan Prem", price: "Rp 36.000" },
            { duration: "1 Bulan 4 user Plan Prem", price: "Rp 44.000" },
            { duration: "1 Bulan 3 user Plan Prem", price: "Rp 55.000" },
            { duration: "1 Bulan 2 user Plan Basic", price: "Rp 50.000" },
            { duration: "1 Bulan 1 user Plan Basic", price: "Rp 85.000" },
            { duration: "Private 1 Bulan", price: "Rp 147.000" },
          ],
        },
        {
          id: 3,
          category: "streaming",
          name: "Amazon Prime",
          icon: "📦",
          plans: [
            { duration: "1 Bulan Private", price: "Rp 27.000" },
            { duration: "1 Bulan Sharing", price: "Rp 13.000" },
          ],
        },
        {
          id: 4,
          category: "streaming",
          name: "Vidio",
          icon: "📺",
          plans: [
            {
              duration: "1 Bulan 2 user Sharing All Device",
              price: "Rp 30.000",
            },
            {
              duration: "1 Bulan 2 user Private All Device",
              price: "Rp 50.000",
            },
            { duration: "1 Bulan 2 user Sharing Only HP", price: "Rp 23.000" },
            { duration: "1 Bulan 2 user Private Only HP", price: "Rp 37.000" },
            { duration: "1 Bulan Pildun Only", price: "Rp 58.000" },
            { duration: "1 Bulan Platinum", price: "Rp 63.000" },
          ],
        },
        {
          id: 5,
          category: "streaming",
          name: "VIU",
          icon: "🎭",
          plans: [
            { duration: "1 Bulan", price: "Rp 9.000" },
            { duration: "2 Bulan", price: "Rp 13.000" },
            { duration: "3 Bulan", price: "Rp 18.000" },
            { duration: "6 Bulan", price: "Rp 23.000" },
            { duration: "1 Tahun", price: "Rp 29.000" },
          ],
        },
        {
          id: 6,
          category: "streaming",
          name: "WeTV",
          icon: "📱",
          plans: [
            { duration: "1 Bulan 3 user", price: "Rp 20.000" },
            { duration: "1 Bulan 2 user", price: "Rp 13.000" },
            { duration: "3 Bulan", price: "Rp 40.000" },
            { duration: "Private 1 Bulan", price: "Rp 40.000" },
          ],
        },
        {
          id: 7,
          category: "streaming",
          name: "IQIYI",
          icon: "🎥",
          plans: [
            { duration: "Sharing 1 Bulan", price: "Rp 15.000" },
            { duration: "Sharing 3 Bulan", price: "Rp 35.000" },
            { duration: "Sharing 1 Tahun", price: "Rp 43.000" },
            { duration: "Private 1 Bulan", price: "Rp 35.000" },
          ],
        },
        {
          id: 8,
          category: "streaming",
          name: "Youku",
          icon: "🎞",
          plans: [
            { duration: "Sharing 1 Bulan", price: "Rp 12.000" },
            { duration: "Sharing 3 Bulan", price: "Rp 22.000" },
            { duration: "Sharing 1 Tahun", price: "Rp 30.000" },
          ],
        },
        {
          id: 9,
          category: "streaming",
          name: "Loklok",
          icon: "📹",
          plans: [
            { duration: "Sharing 1 Bulan", price: "Rp 12.000" },
            { duration: "Sharing 3 Bulan", price: "Rp 22.000" },
          ],
        },
        {
          id: 10,
          category: "streaming",
          name: "Ifflix",
          icon: "📺",
          plans: [
            { duration: "Akses", price: "Hubungi Admin" },
            { duration: "1 Tahun", price: "Rp 35.000" },
          ],
        },
        {
          id: 11,
          category: "streaming",
          name: "HBO GO",
          icon: "🎭",
          plans: [
            { duration: "Sharing 1 Bulan", price: "Rp 15.000" },
            { duration: "Sharing 3 Bulan", price: "Rp 40.000" },
            { duration: "Private 1 Bulan", price: "Rp 45.000" },
          ],
        },
        {
          id: 12,
          category: "music",
          name: "Spotify",
          icon: "🎵",
          plans: [
            { duration: "1 Bulan Garansi", price: "Rp 25.000" },
            { duration: "1 Bulan No Garansi", price: "Rp 18.000" },
            { duration: "3 Bulan Garansi", price: "Rp 65.000" },
            { duration: "3 Bulan No Garansi", price: "Rp 45.000" },
            { duration: "1 Tahun Garansi", price: "Rp 180.000" },
          ],
        },
        {
          id: 13,
          category: "music",
          name: "Apple Music",
          icon: "🎧",
          plans: [
            { duration: "1 Bulan", price: "Rp 22.000" },
            { duration: "1 Bulan Via iMessage", price: "Rp 25.000" },
          ],
        },
        {
          id: 14,
          category: "music",
          name: "YouTube Premium",
          icon: "📺",
          plans: [
            { duration: "Individual 1 Bulan", price: "Rp 15.000" },
            { duration: "Family 1 Bulan", price: "Rp 12.000" },
            { duration: "Family 2 Bulan", price: "Rp 17.000" },
            { duration: "Individual 3 Bulan No Garansi", price: "Rp 30.000" },
            { duration: "Individual 3 Bulan Garansi", price: "Rp 40.000" },
          ],
        },
        {
          id: 15,
          category: "music",
          name: "Resso",
          icon: "🎵",
          plans: [
            { duration: "Akses", price: "Hubungi Admin" },
            { duration: "1 Bulan", price: "Rp 15.000" },
          ],
        },
        {
          id: 16,
          category: "creative",
          name: "Canva Pro",
          icon: "🎨",
          plans: [
            { duration: "1 Bulan", price: "Rp 9.000" },
            { duration: "2 Bulan", price: "Rp 14.000" },
            { duration: "3 Bulan", price: "Rp 19.000" },
            { duration: "6 Bulan", price: "Rp 23.000" },
            { duration: "1 Tahun", price: "Rp 29.000" },
            { duration: "Lifetime", price: "Rp 35.000" },
          ],
        },
        {
          id: 17,
          category: "creative",
          name: "Capcut Pro",
          icon: "✂",
          plans: [
            { duration: "Sharing 7 Hari", price: "Rp 10.000" },
            { duration: "Sharing 1 Bulan (HP)", price: "Rp 20.000" },
            { duration: "Sharing 1 Bulan (PC)", price: "Rp 30.000" },
            { duration: "Pro 1 Tahun", price: "Rp 40.000" },
            { duration: "Private 7 Hari", price: "Rp 15.000" },
            { duration: "Private 1 Bulan", price: "Rp 40.000" },
          ],
        },
        {
          id: 18,
          category: "creative",
          name: "Bstation",
          icon: "📺",
          plans: [
            { duration: "1 Bulan", price: "Rp 12.000" },
            { duration: "1 Tahun", price: "Rp 30.000" },
          ],
        },
        {
          id: 19,
          category: "creative",
          name: "Picsart",
          icon: "🖼",
          plans: [
            { duration: "Sharing 1 Bulan", price: "Rp 12.000" },
            { duration: "Sharing 3 Bulan", price: "Rp 23.000" },
            { duration: "Private 1 Bulan", price: "Rp 20.000" },
            { duration: "Private 3 Bulan", price: "Rp 35.000" },
          ],
        },
        {
          id: 20,
          category: "creative",
          name: "Lightroom",
          icon: "📸",
          plans: [{ duration: "1 Tahun", price: "Rp 35.000" }],
        },
        {
          id: 21,
          category: "creative",
          name: "VSCO X",
          icon: "🌅",
          plans: [{ duration: "1 Tahun", price: "Rp 35.000" }],
        },
        {
          id: 22,
          category: "creative",
          name: "Unfold",
          icon: "📸",
          plans: [{ duration: "1 Tahun", price: "Hubungi Admin" }],
        },
        {
          id: 23,
          category: "creative",
          name: "Tezza",
          icon: "🎨",
          plans: [{ duration: "1 Tahun", price: "Rp 35.000" }],
        },
        {
          id: 24,
          category: "tools",
          name: "Grammarly",
          icon: "✍",
          plans: [
            { duration: "1 Bulan", price: "Rp 15.000" },
            { duration: "3 Bulan", price: "Rp 35.000" },
            { duration: "1 Tahun", price: "Rp 85.000" },
          ],
        },
        {
          id: 25,
          category: "tools",
          name: "ChatGPT",
          icon: "🤖",
          plans: [
            { duration: "Sharing 1 Bulan", price: "Hubungi Admin" },
            { duration: "Private 1 Bulan", price: "Hubungi Admin" },
          ],
        },
        {
          id: 26,
          category: "tools",
          name: "Get Contact",
          icon: "📞",
          plans: [{ duration: "1 Bulan", price: "Hubungi Admin" }],
        },
        {
          id: 27,
          category: "tools",
          name: "Cek Turnitin",
          icon: "📝",
          plans: [{ duration: "Per Cek", price: "Rp 2.500" }],
        },
        {
          id: 28,
          category: "other",
          name: "Wattpad",
          icon: "📖",
          plans: [
            { duration: "1 Bulan", price: "Rp 15.000" },
            { duration: "1 Tahun", price: "Rp 35.000" },
          ],
        },
        {
          id: 29,
          category: "other",
          name: "Scribd",
          icon: "📚",
          plans: [{ duration: "Sharing 1 Bulan", price: "Rp 10.000" }],
        },
        {
          id: 30,
          category: "other",
          name: "Dazzcam",
          icon: "📷",
          plans: [
            { duration: "Akses", price: "Rp 35.000" },
            { duration: "1 Tahun", price: "Rp 35.000" },
          ],
        },
        {
          id: 31,
          category: "other",
          name: "Polarr",
          icon: "🎨",
          plans: [{ duration: "1 Tahun", price: "Rp 35.000" }],
        },
        {
          id: 32,
          category: "other",
          name: "Remini",
          icon: "✨",
          plans: [
            { duration: "Share Web 1 Bulan", price: "Rp 15.000" },
            { duration: "Private 1 Bulan", price: "Rp 40.000" },
          ],
        },
        {
          id: 33,
          category: "other",
          name: "Oldroll Android",
          icon: "📱",
          plans: [
            { duration: "Akses", price: "Hubungi Admin" },
            { duration: "Lifetime", price: "Rp 25.000" },
          ],
        },
        {
          id: 34,
          category: "other",
          name: "Papa's To Go 16 Games (iOS)",
          icon: "🎮",
          plans: [{ duration: "Paket", price: "Rp 48.000" }],
        },
      ];
      // ===== STATE MANAGEMENT =====
      let selectedProduct = null;
      let selectedPlan = null;

      // ===== FUNGSI UTAMA =====
      function showPage(pageId) {
        // Hide all pages
        document.querySelectorAll(".page").forEach((page) => {
          page.classList.remove("active");
        });

        // Show selected page
        document.getElementById(pageId + "-page").classList.add("active");

        // Update active nav link
        document.querySelectorAll(".nav-link").forEach((link) => {
          link.classList.remove("active");
        });
        event.target.classList.add("active");

        // Close mobile menu if open
        document.getElementById("navMenu").classList.remove("active");

        // Scroll to top
        window.scrollTo(0, 0);

        // Load specific content
        if (pageId === "catalog") {
          renderCatalogProducts();
        } else if (pageId === "home") {
          renderFeaturedProducts();
        }
      }

      // Render Featured Products (produk unggulan yang diminta)
      function renderFeaturedProducts() {
        const container = document.getElementById("featuredProducts");
        const featuredProductNames = [
          "Netflix Premium",
          "Canva Pro",
          "Capcut Pro",
          "Vidio",
          "VIU",
          "WeTV",
        ];
        const featuredProducts = products.filter((product) =>
          featuredProductNames.includes(product.name)
        );

        container.innerHTML = featuredProducts
          .map(
            (product) => `
                <div class="product-card animate-fade-in">
                    <div class="product-image">
                        ${product.icon}
                    </div>
                    <div class="product-content">
                        <h3 class="product-title">${product.name}</h3>
                        <span class="product-category">${product.category.toUpperCase()}</span>
                        <div class="product-price">${
                          product.plans[0].price
                        }</div>
                        <ul class="product-features">
                            ${product.plans
                              .slice(0, 3)
                              .map(
                                (plan) => `
                                <li><i class="fas fa-check"></i> ${plan.duration}</li>
                            `
                              )
                              .join("")}
                        </ul>
                        <button class="btn btn-primary" style="width: 100%;" onclick="showPage('catalog')">
                            <i class="fas fa-eye"></i> Lihat Detail
                        </button>
                    </div>
                </div>
            `
          )
          .join("");
      }

      // Render All Catalog Products
      function renderCatalogProducts(category = "all") {
        const container = document.getElementById("catalogProducts");
        const filteredProducts =
          category === "all"
            ? products
            : products.filter((product) => product.category === category);

        container.innerHTML = filteredProducts
          .map(
            (product) => `
                <div class="card" data-category="${product.category}">
                    <div class="card-header">
                        <h3>${product.icon} ${product.name}</h3>
                    </div>
                    <div class="card-content">
                        <ul>
                        ${product.plans
                          .map(
                            (plan) => `
                        <li onclick="showOrderModal('${product.name}', '${plan.duration}', '${plan.price}')">
                        <span class="duration">${plan.duration}</span>
                        <span class="price">${plan.price}</span>
                        </li>
                        `
                          )
                          .join("")}
                        </ul>
                        <button class="order-btn" onclick="showOrderModal('${
                          product.name
                        }', 'Pilihan Custom', 'Hubungi Admin')">
                        <i class="fas fa-shopping-cart"></i> Order ${
                          product.name
                        }
                        </button>
                    </div>
                </div>
            `
          )
          .join("");
      }

      // ===== MODAL FUNCTIONS =====
      function showOrderModal(productName, duration, price) {
        selectedProduct = productName;
        selectedPlan = { duration, price };

        document.getElementById("modalProductName").textContent = productName;
        document.getElementById("modalProductDuration").textContent = duration;
        document.getElementById("modalProductPrice").textContent = price;

        // Reset form
        document.getElementById("orderForm").reset();

        openModal("orderModal");
      }

      function showOrderGuideModal() {
        openModal("orderGuideModal");
      }

      function openModal(modalId) {
        document.getElementById(modalId).classList.add("active");
        document.body.style.overflow = "hidden";
      }

      function closeModal(modalId) {
        document.getElementById(modalId).classList.remove("active");
        document.body.style.overflow = "auto";
      }

      // ===== ORDER PROCESSING =====
      document
        .getElementById("orderForm")
        .addEventListener("submit", function (e) {
          e.preventDefault();

          const customerName = document.getElementById("customerName").value;
          const customerPhone = document.getElementById("customerPhone").value;

          // Format pesan untuk WhatsApp
          const message = `Halo Salsa, saya ingin memesan:

📦 *PRODUK:* ${selectedProduct}
⏰ *DURASI:* ${selectedPlan.duration}
💰 *HARGA:* ${selectedPlan.price}

👤 *DATA PELANGGAN:*
Nama: ${customerName}
WhatsApp: ${customerPhone}

💳 *METODE BAYAR:* QRIS

Saya sudah siap untuk melakukan pembayaran via QRIS. Terima kasih!`;

          // Encode message for URL
          const encodedMessage = encodeURIComponent(message);
          const whatsappUrl = `https://wa.me/628176323491?text=${encodedMessage}`;

          // Open WhatsApp
          window.open(whatsappUrl, "_blank");

          // Close modal
          closeModal("orderModal");

          // Show success message
          alert("Pesanan berhasil! Silakan lanjutkan pembayaran di WhatsApp.");
        });

      // ===== FILTER & SEARCH FUNCTIONALITY =====
      function setupFilters() {
        document.querySelectorAll(".filter-btn").forEach((button) => {
          button.addEventListener("click", () => {
            document
              .querySelectorAll(".filter-btn")
              .forEach((btn) => btn.classList.remove("active"));
            button.classList.add("active");
            renderCatalogProducts(button.dataset.category);
          });
        });
      }

      function setupSearch() {
        const searchInput = document.getElementById("searchInput");

        searchInput.addEventListener("input", function () {
          const query = this.value.toLowerCase();
          const filteredProducts = products.filter(
            (product) =>
              product.name.toLowerCase().includes(query) ||
              product.category.toLowerCase().includes(query) ||
              product.plans.some(
                (plan) =>
                  plan.duration.toLowerCase().includes(query) ||
                  plan.price.toLowerCase().includes(query)
              )
          );

          const container = document.getElementById("catalogProducts");
          container.innerHTML = filteredProducts
            .map(
              (product) => `
                    <div class="card" data-category="${product.category}">
                        <div class="card-header">
                            <h3>${product.icon} ${product.name}</h3>
                        </div>
                        <div class="card-content">
                            <ul>
                            ${product.plans
                              .map(
                                (plan) => `
                            <li onclick="showOrderModal('${product.name}', '${plan.duration}', '${plan.price}')">
                            <span class="duration">${plan.duration}</span>
                            <span class="price">${plan.price}</span>
                            </li>
                            `
                              )
                              .join("")}
                            </ul>
                            <button class="order-btn" onclick="showOrderModal('${
                              product.name
                            }', 'Pilihan Custom', 'Hubungi Admin')">
                            <i class="fas fa-shopping-cart"></i> Order ${
                              product.name
                            }
                            </button>
                        </div>
                    </div>
                `
            )
            .join("");
        });
      }

      // ===== MOBILE NAVIGATION =====
      function setupMobileNavigation() {
        const mobileMenuToggle = document.getElementById("mobileMenuToggle");
        const navMenu = document.getElementById("navMenu");

        mobileMenuToggle.addEventListener("click", () => {
          navMenu.classList.toggle("active");
        });

        // Close menu when clicking on a link
        document.querySelectorAll(".nav-link").forEach((link) => {
          link.addEventListener("click", () => {
            navMenu.classList.remove("active");
          });
        });

        // Close menu when clicking outside
        document.addEventListener("click", (e) => {
          if (
            !navMenu.contains(e.target) &&
            !mobileMenuToggle.contains(e.target)
          ) {
            navMenu.classList.remove("active");
          }
        });
      }

      // ===== INITIALIZATION =====
      document.addEventListener("DOMContentLoaded", function () {
        renderFeaturedProducts();
        renderCatalogProducts();
        setupFilters();
        setupSearch();
        setupMobileNavigation();

        // Add scroll animations
        const observerOptions = {
          threshold: 0.1,
          rootMargin: "0px 0px -50px 0px",
        };

        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("animate-fade-in");
            }
          });
        }, observerOptions);

        document.querySelectorAll(".product-card, .card").forEach((el) => {
          observer.observe(el);
        });

        // Close modal when clicking outside
        document.querySelectorAll(".modal-overlay").forEach((overlay) => {
          overlay.addEventListener("click", function (e) {
            if (e.target === this) {
              closeModal(this.id);
            }
          });
        });
      });

      // Placeholder functions for additional modals
      function showPaymentMethodsModal() {
        alert("Metode pembayaran: QRIS (Satu-satunya metode yang tersedia)");
      }

      function showFAQModal() {
        alert("Fitur FAQ akan segera hadir!");
      }