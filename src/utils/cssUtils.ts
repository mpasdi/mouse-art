/**
 * 动态添加样式表
 * @param callback 提供动画类名的回调
 */
function dynamicAddCssSheet(callback: () => Array<any>) {
  let styleEle: HTMLStyleElement | null = document.getElementById(
    "dynamic-animation-style",
  ) as HTMLStyleElement;

  if (!styleEle) {
    styleEle = document.createElement("style");
    styleEle.setAttribute("id", "dynamic-animation-style");
    const headEle = document.querySelector("head")!;
    headEle.appendChild(styleEle);
  }

  const styleSheet = styleEle.sheet!;

  // 样式表中动态添加的css过多则清空
  // TODO: 设置 值 比较小的时候， 快速点击 删除动画，但是此时元素还没删除。会残存一段时间。
  // TODO: 1. 所有元素形状不添加大小。 2.在停止点击之后的一段时间统一删除
  while (styleSheet.cssRules.length > 300) {
    styleSheet.deleteRule(0);
  }

  const cssList = callback();
  if (styleSheet.insertRule) {
    cssList.forEach((animation: string) => {
      styleSheet.insertRule(animation, styleSheet.cssRules.length);
    });
  } else {
    // animations.forEach((animation) => {
    //   const animationName = animation.trimStart().split(" ")[1];
    //   styleSheet.addRule(`@keyframes ${animationName}`, animation);
    // });
  }
}

/**
 * 给元素添加背景
 * @param bindEle
 * @param url
 */
function cssAddBackgroundImg<T extends HTMLElement>(bindEle: T, url: string) {
  bindEle.style.cssText =
    bindEle.style.cssText +
    `
      background: url(${url}) center no-repeat;
      background-size: 100% 100%;
      border: none;
    `;
  return bindEle;
}

/**
 * 改变 :root 中设置的全局属性。
 * @param key
 * @param value
 */
function cssUpdateRootAttr(key: string, value: string) {
  const root = document.documentElement;

  // 动态设置 CSS 变量的值
  root.style.setProperty(key, value);
}

export { dynamicAddCssSheet, cssAddBackgroundImg, cssUpdateRootAttr };
