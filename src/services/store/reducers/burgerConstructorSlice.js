import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  draggedBun: [],
  draggedIngredients: [],
};

const burgerConstructorSlice = createSlice({
  name: "constIngredient",
  initialState,

  reducers: {
    addBun: (state, action) => {
      state.draggedBun = [action.payload];
    },

    addIngredient: (state, action) => {
      state.draggedIngredients = [...state.draggedIngredients, action.payload];
    },

    deliteIngredient: (state, action) => {
      state.draggedIngredients = [
        ...state.draggedIngredients.filter(
          (item) => item._uuid !== action.payload
        ),
      ];
    },
  },
});

export const { addBun, addIngredient, deliteIngredient } =
  burgerConstructorSlice.actions;
export default burgerConstructorSlice.reducer;
