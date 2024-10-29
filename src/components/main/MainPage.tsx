// @ts-ignore
import React from 'react';
import {useAuthState} from 'react-firebase-hooks/auth';
import {getAuth} from "firebase/auth";
import {Navigate} from "react-router-dom";

const auth = getAuth();

const MainPage = () => {
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
        <div>
            <h1>Welcome, {user.displayName}!</h1>
            <p>Email: {user.email}</p>
            <p>You are now logged in.</p>
        </div>
    );
};

export default MainPage;
