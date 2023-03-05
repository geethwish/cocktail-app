import { store } from '../../store';
import SearchCocktailReducer, { resetSearchCocktailListState, searchCocktails } from './searchCocktailSlice';

describe('Get Cocktail  reducer', () => {

    it('should handle initial state', () => {
        expect(SearchCocktailReducer(undefined, { type: 'unknown' })).toEqual({
            drinks: [],
            status: 'idle',
        });
    });

    it('should handle cocktail search', async () => {

        await store.dispatch(searchCocktails({ f: 's' }))

        const searchResult = store.getState().searchCocktail

        expect(searchResult.drinks).not.toBeNull();
    });

    it('should handle cocktail search state reset', async () => {

        await store.dispatch(resetSearchCocktailListState())

        const searchResult = store.getState().searchCocktail

        expect(searchResult).toEqual({
            drinks: [],
            status: 'idle',
        });
    });


});
