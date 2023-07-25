import { createAsyncThunk } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

export const fetchIngredients = createAsyncThunk(
  'ingredients/get', 
  async (_, thunkApi) => {
    try {
      const res = await fetch("https://norma.nomoreparties.space/api/ingredients");
      const base = await res.json();
      return base;
    } catch (err) {
      console.log(err)
      return thunkApi.rejectWithValue('asdasd')
    }
  } 
)
