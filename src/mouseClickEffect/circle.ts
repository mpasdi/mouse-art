import { drawMouseWrapEle, drawMouseInnerEle } from "../utils/drawEle.ts";
import { specificDirectMove } from "@/dynamicAnimations";
import { generateRandomColor } from "@/utils/color.ts";
import { updateRootStyleVariable } from "@/config/cssConfig.ts";

/**
 *  圆扩增
 */
function circle_enlarge() {
  const circleWrap = drawMouseWrapEle();

  const circleEle = drawMouseInnerEle(["circle-hollow-expand"]);
  circleWrap.appendChild(circleEle);

  return circleWrap;
}

/**
 * 中间圆扩增， 四周随机扩散（爆照效果）
 */
function circle_random_explosive() {
  const circleWrap = circle_enlarge();

  for (let i = 0; i < 20; i++) {
    const animationCss = specificDirectMove();
    const circleEle = drawMouseInnerEle([animationCss, "circle-hollow"]);
    circleWrap.appendChild(circleEle);
  }

  // circleWrap.appendChild(circleEle);
  return circleWrap;
}

/**
 * 中间圆扩增， 四周东南西北移动（十字架）
 */
function circle_cross_explosive() {
  const circleWrap = circle_enlarge();
  for (let i = 0; i < 4; i++) {
    const animationCss = specificDirectMove(90 * i);
    const innerEle = drawMouseInnerEle([animationCss, "circle-hollow"]);

    circleWrap.appendChild(innerEle);
  }
  return circleWrap;
}

function love_rise() {
  const color = generateRandomColor();
  updateRootStyleVariable("--shape-color", color);
  const circleWrap = drawMouseWrapEle();
  const innerEle = drawMouseInnerEle(["heart", "heart_move_top"]);

  circleWrap.appendChild(innerEle);
  return circleWrap;
}

function circle_rotate_yin_yang() {
  const circleWrap = drawMouseWrapEle();
  const innerEle = drawMouseInnerEle(["yin-yang", "yin-yang-sr"]);

  circleWrap.appendChild(innerEle);
  return circleWrap;
}

function text_hidden() {
  const circleWrap = drawMouseWrapEle();
  const innerEle = drawMouseInnerEle(
    ["animate__animated", "animate__zoomOutDown"], //  animate__zoomOutUp
    "chinese red",
  );

  circleWrap.appendChild(innerEle);
  return circleWrap;
}

const effects = {
  circle_enlarge,
  circle_random_explosive,
  circle_cross_explosive,
  love_rise,
  circle_rotate_yin_yang,
  text_hidden,
};

type effectsTypes = typeof effects;
export default effects;

export type { effectsTypes };
