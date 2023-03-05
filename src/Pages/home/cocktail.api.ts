import axios from 'axios';
import { generateRandomLetter } from '../../utils/randomLetterGenarator';

export const fetchCocktailList = async (): Promise<any> => {
    const randomLetter = generateRandomLetter()
    return await axios.get(`http://www.thecocktaildb.com/api/json/v1/1/search.php`, { params: { f: randomLetter } })
        .then((response) => response).catch((error) => error)
}
export const searchCocktailsByName = async (params: Object): Promise<any> =>
    await axios.get(`http://www.thecocktaildb.com/api/json/v1/1/search.php`, { params: Object.keys(params).length > 0 ? params : '' })
        .then((response) => response).catch((error) => error)

