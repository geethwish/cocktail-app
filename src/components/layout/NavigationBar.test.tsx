import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
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
})