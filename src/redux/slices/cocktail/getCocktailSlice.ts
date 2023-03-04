import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { fetchCocktailList } from '../../../Pages/home/cocktail.api';

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
    async (params: Object) => {
        const response = await fetchCocktailList(params);
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
            state.status="idle"
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCocktailList.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getCocktailList.fulfilled, (state, action) => {
                state.status = 'success';
                state.drinks = action.payload;
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
