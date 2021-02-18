document.addEventListener("DOMContentLoaded", () => {
  setVH();
  setFramesHeights();
  initFrames();
  requestAnimationFrame(update);

  if (window.innerWidth > 600) {
    window.addEventListener("resize", () => {
      setVH();
      setFramesHeights();
    });
  }
});

function update() {
  fadeAnimation();
  stepFrames();
  requestAnimationFrame(update);
}

function setVH() {
  const vh = window.innerHeight / 100;
  console.log("resizing", { vh });
  document.documentElement.style.setProperty("--vh", `${vh}px`);
  console.log(document.documentElement.style.getPropertyValue("--vh"));
}

function setHeights(display) {
  const img = display.querySelector("img");
  const { width } = img;
  const ratio = img.naturalHeight / img.naturalWidth;
  if (img.complete) {
    display.style.height = `${ratio * width}px`;
  } else {
    img.addEventListener("load", () => {
      const { width } = img;
      const ratio = img.naturalHeight / img.naturalWidth;
      display.style.height = `${ratio * width}px`;
    });
  }
}

function setFramesHeights() {
  document.querySelectorAll(".display-image").forEach((e) => setHeights(e));
  document.querySelectorAll(".display-vertical").forEach((e) => setHeights(e));
}

function initFrames() {
  document.querySelectorAll(".display-image").forEach((e) => {
    e.querySelectorAll("img").forEach((f, i) => {
      f.style.position = "absolute";
      f.style.left = `${-i * f.width}px`;
    });
  });
  document.querySelectorAll(".display-vertical").forEach((e) => {
    e.querySelectorAll("img").forEach((f, i) => {
      if (f.complete) {
        const ratio = f.naturalHeight / f.naturalWidth;
        f.style.position = "absolute";
        f.style.top = `${-i * f.width * ratio}px`;
      } else {
        f.addEventListener("load", () => {
          const ratio = f.naturalHeight / f.naturalWidth;
          f.style.position = "absolute";
          f.style.top = `${-i * f.width * ratio}px`;
        });
      }
    });
  });
}

const TIMEOUT_MAX = 240;

function makeStep(display, vertical = false) {
  const timeout = display.getAttribute("data-timeout") || TIMEOUT_MAX;

  if (timeout <= 0) {
    const imgs = display.querySelectorAll("img");
    if (imgs.length > 2) {
      for (let i = 0; i < imgs.length; i++) {
        const f = imgs[i];
        const x = vertical ? getTop(f) : getLeft(f);
        const step = vertical ? f.height / 16 : f.width / 16;
        if (x < 0 && x + step >= 0) {
          display.setAttribute("data-timeout", TIMEOUT_MAX);

          f.style[vertical ? "top" : "left"] = `0px`;

          imgs[(i + 1) % imgs.length].style[vertical ? "top" : "left"] = `${
            vertical ? -f.height : -f.width
          }px`;

          imgs[i > 0 ? (i - 1) % imgs.length : imgs.length - 1].style[
            vertical ? "top" : "left"
          ] = `${vertical ? f.height : f.width}px`;

          break;
        } else {
          f.style[vertical ? "top" : "left"] = `${x + step}px`;
        }
      }
    }
  } else {
    display.setAttribute("data-timeout", timeout - 1);
  }
}

function stepFrames() {
  document.querySelectorAll(".display-image").forEach((e) => makeStep(e));
  document
    .querySelectorAll(".display-vertical")
    .forEach((e) => makeStep(e, true));
}

function getLeft(element) {
  return element.style.left != undefined
    ? Math.round(parseFloat(element.style.left.split("px")[0]))
    : 0;
}

function getTop(element) {
  return element.style.top != undefined
    ? Math.round(parseFloat(element.style.top.split("px")[0]))
    : 0;
}

const fade = {
  titles: ["Front-End Developer", "Web Developer", "Fullstack Developer"],
  counter: 0,
  previous: 1,
  switched: false,
};

function fadeAnimation() {
  let b = document.querySelector("header h3 b");
  const { opacity } = window.getComputedStyle(b);
  const { titles, previous, switched } = fade;
  const delta = Math.abs(previous - opacity);
  fade.previous = opacity;

  if (opacity <= delta) {
    if (!switched) {
      fade.counter++;
      b.innerHTML = titles[fade.counter % titles.length];
      fade.switched = true;
    }
  } else if (opacity >= 1 - delta) fade.switched = false;
}
