export function createCarousel(photos) {
  const root = document.createElement("section");
  root.className = "carousel";
  root.setAttribute("aria-label", "我們的回憶照片");

  const viewport = document.createElement("div");
  viewport.className = "carousel__viewport";
  viewport.tabIndex = 0;

  photos.forEach((photo, index) => {
    const figure = document.createElement("figure");
    figure.className = "carousel__slide";

    const image = document.createElement("img");
    image.src = photo.src;
    image.alt = photo.alt;
    image.width = 900;
    image.height = 1600;
    image.loading = index === 0 ? "eager" : "lazy";
    figure.append(image);
    viewport.append(figure);
  });

  const controls = document.createElement("div");
  controls.className = "carousel__controls";

  const previous = document.createElement("button");
  previous.className = "carousel__button";
  previous.type = "button";
  previous.setAttribute("aria-label", "上一張照片");
  previous.textContent = "‹";

  const status = document.createElement("span");
  status.className = "carousel__status";
  status.setAttribute("aria-live", "polite");

  const next = document.createElement("button");
  next.className = "carousel__button";
  next.type = "button";
  next.setAttribute("aria-label", "下一張照片");
  next.textContent = "›";

  controls.append(previous, status, next);
  root.append(viewport, controls);

  let current = 0;
  let timer;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const updateStatus = () => {
    status.textContent = `${current + 1}／${photos.length}`;
  };

  const goTo = (index, behavior = "smooth") => {
    current = (index + photos.length) % photos.length;
    const slide = viewport.children[current];
    viewport.scrollTo({ left: slide.offsetLeft, behavior });
    updateStatus();
  };

  const restartTimer = () => {
    window.clearInterval(timer);
    if (!reducedMotion) {
      timer = window.setInterval(() => goTo(current + 1), 4000);
    }
  };

  previous.addEventListener("click", () => {
    goTo(current - 1);
    restartTimer();
  });
  next.addEventListener("click", () => {
    goTo(current + 1);
    restartTimer();
  });

  let scrollTimer;
  viewport.addEventListener("scroll", () => {
    window.clearTimeout(scrollTimer);
    scrollTimer = window.setTimeout(() => {
      const width = viewport.clientWidth || 1;
      current = Math.min(photos.length - 1, Math.max(0, Math.round(viewport.scrollLeft / width)));
      updateStatus();
    }, 80);
  });

  viewport.addEventListener("pointerdown", () => window.clearInterval(timer));
  viewport.addEventListener("pointerup", restartTimer);

  updateStatus();
  restartTimer();

  return {
    element: root,
    cleanup: () => {
      window.clearInterval(timer);
      window.clearTimeout(scrollTimer);
    },
  };
}
