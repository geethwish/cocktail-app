import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import cocktailReducer from './slices/cocktail/getCocktailSlice';

export const store = configureStore({
  reducer: {
    cocktail: cocktailReducer
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
