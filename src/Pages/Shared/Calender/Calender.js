import React from 'react';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';
import { Typography } from '@mui/material';


const Calender = ({ date, setDate }) => {
    return (
        <>
            <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center', my: 5 }}>
                Appoinment
            </Typography>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <StaticDatePicker
                    displayStaticWrapperAs="desktop"
                    date={date}
                    onChange={(newDate) => {
                        setDate(newDate);
                    }}
                />
            </LocalizationProvider>
        </>
    );
};

export default Calender;