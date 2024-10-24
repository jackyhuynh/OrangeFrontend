import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Divider from '@mui/material/Divider';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MuiCard from '@mui/material/Card';
import {styled} from '@mui/material/styles';
import {GithubIcon, GoogleIcon, SitemarkIcon} from '../CustomIcons';
import AppTheme from "../../shared-theme/AppTheme";
import ColorModeSelect from "../../shared-theme/ColorModeSelect";
import {Link as RouterLink, Navigate, useNavigate} from 'react-router-dom';
import Link from "@mui/material/Link";
import {auth} from "../../firebaseConfig";
import {createUserWithEmailAndPassword} from 'firebase/auth'; // Import sign-up function

const Card = styled(MuiCard)(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    width: '100%',
    padding: theme.spacing(4),
    gap: theme.spacing(2),
    margin: 'auto',
    [theme.breakpoints.up('sm')]: {
        maxWidth: '450px',
    },
    boxShadow:
        'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
    ...theme.applyStyles('dark', {
        boxShadow:
            'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
    }),
}));

const SignUpContainer = styled(Stack)(({theme}) => ({
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

export default function SignUp(props: { disableCustomTheme?: boolean }) {
    const navigate = useNavigate();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [fullName, setFullName] = React.useState('');
    const [phone, setPhone] = React.useState('');

    const [emailError, setEmailError] = React.useState(false);
    const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
    const [passwordError, setPasswordError] = React.useState(false);
    const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
    const [phoneError, setPhoneError] = React.useState(false);
    const [phoneErrorMessage, setPhoneErrorMessage] = React.useState('');
    const [fullNameError, setFullNameError] = React.useState(false);
    const [fullNameErrorMessage, setFullNameErrorMessage] = React.useState('');

    // Handle input changes
    const handleInputChange = (setter) => (event) => setter(event.target.value);

    // Clear form inputs and errors
    const clearForm = () => {
        setEmail('');
        setPassword('');
        setFullName('');
        setPhone('');

        setEmailError(false);
        setPasswordError(false);
        setPhoneError(false);
        setFullNameError(false);

        setEmailErrorMessage('');
        setPasswordErrorMessage('');
        setPhoneErrorMessage('');
        setFullNameErrorMessage('');
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (validateInputs()) {
            const email = (document.getElementById('email') as HTMLInputElement).value;
            const password = (document.getElementById('password') as HTMLInputElement).value;
            try {
                await createUserWithEmailAndPassword(auth, email, password);
                console.log('User create successfully');
                navigate("/sign-in")
            } catch (error) {
                console.log('Error create user', error.message);
            }
        }
    };

    const validatePhoneNumber = (phone: string) => {
        const phonePattern = /^[0-9\-\(\)\s]+$/; // Allows digits, dashes, spaces, and parentheses
        return phonePattern.test(phone) && phone.replace(/\D/g, '').length === 10;
    };

    const validateInputs = () => {
        const email = document.getElementById('email') as HTMLInputElement;
        const password = document.getElementById('password') as HTMLInputElement;
        const phone = document.getElementById('phoneNumber') as HTMLInputElement;
        const fullName = document.getElementById('fullName') as HTMLInputElement;

        let isValid = true;

        // Full Name
        if (!fullName.value.trim()) {
            setFullNameError(true);
            setFullNameErrorMessage('Full name is required.');
            isValid = false;
        } else {
            setFullNameError(false);
            setFullNameErrorMessage('');
        }

        // Email
        if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
            setEmailError(true);
            setEmailErrorMessage('Please enter a valid email address.');
            isValid = false;
        } else {
            setEmailError(false);
            setEmailErrorMessage('');
        }

        // Phone Number
        if (!validatePhoneNumber(phone.value)) {
            setPhoneError(true);
            setPhoneErrorMessage('Please enter a valid 10-digit phone number.');
            isValid = false;
        } else {
            setPhoneError(false);
            setPhoneErrorMessage('');
        }

        // Password
        if (!password.value || password.value.length < 6) {
            setPasswordError(true);
            setPasswordErrorMessage('Password must be at least 6 characters long.');
            isValid = false;
        } else {
            setPasswordError(false);
            setPasswordErrorMessage('');
        }

        return isValid;
    };

    return (
        <AppTheme {...props}>
            <CssBaseline enableColorScheme/>
            <SignUpContainer direction="column" justifyContent="space-between">
                <ColorModeSelect sx={{position: 'fixed', top: '1rem', right: '1rem'}}/>
                <Card variant="outlined">
                    <SitemarkIcon/>
                    <Typography
                        component="h1"
                        variant="h4"
                        sx={{width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)'}}
                    >
                        Sign up
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        noValidate
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '100%',
                            gap: 2,
                        }}
                    >
                        <FormControl error={fullNameError} required={true}>
                            <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                                <FormLabel htmlFor="fullName">Full Name</FormLabel>
                            </Box>

                            <TextField
                                id="fullName"
                                type="text"
                                name="fullName"
                                value={fullName}
                                onChange={handleInputChange(setFullName)}
                                placeholder="John Doe"
                                required={true}
                                fullWidth
                                variant="outlined"
                                helperText={fullNameErrorMessage}
                            />
                        </FormControl>

                        <FormControl error={phoneError} required>
                            <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                                <FormLabel htmlFor="phoneNumber">Phone Number</FormLabel>
                            </Box>

                            <TextField
                                error={phoneError}
                                helperText={phoneErrorMessage}
                                id="phoneNumber"
                                type="tel"
                                name="phoneNumber"
                                value={phone}
                                onChange={handleInputChange(setPhone)}
                                placeholder="(123) 456-7890"
                                autoComplete="tel"
                                required={true}
                                fullWidth
                                variant="outlined"
                            />
                        </FormControl>

                        <FormControl error={emailError} required>
                            <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                                <FormLabel htmlFor="email">Email</FormLabel>
                            </Box>
                            <TextField
                                helperText={emailErrorMessage}
                                id="email"
                                type="email"
                                name="email"
                                value={email}
                                onChange={handleInputChange(setEmail)}
                                placeholder="your@email.com"
                                autoComplete="email"
                                autoFocus
                                required
                                fullWidth
                                variant="outlined"
                                color={emailError ? 'error' : 'primary'}
                                sx={{ariaLabel: 'email'}}
                            />
                        </FormControl>

                        <FormControl error={passwordError} required>
                            <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                                <FormLabel htmlFor="password">Password</FormLabel>
                            </Box>
                            <TextField
                                error={passwordError}
                                helperText={passwordErrorMessage}
                                name="password"
                                placeholder="••••••"
                                type="password"
                                id="password"
                                value={password}
                                onChange={handleInputChange(setPassword)}
                                autoComplete="current-password"
                                autoFocus
                                required
                                fullWidth
                                variant="outlined"
                                color={passwordError ? 'error' : 'primary'}
                            />
                        </FormControl>

                        <FormControlLabel
                            control={<Checkbox value="receiveUpdate" color="primary"/>}
                            label="I want to receive update via email."
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            onClick={validateInputs}
                        >
                            Sign up
                        </Button>

                    </Box>
                    <Typography sx={{textAlign: 'center'}}>
                        Already have an account?{' '}
                        <span>
                <Link
                    component={RouterLink}
                    to="/sign-in"
                    variant="body2"
                    sx={{alignSelf: 'center'}}
                >
                  Sign In
                </Link>
              </span>
                    </Typography>
                    <Divider>or</Divider>
                    <Box sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
                        <Button
                            fullWidth
                            variant="outlined"
                            onClick={() => alert('Sign up with Google')}
                            startIcon={<GoogleIcon/>}
                        >
                            Sign up with Google
                        </Button>
                        <Button
                            fullWidth
                            variant="outlined"
                            onClick={() => alert('Sign up with GitHub')}
                            startIcon={<GithubIcon/>}
                        >
                            Sign up with GitHub
                        </Button>
                    </Box>
                </Card>
            </SignUpContainer>
        </AppTheme>
    );
}
