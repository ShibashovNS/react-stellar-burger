import { createAsyncThunk } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import thunk from "redux-thunk";
import { BASE_URL, checkResponse } from "../../../utils/api";
import { addBun, addIngredient } from "./burgerConstructorSlice";

export const setDetails = createAsyncThunk(
  "details/post",
  async (dataId, thunkApi) => {
    const res = await fetch(`${BASE_URL}/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ingredients: dataId,
      }),
    });
    return checkResponse(res);
  }
);
