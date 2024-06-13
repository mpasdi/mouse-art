function getImageUrl(path: string) {
  if (path.startsWith("http")) return path;
  // ../ 是为了 解析的时候是从src 目录下开始解析
  return new URL(`../${path}`, import.meta.url).href;
}

export { getImageUrl };
