import { getMouseCoordinate, getArtOption } from "@/redux/getSet.ts";
import { cssAddBackgroundImg } from "./cssUtils.ts";

/**
 * 生成定位元素。 也是特效容器元素
 * @param x 元素x 坐标
 * @param y 元素y 坐标
 */
function drawMouseWrapEle() {
  const { x, y } = getMouseCoordinate();
  const mouseEle = document.createElement("div");
  mouseEle.style.cssText = `
    top: ${y}px;
    left: ${x}px;
    transform: translate(-50%, -50%);
    position: fixed;
    pointer-events: none;
    display: flex;
    justify-content:center;
    align-items: center;
  `;

  return mouseEle;
}

function drawMouseInnerEle(classList: string[] = [], content?: string) {
  const { bgImg } = getArtOption();
  let mouseEle = document.createElement("div");
  if (content) mouseEle.innerHTML = content;
  // top: 50%;
  // left: 50%;
  // transform: translate(-50%, -50%);
  mouseEle.style.cssText = `
    position: absolute;
    white-space: nowrap; // 加上absolute 会使内容换行。
  `;

  if (bgImg) mouseEle = cssAddBackgroundImg(mouseEle, bgImg);

  mouseEle.classList.add(...classList.filter(Boolean));

  return mouseEle;
}

export { drawMouseWrapEle, drawMouseInnerEle };
