import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import CocktailSearchCard from './CocktailSearchCard';
import { tempDrinks } from '../../static/tempDrinks';

describe('Cocktail Search Card', () => {
    const mockHandleClick = jest.fn()
    const data = tempDrinks[0]

    test('Should renders cocktailCard', async () => {
        render(<CocktailSearchCard data={data} handleClick={mockHandleClick} />);

        const cocktailName = screen.getByText(/Margarita/i)

        await waitFor(() => expect(cocktailName).toBeInTheDocument())

    });

    test('should show add button', async () => {
        render(<CocktailSearchCard data={data} handleClick={mockHandleClick} />);

        const addButton = screen.getByRole('button', { name: 'plus' })

        await waitFor(() => expect(addButton).toBeInTheDocument())

    });

    test('should show add remove button', async () => {
        render(<CocktailSearchCard data={data} handleClick={mockHandleClick} deleteCocktail />);

        const addButton = screen.getByRole('button', { name: 'delete' })

        await waitFor(() => expect(addButton).toBeInTheDocument())

    });

    test('button click should trigger handleClick Function', async () => {
        render(<CocktailSearchCard data={data} handleClick={mockHandleClick} deleteCocktail />);

        const addButton = screen.getByRole('button', { name: 'delete' })

        fireEvent.click(addButton)

        await waitFor(() => expect(mockHandleClick).toBeCalledTimes(1))

    });

    test('add button click should trigger handleClick Function', async () => {
        render(<CocktailSearchCard data={data} handleClick={mockHandleClick} />);

        const addButton = screen.getByRole('button', { name: 'plus' })

        fireEvent.click(addButton)

        await waitFor(() => expect(mockHandleClick).toBeCalledTimes(1))

    });

})