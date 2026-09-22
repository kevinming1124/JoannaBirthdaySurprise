import { letterContent } from "../data/content.js";

export function createEnding({ dateChoice, onReplay }) {
  const screen = document.createElement("section");
  screen.className = "screen screen--ending";

  const heading = document.createElement("div");
  heading.className = "ending-heading";
  heading.innerHTML = `<span>Special delivery</span><h1>這封信，只送給妳</h1>`;

  const scene = document.createElement("div");
  scene.className = "envelope-scene";

  const envelope = document.createElement("div");
  envelope.className = "envelope";
  envelope.setAttribute("aria-hidden", "true");
  envelope.innerHTML = `
    <div class="envelope__back"></div>
    <div class="envelope__flap"></div>
    <div class="envelope__front"></div>
    <div class="envelope__seal">♥</div>
  `;

  const letter = document.createElement("article");
  letter.className = "birthday-letter";
  letter.setAttribute("aria-label", "生日卡片");

  const paragraphs = letterContent.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("");
  letter.innerHTML = `
    <div class="birthday-letter__ornament" aria-hidden="true">♥</div>
    <h2>${letterContent.heading}</h2>
    <div class="birthday-letter__body">${paragraphs}</div>
    <p class="birthday-letter__signature">${letterContent.signature}</p>
    <aside class="date-note">
      <span>下次約會</span>
      <strong>${dateChoice || "一起創造新的回憶 💗"}</strong>
      <p>我有記住喔！</p>
    </aside>
  `;

  const replay = document.createElement("button");
  replay.className = "button button--secondary replay-button";
  replay.type = "button";
  replay.textContent = "再看一次 ↻";
  replay.addEventListener("click", onReplay, { once: true });

  scene.append(envelope, letter);
  screen.append(heading, scene, replay);

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const openTimer = window.setTimeout(() => scene.classList.add("is-open"), reducedMotion ? 0 : 180);
  const revealTimer = window.setTimeout(() => {
    scene.classList.add("is-revealed");
    screen.classList.add("letter-is-revealed");
  }, reducedMotion ? 0 : 1550);
  const settleTimer = window.setTimeout(() => {
    scene.classList.add("is-settled");
    replay.classList.add("is-visible");
  }, reducedMotion ? 0 : 2400);

  return {
    element: screen,
    cleanup: () => {
      window.clearTimeout(openTimer);
      window.clearTimeout(revealTimer);
      window.clearTimeout(settleTimer);
    },
  };
}
