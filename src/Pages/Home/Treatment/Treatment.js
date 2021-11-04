import React from 'react';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import treatment from '../../../images/treatment.png';
import { Box } from '@mui/system';

const Treatment = () => {
    return (
        <Container sx={{ mb: 10 }}>
            <Grid container spacing={2}>
                <Grid item sm={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <img src={treatment} alt=""
                        style={{ width: '70%' }}
                    />
                </Grid>
                <Grid item sm={12} md={6} sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ width: '80%' }}>
                        <Typography variant="h3" sx={{
                            fontWeight: 'bold', pb: 2
                        }}>
                            Exceptional Dental<br /> Care, on Your Terms
                        </Typography>

                        <Typography color="text.secondary" sx={{ my: 3 }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores delectus blanditiis eveniet reprehenderit! Porro doloremquee. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dolorem nam unde sunt facilis iusto recusandae repudiandae harum quis aut pariatur aperiam culpa itaque voluptatibus quasi neque, quam, similique obcaecati.
                        </Typography>
                        <Button variant="contained" sx={{ width: '150px', mb: 5 }}>Learn More</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container >
    );
};

export default Treatment;