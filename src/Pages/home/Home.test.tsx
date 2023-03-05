import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Home from './Home';
import TestWrapperComponent from '../../components/testWrapperComponent/TestWrapperComponent';

describe('Home page', () => {

    test('Should renders Home page', async () => {

        render(<TestWrapperComponent>
            <Home />
        </TestWrapperComponent>);

        const cocktailName = screen.getByText(/New Cocktails/i)

        await waitFor(() => expect(cocktailName).toBeInTheDocument())

    });
})