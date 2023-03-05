import { tempDrinks } from '../../../static/tempDrinks';
import { store } from '../../store';
import { addToFavoriteList, removeCocktailFromFavoriteList } from './favoriteCocktailSlice';
import { resetSearchCocktailListState } from './searchCocktailSlice';


describe('Favorite cocktails  reducer', () => {

    it('should handle add cocktail', async () => {

        await store.dispatch(addToFavoriteList(tempDrinks[0]))

        const searchResult = store.getState().favoriteCocktails

        expect(searchResult.drinks).not.toBeNull();
    });

    it('should handle favorite cocktails state reset', async () => {

        await store.dispatch(resetSearchCocktailListState())

        const searchResult = store.getState().searchCocktail

        expect(searchResult).toEqual({
            drinks: [],
            status: 'idle',
        });

    });

    it('should handle favorite cocktails remove', async () => {

        await store.dispatch(removeCocktailFromFavoriteList(tempDrinks[0]))

        const searchResult = store.getState().searchCocktail

        expect(searchResult).toEqual({
            drinks: [],
            status: 'idle',
        });

    });
})