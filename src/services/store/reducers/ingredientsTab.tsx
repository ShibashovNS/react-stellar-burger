import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  typeTab: null,
};

export const ingredientsTabSlice = createSlice({
  name: "ingredientsTab",
  initialState,

  reducers: {
    changeTypeTab: (state, action) => {
      state.typeTab = action.payload;
    },
  },
});

export const { changeTypeTab } = ingredientsTabSlice.actions;
export default ingredientsTabSlice.reducer;
