import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import useAuth from '../../../hooks/useAuth';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '40%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    borderRadius: '10px',
    boxShadow: 24,
    p: 4,
};


const BookingModal = ({ setBookingSuccess, openBooking, handleBookingClose, booking, date }) => {
    const { name, time, price } = booking;
    const { user } = useAuth();

    const initialValue = { patientName: user.displayName, email: user.email, phone: '' };
    const [bookingInfo, setBookingInfo] = useState(initialValue);

    const handleBlur = e => {
        const field = e.target.name;
        const value = e.target.value;

        const newInfo = { ...bookingInfo };
        newInfo[field] = value;
        setBookingInfo(newInfo);
    }
    const handleSubmit = e => {

        const appoinmentInfo = {
            ...bookingInfo,
            time,
            price,
            serviceName: name,
            date: date.toLocaleDateString()
        }
        fetch('http://localhost:7000/appoinments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(appoinmentInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setBookingSuccess(true);
                    handleBookingClose();
                }
            });

        e.preventDefault();
    }

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openBooking}
            onClose={handleBookingClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={openBooking}>
                <Box sx={style}>
                    <Typography id="transition-modal-title" variant="h6" component="h2">
                        {name}
                    </Typography>

                    <form onSubmit={handleSubmit}>
                        <TextField
                            id="outlined-size-small"
                            size="small"
                            sx={{ width: '90%', m: 1 }}
                            defaultValue={user.displayName}
                            name="patientName"
                            onBlur={handleBlur}
                        />

                        <TextField
                            id="outlined-size-small"
                            size="small"
                            sx={{ width: '90%', m: 1 }}
                            defaultValue={user.email}
                            name="email"
                            onBlur={handleBlur}
                        />

                        <TextField
                            id="outlined-size-small"
                            size="small"
                            sx={{ width: '90%', m: 1 }}
                            defaultValue='01.....'
                            name="phone"
                            onBlur={handleBlur}
                        />

                        <TextField
                            disabled
                            id="outlined-size-small"
                            defaultValue={time}
                            size="small"
                            sx={{ width: '90%', m: 1 }}
                        />
                        <TextField
                            disabled
                            id="outlined-size-small"
                            defaultValue={date.toDateString()}
                            size="small"
                            sx={{ width: '90%', m: 1 }}
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{ width: '90%', m: 1 }}
                        >Book</Button>
                    </form>
                </Box>
            </Fade>
        </Modal>
    );
};

export default BookingModal;