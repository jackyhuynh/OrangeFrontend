import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import ProTip from './components/ProTip.js';
import Copyright from './components/Copyright.js';
import SignIn from "./components/login/SignIn";
import SignUp from "./components/signup/SignUp";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Typography from "@mui/material/Typography";


export default function App() {
    return (
        <Router>
            <Container maxWidth="sm">
                <Box sx={{ my: 4 }}>
                    <Routes>
                        {/* Route for SignIn component */}
                        <Route
                            path="/sign-in"
                            element={
                                <>
                                    <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
                                        Sign In
                                    </Typography>
                                    <SignIn />
                                </>
                            }
                        />
                        {/* Route for SignUp component */}
                        <Route
                            path="/sign-up"
                            element={
                                <>
                                    <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
                                        Sign Up
                                    </Typography>
                                    <SignUp />
                                </>
                            }
                        />
                        {/* Default Route */}
                        <Route
                            path="*"
                            element={
                                <>
                                    <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
                                        Welcome
                                    </Typography>
                                    <SignIn />
                                </>
                            }
                        />
                    </Routes>
                    {/* Keep ProTip and Copyright on all pages */}
                    <ProTip />
                    <Copyright />
                </Box>
            </Container>
        </Router>
    );
}
