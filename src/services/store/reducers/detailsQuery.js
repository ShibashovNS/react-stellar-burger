import { createAsyncThunk } from "@reduxjs/toolkit";
import { sendOrder } from "../../../utils/api";

// у thunkApi есть методы
export const setDetails = createAsyncThunk("details/post", (id, thunkApi) =>
  sendOrder(id)
);
