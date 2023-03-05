import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { CocktailStatePropsType } from '../../../Pages/home/cocktail.type';

export interface FavoriteCocktailListState {
    drinks: CocktailStatePropsType[];
}

const savedCocktails = JSON.parse(localStorage.getItem('cocktails') ?? '')
const initialState: FavoriteCocktailListState = {
    drinks: savedCocktails ?? [],
};

export const favoriteCocktailsList = createSlice({
    name: 'favoriteCocktails',
    initialState,
    reducers: {
        addToFavoriteList: (state, action) => {
            const newDrinks = state.drinks.concat(action.payload)

            // save favorite cocktails on local storage
            localStorage.setItem('cocktails', JSON.stringify(newDrinks))

            state.drinks = [...newDrinks];
        },
        removeCocktailFromFavoriteList: (state, action) => {
            const newCocktailList = state.drinks.filter((cocktail) => cocktail.idDrink !== action.payload.idDrink)

            localStorage.setItem('cocktails', JSON.stringify(newCocktailList))

            state.drinks = [...newCocktailList]

        },
        resetSearchCocktailListState: (state) => {
            state.drinks = [];
        },
    },
});

export const { resetSearchCocktailListState, addToFavoriteList, removeCocktailFromFavoriteList } = favoriteCocktailsList.actions;
export const favoriteDrinksList = (state: RootState) => state.favoriteCocktails.drinks;
export default favoriteCocktailsList.reducer;
