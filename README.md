<!--
 * @Author: lisongming
 * @Date: 2024-05-09 17:18:25
 * @LastEditors: lisongming
 * @Description: 描述
-->

# mouse-art

一款 改变 鼠标点击和移动效果的插件。给你提供丰富的特效选择

## 使用

### 1. 安装

```
npm install mouse-art
```

### 2. 使用

```markdown
import 'mouse-art/dist/index.css'
import mouseArt from 'mouse-art'

mouseArt({
effectType: 'love_rise'
})
```

### 3. 参数介绍

```markdown
** 所有参数均为非必传。 **

effectType: 代表点击特效类型。目前可选类型如下

- text_hidden
- love_rise
- circle_enlarge
- circle_cross_explosive

其余参数如下：
eventType?: "mousedown" | "mouseover"; // 事件类型，鼠标点击 | 鼠标移动 默认点击事件
effectType?: string | null; // 动画类型 默认 circle_random_explosive
duration?: number; // 动画持续时间 默认 0.7s
bindEle?: HTMLElement; // 绑定的元素， 默认document
bgImg?: string; // 传递该值 自动设置背景图， 默认无
text?: string; // effectType 设置为 text_hidden 时 才有意义。弹出的文字。
```
