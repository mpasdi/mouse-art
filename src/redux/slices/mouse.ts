import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { MouseArtOptionsType } from "@/types";
import type { WritableDraft } from "immer";

interface initialStateType {
  mouseCoordinate: { x: number; y: number };
  artOption: MouseArtOptionsType;
}
const initialState: initialStateType = {
  mouseCoordinate: {
    x: 0,
    y: 0,
  },
  artOption: {},
};

// 创建一个 slice
const mouseSlice = createSlice({
  name: "mouse",
  initialState,
  reducers: {
    updateMouseCoordinate: (state, action: PayloadAction<[number, number]>) => {
      const [x, y] = action.payload;
      state.mouseCoordinate.x = x;
      state.mouseCoordinate.y = y;
    },
    updateArtOption: (state, action: PayloadAction<MouseArtOptionsType>) => {
      state.artOption = action.payload as WritableDraft<MouseArtOptionsType>;
      console.log(state.artOption);
    },
  },
});

// function getStore(getStore: EnhancedStore) {
//   store = getStore;
// }

// export const { updateMouseCoordinate } = mouseSlice.actions;

export default mouseSlice;
