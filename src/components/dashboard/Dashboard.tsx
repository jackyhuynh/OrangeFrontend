import * as React from 'react';
import type {} from '@mui/x-date-pickers/themeAugmentation';
import type {} from '@mui/x-charts/themeAugmentation';
import type {} from '@mui/x-data-grid/themeAugmentation';
import type {} from '@mui/x-tree-view/themeAugmentation';
import { alpha } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import {
    chartsCustomizations,
    dataGridCustomizations,
    datePickersCustomizations, treeViewCustomizations
} from "../../shared-theme/customizations";
import AppTheme from "../../shared-theme/AppTheme";
import SideMenu from "./components/SideMenu";
import AppNavbar from "./components/Dashboard";
import Header from "./components/Header";
import MainGrid from "./components/MainGrid";
import {getAuth} from "firebase/auth";
import {Navigate, useNavigate} from "react-router-dom";
import {useAuthState} from "react-firebase-hooks/auth";


const xThemeComponents = {
  ...chartsCustomizations,
  ...dataGridCustomizations,
  ...datePickersCustomizations,
  ...treeViewCustomizations,
};

const auth = getAuth();

export default function Dashboard(props: { disableCustomTheme?: boolean }) {
    const navigate = useNavigate(); // Initialize useNavigate
    const [user, loading, error] = useAuthState(auth);
    console.log('Auth state:', {user, loading, error});

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    if (!user) {
        return <Navigate to={'/login'} replace={true}/>;
    }

    return (
    <AppTheme {...props} themeComponents={xThemeComponents}>
      <CssBaseline enableColorScheme />
      <Box sx={{ display: 'flex' }}>
        <SideMenu />
        <AppNavbar />
        {/* Main content */}
        <Box
          component="main"
          sx={(theme) => ({
            flexGrow: 1,
              // @ts-ignore
            backgroundColor: theme.vars
                // @ts-ignore
              ? `rgba(${theme.vars.palette.background.defaultChannel} / 1)`
              : alpha(theme.palette.background.default, 1),
            overflow: 'auto',
          })}
        >
          <Stack
            spacing={2}
            sx={{
              alignItems: 'center',
              mx: 3,
              pb: 5,
              mt: { xs: 8, md: 0 },
            }}
          >
            <Header />
            <MainGrid />
          </Stack>
        </Box>
      </Box>
    </AppTheme>
  );
}
