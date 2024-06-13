import "./css/index.less";
import { setMouseCoordinate, setArtOption } from "@/redux/getSet.ts";
// import viteLogo from "/favicon.ico";
import effects from "./mouseClickEffect/circle.ts";
import type { effectsTypes } from "./mouseClickEffect/circle.ts";
import "animate.css";

// type
import type { MouseArtOptionsType } from "./types";
import { batchUpdateEleStyleVariable } from "./config/cssConfig.ts";
import { getImageUrl } from "./utils/tools.ts";

// const appEle = document.querySelector<HTMLDivElement>("#app")!;

// appEle.innerHTML = `
//   <div class="border">
//       <img src="${viteLogo}" class="logo" alt="Vite" />
//       <div class="heart" id="heart" ></div>
//   </div>
// `;

// 获取心形元素并添加点击事件监听器
const heartEle = document.querySelector<HTMLDivElement>("#heart");
if (heartEle) {
  heartEle.addEventListener("click", () => {});
}

/**
 * @param options
 */
function mouseArt(options: MouseArtOptionsType = {}) {
  const {
    bindEle = document,
    eventType = "mousedown",
    effectType,
    duration = 0.7,
    bgImg,
  } = options;

  setArtOption({
    ...options,
    bgImg: bgImg && getImageUrl(bgImg),
    bindEle: undefined, // 是个元素 不能序列化，存储在redux中报错。
  });

  batchUpdateEleStyleVariable({ "--duration": `${duration}s` });
  localStorage.setItem("duration", duration.toString());

  if (effectType === null) return;
  const mouseEventCallback = (event: Event) => {
    event.stopPropagation();

    const x = (event as MouseEvent).x;
    const y = (event as MouseEvent).y;
    setMouseCoordinate(x, y);

    const effectTypeName = (effectType ||
      "circle_random_explosive") as keyof effectsTypes;

    const createEle = effects[effectTypeName]();

    // 特效元素 加载到body中
    document.body.appendChild(createEle);
    // TODO： 尝试变更 销毁逻辑 逻辑
    setTimeout(() => {
      document.body.removeChild(createEle);
    }, duration * 1000);
  };

  bindEle.addEventListener(eventType, mouseEventCallback);
}

export default mouseArt;
// TODO : duration 会相互影响

// mouseArt({
//   effectType: "circle_cross_explosive",
//   duration: 0.5,
//   // bgImg: "assets/imgs/sw.jpg",
// });

// mouseArt({
//   effectType: "circle_enlarge",
//   duration: 1,
//   bgImg: "assets/imgs/sw.jpg",
// });

// mouseArt({
//   bindEle: appEle,
//   eventType: "mousedown",
//   duration: 0.5,
//   bgImg: "assets/imgs/sw.jpg",
// });

// mouseArt({
//   effectType: "love_rise",
// });

// mouseArt({
//   effectType: "circle_rotate_yin_yang",
// });

// mouseArt({
//   effectType: "text_hidden",
// });

// mouseArt();
