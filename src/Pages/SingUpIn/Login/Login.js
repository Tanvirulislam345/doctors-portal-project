import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import login from '../../../images/login.png';
import { Button, Container, TextField, Typography, Alert } from '@mui/material';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { Box } from '@mui/system';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, userSignIn, loading } = useAuth();
    const location = useLocation();
    const history = useHistory();

    if (loading) {
        return <Box className="App">
            <CircularProgress />
        </Box>
    } else {
        const handleOnChange = e => {
            const field = e.target.name;
            const value = e.target.value;
            // console.log(field, value);
            const newLoginData = { ...loginData };
            newLoginData[field] = value;
            setLoginData(newLoginData);
            // console.log(loginData);

        }
        const handleLoginSubmit = e => {
            e.preventDefault();
            userSignIn(loginData.email, loginData.password, location, history);
        }
        return (
            <Container className="App">
                <Grid container spacing={2}>
                    <Grid item xs={12} md={5} sx={{ mt: 5 }}>
                        <Typography variant="h6" sx={{ mt: 5 }} gutterBottom>
                            Login
                        </Typography>
                        <form onSubmit={handleLoginSubmit}>
                            <TextField id="standard-basic-email"
                                sx={{ width: '75%', m: 1 }}
                                variant="standard"
                                label="Your Email"
                                type="email"
                                name="email"
                                onChange={handleOnChange}
                            />
                            <TextField id="standard-basic-password"
                                sx={{ width: '75%', m: 1 }}
                                variant="standard"
                                label="Your Password"
                                type="password"
                                name="password"
                                onChange={handleOnChange}
                            />

                            <Button
                                type="submit"
                                variant="contained"
                                sx={{ width: '75%', m: 1, mt: 3 }}
                            >Login</Button>
                        </form>
                        <Typography variant="subtitle2" gutterBottom component="div">
                            New user ? <Link to='/signup'
                                style={{ textDecoration: 'none' }}
                            >
                                create a new account
                            </Link>
                        </Typography>
                        <Typography variant="h5" sx={{ fontWeight: 'bold', my: 2 }} gutterBottom component="div">
                            {
                                user.email && <Alert severity="success">Login successfull</Alert>

                            }
                            OR
                        </Typography>
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{ width: '75%', m: 1 }}
                        >Login using google</Button>
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <img src={login} alt=""
                            style={{ width: '75%' }}
                        />
                    </Grid>
                </Grid>
            </Container>
        );
    }
};

export default Login;