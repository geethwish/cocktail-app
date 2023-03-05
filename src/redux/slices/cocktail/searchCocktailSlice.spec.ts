import SearchCocktailReducer, {
} from './searchCocktailSlice';

describe('Get Cocktail  reducer', () => {
    it('should handle initial state', () => {
        expect(SearchCocktailReducer(undefined, { type: 'unknown' })).toEqual({
            drinks: [],
            status: 'idle',
        });
    });

});
