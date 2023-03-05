import { store } from '../../store';
import getCocktailReducer, { getCocktailList, resetCocktailListState } from './getCocktailSlice';

describe('Get Cocktail  reducer', () => {
  it('should handle initial state', () => {
    expect(getCocktailReducer(undefined, { type: 'unknown' })).toEqual({
      drinks: [],
      status: 'idle',
    });
  });

  it('should handle cocktail fetch', async () => {

    await store.dispatch(getCocktailList())

    const searchResult = store.getState().searchCocktail

    expect(searchResult.drinks).not.toBeNull();
  });

  it('should handle cocktail search state reset', async () => {

    await store.dispatch(resetCocktailListState())

    const searchResult = store.getState().searchCocktail

    expect(searchResult).toEqual({
      drinks: [],
      status: 'idle',
    });

  });
})