import { createSlice } from "@reduxjs/toolkit";
import { setDetails } from "./detailsQuery";
import Preloader from "../../../components/preloder/preloder";

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
      .addCase(setDetails.pending.type, (state, action) => {
        state.isLoding = false;
        state.error = " ";
      })
      .addCase(setDetails.fulfilled.type, (state, action) => {
        state.isLoding = true;
        state.error = " ";
        state.orderData = action.payload.order.number;
        console.log(action)
      })
      .addCase(setDetails.rejected.type, (state, action) => {
        state.isLoding = false;
        state.error = action.payload;
        console.log(action)
      });
  },
});

export const { clickDetails } = orderDetailsSlice.actions;
export default orderDetailsSlice.reducer;
