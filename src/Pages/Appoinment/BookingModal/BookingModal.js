import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

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



const BookingModal = ({ openBooking, handleBookingClose, booking, date }) => {
    const { name, time } = booking;
    const handleSubmit = e => {
        e.preventDefault();


        alert('Appoinment book is successfull');
        handleBookingClose();

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
                            defaultValue='Enter your name'
                            sx={{ width: '90%', m: 1 }}
                        />
                        <TextField
                            id="outlined-size-small"
                            size="small"
                            defaultValue='Enter phone number'
                            sx={{ width: '90%', m: 1 }}
                        />
                        <TextField
                            id="outlined-size-small"
                            size="small"
                            defaultValue='Enter your Email'
                            sx={{ width: '90%', m: 1 }}
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