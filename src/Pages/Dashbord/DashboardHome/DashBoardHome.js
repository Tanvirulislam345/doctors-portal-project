import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Calender from '../../Shared/Calender/Calender';
import AllAppoinments from '../AllAppoinments/AllAppoinments';
const DashBoardHome = () => {
    const [date, setDate] = useState(new Date());
    return (
        <Grid container spacing={1} rowGap={1}>
            <Grid item xs={12} md={5} sx={{ boxShadow: 1 }}>
                <Calender
                    date={date}
                    setDate={setDate}
                ></Calender>
            </Grid>
            <Grid item xs={12} md={7} sx={{ boxShadow: 1 }}>
                <AllAppoinments
                    date={date}
                ></AllAppoinments>
            </Grid>
        </Grid>
    );
};

export default DashBoardHome;