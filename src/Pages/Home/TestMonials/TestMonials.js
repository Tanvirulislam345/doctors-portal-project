import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import people1 from '../../../images/people-1.png';
import people2 from '../../../images/people-2.png';
import people3 from '../../../images/people-3.png';
import TestMonial from '../SingleTestMonial/TestMonial';

const TestMonials = () => {
    const testmonials = [
        {
            name: 'Akram ali',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eum nesciunt sit dolor. Quis iure temporibus dignissimos perspiciatis exercitationem removeEventListener.',
            country: 'Bangladesh',
            img: people1
        },
        {
            name: 'Radhika Sen',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eum nesciunt sit dolor. Quis iure temporibus dignissimos perspiciatis exercitationem removeEventListener.',
            country: 'India',
            img: people2
        },
        {
            name: 'Jeshi Weiky',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eum nesciunt sit dolor. Quis iure temporibus dignissimos perspiciatis exercitationem removeEventListener.',
            country: 'America',
            img: people3
        },
    ]
    return (
        <Box sx={{ flexGrow: 1, mb: 10 }}>
            <Container>
                <Typography color="text.secondary" variant="h6" sx={{ fontWeight: 'bold' }}>
                    TESTMONIAL
                </Typography>
                <Typography variant="h4" sx={{ fontSize: 50, fontWeight: '400', mb: 10, mt: 3 }}>
                    what's Our Patients <br /> Says
                </Typography>
                <Grid container spacing={{ xs: 2, sm: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        testmonials.map(testmonial => <TestMonial
                            key={testmonial.name}
                            testmonial={testmonial}
                        ></TestMonial>)
                    }
                </Grid>
            </Container>
        </Box >

    );
};

export default TestMonials;