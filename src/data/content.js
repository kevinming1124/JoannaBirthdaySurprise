const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

/**
 * 正式素材集中替換處：
 * 1. 可直接更換下方路徑。
 * 2. 所有正式照片請先裁切為 9:16 直式比例，再放進 public/images。
 * 3. 網站不會對照片執行裁切、壓縮或濾鏡處理。
 */
export const photoAssets = {
  destinations: {
    amusementPark: asset("images/amusement-park.jpg"),
    beach: asset("images/beach.jpg"),
    shopping: asset("images/shopping.jpg"),
  },
  carousel: [
    { src: asset("images/memory-1.jpg"), alt: "回憶照片一" },
    { src: asset("images/memory-2.jpg"), alt: "回憶照片二" },
    { src: asset("images/memory-3.jpg"), alt: "回憶照片三" },
    { src: asset("images/memory-4.jpg"), alt: "回憶照片四" },
    { src: asset("images/memory-5.jpg"), alt: "回憶照片五" },
    { src: asset("images/memory-6.jpg"), alt: "回憶照片六" },
  ],
};

export const letterContent = {
  heading: "給最可愛的 Joanna",
  paragraphs: [
    "Joanna 寶寶生日快樂! 恭喜妳變成美麗又可愛的24歲，很開心可以和妳一起慶祝這個特別的日子。雖然沒有手寫，但還是有花了點小心思設計，希望寶寶會喜歡。",
    "今年是非常非常特別的一年，很幸運可以成為 Joanna 的 Best Partner。過生日象徵變得更成熟懂事，但希望妳依舊能像個孩子撒嬌鬧脾氣，讓我在妳身心疲憊的時候把妳摟進懷裡。妳說妳比自己想得更喜歡 Kevin，但其實是妳變得更勇敢。勇敢規劃自己的未來、踏入不熟悉的環境、表達自己的想法。這些讓妳比天空中任何一顆星還要閃耀。我喜歡妳，不論我們之間時空多遙遠，對彼此的喜歡也不會被阻斷。我喜歡妳，不論作息多不同，都期待互相分享的每分每秒。就算認識十年，我還是想知道更多關於妳的事，跟妳度過無數的春夏秋冬，帶妳走過世界各個美麗的角落。",
    "謝謝23歲的昱婷把 Kevin 撿回來，祝24歲 Joanna 去菲律賓、加拿大、還是任何地方，都可以順利完成! 希望這個小驚喜有變成一個金色記憶球，可以在回想時候每天都像過生日~ 讓 Joanna 天天開心~"
  ],
  signature: "Kevin",
};
