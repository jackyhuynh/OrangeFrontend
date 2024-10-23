import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import App from "../src/App";
import React from 'react';

test('renders App component on default route', () => {
    render(<App/>);

    expect(screen.getByText(/Welcome/i)).toBeInTheDocument();

    expect(screen.getByText(/Sign Up/i)).toBeInTheDocument();

    expect(screen.getByRole('heading', {name: /sign in/i})).toBeInTheDocument();

    expect(screen.getByRole('textbox', {name: /email/i})).toBeInTheDocument();

    expect(screen.getByText(/Pro tip/i)).toBeInTheDocument();

    expect(screen.getByText(/Copyright/i)).toBeInTheDocument();
});