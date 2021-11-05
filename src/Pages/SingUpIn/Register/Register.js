import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import login from '../../../images/login.png';
import { Button, Container, TextField, Typography, Alert } from '@mui/material';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { Box } from '@mui/system';

const Register = () => {
    const [registerData, setRegisterData] = useState({});
    const { user, registerUser, loading } = useAuth();
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
            const newLoginData = { ...registerData };
            newLoginData[field] = value;
            setRegisterData(newLoginData);
            console.log(registerData);

        }
        const handleLoginSubmit = e => {
            e.preventDefault();
            registerUser(registerData.email, registerData.password, location, history);
        }
        return (
            <Container className="App">
                <Grid container spacing={2}>
                    <Grid item xs={12} md={5} sx={{ mt: 5 }}>
                        <Typography variant="h6" sx={{ mt: 5 }} gutterBottom>
                            Register
                        </Typography>
                        <form onSubmit={handleLoginSubmit}>
                            <TextField id="standard-basic-name"
                                sx={{ width: '75%', m: 1 }}
                                variant="standard"
                                label="Your Name"
                                type="text"
                                name="username"
                                onChange={handleOnChange}
                            />
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
                            >Register</Button>
                        </form>
                        <Typography variant="subtitle2" gutterBottom component="div">
                            Are you already register ? <Link to='/login'
                                style={{ textDecoration: 'none' }}
                            >
                                please login
                            </Link>
                        </Typography>
                        {
                            user.email && <Alert severity="success">Register successfull</Alert>

                        }
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

export default Register;