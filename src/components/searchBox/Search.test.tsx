import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Search from './Search';
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

    test('Should search when enter text on input field', async () => {

        render(<TestWrapperComponent>
            <Search title={'Favorite cocktails'} open={true} onCancel={mockHandleClick} />
        </TestWrapperComponent>);

        const inputField = screen.queryByPlaceholderText("Search Cocktails EX: margarita") as HTMLElement

        fireEvent.change(inputField, { target: { value: 'martini' } })

        await waitFor(() => expect(inputField).toBeInTheDocument())

    });
})