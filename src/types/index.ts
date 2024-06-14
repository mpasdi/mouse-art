interface MouseArtOptionsType {
  eventType?: "mousedown" | "mouseover"; // 事件类型，鼠标点击 | 鼠标移动
  effectType?: string | null; // 动画类型, TODO: 换成 已有特性类型
  duration?: number; // 动画持续时间
  bindEle?: HTMLElement;
  bgImg?: string; // 传递该值 自动设置背景图
  text?: string; //  text_hidden 特效， 该属性才有意义。
}

export type { MouseArtOptionsType };
