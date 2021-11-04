import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Service from '../SingleService/Service';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
const Services = () => {
    const services = [
        {
            name: 'Fluoride Treatment',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eum nesciunt sit dolor. Quis iure temporibus dignissimos perspiciatis exercitationem removeEventListener.',
            img: fluoride
        },
        {
            name: 'Cavity Filling',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eum nesciunt sit dolor. Quis iure temporibus dignissimos perspiciatis exercitationem removeEventListener.',
            img: cavity
        },
        {
            name: 'Teeth Whitening',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eum nesciunt sit dolor. Quis iure temporibus dignissimos perspiciatis exercitationem removeEventListener.',
            img: whitening
        },
    ]
    return (
        <Box sx={{ flexGrow: 1, mb: 10 }} className="App">
            <Container>
                <Typography variant="h5" sx={{ my: 2, fontWeight: 'bold' }} color="text.secondary">
                    Our services
                </Typography>
                <Typography variant="h4" sx={{ mb: 10, fontWeight: 'bold' }}>
                    Service we provide
                </Typography>
                <Grid container spacing={{ xs: 2, sm: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service
                            key={service.name}
                            service={service}
                        ></Service>)
                    }
                </Grid>
            </Container>
        </Box >

    );
};

export default Services;