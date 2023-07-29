import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  elements: [],
};

const dragAndDropSlice = createSlice({
  name: "dragAndDropState",
  initialState,

  reducers: {
    element: (state, action) => {
      state.elements = action;
    },
  },
});

export const { draggedElements, element } = dragAndDropSlice.actions;
export default dragAndDropSlice.reducer;
