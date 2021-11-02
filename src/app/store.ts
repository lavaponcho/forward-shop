import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import productSlice from '../features/products/productSlice';
import cartSlice from '../features/cart/cartSlice';
import orderSlice from '../features/order/orderSlice';

export const store = configureStore({
  reducer: {
    product: productSlice,
    cart:cartSlice,
    order:orderSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
