document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("mobilePopup");
  const popupBtn = document.getElementById("popupCloseBtn");
  if (!popup || !popupBtn) return;

  function showMobilePopup() {
    if (window.innerWidth <= 720) {
      popup.classList.add("active");
    }
  }

  popupBtn.addEventListener("click", () => {
    popup.classList.remove("active");
  });

  setTimeout(showMobilePopup, 1500);
});
