const reactionSymbols = {
  cake: ["🍰", "✨", "🧁"],
  sparkles: ["✨", "💖", "✨"],
  hearts: ["💗", "💕", "💖", "💗"],
  stars: ["⭐", "✨", "⭐"],
  food: ["🍰", "🧋", "🍓"],
  map: ["📍", "🗺️", "✨"],
  together: ["💗", "💗"],
  heartbeat: ["💗", "💕", "💗"],
};

export function runReaction(container, type) {
  if (type === "glow") {
    container.classList.add("reaction-glow");
    const timer = window.setTimeout(() => container.classList.remove("reaction-glow"), 1800);
    return () => window.clearTimeout(timer);
  }

  const symbols = reactionSymbols[type];
  if (!symbols) return () => {};

  const layer = document.createElement("div");
  layer.className = `reaction-layer reaction-layer--${type}`;
  layer.setAttribute("aria-hidden", "true");

  symbols.forEach((symbol, index) => {
    const item = document.createElement("span");
    item.textContent = symbol;
    item.style.setProperty("--reaction-index", index);
    item.style.setProperty("--reaction-position", `${18 + index * (64 / Math.max(1, symbols.length - 1))}%`);
    layer.append(item);
  });

  container.append(layer);
  const timer = window.setTimeout(() => layer.remove(), 1900);
  return () => {
    window.clearTimeout(timer);
    layer.remove();
  };
}
