import React, { useState, useEffect } from 'react';
import useAuth from '../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const AllAppoinments = ({ date }) => {
    const { user } = useAuth();
    const [appoinmentData, setAppoinmentData] = useState([]);

    useEffect(() => {
        const url = `http://localhost:7000/appoinments?email=${user.email}&date=${date}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setAppoinmentData(data));
    }, [user.email, date]);

    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>

                        <TableCell align="left">Name</TableCell>
                        <TableCell align="left">service</TableCell>
                        <TableCell align="left">Price</TableCell>
                        <TableCell align="left">Time</TableCell>
                        <TableCell align="left">date</TableCell>
                        <TableCell align="left">Payment</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {appoinmentData.map((data) => (
                        <TableRow
                            key={data._id}
                        >
                            <TableCell align="left">{data.patientName}</TableCell>
                            <TableCell align="left">{data.serviceName}</TableCell>
                            <TableCell align="left">{data.price}</TableCell>
                            <TableCell align="left">{data.time}</TableCell>
                            <TableCell align="left">{data.date}</TableCell>
                            <TableCell align="left">{data.payment ? 'paid'
                                :
                                <Link
                                    style={{ textDecoration: 'none' }}
                                    to={`/dashbord/payment/${data._id}`}
                                ><Button variant="contained" >pay</Button></Link>
                            }</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default AllAppoinments;