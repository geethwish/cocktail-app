import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import NavigationBar from './NavigationBar';
import TestWrapperComponent from '../testWrapperComponent/TestWrapperComponent';

describe('Navigation bar', () => {

    test('Should renders navigation bar', async () => {

        render(<TestWrapperComponent>
            <NavigationBar />
        </TestWrapperComponent>);

        const cocktailName = screen.getByText(/home/i)

        await waitFor(() => expect(cocktailName).toBeInTheDocument())

    });

    test('Should be able click on favorite button', async () => {

        render(<TestWrapperComponent>
            <NavigationBar />
        </TestWrapperComponent>);

        const inputField = screen.getByText(/favorite/i)

        fireEvent.click(inputField)

        const title = screen.getByText(/Cocktails List/i)

        await waitFor(() => expect(title).toBeInTheDocument())

    });

    test('Should be able click on search button and should show the search box', async () => {

        render(<TestWrapperComponent>
            <NavigationBar />
        </TestWrapperComponent>);

        const inputField = screen.getByText(/search/i)

        fireEvent.click(inputField)

        const title = screen.getByText(/Search Cocktails/i)

        await waitFor(() => expect(title).toBeInTheDocument())

    });
})