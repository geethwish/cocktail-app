import { searchCocktailsByName } from './../../../Pages/home/cocktail.api';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { tempDrinks } from '../../../static/tempDrinks';

export interface CocktailListState {
    drinks: any;
    status: 'idle' | 'loading' | 'success' | 'failed';
}

const initialState: CocktailListState = {
    drinks: [],
    status: 'idle',
};

export const searchCocktails = createAsyncThunk(
    'cocktail/searchCocktails',
    async (params: Object) => {
        const response = await searchCocktailsByName(params);
        // The value we return becomes the `fulfilled` action payload
        return response.data;
    }
);

export const searchCocktailSlice = createSlice({
    name: 'searchCocktail',
    initialState,
    reducers: {
        resetSearchCocktailListState: (state) => {
            state.drinks = [];
            state.status = "idle"
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(searchCocktails.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(searchCocktails.fulfilled, (state, action) => {
                state.status = 'success';
                state.drinks = action.payload === undefined ? { drinks: tempDrinks } : action.payload; // Had to use temp data because got an api cors issue
            })
            .addCase(searchCocktails.rejected, (state) => {
                state.status = 'failed';
            });
    },
});

export const { resetSearchCocktailListState } = searchCocktailSlice.actions;
export const searchCocktailApiStatus = (state: RootState) => state.searchCocktail.status;
export const searchCocktailListResult = (state: RootState) => state.searchCocktail.drinks;
export default searchCocktailSlice.reducer;
