import React from "react";
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import MainPage from "../../src/components/main/MainPage";

describe('MainPage Component', () => {
    test('renders the MainPage component with a heading', () => {
        render(
            <MemoryRouter>
                <MainPage />
            </MemoryRouter>
        );

        // Example: check if the MainPage renders with a specific text
        const headingElement = screen.getByRole('heading', { name: /Main Page/i });
        expect(headingElement).toBeInTheDocument();
    });

    test('contains a link to the home page', () => {
        render(
            <MemoryRouter>
                <MainPage />
            </MemoryRouter>
        );

        const homeLink = screen.getByRole('link', { name: /home/i });

        expect(homeLink).toBeInTheDocument();
        expect(homeLink).toHaveAttribute('href', '/');
    });
});
