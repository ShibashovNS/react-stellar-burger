import { createSlice } from "@reduxjs/toolkit";
import Preloader from "../../../components/preloder/preloder";
import { sendOrder } from "../../../utils/api";

const initialState = {
  orderData: [],
  clickStutus: false,
  isLoding: false,
  error: " ",
};

const orderDetailsSlice = createSlice({
  name: "orderDetails",
  initialState,

  reducers: {
    clickDetails: (state, action) => {
      state.clickStutus = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(sendOrder.pending.type, (state, action) => {
        state.isLoding = false;
        state.error = " ";
      })
      .addCase(sendOrder.fulfilled.type, (state, action) => {
        state.isLoding = true;
        state.error = " ";
        state.orderData = action.payload.order.number;
        console.log(action)
      })
      .addCase(sendOrder.rejected.type, (state, action) => {
        state.isLoding = false;
        state.error = action.payload;
        console.log(action)
      });
  },
});

export const { clickDetails } = orderDetailsSlice.actions;
export default orderDetailsSlice.reducer;
