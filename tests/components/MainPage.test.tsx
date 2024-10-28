import {render, screen} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import {describe, expect, it, vi} from 'vitest';
import MainPage from '../../src/components/main/MainPage';
import {useAuthState} from 'react-firebase-hooks/auth';
import React from "react";

// Mock the `react-firebase-hooks/auth` module
vi.mock('react-firebase-hooks/auth', () => ({
    useAuthState: vi.fn(),
}));

// Mock the Firebase auth module
vi.mock('firebase/auth', () => ({
    getAuth: vi.fn(() => ({})),
}));

describe('MainPage Component', () => {
    it('renders with a loading state', () => {
        // @ts-ignore
        (useAuthState as vi.Mock).mockReturnValue([null, true, null]);

        render(
            <MemoryRouter>
                <MainPage/>
            </MemoryRouter>
        );

        expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
    });

    it('renders an error message if authentication fails', () => {
        // @ts-ignore
        (useAuthState as vi.Mock).mockReturnValue([null, false, {message: 'Auth Error'}]);

        render(
            <MemoryRouter>
                <MainPage/>
            </MemoryRouter>
        );

        expect(screen.getByText(/Error: Auth Error/i)).toBeInTheDocument();
    });

    it('redirects to login if no user is authenticated', () => {
        // @ts-ignore
        (useAuthState as vi.Mock).mockReturnValue([null, false, null]);

        render(
            <MemoryRouter>
                <MainPage/>
            </MemoryRouter>
        );

        expect(screen.queryByText(/Welcome/i)).not.toBeInTheDocument();
    });
});
