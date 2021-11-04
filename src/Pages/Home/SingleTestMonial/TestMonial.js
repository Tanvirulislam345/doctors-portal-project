import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { Grid } from '@mui/material';
import { Box } from '@mui/system';

const TestMonial = (props) => {
    const { name, country, description, img } = props.testmonial;
    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 275, boxShadow: 4, mb: 5 }}>
                <CardContent>
                    <Typography variant="body1" color="text.secondary" sx={{ p: 5 }}>
                        {description}
                    </Typography>
                    <Box sx={{ display: 'flex', textAlign: 'start', px: 5, py: 3 }}>
                        <CardMedia
                            component="img"
                            image={img}
                            style={{ width: '70px', height: '70px' }}
                            alt="green iguana"
                        />
                        <Box sx={{ mx: 3 }}>
                            <Typography variant="h6" color="text.secondary">
                                {name}
                            </Typography>
                            <Typography color="text.secondary">
                                {country}
                            </Typography>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </Grid >
    );
};

export default TestMonial;