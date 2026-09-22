export function createProgress(current, total) {
  const wrapper = document.createElement("div");
  wrapper.className = "progress";
  wrapper.setAttribute("aria-label", `第 ${current}／${total} 題`);

  const hearts = document.createElement("div");
  hearts.className = "progress__hearts";
  hearts.setAttribute("aria-hidden", "true");

  for (let index = 1; index <= total; index += 1) {
    const heart = document.createElement("span");
    heart.className = "progress__heart";
    if (index < current) heart.classList.add("is-complete");
    if (index === current) heart.classList.add("is-current");
    heart.textContent = "♥";
    hearts.append(heart);
  }

  const label = document.createElement("span");
  label.className = "progress__label";
  label.textContent = `第 ${current}／${total} 題`;

  wrapper.append(hearts, label);
  return wrapper;
}
