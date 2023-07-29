import { createAsyncThunk } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { BASE_URL, checkResponse } from "../../../utils/api";

export const fetchIngredients = createAsyncThunk(
  "ingredients/get",
  async (_, thunkApi) => {
    const res = await fetch(`${BASE_URL}/ingredients`);
    return checkResponse(res);
  }
);
