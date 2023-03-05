import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import FavoriteCocktailList from './FavoriteCocktailList';
import TestWrapperComponent from '../testWrapperComponent/TestWrapperComponent';
import { store } from '../../redux/store';

describe('Cocktail Search Card', () => {
    const mockHandleClick = jest.fn()
    const mockUseAppDispatch = jest.fn()
    jest.mock('react-router-dom', () => ({
        ...jest.requireActual('react-router-dom'),
        useAppDispatch: () => mockUseAppDispatch
    }))
    test('Should renders cocktailCard', async () => {

        render(<TestWrapperComponent>
            <FavoriteCocktailList title={'Favorite cocktails'} width={520} open={true} onClose={mockHandleClick} />
        </TestWrapperComponent>);

        const cocktailName = screen.getByText(/Favorite/i)

        await waitFor(() => expect(cocktailName).toBeInTheDocument())

    });

})