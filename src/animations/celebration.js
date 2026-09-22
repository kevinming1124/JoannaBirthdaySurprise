export function createConfetti() {
  const canvas = document.createElement("canvas");
  canvas.className = "confetti";
  canvas.setAttribute("aria-hidden", "true");

  const context = canvas.getContext("2d");
  const colors = ["#c54870", "#f58faf", "#f8bed0", "#fff1cc", "#ffffff"];
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let frame;
  let particles = [];

  const resize = () => {
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.floor(canvas.clientWidth * ratio);
    canvas.height = Math.floor(canvas.clientHeight * ratio);
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    particles = Array.from({ length: reducedMotion ? 28 : 70 }, (_, index) => ({
      x: (index * 47) % Math.max(1, canvas.clientWidth),
      y: reducedMotion ? (index * 83) % Math.max(1, canvas.clientHeight) : -Math.random() * canvas.clientHeight,
      width: 5 + Math.random() * 7,
      height: 9 + Math.random() * 10,
      speed: 0.7 + Math.random() * 1.8,
      sway: Math.random() * Math.PI * 2,
      color: colors[index % colors.length],
      rotation: Math.random() * Math.PI,
    }));
  };

  const draw = () => {
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    context.clearRect(0, 0, width, height);

    particles.forEach((particle) => {
      if (!reducedMotion) {
        particle.y += particle.speed;
        particle.sway += 0.025;
        particle.rotation += 0.02;
        if (particle.y > height + 20) particle.y = -20;
      }

      context.save();
      context.translate(particle.x + Math.sin(particle.sway) * 16, particle.y);
      context.rotate(particle.rotation);
      context.fillStyle = particle.color;
      context.globalAlpha = 0.82;
      context.fillRect(-particle.width / 2, -particle.height / 2, particle.width, particle.height);
      context.restore();
    });

    if (!reducedMotion) frame = window.requestAnimationFrame(draw);
  };

  const observer = new ResizeObserver(() => {
    window.cancelAnimationFrame(frame);
    resize();
    draw();
  });
  observer.observe(canvas);

  return {
    element: canvas,
    cleanup: () => {
      observer.disconnect();
      window.cancelAnimationFrame(frame);
    },
  };
}
