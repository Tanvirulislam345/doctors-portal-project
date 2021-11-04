import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import doctor from '../../../images/doctor.png';
import bg2 from '../../../images/appointment-bg.png';

const appoinmentBg = {
    background: `url(${bg2})`,
    marginTop: 145,
    backgroundColor: 'rgba(36, 34, 34, 0.4)',
    backgroundBlendMode: 'darken, luminosity'
}
const AppoinmentBanner = () => {

    return (
        <Box sx={{ flexGrow: 1, mb: 10 }} style={appoinmentBg}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item sm={12} md={5} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <img src={doctor} alt="" style={{ width: 500, marginTop: '-140px' }} />
                    </Grid>
                    <Grid item sm={12} md={7} sx={{ my: 'auto' }}>
                        <Typography variant="h5" sx={{ fontWeight: 'bold', pt: 5, pb: 3 }}>
                            APPOINMENT
                        </Typography>
                        <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'white' }} color="text.secondary">
                            Make an appoinment Today
                        </Typography>
                        <Typography color="text.secondary" sx={{ my: 3 }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores delectus blanditiis eveniet reprehenderit! Porro doloremquee.
                        </Typography>
                        <Button variant="contained" sx={{ width: '150px', mb: 5 }}>Learn More</Button>
                    </Grid>
                </Grid>
            </Container>
        </Box >
    );
};

export default AppoinmentBanner;