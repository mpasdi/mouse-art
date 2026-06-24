# mouse-art

一个轻量的鼠标点击/移入特效库，用于给页面元素添加简单的鼠标动画效果。

## 维护状态

本项目当前处于低维护状态：保留可安装、可构建、可使用的基础能力，不再计划继续扩展大量新特效。适合用于个人页面、演示项目或低风险装饰性场景。

## 安装

```bash
npm install mouse-art
```

## 使用

```ts
import "mouse-art/dist/index.css";
import mouseArt from "mouse-art";

const controller = mouseArt({
  effectType: "love_rise",
});

// 不再需要特效时解绑事件监听
controller.destroy();
```

## 参数

所有参数均为可选。

```ts
type MouseArtEffectType =
  | "text_hidden"
  | "love_rise"
  | "circle_enlarge"
  | "circle_random_explosive"
  | "circle_cross_explosive"
  | "circle_rotate_yin_yang";

interface MouseArtOptionsType {
  eventType?: "mousedown" | "mouseover";
  effectType?: MouseArtEffectType | null;
  duration?: number;
  bindEle?: Document | HTMLElement;
  bgImg?: string;
  text?: string;
}
```

## 效果类型

- `text_hidden`: 点击弹出文字后隐藏
- `love_rise`: 上升爱心
- `circle_enlarge`: 圆圈放大，可搭配 `bgImg`
- `circle_random_explosive`: 随机圆圈爆炸
- `circle_cross_explosive`: 十字方向圆圈爆炸，可搭配 `bgImg`
- `circle_rotate_yin_yang`: 太极旋转

## 开发

```bash
npm run build
```
