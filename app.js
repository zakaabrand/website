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
  function usdPrice(product) {
    // Check if explicit USD price exists
    if (product.priceUSD !== null && product.priceUSD !== undefined) {
      return product.priceUSD;
    }
    // Fallback to conversion
    const rate = SITE_CONFIG.currency.dollarRate || 1; // Prevent division by zero
    return product.priceEGP / rate;
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
    if (product.players) parts.push(`👥 ${product.players}`);
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
          <span class="price-usd">${formatUSD(usdPrice(product))}</span>
          <span class="price-egp">${formatEGP(product.priceEGP)}</span>
        </div>

        <div class="product-age">
          <span class="product-age-badge">${product.ageLabel}</span>
        </div>

        <div class="product-actions" style="display: flex; gap: 10px; margin-top: 15px;">
          <button class="product-desc-toggle" style="flex: 1; margin-top: 0;" aria-expanded="false" aria-controls="desc-${product.id}">
            <span class="toggle-icon">▾</span> التفاصيل
          </button>
          
          <a href="https://wa.me/${SITE_CONFIG.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('أريد طلب لعبة ') + encodeURIComponent(product.name) + '%0A%0A' + encodeURIComponent('الكمية المطلوبة: ')}" target="_blank" class="product-order-btn" style="flex: 1; background-color: #25D366; color: white; text-align: center; padding: 10px; border-radius: 8px; text-decoration: none; font-weight: bold; display: flex; align-items: center; justify-content: center; gap: 5px; font-size: 0.95rem; box-sizing: border-box; font-family: inherit;">
            <svg style="width: 18px; height: 18px;" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.888-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.297-1.04 1.016-1.04 2.479 0 1.463 1.065 2.876 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
            اطلب الآن
          </a>
        </div>

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

    lightboxImg = lightbox.querySelector("img");
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
      const src = imgWrapper.getAttribute("data-src");
      const name = imgWrapper.getAttribute("data-name");
      if (src) openLightbox(src, name);
    });

    // Keyboard accessibility — Enter / Space on focusable image wrapper
    document.addEventListener("keydown", function (e) {
      if (e.key !== "Enter" && e.key !== " ") return;
      const imgWrapper = e.target.closest(".product-img[tabindex]");
      if (!imgWrapper) return;
      e.preventDefault();
      const src = imgWrapper.getAttribute("data-src");
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
