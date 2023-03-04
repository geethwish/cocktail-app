import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import cocktailReducer from './slices/cocktail/getCocktailSlice';
import searchCocktailReducer from './slices/cocktail/searchCocktailSlice';
import favoriteCocktailReducer from './slices/cocktail/favoriteCocktailSlice';

export const store = configureStore({
  reducer: {
    cocktail: cocktailReducer,
    searchCocktail: searchCocktailReducer,
    favoriteCocktails: favoriteCocktailReducer
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
