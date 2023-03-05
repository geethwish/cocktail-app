import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import CocktailCard from './CocktailCard';
import { tempDrinks } from '../../static/tempDrinks';

describe('Cocktail Card', () => {
    test('renders cocktailCard', async () => {

        const data = tempDrinks[0]
        render(<CocktailCard data={data} />);

        const cocktailName = screen.getByText(/Margarita/i)

        await waitFor(() => expect(cocktailName).toBeInTheDocument())

    });
})