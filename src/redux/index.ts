import { configureStore } from "@reduxjs/toolkit";
import mouseSlice from "@/redux/slices/mouse.ts";

const store = configureStore({
  reducer: {
    mouse: mouseSlice.reducer,
  },
});

export { mouseSlice };
export default store;
