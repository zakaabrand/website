/* ═══════════════════════════════════════════════════════════════
   Zakaa Brand — app.js
   Reads PRODUCTS and SITE_CONFIG from config.js and dynamically
   builds the product grid. Also handles:
     • Description expand / collapse
     • Image lightbox (click to view full size)
   ═══════════════════════════════════════════════════════════════ */

(function () {
  "use strict";

  // ─── Helpers ───────────────────────────────────────────────
  function egpPrice(product) {
    if (product.priceEGP !== null && product.priceEGP !== undefined) {
      return product.priceEGP;
    }
    return product.priceUSD * SITE_CONFIG.currency.dollarRate;
  }

  function formatEGP(amount) {
    return amount.toLocaleString("ar-EG") + " " + SITE_CONFIG.currency.egpSymbol;
  }

  function formatUSD(amount) {
    return SITE_CONFIG.currency.usdSymbol + amount.toFixed(2);
  }

  function badgeHTML(badge) {
    if (!badge) return "";
    return `<span class="product-badge ${badge}">${badge === "new" ? "New" : "Popular"}</span>`;
  }

  function skillTagsHTML(skills) {
    if (!skills || skills.length === 0) return "";
    return (
      '<div class="desc-skills">' +
      skills.map((s) => `<span class="desc-skill-tag">${s}</span>`).join("") +
      "</div>"
    );
  }

  function metaHTML(product) {
    const parts = [];
    if (product.players)  parts.push(`👥 ${product.players}`);
    if (product.playTime) parts.push(`⏱ ${product.playTime}`);
    if (parts.length === 0) return "";
    return (
      '<div class="desc-meta">' +
      parts.map((p) => `<span>${p}</span>`).join("") +
      "</div>"
    );
  }

  // ─── Build a single product card ───────────────────────────
  function buildCard(product) {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <div class="product-img" data-src="${product.imagePath}" data-name="${product.name}" role="button" tabindex="0" aria-label="عرض صورة ${product.name} بالحجم الكامل">
        <img src="${product.imagePath}" alt="${product.name}" loading="lazy" />
        ${badgeHTML(product.badge)}
      </div>

      <div class="product-info">
        <div class="product-category">${product.category}</div>
        <div class="product-name">${product.name}</div>

        <div class="product-price">
          <span class="price-usd">${formatUSD(product.priceUSD)}</span>
          <span class="price-egp">${formatEGP(egpPrice(product))}</span>
        </div>

        <div class="product-age">
          <span class="product-age-badge">${product.ageLabel}</span>
        </div>

        <button class="product-desc-toggle" aria-expanded="false" aria-controls="desc-${product.id}">
          <span class="toggle-icon">▾</span> التفاصيل
        </button>

        <div class="product-description" id="desc-${product.id}" aria-hidden="true">
          <p>${product.description}</p>
          ${skillTagsHTML(product.skills)}
          ${metaHTML(product)}
        </div>
      </div>
    `;
    return card;
  }

  // ─── Render all products ────────────────────────────────────
  function renderProducts() {
    const grid = document.getElementById("products-grid");
    if (!grid) return;

    const list = SITE_CONFIG.showOutOfStock
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.inStock !== false);

    if (list.length === 0) {
      grid.innerHTML = '<p style="text-align:center;color:var(--text-muted);padding:40px 0;">لا توجد منتجات حالياً.</p>';
      return;
    }

    const fragment = document.createDocumentFragment();
    list.forEach((product) => fragment.appendChild(buildCard(product)));
    grid.appendChild(fragment);
  }

  // ─── Description expand / collapse ─────────────────────────
  function initDescriptionToggles() {
    document.addEventListener("click", function (e) {
      const btn = e.target.closest(".product-desc-toggle");
      if (!btn) return;

      const descId = btn.getAttribute("aria-controls");
      const desc = document.getElementById(descId);
      if (!desc) return;

      const isOpen = btn.classList.contains("open");

      if (isOpen) {
        btn.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
        desc.classList.remove("open");
        desc.setAttribute("aria-hidden", "true");
      } else {
        btn.classList.add("open");
        btn.setAttribute("aria-expanded", "true");
        desc.classList.add("open");
        desc.setAttribute("aria-hidden", "false");
      }
    });
  }

  // ─── Lightbox ───────────────────────────────────────────────
  let lightbox = null;
  let lightboxImg = null;
  let lightboxCaption = null;

  function createLightbox() {
    lightbox = document.createElement("div");
    lightbox.className = "lightbox-overlay";
    lightbox.setAttribute("role", "dialog");
    lightbox.setAttribute("aria-modal", "true");
    lightbox.setAttribute("aria-label", "عرض الصورة");

    lightbox.innerHTML = `
      <div class="lightbox-content">
        <button class="lightbox-close" aria-label="إغلاق">✕</button>
        <img src="" alt="" />
        <p class="lightbox-caption"></p>
      </div>
    `;

    document.body.appendChild(lightbox);

    lightboxImg     = lightbox.querySelector("img");
    lightboxCaption = lightbox.querySelector(".lightbox-caption");

    // Close on overlay click (outside content)
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) closeLightbox();
    });

    // Close button
    lightbox.querySelector(".lightbox-close").addEventListener("click", closeLightbox);

    // Close on Escape key
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && lightbox.classList.contains("active")) {
        closeLightbox();
      }
    });
  }

  function openLightbox(src, name) {
    lightboxImg.src = src;
    lightboxImg.alt = name;
    lightboxCaption.textContent = name;
    lightbox.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    lightbox.classList.remove("active");
    document.body.style.overflow = "";
    // delay clearing src so closing animation plays cleanly
    setTimeout(() => { lightboxImg.src = ""; }, 300);
  }

  function initLightbox() {
    createLightbox();

    document.addEventListener("click", function (e) {
      const imgWrapper = e.target.closest(".product-img");
      if (!imgWrapper) return;
      const src  = imgWrapper.getAttribute("data-src");
      const name = imgWrapper.getAttribute("data-name");
      if (src) openLightbox(src, name);
    });

    // Keyboard accessibility — Enter / Space on focusable image wrapper
    document.addEventListener("keydown", function (e) {
      if (e.key !== "Enter" && e.key !== " ") return;
      const imgWrapper = e.target.closest(".product-img[tabindex]");
      if (!imgWrapper) return;
      e.preventDefault();
      const src  = imgWrapper.getAttribute("data-src");
      const name = imgWrapper.getAttribute("data-name");
      if (src) openLightbox(src, name);
    });
  }

  // ─── Init ───────────────────────────────────────────────────
  document.addEventListener("DOMContentLoaded", function () {
    renderProducts();
    initDescriptionToggles();
    initLightbox();
  });
})();
