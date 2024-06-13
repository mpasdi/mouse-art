import store, { mouseSlice } from "@/redux/index.ts";
import type { MouseArtOptionsType } from "@/types";

const { updateMouseCoordinate, updateArtOption } = mouseSlice.actions;

// mouse Coordinate
function getMouseCoordinate() {
  const state = store.getState();
  return state.mouse.mouseCoordinate;
}

function setMouseCoordinate(x: number, y: number) {
  store.dispatch(updateMouseCoordinate([x, y]));
}

// mouse art options
function getArtOption() {
  const state = store.getState();
  return state.mouse.artOption;
}

function setArtOption(artOption: MouseArtOptionsType) {
  store.dispatch(updateArtOption(artOption));
}

export { getMouseCoordinate, setMouseCoordinate, getArtOption, setArtOption };
