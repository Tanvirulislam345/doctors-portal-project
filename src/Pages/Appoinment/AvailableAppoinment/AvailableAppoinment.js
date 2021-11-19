import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import AppoinmnetBooking from '../AppoinmentBooking/AppoinmnetBooking';
import { Container, Typography, Alert } from '@mui/material';

const bookingData = [
    {
        name: "Teeth Orthodontics",
        time: "8:00AM - 9:00AM",
        price: 16,
        space: 10
    },
    {
        name: "Cosmetic Dentistry",
        time: "10:05AM - 11:20AM",
        price: 34,
        space: 10
    },
    {
        name: "Teeth Cleaning",
        time: "5:00PM - 6:30PM",
        price: 23,
        space: 10
    },
    {
        id: 4,
        name: "Cavity Protection",
        time: "7:00AM - 8:30AM",
        price: 44,
        space: 10
    },
    {
        name: "Cosmetic Dentistry2",
        time: "10:05AM - 11:20AM",
        space: 10
    },
    {
        name: "Teeth Filling2",
        time: "9:00PM - 10:30PM",
        price: 33,
        space: 10
    }
];

const AvailableAppoinment = ({ date }) => {
    const [bookingSuccess, setBookingSuccess] = useState(false);
    return (
        <Container className="App">
            <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'secondary.main', mb: 3 }}>Available appoinment {date.toDateString()}</Typography>
            {
                bookingSuccess && <Alert severity="success" sx={{ mb: 3 }}>booking successfull</Alert>

            }
            <Grid container spacing={2} sx={{ mb: 5 }}>
                {
                    bookingData.map(booking => <AppoinmnetBooking
                        key={booking.name}
                        booking={booking}
                        date={date}
                        setBookingSuccess={setBookingSuccess}
                    >
                    </AppoinmnetBooking>)
                }
            </Grid>
        </Container>
    );
};

export default AvailableAppoinment;