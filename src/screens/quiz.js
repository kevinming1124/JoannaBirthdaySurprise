import { runReaction } from "../animations/reactions.js";
import { createCarousel } from "../components/carousel.js";
import { createProgress } from "../components/progress.js";
import { photoAssets } from "../data/content.js";

export function createQuiz({ question, index, total, onChoice, onNext, onFinish }) {
  const cleanupTasks = [];
  const screen = document.createElement("section");
  screen.className = "screen screen--quiz";

  const shell = document.createElement("div");
  shell.className = "quiz-shell";
  shell.append(createProgress(index + 1, total));

  const card = document.createElement("article");
  card.className = "quiz-card";

  const questionNumber = document.createElement("p");
  questionNumber.className = "quiz-card__eyebrow";
  questionNumber.textContent = index === total - 1 ? "最後一題" : `Question ${index + 1}`;

  const heading = document.createElement("h1");
  heading.textContent = question.question;

  const options = document.createElement("div");
  options.className = "options";

  const result = document.createElement("div");
  result.className = "result";
  result.setAttribute("aria-live", "polite");

  question.options.forEach((option, optionIndex) => {
    const button = document.createElement("button");
    button.className = "option-button";
    button.type = "button";
    button.innerHTML = `<span class="option-button__letter">${String.fromCharCode(65 + optionIndex)}</span><span>${option.label}</span>`;

    button.addEventListener("click", () => {
      options.querySelectorAll("button").forEach((item) => {
        item.disabled = true;
        item.classList.toggle("is-selected", item === button);
      });

      onChoice(option);
      cleanupTasks.push(runReaction(card, option.reaction));

      if (option.feedback) {
        const feedback = document.createElement("p");
        feedback.className = "result__feedback";
        feedback.textContent = option.feedback;
        result.append(feedback);
      }

      if (option.image) {
        const figure = document.createElement("figure");
        figure.className = "memory-photo";
        const image = document.createElement("img");
        image.src = option.image;
        image.alt = option.imageAlt;
        image.width = 900;
        image.height = 1600;
        figure.append(image);
        result.append(figure);
      }

      if (question.commonFeedback) {
        const common = document.createElement("p");
        common.className = "result__common";
        common.textContent = question.commonFeedback;
        result.append(common);
      }

      if (question.isFinal) {
        const carousel = createCarousel(photoAssets.carousel);
        cleanupTasks.push(carousel.cleanup);
        result.append(carousel.element);

        const finish = document.createElement("button");
        finish.className = "button button--primary result__next";
        finish.type = "button";
        finish.textContent = "收下生日卡片 💌";
        finish.addEventListener("click", onFinish, { once: true });
        result.append(finish);
      } else {
        const next = document.createElement("button");
        next.className = "button button--primary result__next";
        next.type = "button";
        next.textContent = index === total - 2 ? "前往最後一題 →" : "下一題 →";
        next.addEventListener("click", onNext, { once: true });
        result.append(next);
      }

      result.classList.add("is-visible");
      window.setTimeout(() => result.scrollIntoView({ behavior: "smooth", block: "nearest" }), 80);
    });

    options.append(button);
  });

  card.append(questionNumber, heading, options, result);
  shell.append(card);
  screen.append(shell);

  return {
    element: screen,
    cleanup: () => cleanupTasks.forEach((cleanup) => cleanup()),
  };
}
