import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  restaurent: null,
};

const restaurantSlice = createSlice({
  name: "restaurent",
  initialState,
  reducers: {
    setRestaurent(state, action) {
      state.restaurent = action.payload;
    },
  },
});

export const { setRestaurent } = restaurantSlice.actions;

export const selectRestaurent = (state: any) => state.restaurent.restaurent;


export default restaurantSlice.reducer;
