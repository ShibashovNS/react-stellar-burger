import { createSlice } from "@reduxjs/toolkit";
import { setDetails } from "./detailsQuery";

const initialState = {
  clickStutus: false,
  dataId: " ",
  isLoding: false,
  error: " ",
};

const orderDetailsSlice = createSlice({
  name: "orderDetails",
  initialState,

  reducers: {
    clickDetails: (state, action) => {
      state.clickStutus = action.payload;
    }
  },

  extraReducers: (builder) => {
    builder
    .addCase(setDetails.pending.type, (state) => {
      state.isLoding = false;
      state.error = " ";
    }) 
    .addCase(setDetails.fulfilled.type, (state, action) => {
      state.isLoding = true;
      state.error = " ";
      state.dataId = action.payload.data;
    })  
    .addCase(setDetails.rejected.type, (state) => {
      state.isLoding = false;
      state.error = "Пока текст....";
    })
  }
  
});

export const {clickDetails} = orderDetailsSlice.actions;
export default orderDetailsSlice.reducer;
