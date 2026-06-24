import type { MouseArtOptionsType } from '@/types'

const state: {
  mouseCoordinate: { x: number; y: number }
  artOption: MouseArtOptionsType
} = {
  mouseCoordinate: { x: 0, y: 0 },
  artOption: {}
}

// mouse Coordinate
function getMouseCoordinate() {
  return state.mouseCoordinate
}

function setMouseCoordinate(x: number, y: number) {
  state.mouseCoordinate = { x, y }
}

// mouse art options
function getArtOption() {
  return state.artOption
}

function setArtOption(artOption: MouseArtOptionsType) {
  state.artOption = artOption
}

export { getMouseCoordinate, setMouseCoordinate, getArtOption, setArtOption }
