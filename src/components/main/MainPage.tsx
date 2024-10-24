// @ts-ignore
import React from 'react';
import {useAuthState} from 'react-firebase-hooks/auth';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {Navigate} from "react-router-dom"; // Import useAuthState

const auth = getAuth();
const MainPage = () => {
    const [user, loading, error] = useAuthState(auth); // Get the current user
    console.log('Auth state:', { user, loading, error }); // Debugging

    if (loading) {
        return <p>Loading...</p>; // Show a loading message while checking auth state
    }

    if (error) {
        return <p>Error: {error.message}</p>; // Show error message if authentication fails
    }

    if (!user) {
        return <Navigate to="/login" replace={true}/>;
    }

    onAuthStateChanged(auth, (user) => {
        if (user) {
            const uid = user.uid;
        } else {
            // User is signed out
            // ...
        }
    });

    return (
        <div>
            <h1>Welcome, {user.displayName || user.email}!</h1>
            {/* Add your main page content here */}
            <p>You are now logged in.</p>
        </div>
    );
};

export default MainPage;
