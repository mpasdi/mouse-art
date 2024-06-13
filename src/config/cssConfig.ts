import less from "less";

// const duration = "--duration";

const themes = {
  light: {
    textColor: "black",
    primary: "purple",
  },
  dark: {
    textColor: "white",
    primary: "black",
  },
};

// 返回预定义的不同less 变量
function globalLessVariable(themeType: "light" | "dark" = "light") {
  return Object.assign({}, themes[themeType]);
}

/**
 * less.modifyVars 修改less 变量，
 * 但是没有生效
 */
function updateGlobalLessVariable(themeType: "light" | "dark" = "light") {
  const globalVariable = globalLessVariable(themeType);
  less
    .modifyVars(globalVariable)
    .then((res) => {
      console.info("修改主题成功", res);
    })
    .catch((e) => {
      console.error("修改主题失败", e);
    });
}

/**
 * 修改全局 style 变量
 * @param key
 * @param value
 * @param ele
 */
function updateRootStyleVariable(
  key: string,
  value: string,
  ele = document.documentElement,
) {
  if (!ele) return;
  ele.style.setProperty(key, value);
  return ele;
}

/**
 * 批量全局修改
 * @param styleObj
 * @param ele
 */
function batchUpdateEleStyleVariable(
  styleObj: { [key: string]: string },
  ele = document.documentElement,
) {
  for (const styleObjKey in styleObj) {
    if (Object.hasOwn(styleObj, styleObjKey)) {
      updateRootStyleVariable(styleObjKey, styleObj[styleObjKey], ele);
    }
  }
}

export {
  globalLessVariable,
  updateGlobalLessVariable,
  updateRootStyleVariable,
  batchUpdateEleStyleVariable,
};
