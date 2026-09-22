import "./styles/base.css";
import "./styles/layout.css";
import "./styles/components.css";
import "./styles/animations.css";

import { questions } from "./data/questions.js";
import { createEnding } from "./screens/ending.js";
import { createQuiz } from "./screens/quiz.js";
import { createWelcome } from "./screens/welcome.js";

const app = document.querySelector("#app");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

let currentCleanup = () => {};
let questionIndex = 0;
let dateChoice = "";

function mount(view) {
  currentCleanup();
  app.replaceChildren(view.element);
  currentCleanup = view.cleanup || (() => {});
  window.requestAnimationFrame(() => view.element.classList.add("screen--visible"));
  window.scrollTo({ top: 0, behavior: reducedMotion.matches ? "auto" : "smooth" });
}

function transitionTo(factory) {
  const current = app.firstElementChild;
  if (!current || reducedMotion.matches) {
    mount(factory());
    return;
  }

  current.classList.add("screen--leaving");
  window.setTimeout(() => mount(factory()), 260);
}

function showWelcome() {
  mount(
    createWelcome({
      onStart: () => {
        questionIndex = 0;
        dateChoice = "";
        transitionTo(showQuestionView);
      },
    }),
  );
}

function showQuestionView() {
  const question = questions[questionIndex];
  return createQuiz({
    question,
    index: questionIndex,
    total: questions.length,
    onChoice: (option) => {
      if (question.remembersChoice) dateChoice = option.label;
    },
    onNext: () => {
      questionIndex += 1;
      transitionTo(showQuestionView);
    },
    onFinish: () => transitionTo(showEndingView),
  });
}

function showEndingView() {
  return createEnding({
    dateChoice,
    onReplay: () => {
      questionIndex = 0;
      dateChoice = "";
      transitionTo(() =>
        createWelcome({
          onStart: () => transitionTo(showQuestionView),
        }),
      );
    },
  });
}

showWelcome();
