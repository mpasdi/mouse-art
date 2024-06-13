/**
 *  使用js 操作css， 形成css 动画
 *  所有的 animation 都只针对单个元素
 */

import { generateRandomColor, generateSimilarColors } from "../utils/color.ts";
import { dynamicAddCssSheet } from "../utils/cssUtils.ts";
import { v4 as uuidv4 } from "uuid";

// 元素 随机向一个方向移动
function specificDirectMove(deg?: number, distance: number = 100) {
  const unique_className = "animation_move_" + uuidv4();
  const randomOne = Math.random();
  const randomTwo = Math.random();
  const similarColors = generateSimilarColors("#4169E1");
  const duration = localStorage.getItem("duration");

  function signType() {
    return Math.random() > 0.5 ? 1 : -1;
  }

  // 传了deg移动到指定方向， 没有传， 则移动任意位置
  const translateX =
    deg || deg === 0
      ? Math.cos((Math.PI / 180) * deg) * distance
      : randomOne * 100 * signType();
  const translateY =
    deg || deg === 0
      ? Math.sin((Math.PI / 180) * deg) * distance
      : randomTwo * 100 * signType();

  const animation = [
    `
      @keyframes ${unique_className} {
        0% {
          opacity: 1;
          width: ${randomOne * 20 + 10}px;
          height: ${randomOne * 20 + 10}px;
          background-color: ${generateRandomColor()};
          // background-color: ${similarColors[Math.floor(randomOne * similarColors.length)]};
          border: none;
        }
        100% {
          opacity: 1;
          width: 0; 
          height: 0; 
          transform: translate(${translateX}px, ${translateY}px);
          border: none;
        } 
      }`,
    `
      .${unique_className} {
        animation: ${unique_className} ${duration}s ease-out;
        animation-fill-mode: forwards;
      }
    `,
  ];
  dynamicAddCssSheet(() => animation);

  return unique_className;
}

export { specificDirectMove };
