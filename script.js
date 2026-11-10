import confetti from 'canvas-confetti';

/**
 * CUTE BIRTHDAY WEBSITE TEMPLATE - JAVASCRIPT
 * "EVERYTHING MEANS EVERYTHING" Live In-Place Visual Editor:
 *  - Click ANY text directly to type & edit inline
 *  - Click ANY photo directly to upload from computer or paste URL
 *  - Add & Delete Polaroids dynamically
 *  - Add & Delete Sticky Notes on the Corkboard dynamically
 *  - Change Theme Colors (Strawberry Milk, Peachy Sunset, Lavender, Mint, Honey, Sky)
 *  - Click floating stickers to swap emojis
 *  - Interactive 3-Candle Cake with puff animations, Web Audio chime & Confetti
 *  - Built-in Lo-Fi Birthday Music Synthesizer
 *  - Floating Cute Mascot with customizable dialogue
 *  - Full LocalStorage auto-save & Single-File HTML Exporter
 */

// =========================================================
// 1. DEFAULT DATA CONFIGURATION
// =========================================================

const DEFAULT_CONFIG = {
  theme: "theme-pink",
  isEditMode: false, // Default to FALSE so girlfriend sees zero edit UI!

  // Hero Section
  heroGreeting: "Happy",
  heroHighlight: "Birthday",
  heroName: "my love",
  heroSubtitleLine1: "I LOVE YOU SOOO SOOO SOOO MUCH",
  heroSubtitleLine2: "to the most pretty girl 💕",
  pillTag: "My world",
  birthdayDateText: "My 11:11 wish",
  priorityTag: "My everything",
  scrollPromptText: "scroll for sweetness",

  // Section 1: Dossier
  dossierBadge: "· no. 1 — about you ·",
  dossierHeading: "MY WORLD ",
  girlfriendFirstName: "you",
  dossierSubheading: "strictly classified, eyes only 🔒",
  daysCardLabel: "days i've loved you ~",
  manualDaysCount: "241",
  anniversaryDate: null,
  daysFooterNote: "and falling harder every single day",
  titleCardLabel: "",
  officialTitle: "Cutieee",
  treatCardLabel: "",
  favoriteTreat: "",
  snackCardLabel: "",
  snackThiefStatus: "hehe",
  dossierQuote: '"the world is a lot less heavy with you in it ~"',

  // Section 2: Scrapbook Polaroids
  scrapbookBadge: "· no. 2 — memories of us ·",
  scrapbookHeading: "a year, taped together",
  scrapbookSubheading: "straight from the camera roll 🎞️",
  polaroids: [
    {
      id: "pol-1",
      img: "images/polaroid-1.jpg",
      caption: "",
      date: "",
      tape: "tape-pattern-stripe",
      rot: "-3deg"
    },
    {
      id: "pol-2",
      img: "images/polaroid-2.jpg",
      caption: "",
      date: "",
      tape: "tape-pattern-dots",
      rot: "3.5deg"
    },
    {
      id: "pol-3",
      img: "images/polaroid-3.jpg",
      caption: "",
      date: "",
      tape: "tape-pattern-pink",
      rot: "-2.5deg"
    },
    {
      id: "pol-4",
      img: "images/polaroid-4.jpg",
      caption: "",
      date: "",
      tape: "tape-pattern-mint",
      rot: "2.8deg"
    },
    {
      id: "pol-5",
      img: "images/polaroid-5.jpg",
      caption: "",
      date: "",
      tape: "tape-pattern-stripe",
      rot: "-1.8deg"
    },
    {
      id: "pol-6",
      img: "images/polaroid-6.jpg",
      caption: "",
      date: "",
      tape: "tape-pattern-dots",
      rot: "2.2deg"
    }
  ],

  // Section 3: Cake & Wish
  cakeBadge: "· no. 3 — blow them out ·",
  cakeHeading: "three flames, one wish",
  cakeSubheading: "click each candle or blow to make a secret wish ✨",
  wishTitle: "WISH RECEIVED! 🎂",
  wishMessage: "Whatever you just wished for, I promise I will spend every single day of this year making it come true for you. Happy birthday my absolute favorite person in the galaxy!",
  wishSignature: "~ forever yours ambudiii",

  // Section 4: Corkboard Sticky Notes
  wishesBadge: "· no. 4 — wishes for you ·",
  wishesHeading: "tiny wishes for you",
  wishesSubheading: "pinned with all my heart 📌",
  stickyNotes: [
    { id: "note-1", color: "sticky-pink", pin: "pin-red", rot: "-2.5deg", text: "may every tea you drink taste like pure joy ☕" },
    { id: "note-2", color: "sticky-yellow", pin: "pin-yellow", rot: "3deg", text: "zero bad hair days this entire year! ✨" },
    { id: "note-3", color: "sticky-purple", pin: "pin-green", rot: "2deg", text: "endless cuddles & warm fluffy blankets 🛌" },
    { id: "note-4", color: "sticky-peach", pin: "pin-red", rot: "-3deg", text: "may all your big wild dreams come true 🌟" },
    { id: "note-5", color: "sticky-cream", pin: "pin-yellow", rot: "1.8deg", text: "never run out of snacks when you get hungry 🍪" },
    { id: "note-6", color: "sticky-lavender", pin: "pin-pink", rot: "-2deg", text: "laughter so hard that your stomach aches 😂" },
    { id: "note-7", color: "sticky-mint", pin: "pin-blue", rot: "2.5deg", text: "me holding your hand through all of it 🤝💖" },
    { id: "note-8", color: "sticky-lavender", pin: "pin-pink", rot: "-1.5deg", text: "Be happy always✨" }
  ],

  // Section 5: Letter
  letterBadge: "· no. 5 — one last thing ·",
  letterHeading: "p.s. a tiny letter",
  letterSubheading: "dear darling, some thoughts written just for you 💌",
  letterStampText: "AIR MAIL",
  letterStampEmoji: "💌",
  letterTo: "to: Anaghuu 🌸",
  letterDate: "today & forever",
  letterP1: "Happy birthday chakkareeeee",
  letterP2: "thank you for being the the most amazing person you have been to meee.",
  letterBullet1: "i love youu",
  letterBullet2: "i love that you look out for me",
  letterBullet3: "i love that you kore koree koreeeeeeee  :)",
  letterP3: "",
  letterP4: "All of me ~ promises to keep always finding the little ways to make you laugh and feel cherished like this again.",
  letterP5: "Happy birthday, my person.",
  letterSignOff: "always yours, 💕",
  letterAuthorName: "yours ambudiiiiiiii",

  // Footer
  footerHeart: "💖",
  footerPrefix: "made with all of my love, for you • ",
  footerMiddle: "happy birthday my love • ",
  footerYear: "2026 edition",

  // Photos for fixed slots
  photos: {
    bentoPhotoImg: "images/bento-main.jpg",
    bentoMiniPhotoImg: "images/bento-mini-1.jpg",
    bentoMiniPhotoImg2: "images/bento-mini-2.jpg",
    mascotTileImg: "https://www.dreamstime.com/little-cute-teddy-bear-little-cute-bear-colorful-funny-teddy-bear-image271247946"
  },

  // Mascot custom message
  mascotCustomMsg: "Happy birthday my princess! 👑✨"
};

// Active state in memory
let siteConfig = loadConfig();

function loadConfig() {
  try {
    const saved = localStorage.getItem("cute_bday_site_config_v2");
    if (saved) {
      const parsed = JSON.parse(saved);
      return {
        ...DEFAULT_CONFIG,
        ...parsed,
        photos: { ...DEFAULT_CONFIG.photos, ...(parsed.photos || {}) },
        polaroids: parsed.polaroids || DEFAULT_CONFIG.polaroids,
        stickyNotes: parsed.stickyNotes || DEFAULT_CONFIG.stickyNotes
      };
    }
  } catch (e) {
    console.warn("Storage load error:", e);
  }
  return JSON.parse(JSON.stringify(DEFAULT_CONFIG));
}

function saveConfig(silent = false) {
  try {
    localStorage.setItem("cute_bday_site_config_v2", JSON.stringify(siteConfig));
    if (!silent) showToast("Saved! ✨ All changes preserved.");
  } catch (e) {
    console.error("Storage save error:", e);
    if (!silent) showToast("⚠️ Browser storage full, could not save locally.");
  }
}

// =========================================================
// 2. RENDER / BIND EVERYTHING TO DOM
// =========================================================

function renderAll() {
  applyTheme(siteConfig.theme || "theme-pink");

  // Bind all standalone editable text elements
  document.querySelectorAll("[data-edit-key]").forEach(el => {
    const key = el.getAttribute("data-edit-key");
    if (siteConfig[key] !== undefined) {
      if (key === "letterP2") {
        el.innerHTML = siteConfig[key].replace("safest space", '<span class="highlight-pink">safest space</span>');
      } else if (key === "letterP4") {
        el.innerHTML = siteConfig[key].replace("all of me", '<span class="highlight-yellow">all of me</span>');
      } else {
        el.textContent = siteConfig[key];
      }
    }
  });

  // Apply Fixed Photos
  if (siteConfig.photos) {
    Object.entries(siteConfig.photos).forEach(([id, src]) => {
      const img = document.getElementById(id);
      if (img && src) img.src = src;
    });
  }

  // Render Polaroids & Sticky Notes
  renderPolaroids();
  renderStickyNotes();

  // Update Days Loved calculation
  updateDaysLoved();

  // Apply Edit Mode state
  setEditModeState(siteConfig.isEditMode);
}

// Apply Selected Theme
function applyTheme(themeClass) {
  document.body.className = `${themeClass} ${siteConfig.isEditMode ? "edit-mode-active" : ""}`;
  const themeSelect = document.getElementById("themeSelect");
  if (themeSelect) themeSelect.value = themeClass;
}

// =========================================================
// 3. IN-PLACE INLINE TEXT EDITING (CLICK-TO-EDIT)
// =========================================================

function setupInlineEditing() {
  document.addEventListener("input", (e) => {
    const el = e.target.closest("[data-edit-key]");
    if (el) {
      const key = el.getAttribute("data-edit-key");
      siteConfig[key] = el.innerText.trim();
      saveConfig(true); // silent auto-save on typing!
    }
  });

  document.addEventListener("blur", (e) => {
    const el = e.target.closest("[data-edit-key]");
    if (el) {
      const key = el.getAttribute("data-edit-key");
      siteConfig[key] = el.innerText.trim();
      saveConfig(true);
    }
  }, true);
}

// =========================================================
// 4. DYNAMIC POLAROIDS RENDERER (ADD, EDIT, DELETE)
// =========================================================

function renderPolaroids() {
  const container = document.getElementById("polaroidsContainer");
  if (!container) return;

  container.innerHTML = "";

  siteConfig.polaroids.forEach((pol, idx) => {
    const polEl = document.createElement("div");
    polEl.className = "polaroid-item";
    polEl.style.transform = `rotate(${pol.rot || "0deg"})`;
    polEl.dataset.polIndex = idx;

    polEl.innerHTML = `
      <div class="washi-tape ${pol.tape || "tape-pattern-stripe"}"></div>
      <button class="item-delete-btn" title="Delete Polaroid">✕</button>
      <div class="polaroid-inner">
        <div class="polaroid-img-box clickable-photo-slot" title="Click to change photo">
          <img src="${pol.img}" alt="Memory ${idx + 1}" class="pol-img">
          <div class="photo-overlay-hint"><span>📷 Change Photo</span></div>
        </div>
        <p class="polaroid-caption editable-pol-caption" contenteditable="${siteConfig.isEditMode}">${pol.caption}</p>
        <span class="polaroid-date editable-pol-date" contenteditable="${siteConfig.isEditMode}">${pol.date}</span>
      </div>
    `;

    // Click photo to change
    const photoBox = polEl.querySelector(".clickable-photo-slot");
    photoBox.addEventListener("click", () => {
      openUniversalPhotoPicker((newBase64) => {
        pol.img = newBase64;
        polEl.querySelector(".pol-img").src = newBase64;
        saveConfig();
      });
    });

    // Delete polaroid
    polEl.querySelector(".item-delete-btn").addEventListener("click", (e) => {
      e.stopPropagation();
      if (confirm("Delete this polaroid memory?")) {
        siteConfig.polaroids.splice(idx, 1);
        saveConfig();
        renderPolaroids();
      }
    });

    // Inline Caption & Date edit
    const captionEl = polEl.querySelector(".editable-pol-caption");
    const dateEl = polEl.querySelector(".editable-pol-date");

    captionEl.addEventListener("input", () => {
      pol.caption = captionEl.innerText.trim();
      saveConfig(true);
    });

    dateEl.addEventListener("input", () => {
      pol.date = dateEl.innerText.trim();
      saveConfig(true);
    });

    container.appendChild(polEl);
  });
}

function initPolaroidActions() {
  const addBtn = document.getElementById("addPolaroidBtn");
  if (!addBtn) return;

  addBtn.addEventListener("click", () => {
    const tapes = ["tape-pattern-stripe", "tape-pattern-dots", "tape-pattern-pink", "tape-pattern-mint"];
    const rots = ["-3deg", "2.5deg", "-2deg", "3.2deg", "-1.5deg"];
    const randomTape = tapes[Math.floor(Math.random() * tapes.length)];
    const randomRot = rots[Math.floor(Math.random() * rots.length)];

    const newPolaroid = {
      id: `pol-${Date.now()}`,
      img: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=700&q=80",
      caption: "new sweet memory together 💕",
      date: "today",
      tape: randomTape,
      rot: randomRot
    };

    siteConfig.polaroids.push(newPolaroid);
    saveConfig();
    renderPolaroids();
    playPopSound();
    showToast("Added new polaroid! Click its photo & text to customize! 📷");
  });
}

// =========================================================
// 5. DYNAMIC STICKY NOTES RENDERER (ADD, EDIT, DELETE)
// =========================================================

function renderStickyNotes() {
  const container = document.getElementById("stickyNotesContainer");
  if (!container) return;

  container.innerHTML = "";

  siteConfig.stickyNotes.forEach((note, idx) => {
    const noteEl = document.createElement("div");
    noteEl.className = `sticky-note ${note.color}`;
    noteEl.style.transform = `rotate(${note.rot || "0deg"})`;
    noteEl.dataset.noteIndex = idx;

    noteEl.innerHTML = `
      <div class="pin ${note.pin}"></div>
      <button class="item-delete-btn" title="Delete Sticky Note">✕</button>
      <p class="sticky-text editable-sticky-text" contenteditable="${siteConfig.isEditMode}">${note.text}</p>
    `;

    // Delete Note
    noteEl.querySelector(".item-delete-btn").addEventListener("click", (e) => {
      e.stopPropagation();
      if (confirm("Delete this sticky note?")) {
        siteConfig.stickyNotes.splice(idx, 1);
        saveConfig();
        renderStickyNotes();
      }
    });

    // Inline edit note text
    const textEl = noteEl.querySelector(".editable-sticky-text");
    textEl.addEventListener("input", () => {
      note.text = textEl.innerText.trim();
      saveConfig(true);
    });

    container.appendChild(noteEl);
  });
}

function initStickyNoteActions() {
  const addBtn = document.getElementById("addStickyNoteBtn");
  if (!addBtn) return;

  addBtn.addEventListener("click", () => {
    const colors = ["sticky-pink", "sticky-yellow", "sticky-mint", "sticky-purple", "sticky-peach", "sticky-lavender"];
    const pins = ["pin-red", "pin-yellow", "pin-blue", "pin-green", "pin-pink"];
    const rots = ["-2.5deg", "3deg", "-1.8deg", "2.2deg", "-3.2deg"];

    const newNote = {
      id: `note-${Date.now()}`,
      color: colors[Math.floor(Math.random() * colors.length)],
      pin: pins[Math.floor(Math.random() * pins.length)],
      rot: rots[Math.floor(Math.random() * rots.length)],
      text: "type your sweet wish here ✨"
    };

    siteConfig.stickyNotes.push(newNote);
    saveConfig();
    renderStickyNotes();
    playPopSound();
    showToast("Pinned new sticky note! Click to edit its wish! 📌");
  });
}

// =========================================================
// 6. PHOTO REPLACEMENT MODAL / UPLOADER (UNIVERSAL)
// =========================================================

let photoUploadCallback = null;

function initPhotoUploaders() {
  const fileInput = document.getElementById("universalPhotoInput");

  // Listen for file selection
  fileInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file && photoUploadCallback) {
      const reader = new FileReader();
      reader.onload = function(evt) {
        photoUploadCallback(evt.target.result);
      };
      reader.readAsDataURL(file);
    }
    fileInput.value = ""; // reset for next pick
  });

  // Fixed photo slots in Dossier
  document.querySelectorAll(".clickable-photo-slot").forEach(slot => {
    const targetId = slot.getAttribute("data-photo-target");
    if (targetId) {
      slot.addEventListener("click", () => {
        openUniversalPhotoPicker((base64) => {
          if (!siteConfig.photos) siteConfig.photos = {};
          siteConfig.photos[targetId] = base64;
          const img = document.getElementById(targetId);
          if (img) img.src = base64;
          saveConfig();
        });
      });
    }
  });
}

function openUniversalPhotoPicker(onSelectCallback) {
  photoUploadCallback = onSelectCallback;
  
  // Prompt user: file or URL
  const choice = confirm("Press OK to choose a photo from your computer, or Cancel to paste an image URL directly!");
  if (choice) {
    document.getElementById("universalPhotoInput").click();
  } else {
    const url = prompt("Paste your photo's web URL:");
    if (url && url.trim()) {
      onSelectCallback(url.trim());
    }
  }
}

// =========================================================
// 7. EDIT MODE TOGGLING & TOPBAR
// =========================================================

function setEditModeState(isEditing) {
  siteConfig.isEditMode = isEditing;
  const body = document.getElementById("siteBody");
  const banner = document.getElementById("editModeBanner");
  const editBtnLabel = document.getElementById("editBtnLabel");
  const dockEditBtn = document.getElementById("dockEditBtn");

  if (isEditing) {
    body.classList.add("edit-mode-active");
    if (banner) banner.classList.remove("hidden");
    if (editBtnLabel) editBtnLabel.textContent = "DONE";
    if (dockEditBtn) dockEditBtn.classList.add("active-mode");

    // Enable contenteditable on all .editable-text
    document.querySelectorAll(".editable-text").forEach(el => {
      el.contentEditable = "true";
    });
  } else {
    body.classList.remove("edit-mode-active");
    if (banner) banner.classList.add("hidden");
    if (editBtnLabel) editBtnLabel.textContent = "EDIT";
    if (dockEditBtn) dockEditBtn.classList.remove("active-mode");

    // Disable contenteditable
    document.querySelectorAll(".editable-text").forEach(el => {
      el.contentEditable = "false";
    });
  }

  // Re-sync polaroids & sticky notes contenteditable
  document.querySelectorAll(".editable-pol-caption, .editable-pol-date, .editable-sticky-text").forEach(el => {
    el.contentEditable = isEditing ? "true" : "false";
  });
}

function initEditModeControls() {
  const dockEditBtn = document.getElementById("dockEditBtn");
  const topbarExitBtn = document.getElementById("topbarExitBtn");
  const topbarSaveBtn = document.getElementById("topbarSaveBtn");
  const themeSelect = document.getElementById("themeSelect");
  const anniversaryBtn = document.getElementById("setAnniversaryDateBtn");

  // Dock Edit toggle
  if (dockEditBtn) {
    dockEditBtn.addEventListener("click", () => {
      setEditModeState(!siteConfig.isEditMode);
      saveConfig(true);
      playPopSound();
      showToast(siteConfig.isEditMode ? "✏️ Edit Mode ON: Click any text or photo!" : "👁️ Preview Mode: How she will see it!");
    });
  }

  // Topbar Exit
  if (topbarExitBtn) {
    topbarExitBtn.addEventListener("click", () => {
      setEditModeState(false);
      saveConfig(true);
      showToast("👁️ Switched to Preview Mode!");
    });
  }

  // Topbar Save All
  if (topbarSaveBtn) {
    topbarSaveBtn.addEventListener("click", () => {
      saveConfig();
    });
  }

  // Theme dropdown
  if (themeSelect) {
    themeSelect.addEventListener("change", (e) => {
      siteConfig.theme = e.target.value;
      applyTheme(siteConfig.theme);
      saveConfig();
      playPopSound();
    });
  }

  // Anniversary date quick setter
  if (anniversaryBtn) {
    anniversaryBtn.addEventListener("click", () => {
      const currentVal = siteConfig.anniversaryDate || "2025-04-30";
      const userDate = prompt("Enter your relationship start date (YYYY-MM-DD):", currentVal);
      if (userDate && !isNaN(new Date(userDate).getTime())) {
        siteConfig.anniversaryDate = userDate.trim();
        saveConfig();
        updateDaysLoved();
        playPopSound();
        showToast("Anniversary date saved & days updated! 💖");
      }
    });
  }

  // Background floating stickers can be clicked to swap emoji in Edit Mode
  document.querySelectorAll(".sticker").forEach(st => {
    st.addEventListener("click", () => {
      if (!siteConfig.isEditMode) return;
      const current = st.textContent;
      const newEmoji = prompt("Change this floating sticker emoji:", current);
      if (newEmoji && newEmoji.trim()) {
        st.textContent = newEmoji.trim();
        playPopSound();
        showToast("Sticker updated! ✨");
      }
    });
  });
}

function updateDaysLoved() {
  const counterEl = document.getElementById("daysLovedCounter");
  if (!counterEl) return;

  let days = parseInt(siteConfig.manualDaysCount, 10) || 365;

  if (siteConfig.anniversaryDate) {
    const start = new Date(siteConfig.anniversaryDate);
    const now = new Date();
    if (!isNaN(start.getTime())) {
      const diffTime = Math.abs(now - start);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      if (diffDays > 0) {
        days = diffDays;
      }
    }
  }

  counterEl.textContent = days;
}

// =========================================================
// 8. INTERACTIVE 3-CANDLE BIRTHDAY CAKE
// =========================================================

let candlesLit = 3;
const totalCandles = 3;

function initInteractiveCake() {
  const candles = [
    document.getElementById("candle1"),
    document.getElementById("candle2"),
    document.getElementById("candle3")
  ];
  const blowAllBtn = document.getElementById("blowAllBtn");
  const relightBtn = document.getElementById("relightBtn");

  candles.forEach((candle, idx) => {
    if (!candle) return;
    candle.addEventListener("click", () => blowOutSingleCandle(idx + 1));
  });

  if (blowAllBtn) {
    blowAllBtn.addEventListener("click", () => blowAllCandles());
  }

  if (relightBtn) {
    relightBtn.addEventListener("click", () => relightCandles());
  }
}

function blowOutSingleCandle(candleIndex) {
  const candleEl = document.getElementById(`candle${candleIndex}`);
  if (!candleEl || candleEl.classList.contains("blown")) return;

  candleEl.classList.add("blown");
  candlesLit = Math.max(0, candlesLit - 1);
  updateCakeStatus();
  playPuffSound();

  if (candlesLit === 0) onAllCandlesBlown();
}

function blowAllCandles() {
  for (let i = 1; i <= totalCandles; i++) {
    const candleEl = document.getElementById(`candle${i}`);
    if (candleEl && !candleEl.classList.contains("blown")) {
      setTimeout(() => {
        candleEl.classList.add("blown");
        candlesLit = Math.max(0, candlesLit - 1);
        playPuffSound();
        updateCakeStatus();
        if (candlesLit === 0) onAllCandlesBlown();
      }, (i - 1) * 220);
    }
  }
}

function relightCandles() {
  for (let i = 1; i <= totalCandles; i++) {
    const candleEl = document.getElementById(`candle${i}`);
    if (candleEl) candleEl.classList.remove("blown");
  }
  candlesLit = totalCandles;
  updateCakeStatus();

  const wishCard = document.getElementById("wishRevealCard");
  const relightBtn = document.getElementById("relightBtn");
  const blowBtn = document.getElementById("blowAllBtn");

  if (wishCard) wishCard.classList.add("hidden");
  if (relightBtn) relightBtn.classList.add("hidden");
  if (blowBtn) blowBtn.classList.remove("hidden");

  playPopSound();
  showToast("Candles relit! 🕯️ Ready for another wish!");
}

function updateCakeStatus() {
  const countEl = document.getElementById("candlesLitCount");
  const statusEl = document.getElementById("cakeStatusHint");
  if (countEl) countEl.textContent = candlesLit;

  if (candlesLit === 0 && statusEl) {
    statusEl.textContent = "✨ All candles blown! Your wish is on its way to the stars! ✨";
  } else if (statusEl) {
    statusEl.innerHTML = `<span id="candlesLitCount">${candlesLit}</span> / ${totalCandles} candles still glowing... make a wish!`;
  }
}

function onAllCandlesBlown() {
  triggerCelebrationConfetti();
  playCelebrationFanfare();

  const wishCard = document.getElementById("wishRevealCard");
  const relightBtn = document.getElementById("relightBtn");
  const blowBtn = document.getElementById("blowAllBtn");

  if (wishCard) {
    setTimeout(() => {
      wishCard.classList.remove("hidden");
      wishCard.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }, 600);
  }

  if (relightBtn) relightBtn.classList.remove("hidden");
  if (blowBtn) blowBtn.classList.add("hidden");

  showToast("🎉 Happy Birthday! All your wishes will come true! 🎂");
}

function triggerCelebrationConfetti() {
  if (typeof confetti === "function") {
    confetti({ particleCount: 80, spread: 70, origin: { y: 0.7, x: 0.2 }, colors: ["#ff4d79", "#ffd166", "#06d6a0", "#118ab2", "#9b5de5"] });
    setTimeout(() => {
      confetti({ particleCount: 80, spread: 70, origin: { y: 0.7, x: 0.8 }, colors: ["#ff758c", "#ffeaa7", "#74b9ff", "#a29bfe", "#fd79a8"] });
    }, 250);
    setTimeout(() => {
      confetti({ particleCount: 100, spread: 100, origin: { y: 0.6, x: 0.5 } });
    }, 500);
  }
}

// =========================================================
// 9. LO-FI WEB AUDIO BIRTHDAY SYNTHESIZER
// =========================================================

let audioCtx = null;
let isMusicPlaying = false;
let melodyInterval = null;

function getAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    audioCtx = new AudioContextClass();
  }
  if (audioCtx.state === "suspended") audioCtx.resume();
  return audioCtx;
}

function playMusicBoxNote(freq, startTime, duration = 0.5, volume = 0.09) {
  try {
    const ctx = getAudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "triangle";
    osc.frequency.setValueAtTime(freq, startTime);

    gain.gain.setValueAtTime(0, startTime);
    gain.gain.linearRampToValueAtTime(volume, startTime + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(startTime);
    osc.stop(startTime + duration);
  } catch (e) {}
}

const NOTE_FREQS = {
  C4: 261.63, D4: 293.66, E4: 329.63, F4: 349.23, G4: 392.00, A4: 440.00, B4: 493.88,
  C5: 523.25, D5: 587.33, E5: 659.25, F5: 698.46, G5: 783.99, A5: 880.00, Bb4: 466.16
};

const BDAY_MELODY = [
  ["C4", 0.75], ["C4", 0.25], ["D4", 1], ["C4", 1], ["F4", 1], ["E4", 2],
  ["C4", 0.75], ["C4", 0.25], ["D4", 1], ["C4", 1], ["G4", 1], ["F4", 2],
  ["C4", 0.75], ["C4", 0.25], ["C5", 1], ["A4", 1], ["F4", 1], ["E4", 1], ["D4", 1.5],
  ["Bb4", 0.75], ["Bb4", 0.25], ["A4", 1], ["F4", 1], ["G4", 1], ["F4", 2.5]
];

function startLofiBirthdayMusic() {
  const ctx = getAudioContext();
  let currentTime = ctx.currentTime + 0.1;
  const beatDuration = 0.45;

  let totalDuration = 0;
  BDAY_MELODY.forEach(([note, beats]) => {
    const freq = NOTE_FREQS[note];
    if (freq) {
      playMusicBoxNote(freq, currentTime + totalDuration, beats * beatDuration * 1.2, 0.08);
      if (beats >= 1) {
        playMusicBoxNote(freq / 2, currentTime + totalDuration, beats * beatDuration, 0.04);
      }
    }
    totalDuration += beats * beatDuration;
  });

  return totalDuration * 1000;
}

function toggleMusic() {
  const musicBtn = document.getElementById("dockMusicBtn");
  const musicIcon = document.getElementById("musicIcon");
  const musicText = document.getElementById("musicText");

  if (isMusicPlaying) {
    isMusicPlaying = false;
    if (melodyInterval) clearInterval(melodyInterval);
    if (musicIcon) musicIcon.textContent = "🎵";
    if (musicText) musicText.textContent = "MUSIC";
    if (musicBtn) musicBtn.classList.remove("active-mode");
    showToast("Music paused 💤");
  } else {
    isMusicPlaying = true;
    if (musicIcon) musicIcon.textContent = "🔊";
    if (musicText) musicText.textContent = "PLAYING";
    if (musicBtn) musicBtn.classList.add("active-mode");
    showToast("Playing cozy birthday melody 🎶✨");

    const duration = startLofiBirthdayMusic();
    melodyInterval = setInterval(() => {
      if (isMusicPlaying) startLofiBirthdayMusic();
    }, duration + 1000);
  }
}

function playPopSound() {
  try {
    const ctx = getAudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const now = ctx.currentTime;

    osc.type = "sine";
    osc.frequency.setValueAtTime(450, now);
    osc.frequency.exponentialRampToValueAtTime(800, now + 0.08);

    gain.gain.setValueAtTime(0.12, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.08);
  } catch (e) {}
}

function playPuffSound() {
  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;
    playMusicBoxNote(880, now, 0.3, 0.1);
    playMusicBoxNote(1174, now + 0.05, 0.4, 0.08);
  } catch (e) {}
}

function playCelebrationFanfare() {
  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;
    const notes = [523.25, 659.25, 783.99, 1046.50];
    notes.forEach((freq, idx) => {
      playMusicBoxNote(freq, now + idx * 0.12, 0.6, 0.12);
    });
  } catch (e) {}
}

// =========================================================
// 10. INTERACTIVE CUTE MASCOT (PEACH BEAR)
// =========================================================

const MASCOT_QUOTES = [
  "Happy birthday to the prettiest girl in the universe! 👑💕",
  "Reminder: You are deeply loved every single second! 🌸",
  "I love you more than boba, iced matcha, and naps combined! 🧋",
  "Sending 10,000 warm bear hugs right now! 🤗✨",
  "Did you make a wish yet? The stars are listening! 🎂⭐",
  "My heart does literal backflips when you smile! 💖",
  "You make every single ordinary day feel like magic ✨",
  "Official announcement: Today belongs entirely to YOU! 🎉",
  "You're stuck with me forever, just so you know! 🔐💘",
  "Eat all the cake and don't share with anyone else! 🍰😋"
];

let lastQuoteIndex = -1;

function initMascot() {
  const mascotCard = document.getElementById("mascotCard");
  const speechBubble = document.getElementById("mascotBubble");
  const bubbleText = document.getElementById("mascotBubbleText");

  if (!mascotCard) return;

  mascotCard.addEventListener("click", () => {
    playPopSound();

    let nextIndex;
    do {
      nextIndex = Math.floor(Math.random() * MASCOT_QUOTES.length);
    } while (nextIndex === lastQuoteIndex && MASCOT_QUOTES.length > 1);
    lastQuoteIndex = nextIndex;

    if (bubbleText) {
      bubbleText.textContent = siteConfig.mascotCustomMsg || MASCOT_QUOTES[nextIndex];
    }

    if (speechBubble) {
      speechBubble.classList.remove("hidden");
      clearTimeout(window.mascotTimer);
      window.mascotTimer = setTimeout(() => {
        speechBubble.classList.add("hidden");
      }, 5000);
    }

    mascotCard.style.transform = "scale(1.2) rotate(-8deg)";
    setTimeout(() => { mascotCard.style.transform = ""; }, 250);
  });
}

// =========================================================
// 11. EXPORT STANDALONE HTML BUNDLE
// =========================================================

function initExportModal() {
  const dockExportBtn = document.getElementById("dockExportBtn");
  const exportModalOverlay = document.getElementById("exportModalOverlay");
  const exportModalCloseBtn = document.getElementById("exportModalCloseBtn");
  const downloadBundleBtn = document.getElementById("downloadBundleBtn");
  const resetAllDefaultsBtn = document.getElementById("resetAllDefaultsBtn");

  if (dockExportBtn) {
    dockExportBtn.addEventListener("click", () => {
      exportModalOverlay.classList.remove("hidden");
      playPopSound();
    });
  }

  if (exportModalCloseBtn) {
    exportModalCloseBtn.addEventListener("click", () => {
      exportModalOverlay.classList.add("hidden");
    });
  }

  if (exportModalOverlay) {
    exportModalOverlay.addEventListener("click", (e) => {
      if (e.target === exportModalOverlay) {
        exportModalOverlay.classList.add("hidden");
      }
    });
  }

  if (downloadBundleBtn) {
    downloadBundleBtn.addEventListener("click", () => {
      downloadSelfContainedHTML();
    });
  }

  if (resetAllDefaultsBtn) {
    resetAllDefaultsBtn.addEventListener("click", () => {
      if (confirm("Reset everything back to template defaults?")) {
        localStorage.removeItem("cute_bday_site_config_v2");
        siteConfig = JSON.parse(JSON.stringify(DEFAULT_CONFIG));
        renderAll();
        exportModalOverlay.classList.add("hidden");
        showToast("Reset to defaults! 🌸");
      }
    });
  }
}

async function downloadSelfContainedHTML() {
  try {
    showToast("Generating ready-to-send bundle... 📦");

    const cssResponse = await fetch("style.css");
    const cssText = await cssResponse.text();

    const jsResponse = await fetch("script.js");
    const jsText = await jsResponse.text();

    // Turn off edit mode for the exported version so she sees pure beauty!
    const exportedConfig = { ...siteConfig, isEditMode: false };
    const configString = JSON.stringify(exportedConfig);

    const patchedJs = jsText.replace(
      "let siteConfig = loadConfig();",
      `let siteConfig = ${configString};`
    );

    let docHTML = document.documentElement.outerHTML;

    let bundledHTML = docHTML
      .replace('<link rel="stylesheet" href="style.css">', `<style>\n${cssText}\n</style>`)
      .replace('<script src="script.js"></script>', `<script>\n${patchedJs}\n</script>`);

    const blob = new Blob([bundledHTML], { type: "text/html;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `happy-birthday-${(siteConfig.heroName || "my-love").replace(/[^a-z0-9]/gi, "-").toLowerCase()}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    showToast("Downloaded! You can now send this file directly to her! 💖");
  } catch (err) {
    console.error("Export error:", err);
    showToast("⚠️ Could not bundle automatically. You can share the folder directly!");
  }
}

// Toast helper
function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.remove("hidden");
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => {
    toast.classList.add("hidden");
  }, 3500);
}

// =========================================================
// 12. INITIALIZATION ON PAGE LOAD
// =========================================================

document.addEventListener("DOMContentLoaded", () => {
  // Check if owner/edit mode is requested via URL (?edit=true or ?edit=1)
  const urlParams = new URLSearchParams(window.location.search);
  const requestedEdit = urlParams.get("edit") === "true" || urlParams.get("edit") === "1" || urlParams.get("admin") === "1";

  if (requestedEdit) {
    document.body.classList.add("owner-mode-active");
    siteConfig.isEditMode = true;
  } else {
    document.body.classList.remove("owner-mode-active");
    siteConfig.isEditMode = false;
  }

  renderAll();
  setupInlineEditing();
  initPolaroidActions();
  initStickyNoteActions();
  initPhotoUploaders();
  initEditModeControls();
  initInteractiveCake();
  initMascot();
  initExportModal();

  // Keyboard shortcut for owner: Ctrl+Shift+E toggles edit controls
  document.addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "e") {
      e.preventDefault();
      const isNowOwner = document.body.classList.toggle("owner-mode-active");
      setEditModeState(isNowOwner);
      playPopSound();
      showToast(isNowOwner ? "🔓 Owner Edit Mode Unlocked!" : "🔒 Preview Mode Locked (Girlfriend View)");
    }
  });

  // Mascot triple-click secret unlock
  let mascotClicks = 0;
  let mascotClickTimer = null;
  const mascotCard = document.getElementById("mascotCard");
  if (mascotCard) {
    mascotCard.addEventListener("click", () => {
      mascotClicks++;
      clearTimeout(mascotClickTimer);
      if (mascotClicks >= 3) {
        mascotClicks = 0;
        const isNowOwner = document.body.classList.toggle("owner-mode-active");
        setEditModeState(isNowOwner);
        playCelebrationFanfare();
        showToast(isNowOwner ? "✨ Secret Editor Unlocked! ✏️" : "💖 Girlfriend Mode Active");
      } else {
        mascotClickTimer = setTimeout(() => { mascotClicks = 0; }, 1000);
      }
    });
  }

  // Celebrate Button in Dock
  const dockCelebrateBtn = document.getElementById("dockCelebrateBtn");
  if (dockCelebrateBtn) {
    dockCelebrateBtn.addEventListener("click", () => {
      triggerCelebrationConfetti();
      playPopSound();
      showToast("🎉 Celebrating you today and always! 💖");
    });
  }

  // Music Button in Dock
  const dockMusicBtn = document.getElementById("dockMusicBtn");
  if (dockMusicBtn) {
    dockMusicBtn.addEventListener("click", () => toggleMusic());
  }

  // Back to top
  const backToTopBtn = document.getElementById("backToTopBtn");
  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Sweet Welcome Toast
  setTimeout(() => {
    if (siteConfig.isEditMode) {
      showToast("✏️ Edit Mode is ON! Click any text to type or photo to change!");
    } else {
      showToast("Happy Birthday my love! 💖 Scroll down for sweetness ✨");
    }
  }, 1200);
});
