module.exports = {
  printWidth: 100,
  // 每行代码长度
  tabWidth: 2,
  // 每个tab相当于多少个空格（默认2）
  useTabs: false,
  // 使用tab缩进，默认false
  semi: false,
  // 声明结尾使用分号(默认true)
  singleQuote: true,
  // 使用单引号（默认false）
  quoteProps: "as-needed",
  jsxSingleQuote: false,
  trailingComma: "none",
  // 对象最后一个属性不加添加逗号
  jsxBracketSameLine: false,
  arrowParens: "always",
  // 箭头函数参数括号 可选 avoid| always  默认avoid
  bracketSpacing: true,
  // 对象字面量的大括号间使用空格（默认true）
  // avoid： 能省略括号的时候就省略 例如x => x, always: 总有括号
  htmlWhitespaceSensitivity: "ignore",
  vueIndentScriptAndStyle: true,
  // 控制vue中的Script 和css 的缩进
  endOfLine: "auto",
};
