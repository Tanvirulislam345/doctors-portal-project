import React from 'react';
import Paper from '@mui/material/Paper';
import { Button, Grid, Typography } from '@mui/material';
import BookingModal from '../BookingModal/BookingModal';
const AppoinmnetBooking = ({ booking, date }) => {
    const { name, time, space } = booking
    const [openBooking, setOpenBooking] = React.useState(false);
    const handleBookingOpen = () => setOpenBooking(true);
    const handleBookingClose = () => setOpenBooking(false);
    return (
        <>
            <Grid item xs={12} sm={6} md={4} >
                <Paper elevation={3} sx={{ py: 5 }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'warning.main' }}>
                        {name}
                    </Typography>
                    <Typography variant="button" display="block" sx={{ fontWeight: 'bold' }}>
                        {time}
                    </Typography>
                    <Typography variant="caption" display="block" sx={{ color: 'info.main', mb: 2 }}>
                        {space} space available
                    </Typography>
                    <Button variant="contained" onClick={handleBookingOpen}>BOOK APPOINMENT</Button>
                </Paper>
            </Grid>
            <BookingModal
                date={date}
                booking={booking}
                openBooking={openBooking}
                handleBookingClose={handleBookingClose}
            ></BookingModal>
        </>
    );
};

export default AppoinmnetBooking;