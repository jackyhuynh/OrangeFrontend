import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import ProTip from './components/ProTip.js';
import Copyright from './components/Copyright.js';
import SignIn from "./components/login/SignIn";
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import Typography from "@mui/material/Typography";
import SignUp from "./components/signup/SignUp";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "./firebaseConfig";
import MainPage from "./components/main/MainPage";

// @ts-ignore
function PrivateRoute({children}) {
    const [user] = useAuthState(auth)

    if (!user) {
        return <Navigate to="/login" replace/>;
    }
}

export default function App() {

    return (
        <Router>
            <Container maxWidth="sm">
                <Box sx={{my: 4}}>
                    <Routes>
                        {/* Route for SignIn component */}
                        <Route
                            path="/sign-in"
                            element={
                                <>
                                    <Typography variant="h4" component="h1" sx={{mb: 2}}>
                                        Sign In
                                    </Typography>
                                    <SignIn/>
                                </>
                            }
                        />
                        {/* Route for SignUp component */}
                        <Route
                            path="/sign-up"
                            element={
                                <>
                                    <Typography variant="h4" component="h1" sx={{mb: 2}}>
                                        Sign Up
                                    </Typography>
                                    <SignUp/>
                                </>
                            }
                        />
                        {/* Default Route */}
                        <Route
                            path="*"
                            element={
                                <>
                                    <Typography variant="h4" component="h1" sx={{mb: 2}}>
                                        Welcome
                                    </Typography>
                                    <SignIn/>
                                </>
                            }
                        />
                        {/* Route for MainPage component (protected) */}
                        <Route
                            path="/home"
                            element={
                            <>
                                <Typography variant="h4" component="h1" sx={{mb: 2}}>
                                    Welcome
                                </Typography>
                                <PrivateRoute>
                                    <MainPage/>
                                </PrivateRoute>
                            </>
                            }></Route>
                    </Routes>
                    <ProTip/>
                    <Copyright/>
                </Box>
            </Container>
        </Router>
    );
}
