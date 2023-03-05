import getCocktailReducer, {
} from './getCocktailSlice';

describe('Get Cocktail  reducer', () => {
  it('should handle initial state', () => {
    expect(getCocktailReducer(undefined, { type: 'unknown' })).toEqual({
      drinks: [],
      status: 'idle',
    });
  });

});
