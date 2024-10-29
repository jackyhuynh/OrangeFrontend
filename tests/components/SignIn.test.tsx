import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import SignIn from "../../src/components/login/SignIn";
import {MemoryRouter, Route, Routes} from "react-router-dom";
import SignUp from "../../src/components/signup/SignUp";
import { test, describe, expect } from 'vitest';

describe('SignIn Component', () => {
    test('renders the SignIn form with all required fields', () => {
        render(<MemoryRouter>
            <SignIn/>
        </MemoryRouter>);

        expect(screen.getByRole('heading', {name: /sign in/i})).toBeInTheDocument();
        expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/remember me/i)).toBeInTheDocument();
        expect(screen.getByText(/forgot your password/i)).toBeInTheDocument();
        expect(screen.getByText(/Sign in with Google/i)).toBeInTheDocument();
        expect(screen.getByText(/Sign in with GitHub/i)).toBeInTheDocument();
        expect(screen.getByRole('button', {name: /Sign In/})).toBeInTheDocument();
        expect(screen.getByRole('button', {name: /Sign in with Google/})).toBeInTheDocument();
        expect(screen.getByRole('button', {name: /Sign in with GitHub/})).toBeInTheDocument();

    });

    test('validates email and password inputs', () => {
        render(<MemoryRouter>
            <SignIn/>
        </MemoryRouter>);
        screen.debug();
        const emailInput = screen.getByLabelText(/email/i);
        const passwordInput = screen.getByLabelText(/password/i);
        const signInButton = screen.getByRole('button', {name: /Sign In/});

        fireEvent.click(signInButton);
        expect(screen.getByText(/please enter a valid email address/i)).toBeInTheDocument();
        expect(screen.getByText(/password must be at least 6 characters long/i)).toBeInTheDocument();

        fireEvent.change(emailInput, {target: {value: 'tests@example.com'}});
        fireEvent.change(passwordInput, {target: {value: '123456'}});
        fireEvent.click(signInButton);
        expect(screen.queryByText(/please enter a valid email address/i)).not.toBeInTheDocument();
        expect(screen.queryByText(/password must be at least 6 characters long/i)).not.toBeInTheDocument();
    });

    test('navigates to the Sign Up page when the link is clicked', () => {
        render(
            <MemoryRouter initialEntries={['/sign-in']}>
                <Routes>
                    <Route path="/sign-in" element={<SignIn/>}/>
                    <Route path="/sign-up" element={<SignUp/>}/>
                </Routes>
            </MemoryRouter>
        );

        const signUpLink = screen.getByRole('link', {name: /sign up/i});
        fireEvent.click(signUpLink);

        expect(screen.getByRole('heading', {name: /sign up/i})).toBeInTheDocument();
    });
});
