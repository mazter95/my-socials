/**
 * =============================================================================
 * ZENX ESPORTS × MAZTRAE / IMCUTE — OFFICIAL HUB CONFIGURATION
 * =============================================================================
 * All official links, channels, and esports information are centralized here.
 */
const SITE_CONFIG = {
  // Dual Identity
  editorName: "Maztrae",
  gamingName: "imCute",
  combinedTitle: "Maztrae // imCute",
  
  tagline: "Esports Competitor & VFX Video Editor",
  bio: "Self-taught visual artist & competitive gamer specializing in high-energy AMVs, cinematic gameplay montages, motion design, and tournament competition under ZenX Esports.",

  // Esports Org
  org: {
    name: "ZenX Esports",
    tagline: "Competitive Gaming Organization",
    recruitmentStatus: "RECRUITING ACTIVE PLAYERS",
    discordServer: "https://discord.gg/8CDZR4Md2M",
    instagram: "https://www.instagram.com/zenx.0fficial/",
    handle: "@zenx.0fficial"
  },

  // Personal Discord ID
  personalDiscord: {
    tag: "maztr_ae",
    display: "maztr_ae",
    note: "Direct inquiries & private chat"
  },

  // Dual YouTube Channels
  youtube: {
    editing: {
      name: "Maztrae",
      handle: "@maztrae",
      url: "https://youtube.com/@maztrae?si=mIlxpj7yR8b9DYZf",
      focus: "AMVs, Montages & Motion Graphics (Mographs)",
      category: "VFX & POST-PRODUCTION",
      accent: "#00f0ff"
    },
    gaming: {
      name: "imCute",
      handle: "@itzrealcute",
      url: "https://youtube.com/@itzrealcute?si=TwHKW9-2bJaWd8RN",
      focus: "Valorant, Story Games & Live Streams",
      category: "COMPETITIVE & BROADCASTS",
      accent: "#d2ff00"
    }
  },

  // Instagram Accounts
  instagram: {
    editing: {
      name: "Maztrae AMV",
      handle: "@maztr_amv",
      url: "https://www.instagram.com/maztr_amv/",
      description: "Edits, motion graphics previews & WIP reels"
    },
    org: {
      name: "ZenX Esports Official",
      handle: "@zenx.0fficial",
      url: "https://www.instagram.com/zenx.0fficial/",
      description: "Official team announcements, roster updates & tournaments"
    }
  },

  // Inquiries & Commissions
  contact: {
    email: "mazter95amv@gmail.com",
    commissionStatus: "COMMISSIONS OPEN // VFX & EDITS",
    responseTime: "< 24 Hours Response"
  }
};

/**
 * =============================================================================
 * CORE APPLICATION CONTROLLER
 * =============================================================================
 */
document.addEventListener("DOMContentLoaded", () => {
  initDecodeScan();
  initDualIdentitySwitch();
  initFilterTabs();
  initClipboardSystem();
  initAnimeAnimations();
  initSpotlightTracking();
  initHeaderScroll();
});

/**
 * 0. Tactical Cyber Decode Scan (One-time per session)
 */
function initDecodeScan() {
  const overlay = document.getElementById("decode-scanner");
  if (!overlay) return;

  const hasScanned = sessionStorage.getItem("zenx_decode_scanned");
  if (hasScanned) {
    overlay.style.display = "none";
    return;
  }

  sessionStorage.setItem("zenx_decode_scanned", "true");

  const streamEl = document.getElementById("scanner-code-stream");
  const fillEl = document.getElementById("scanner-progress-fill");
  const pctEl = document.getElementById("scanner-pct-text");
  const statusEl = document.getElementById("scanner-status-text");

  const logSteps = [
    "SYSTEM INIT // LOADING HARDWARE PROTOCOLS...",
    "ENCRYPTING STREAM: 0x7E_ZENX_ORCHESTRATOR...",
    "DECODING CREATOR REPERTORY: MAZTRAE // IMCUTE...",
    "SYNCHRONIZING AUDIO-VISUAL COMMS MATRIX...",
    "BIOMETRIC HANDSHAKE CONFIRMED [STATUS 200 OK]"
  ];

  let progress = 0;
  const totalTime = 1200; // 1.2 seconds
  const tickRate = 24;
  const increment = 100 / (totalTime / tickRate);

  const interval = setInterval(() => {
    progress += increment;
    if (progress > 100) progress = 100;

    if (fillEl) fillEl.style.width = `${progress}%`;
    if (pctEl) pctEl.textContent = `${Math.floor(progress)}%`;

    const stepIdx = Math.min(Math.floor((progress / 100) * logSteps.length), logSteps.length - 1);
    if (streamEl) streamEl.textContent = logSteps[stepIdx];

    if (progress >= 100) {
      clearInterval(interval);
      if (statusEl) statusEl.textContent = "AUTHENTICATION COMPLETE // ACCESS GRANTED";

      // Trigger title scramble decipher
      scrambleHeroTitle();

      setTimeout(() => {
        overlay.classList.add("scan-done");
        setTimeout(() => {
          overlay.style.display = "none";
        }, 500);
      }, 250);
    }
  }, tickRate);

  // Allow manual replay by clicking the status badge
  const statusBadge = document.getElementById("active-alias-badge");
  if (statusBadge) {
    statusBadge.style.cursor = "pointer";
    statusBadge.setAttribute("title", "Click to replay biometric decode scan");
    statusBadge.addEventListener("click", () => {
      sessionStorage.removeItem("zenx_decode_scanned");
      overlay.style.display = "flex";
      overlay.classList.remove("scan-done");
      initDecodeScan();
    });
  }
}

/**
 * Hero Title Scramble Decipher
 */
function scrambleHeroTitle() {
  const part1 = document.querySelector(".title-part-one");
  const part2 = document.querySelector(".title-part-two");
  if (!part1) return;

  const target1 = "Maztrae";
  const target2 = "// imCute";
  const glyphs = "01#$X_!<>[]*^/&%?";

  function runScramble(el, text, delay = 0) {
    setTimeout(() => {
      let iteration = 0;
      const maxIter = text.length * 3;
      const timer = setInterval(() => {
        el.textContent = text
          .split("")
          .map((letter, index) => {
            if (index < iteration / 3) {
              return text[index];
            }
            return glyphs[Math.floor(Math.random() * glyphs.length)];
          })
          .join("");

        iteration++;
        if (iteration > maxIter) {
          clearInterval(timer);
          el.textContent = text;
        }
      }, 30);
    }, delay);
  }

  runScramble(part1, target1, 0);
  if (part2) runScramble(part2, target2, 180);
}

/**
 * 1. Dual Identity Hover / Toggle
 */
function initDualIdentitySwitch() {
  const switchButtons = document.querySelectorAll(".persona-switch-btn");
  const heroBadge = document.getElementById("active-alias-badge");
  const heroRole = document.getElementById("hero-dynamic-role");

  if (!switchButtons.length) return;

  switchButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      switchButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const persona = btn.dataset.persona;
      if (persona === "editing") {
        if (heroBadge) heroBadge.textContent = "DIRECTOR // VFX ARTIST";
        if (heroRole) heroRole.textContent = "Maztrae";
        filterGrid("editing");
      } else if (persona === "gaming") {
        if (heroBadge) heroBadge.textContent = "ZENX ESPORTS // ATHLETE";
        if (heroRole) heroRole.textContent = "imCute";
        filterGrid("gaming");
      } else {
        if (heroBadge) heroBadge.textContent = "DUAL DISCIPLINE CREATOR";
        if (heroRole) heroRole.textContent = "Maztrae × imCute";
        filterGrid("all");
      }
    });
  });
}

/**
 * 2. Discipline Filter Tabs
 */
function initFilterTabs() {
  const filterPills = document.querySelectorAll(".filter-pill");
  filterPills.forEach(pill => {
    pill.addEventListener("click", () => {
      filterPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      const target = pill.dataset.filter;
      filterGrid(target);
    });
  });
}

function filterGrid(category) {
  const cards = document.querySelectorAll(".showcase-card");
  cards.forEach(card => {
    const cardCat = card.dataset.category;
    if (category === "all" || cardCat === "both" || cardCat === category) {
      card.style.display = "flex";
      card.style.opacity = "0";
      card.style.transform = "translateY(16px)";
      requestAnimationFrame(() => {
        card.style.transition = "opacity 0.4s ease, transform 0.4s ease";
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      });
    } else {
      card.style.display = "none";
    }
  });
}

/**
 * 3. High-Speed Clipboard System
 */
function initClipboardSystem() {
  const copyBtns = document.querySelectorAll(".copy-action");

  copyBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const type = btn.dataset.copyType;
      let text = "";
      let label = "";

      if (type === "discord") {
        text = SITE_CONFIG.personalDiscord.tag;
        label = "Discord ID (@" + text + ")";
      } else if (type === "email") {
        text = SITE_CONFIG.contact.email;
        label = "Official Email (" + text + ")";
      }

      if (!text) return;

      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text)
          .then(() => triggerSuccessFeedback(btn, label))
          .catch(() => fallbackCopy(text, btn, label));
      } else {
        fallbackCopy(text, btn, label);
      }
    });
  });

  function fallbackCopy(text, btn, label) {
    const el = document.createElement("textarea");
    el.value = text;
    el.style.position = "fixed";
    el.style.left = "-9999px";
    document.body.appendChild(el);
    el.focus();
    el.select();
    try {
      document.execCommand("copy");
      triggerSuccessFeedback(btn, label);
    } catch {
      showTacticalToast("Copy failed, please copy manually: " + text);
    }
    document.body.removeChild(el);
  }

  function triggerSuccessFeedback(btn, label) {
    showTacticalToast("✓ Copied " + label);

    btn.classList.add("copied-active");
    const labelSpan = btn.querySelector(".btn-label");
    const originalText = labelSpan ? labelSpan.textContent : "";

    if (labelSpan) labelSpan.textContent = "COPIED!";

    setTimeout(() => {
      btn.classList.remove("copied-active");
      if (labelSpan) labelSpan.textContent = originalText;
    }, 2200);
  }
}

function showTacticalToast(msg) {
  const container = document.getElementById("toast-shelf");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "tactical-toast";
  toast.innerHTML = `
    <span class="toast-indicator"></span>
    <span class="toast-content">${escapeHtml(msg)}</span>
    <span class="toast-progress"></span>
  `;

  container.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add("visible"));

  setTimeout(() => {
    toast.classList.remove("visible");
    setTimeout(() => toast.remove(), 400);
  }, 3800);
}

/**
 * 4. Anime.js Scroll-Reveal & Entrance Animations
 */
function initAnimeAnimations() {
  // Safety check — anime.js must be loaded via CDN
  if (typeof anime === "undefined") {
    console.warn("anime.js not loaded, skipping animations");
    return;
  }

  // ── Hero entrance sequence ─────────────────────────────────────────────
  anime({
    targets: ".hero-top-strip",
    opacity: [0, 1],
    translateY: [-30, 0],
    duration: 800,
    easing: "easeOutExpo"
  });

  anime({
    targets: ".title-part-one",
    opacity: [0, 1],
    translateX: [-60, 0],
    duration: 900,
    delay: 200,
    easing: "easeOutExpo"
  });
  
  anime({
    targets: ".title-part-two",
    opacity: [0, 1],
    translateX: [60, 0],
    duration: 900,
    delay: 350,
    easing: "easeOutExpo"
  });

  anime({
    targets: ".hero-bio-statement",
    opacity: [0, 1],
    translateY: [20, 0],
    duration: 700,
    delay: 750,
    easing: "easeOutExpo"
  });

  anime({
    targets: ".telemetry-card",
    opacity: [0, 1],
    translateY: [40, 0],
    scale: [0.95, 1],
    duration: 800,
    delay: 1050,
    easing: "easeOutExpo"
  });

  // ── Scroll-triggered card reveals (Column-by-column pop up) ────────────
  const cards = Array.from(document.querySelectorAll(".showcase-card"));

  // Set initial hidden & scaled state
  cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(55px) scale(0.92)";
  });

  let pendingCards = [];
  let isFlushing = false;

  function flushCardQueue() {
    if (!pendingCards.length) {
      isFlushing = false;
      return;
    }
    isFlushing = true;

    // Sort queue by vertical row, then horizontal column (left to right)
    pendingCards.sort((a, b) => {
      const topA = a.getBoundingClientRect().top;
      const topB = b.getBoundingClientRect().top;
      if (Math.abs(topA - topB) > 40) return topA - topB;
      return a.getBoundingClientRect().left - b.getBoundingClientRect().left;
    });

    const queueToAnimate = [...pendingCards];
    pendingCards = [];

    queueToAnimate.forEach((card, idx) => {
      setTimeout(() => {
        anime({
          targets: card,
          opacity: [0, 1],
          translateY: [55, 0],
          scale: [0.92, 1],
          duration: 700,
          easing: "easeOutBack" // Tactile spring pop-up
        });
        card.classList.add("pop-in");
      }, idx * 160);
    });

    setTimeout(() => {
      isFlushing = false;
      if (pendingCards.length) flushCardQueue();
    }, queueToAnimate.length * 160 + 50);
  }

  // IntersectionObserver for column-by-column scroll pop-up
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
        pendingCards.push(entry.target);
      }
    });

    if (pendingCards.length && !isFlushing) {
      setTimeout(flushCardQueue, 40);
    }
  }, {
    threshold: 0.1,
    rootMargin: "0px 0px -40px 0px"
  });

  cards.forEach(card => observer.observe(card));

  // ── Filter section entrance ────────────────────────────────────────────
  const filterSection = document.querySelector(".filter-section");
  if (filterSection) {
    const filterObs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          anime({
            targets: ".filter-pill",
            opacity: [0, 1],
            translateY: [20, 0],
            delay: anime.stagger(80),
            duration: 600,
            easing: "easeOutCubic"
          });
          filterObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    filterObs.observe(filterSection);
  }

  // ── Footer slide-in ────────────────────────────────────────────────────
  const footer = document.querySelector(".master-footer");
  if (footer) {
    const footerObs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          anime({
            targets: ".footer-row > *",
            opacity: [0, 1],
            translateY: [30, 0],
            delay: anime.stagger(120),
            duration: 700,
            easing: "easeOutCubic"
          });
          footerObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    footerObs.observe(footer);
  }



  // ── Recruitment pulse glow ─────────────────────────────────────────────
  anime({
    targets: ".recruitment-pulse",
    opacity: [0.7, 1],
    duration: 1800,
    loop: true,
    direction: "alternate",
    easing: "easeInOutSine"
  });

  // ── Dock entrance ──────────────────────────────────────────────────────
  anime({
    targets: ".dock-node",
    opacity: [0, 1],
    translateY: [15, 0],
    delay: anime.stagger(60, { start: 300 }),
    duration: 500,
    easing: "easeOutCubic"
  });
}


/**
 * 6. Card Border Spotlight Tracking
 */
function initSpotlightTracking() {
  const cards = document.querySelectorAll(".showcase-card");
  window.addEventListener("mousemove", (e) => {
    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--cursor-x", `${x}px`);
      card.style.setProperty("--cursor-y", `${y}px`);
    });
  });
}

/**
 * 7. Header Scroll Reactions
 */
function initHeaderScroll() {
  const header = document.getElementById("master-header");
  if (!header) return;

  window.addEventListener("scroll", () => {
    const y = window.scrollY || window.pageYOffset;
    header.classList.toggle("header-scrolled", y > 30);
  }, { passive: true });
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
