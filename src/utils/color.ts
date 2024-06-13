function generateRandomColor(randomNum?: number) {
  if (!randomNum) randomNum = 256;
  randomNum = randomNum > 256 ? 256 : randomNum;
  // 生成RGB分量的随机值
  const r = Math.round(Math.random() * randomNum);
  const g = Math.round(Math.random() * randomNum);
  const b = Math.round(Math.random() * randomNum);

  // 将RGB值转换为十六进制表示

  return "#" + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1);
}

function generateSimilarColors(color: string) {
  // 解析十六进制颜色值为 RGB 值
  const r = parseInt(color.substring(1, 3), 16);
  const g = parseInt(color.substring(3, 5), 16);
  const b = parseInt(color.substring(5, 7), 16);

  // 调整 RGB 值生成相近颜色
  const delta = 32; // 调整量

  const similarColors = [];

  // 调整红色通道
  for (let i = -1; i <= 1; i++) {
    const adjustedR = Math.min(Math.max(0, r + i * delta), 255);
    // 调整绿色通道
    for (let j = -1; j <= 1; j++) {
      const adjustedG = Math.min(Math.max(0, g + j * delta), 255);
      // 调整蓝色通道
      for (let k = -1; k <= 1; k++) {
        const adjustedB = Math.min(Math.max(0, b + k * delta), 255);
        // 将调整后的颜色添加到结果数组中
        similarColors.push(
          "#" +
            ("00" + adjustedR.toString(16)).slice(-2) +
            ("00" + adjustedG.toString(16)).slice(-2) +
            ("00" + adjustedB.toString(16)).slice(-2),
        );
      }
    }
  }

  return similarColors;
}

export { generateRandomColor, generateSimilarColors };
