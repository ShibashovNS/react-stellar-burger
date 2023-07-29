import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  typeTab: null,
};

const ingredientsTabSlice = createSlice({
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
