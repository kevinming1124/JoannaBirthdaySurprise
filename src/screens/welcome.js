import { createConfetti } from "../animations/celebration.js";

export function createWelcome({ onStart }) {
  const screen = document.createElement("section");
  screen.className = "screen screen--welcome";

  const confetti = createConfetti();
  const card = document.createElement("div");
  card.className = "welcome-card";
  card.innerHTML = `
    <span class="welcome-card__eyebrow">A little surprise for you</span>
    <div class="welcome-card__cake" aria-hidden="true">🎂</div>
    <h1><span>Joanna</span><span>生日快樂</span></h1>
    <p>今天有一份專屬於妳的小驚喜</p>
  `;

  const start = document.createElement("button");
  start.className = "button button--primary button--large";
  start.type = "button";
  start.textContent = "拆開我的驚喜 🎁";
  start.addEventListener("click", onStart, { once: true });
  card.append(start);

  screen.append(confetti.element, card);
  return { element: screen, cleanup: confetti.cleanup };
}
