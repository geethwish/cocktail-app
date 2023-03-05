import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import CocktailSearchCard from './CocktailSearchCard';
import { tempDrinks } from '../../static/tempDrinks';

describe('Cocktail Search Card', () => {
    const mockHandleClick = jest.fn()

    test('Should renders cocktailCard', async () => {
        const data = tempDrinks[0]

        render(<CocktailSearchCard data={data} handleClick={mockHandleClick} />);

        const cocktailName = screen.getByText(/Margarita/i)

        await waitFor(() => expect(cocktailName).toBeInTheDocument())

    });
})