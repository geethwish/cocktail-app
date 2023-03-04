import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { CocktailStatePropsType } from '../../../Pages/home/cocktail.type';

export interface FavoriteCocktailListState {
    drinks: CocktailStatePropsType[];
}

const initialState: FavoriteCocktailListState = {
    drinks: [],
};


export const favoriteCocktailsList = createSlice({
    name: 'favoriteCocktails',
    initialState,
    reducers: {
        addToFavoriteList: (state,action) => {
            state.drinks = [...state.drinks,...action.payload];
        },
        resetSearchCocktailListState: (state) => {
            state.drinks = [];
        },
    },
});

export const { resetSearchCocktailListState,addToFavoriteList } = favoriteCocktailsList.actions;
export const favoriteDrinksList = (state: RootState) => state.favoriteCocktails.drinks;
export default favoriteCocktailsList.reducer;
