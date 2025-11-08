(function () {
  const cfg = window.WINDOW_CONFIG || {};
  const contents = window.WINDOW_CONTENTS || {};
  const layer = document.getElementById("windowLayer");
  const open = {};
  let z = 100;

  function bringFront(win) {
    win.style.zIndex = ++z;
  }

  function dragWin(win, handle) {
    let offX, offY;

    handle.addEventListener("pointerdown", (e) => {
      if (window.innerWidth <= 720) return;
      if (e.target.closest(".window-close")) return;

      bringFront(win);

      offX = e.clientX - win.offsetLeft;
      offY = e.clientY - win.offsetTop;

      handle.setPointerCapture(e.pointerId);

      const move = (ev) => {
        const x = Math.min(
          Math.max(10, ev.clientX - offX),
          window.innerWidth - win.offsetWidth - 10
        );
        const y = Math.min(
          Math.max(40, ev.clientY - offY),
          window.innerHeight - win.offsetHeight - 10
        );
        win.style.left = x + "px";
        win.style.top = y + "px";
      };

      const up = (ev) => {
        handle.releasePointerCapture(ev.pointerId);
        handle.removeEventListener("pointermove", move);
        handle.removeEventListener("pointerup", up);
      };

      handle.addEventListener("pointermove", move);
      handle.addEventListener("pointerup", up);
    });
  }

  function makeWin(type) {
    if (!layer) return null;
    const c = cfg[type];
    if (!c) return null;

    const win = document.createElement("div");
    win.className = "window";
    win.style.width = c.w + "px";
    win.style.height = c.h + "px";
    win.style.left = window.innerWidth / 2 - c.w / 2 + "px";
    win.style.top = window.innerHeight / 2 - c.h / 2 + "px";

    const header = document.createElement("div");
    header.className = "window-header";

    const left = document.createElement("div");
    left.className = "window-header-left";

    const icon = document.createElement("div");
    icon.className = "window-header-icon";
    const img = document.createElement("img");
    img.src = c.icon;
    img.alt = c.title + " icon";
    icon.appendChild(img);

    left.append(icon, document.createTextNode(c.title));

    const closeBtn = document.createElement("button");
    closeBtn.className = "window-close";
    closeBtn.textContent = "✕";
    closeBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      if (window.playSound) {
        window.playSound("exit");
      }
      closeWin(type);
    });

    header.append(left, closeBtn);

    const body = document.createElement("div");
    body.className = "window-body";

    const defaultContent = `<p>Lorem ipsum dolor sit amet.</p><p>Replace this text later!</p>`;
    body.innerHTML = contents[type] || defaultContent;

    win.append(header, body);

    win.classList.add("open");
    win.addEventListener("mousedown", () => bringFront(win));
    dragWin(win, header);

    return win;
  }

  function openWin(type) {
    if (open[type]) return;
    const win = makeWin(type);
    if (!win) return;
    layer.appendChild(win);
    open[type] = win;
    bringFront(win);
  }

  function closeWin(type) {
    const win = open[type];
    if (!win) return;
    delete open[type];

    win.classList.add("closing");

    const remove = () => {
      win.remove();
    };

    win.addEventListener("transitionend", remove);
    setTimeout(remove, 260);
  }

  function closeAll() {
    Object.keys(open).forEach((type) => closeWin(type));
  }

  function toggleWin(type) {
    if (open[type]) {
      closeWin(type);
    } else {
      openWin(type);
    }
  }

  window.WindowManager = {
    open: openWin,
    close: closeWin,
    closeAll,
    toggle: toggleWin
  };
})();
