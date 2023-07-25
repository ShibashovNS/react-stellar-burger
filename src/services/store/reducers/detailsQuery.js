import { createAsyncThunk } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  /*при ошибке отклоняю промис*/
  return Promise.reject(`Ошибка: ${res.status}`);
}


export const setDetails = (DataId) => createAsyncThunk(
  'details/post', 
  async (_, thunkApi) => {
    try {
      const res = await fetch("https://norma.nomoreparties.space/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ingredients : DataId }),
      });
      checkResponse(res);
    } catch (err) {
      return thunkApi.rejectWithValue('Пока текст')
    }
  } 
)


/*
export function setCard(url, name) {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers,
    method: "POST",
    body: JSON.stringify({
      link: url,
      name: name,
    }),
  }).then(checkResponse);
}
*/