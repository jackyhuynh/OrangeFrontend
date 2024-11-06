// @ts-ignore
import React from 'react';
import {useAuthState} from 'react-firebase-hooks/auth';
import {getAuth} from "firebase/auth";
import {Navigate, useNavigate} from "react-router-dom";
import Button from "@mui/material/Button";
import AppTheme from "../../shared-theme/AppTheme";
import CssBaseline from "@mui/material/CssBaseline";
import ColorModeSelect from "../../shared-theme/ColorModeSelect";
import {styled} from "@mui/material/styles";
import Stack from "@mui/material/Stack";

const auth = getAuth();

const MainContainer = styled(Stack)(({theme}) => ({
    minHeight: '100%',
    padding: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(4),
    },
    '&::before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        zIndex: -1,
        inset: 0,
        backgroundImage:
            'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
        backgroundRepeat: 'no-repeat',
        ...theme.applyStyles('dark', {
            backgroundImage:
                'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
        }),
    },
}));

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

    return (
        <AppTheme{...props}>
            <CssBaseline enableColorScheme/>
            <MainContainer direction="column" justifyContent="space-between">
                <ColorModeSelect sx={{position: 'fixed', top: '1rem', right: '1rem'}}/>
                <h1>Welcome, {user.displayName}!</h1>
                <p>Email: {user.email}</p>
                <p>You are now logged in.</p>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    onClick={() => navigate('/dashboard')}
                >
                    Dashboard
                </Button>

            </MainContainer>

        </AppTheme>

);
};

