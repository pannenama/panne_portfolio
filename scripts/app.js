document.addEventListener("DOMContentLoaded", () => {
  const SPLASH_DURATION = 1800;

  const mascotText = document.getElementById("mascotText");
  const mascotGroup = document.getElementById("mascotGroup");
  const logoBtn = document.getElementById("logoBtn");

  const lines = [
    "Hello, I'm Anne!",
    "Welcome to my personal portfolio!",
    "Feel free to explore the page using the buttons below!"
  ];

  let index = 0;
  let typing = false;

  function typeText(text) {
    mascotText.textContent = "";
    typing = true;
    let i = 0;
    const interval = setInterval(() => {
      mascotText.textContent = text.slice(0, ++i);
      if (i >= text.length) {
        clearInterval(interval);
        typing = false;
      }
    }, 70);
  }

  setTimeout(() => {
    document.body.classList.add("loaded");
    typeText(lines[0]);
  }, SPLASH_DURATION);

  if (mascotGroup) {
    mascotGroup.addEventListener("click", () => {
      if (typing) return;
      index = (index + 1) % lines.length;
      mascotText.textContent = lines[index];

      if (window.playSound) {
        window.playSound("dialogue");
      }
    });
  }

  document.querySelectorAll(".nav-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const type = btn.dataset.window;
      if (window.WindowManager) {
        window.WindowManager.toggle(type);
      }
    });
  });

  if (logoBtn) {
    logoBtn.addEventListener("click", () => {
      if (window.WindowManager && window.WindowManager.closeAll) {
        window.WindowManager.closeAll();
      }
      index = 0;
      mascotText.textContent = lines[0];
    });
  }
});
