import React from 'react';
import chair from '../../../images/chair.png';
import bg1 from '../../../images/bg.png';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';


const bannerBg = {
    background: `url(${bg1})`,
}
const varticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: '500px'
}
const Banner = () => {

    return (
        <Box sx={{ flexGrow: 1, mb: 10 }} style={bannerBg}>
            <Container>
                <Grid container>
                    <Grid item sm={12} md={5} style={varticalCenter}>
                        <Box sx={{ width: '400px' }}>
                            <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                                Your New Smile <br /> Start Here
                            </Typography>
                            <Typography color="text.secondary" sx={{ my: 3 }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores delectus blanditiis eveniet reprehenderit! Porro doloremquee.
                            </Typography>
                            <Button variant="contained" sx={{ mb: 5 }}>Get Appoinment</Button>
                        </Box>
                    </Grid>
                    <Grid item sm={12} md={7} sx={{ my: 'auto' }}>
                        <img src={chair} alt=""
                            style={{ width: '75%' }}
                        />
                    </Grid>
                </Grid>
            </Container>
        </Box >
    );
};

export default Banner;