import axios from 'axios';

export const fetchCocktailList = async (params: Object): Promise<any> => await axios.get(`http://www.thecocktaildb.com/api/json/v1/1/random.php`, { params: Object.keys(params).length > 0 ? params : '' }).then((response) => response).catch((error) => error)

