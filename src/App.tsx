import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProTip from './components/ProTip.js';
import Copyright from './components/Copyright.js';
import SignIn from "./components/login/SignIn.tsx";

export default function App() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          <SignIn/>
        </Typography>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
