import { photoAssets } from "./content.js";

export const questions = [
  {
    id: "birthday-mission",
    question: "今天壽星 Joanna 最重要的任務是？",
    options: [
      {
        label: "開心吃蛋糕 🍰",
        feedback: "沒錯！今天吃甜點完全不需要任何理由。",
        reaction: "cake",
      },
      {
        label: "收下滿滿的祝福 💌",
        feedback: "Joanna 寶寶生日大快樂！💌",
        reaction: "sparkles",
      },
      {
        label: "被我寵一整天 💗",
        feedback: "雖然我們離得很遠，但心都跟你貼在一起喔💗",
        reaction: "hearts",
        best: true,
      },
    ],
  },
  {
    id: "favorite-look",
    question: "Kevin 最喜歡 Joanna 什麼樣子？",
    commonFeedback: "其實只要是 Joanna，Kevin 都超級宇宙無敵喜歡😍",
    options: [
      {
        label: "開心大笑的時候 🤩",
        feedback: "每次看到妳笑，我的嘴角就一直失守😚",
        reaction: "stars",
      },
      {
        label: "認真做事的時候 ✨",
        feedback: "偷偷告訴妳，認真的妳真的很迷人🥰",
        reaction: "glow",
      },
      {
        label: "親親抱抱的時候 😘",
        feedback: "這個答案太犯規了，當然最喜歡！",
        reaction: "heartbeat",
      },
    ],
  },
  {
    id: "favorite-place",
    question: "Kevin 最喜歡和 Joanna 一起去哪裡？",
    commonFeedback: "Kevin 只要跟 Joanna 一起，去哪都超級開心💗",
    options: [
      {
        label: "遊樂園 🎡",
        image: photoAssets.destinations.amusementPark,
        imageAlt: "遊樂園回憶（測試圖片）",
      },
      {
        label: "海邊 🌊",
        image: photoAssets.destinations.beach,
        imageAlt: "海邊回憶（測試圖片）",
      },
      {
        label: "逛街 🛍️",
        image: photoAssets.destinations.shopping,
        imageAlt: "逛街回憶（測試圖片）",
      },
    ],
  },
  {
    id: "next-date",
    question: "下一次約會，妳最想和我做什麼？",
    commonFeedback: "Kevin 會筆記下來和 Joanna 度過快樂的很多天~",
    remembersChoice: true,
    options: [
      {
        label: "一起去吃好吃的 🍽️",
        feedback: "敖！下一次約會就從 Kevin 的精選名單開始 🤤",
        reaction: "food",
      },
      {
        label: "去沒去過的地方走走 🗺️",
        feedback: "歐虧~ 讓地陪 Kevin 牽著妳逛遍各個景點 🥳",
        reaction: "map",
      },
      {
        label: "待在一起，什麼都不做 🛋️",
        feedback: "和妳黏在一起，平凡的一天也很好🤭",
        reaction: "together",
      },
    ],
  },
  {
    id: "future-birthdays",
    question: "Joanna 願意讓 Kevin 繼續陪妳過好多個生日嗎？",
    commonFeedback: "以後也要一起留下更多金色記憶球🌕",
    isFinal: true,
    options: [
      {
        label: "願意 💗",
        feedback: "那我們說好了，不可以反悔喔！",
        reaction: "hearts",
      },
      {
        label: "非常願意 💞",
        feedback: "不管在哪裡，我都會陪妳！",
        reaction: "heartbeat",
      },
      {
        label: "這還用問嗎？🥰",
        feedback: "嘿嘿，我就知道妳會這樣回答！",
        reaction: "sparkles",
      },
    ],
  },
];
