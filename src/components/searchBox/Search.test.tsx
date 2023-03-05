import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Search from './Search';
import { tempDrinks } from '../../static/tempDrinks';
import TestWrapperComponent from '../testWrapperComponent/TestWrapperComponent';

describe('Search Component', () => {
    const mockHandleClick = jest.fn()

    test('Should renders search Component', async () => {

        render(<TestWrapperComponent>
            <Search title={'Favorite cocktails'} open={true} onCancel={mockHandleClick} />
        </TestWrapperComponent>);

        const SearchTitle = screen.getByText(/Search /i)

        await waitFor(() => expect(SearchTitle).toBeInTheDocument())

    });
})