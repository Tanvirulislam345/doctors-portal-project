import React from 'react';
import Grid from '@mui/material/Grid';
import AppoinmnetBooking from '../AppoinmentBooking/AppoinmnetBooking';
import { Container, Typography } from '@mui/material';

const bookingData = [
    {
        name: "Teeth Orthodontics",
        time: "8:00AM - 9:00AM",
        space: 10
    },
    {
        name: "Cosmetic Dentistry",
        time: "10:05AM - 11:20AM",
        space: 10
    },
    {
        name: "Teeth Cleaning",
        time: "5:00PM - 6:30PM",
        space: 10
    },
    {
        name: "Cavity Protection",
        time: "7:00AM - 8:30AM",
        space: 10
    },
    {
        name: "Cosmetic Dentistry",
        time: "10:05AM - 11:20AM",
        space: 10
    },
    {
        name: "Teeth Filling",
        time: "9:00PM - 10:30PM",
        space: 10
    }
];

const AvailableAppoinment = ({ date }) => {
    return (
        <Container className="App">
            <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'secondary.main', mb: 3 }}>Available appoinment {date.toDateString()}</Typography>
            <Grid container spacing={2} sx={{ mb: 5 }}>
                {
                    bookingData.map(booking => <AppoinmnetBooking
                        date={date}
                        booking={booking}
                    >
                    </AppoinmnetBooking>)
                }
            </Grid>
        </Container>
    );
};

export default AvailableAppoinment;