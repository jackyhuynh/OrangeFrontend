// @ts-ignore
import React from 'react';
import {useAuthState} from 'react-firebase-hooks/auth';
import {getAuth} from "firebase/auth";
import {Navigate, useNavigate} from "react-router-dom";
import Button from "@mui/material/Button";
import AppTheme from "../../shared-theme/AppTheme";

const auth = getAuth();

export default function MainPage (props: { disableCustomTheme?: boolean }) {
    const navigate = useNavigate(); // Initialize useNavigate
    const [user, loading, error] = useAuthState(auth);
    console.log('Auth state:', {user, loading, error});


    if (loading) {
        return <p>Loading...</p>; // Show a loading message while checking auth state
    }

    if (error) {
        return <p>Error: {error.message}</p>; // Show error message if authentication fails
    }

    if (!user) {
        return <Navigate to="/login" replace={true}/>;
    }

    // @ts-ignore
    return (
        <AppTheme{...props}>
            <h1>Welcome, {user.displayName}!</h1>
            <p>Email: {user.email}</p>
            <p>You are now logged in.</p>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                onClick={navigate('/dashboard')}
            >
                Dashboard
            </Button>
        </AppTheme>

);
};

