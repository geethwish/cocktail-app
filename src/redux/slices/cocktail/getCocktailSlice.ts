import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { fetchCocktailList } from '../../../Pages/home/cocktail.api';

export interface CounterState {
    value: number;
    status: 'idle' | 'loading' | 'failed';
}

const initialState: CounterState = {
    value: 0,
    status: 'idle',
};


export const getCocktailList = createAsyncThunk(
    'cocktail/fetchList',
    async (amount: number) => {
        const response = await fetchCocktailList(amount);
        // The value we return becomes the `fulfilled` action payload
        return response.data;
    }
);

export const cocktailSlice = createSlice({
    name: 'cocktail',
    initialState,
    reducers: {
        resetCocktailListState: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCocktailList.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getCocktailList.fulfilled, (state, action) => {
                state.status = 'idle';
                state.value += action.payload;
            })
            .addCase(getCocktailList.rejected, (state) => {
                state.status = 'failed';
            });
    },
});

export const { resetCocktailListState } = cocktailSlice.actions;
export const cocktailApiStatus = (state: RootState) => state.cocktail.value;
export default cocktailSlice.reducer;
