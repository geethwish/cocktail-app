import { createAsyncThunk, createSlice, } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { fetchCocktailList } from '../../../Pages/home/cocktail.api';
import { tempDrinks } from '../../../static/tempDrinks';

export interface CounterState {
    drinks: any;
    status: 'idle' | 'loading' | 'success' | 'failed';
}

const initialState: CounterState = {
    drinks: [],
    status: 'idle',
};

export const getCocktailList = createAsyncThunk(
    'cocktail/fetchList',
    async () => {
        const response = await fetchCocktailList();
        // The value we return becomes the `fulfilled` action payload
        return response.data;
    }
);

export const cocktailSlice = createSlice({
    name: 'cocktail',
    initialState,
    reducers: {
        resetCocktailListState: (state) => {
            state.drinks = [];
            state.status = "idle"
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCocktailList.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getCocktailList.fulfilled, (state, action) => {

                state.status = 'success';
                state.drinks = action.payload === undefined ? { drinks: tempDrinks } : action.payload; // Had to use temp data because got an api cors issue
            })
            .addCase(getCocktailList.rejected, (state) => {

                state.status = 'failed';
            });
    },
});

export const { resetCocktailListState } = cocktailSlice.actions;
export const cocktailApiStatus = (state: RootState) => state.cocktail.status;
export const cocktailListResult = (state: RootState) => state.cocktail.drinks;
export default cocktailSlice.reducer;
