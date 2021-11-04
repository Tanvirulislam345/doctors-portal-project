import React from 'react';
import chair from '../../../images/chair.png';
import bg1 from '../../../images/bg.png';
import Grid from '@mui/material/Grid';
import Calender from '../../Shared/Calender/Calender';
import { Container } from '@mui/material';
import { Box } from '@mui/system';

// const bannerBg = {
//     background: `url(${bg1})`,
// }
/*
const varticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: '500px'
} */
const AppoinmentHeader = ({ date, setDate }) => {
    return (
        <Box sx={{ flexGrow: 1, mb: 10 }}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={5} sx={{ my: 'auto' }}>
                        <Calender
                            date={date}
                            setDate={setDate}
                        ></Calender>
                    </Grid>
                    <Grid item xs={12} md={7} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img src={chair} alt=""
                            style={{ width: '80%' }}
                        />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default AppoinmentHeader;