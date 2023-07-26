import { createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import thunk from "redux-thunk";

const dataId = ["643d69a5c3f7b9001cfa0941","643d69a5c3f7b9001cfa0941"]




export const setDetails = createAsyncThunk(
  "details/post",
  async (dataId, thunkApi) => {
    try {
      const res = await fetch("https://norma.nomoreparties.space/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ingredients: dataId,
        }),
      });

      if (res.ok) {
        return res.json();
      }
      /*при ошибке отклоняю промис*/
      return Promise.reject(`Ошибка: ${res.status}`);

    } catch (err) {
      return thunkApi.rejectWithValue("Пока текст");
    }
  }
);


