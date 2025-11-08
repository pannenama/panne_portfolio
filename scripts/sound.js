document.addEventListener("DOMContentLoaded", () => {
  const sounds = {
    reset: new Audio("assets/sfx/reset.mp3"),
    sound: new Audio("assets/sfx/sound.mp3"),
    theme: new Audio("assets/sfx/theme.mp3"),
    hover: new Audio("assets/sfx/hover.mp3"),
    click: new Audio("assets/sfx/click.mp3"),
    exit: new Audio("assets/sfx/exit.mp3"),
    dialogue: new Audio("assets/sfx/dialogue.mp3"),
  };

  let muted = false;
  const soundBtn = document.getElementById("soundBtn");

  function playSound(name) {
    if (muted || !sounds[name]) return;
    const audio = sounds[name].cloneNode();
    audio.volume = 0.9;
    audio.play().catch(() => {});
  }

  window.playSound = playSound;

  let lastHoverEl = null;
  document.addEventListener("mouseover", (e) => {
    const target = e.target.closest(
      "button, .nav-btn, .window-close, #logoBtn"
    );
    if (target && target !== lastHoverEl) {
      playSound("hover");
      lastHoverEl = target;
    }
  });
  document.addEventListener("mouseout", (e) => {
    if (e.target.closest("button, .nav-btn, .window-close, #logoBtn")) {
      lastHoverEl = null;
    }
  });

  // Click SFX
  document.addEventListener("click", (e) => {
    if (
      e.target.closest("button") ||
      e.target.closest(".nav-btn") ||
      e.target.closest("#logoBtn")
    ) {
      playSound("click");
    }
  });

  // Sound button (opacity only)
  if (soundBtn) {
    const soundImg = soundBtn.querySelector("img");

    soundBtn.addEventListener("click", () => {
      muted = !muted;
      playSound("sound");
      soundImg.style.opacity = muted ? "0.5" : "1";
    });
  }

  // Theme button
  const themeBtn = document.getElementById("themeBtn");
  if (themeBtn) {
    themeBtn.addEventListener("click", () => playSound("theme"));
  }

  // Logo button
  const logoBtn = document.getElementById("logoBtn");
  if (logoBtn) {
    logoBtn.addEventListener("click", () => playSound("reset"));
  }
});
