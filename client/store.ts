import { configureStore } from '@reduxjs/toolkit';
import restaurantSlice from './slice/restaurentSlice';
import cartSlice from './slice/cartSlice';

const store = configureStore({
  reducer: {
    restaurent: restaurantSlice, 
    cart: cartSlice, 
  },
});

export default store;
