import { fetchIngredients } from './ingredientQuery'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  
  ingredients: [],
  isLoding: false,
  error: " ",
}

const burgerIngredientsSlice = createSlice({
  name: 'ingredients',
  initialState,
  /*
  reducers: {
    ingredientsUploading(state, action) {
      state.isLoding = true;
      state.error = " ";
    },

    ingredientsUpload(state, action) {
      state.isLoding = false;
      state.error = " ";
      state.bun = action.payload.data.filter(item => item.type === 'bun');
      state.ingredients = action.payload.data.filter(item => item.type !== 'bun');
      console.log(state.ingredients)
    },

    ingredientsUploadError(state) {
      state.isLoding = false;
      state.error = "action.error";
    }
  }, */
  extraReducers: (builder) => {
    builder
    // Add reducers for additional action types here, and handle loading state as needed
    .addCase(fetchIngredients.pending.type, (state) => {
      state.isLoding = false;
      state.error = " ";
    }) 
      
    .addCase(fetchIngredients.fulfilled.type, (state, action) => {
      state.isLoding = true;
      state.error = " ";
      state.ingredients = action.payload.data;
    })
      
    .addCase(fetchIngredients.rejected.type, (state) => {
      state.isLoding = false;
      state.error = "Проверка";
    })
  }
})

export const { ingredientsUploading,  ingredientsUpload, ingredientsUploadError} = burgerIngredientsSlice.actions;
export default burgerIngredientsSlice.reducer;