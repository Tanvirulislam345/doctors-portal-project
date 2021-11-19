import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleBlur = e => {
        setEmail(e.target.value);
    }

    const handleSubmit = e => {
        const user = { email };

        fetch('http://localhost:7000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true);
                }
            })


        e.preventDefault();
    }
    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <TextField
                    type="email"
                    label="email"
                    variant="standard"
                    onBlur={handleBlur}
                />
                <Button
                    type="submit"
                    variant="contained"
                >
                    make admin
                </Button>
            </form>
            {
                success && <Alert severity="success">Admin make successfull</Alert>

            }
        </div>
    );
};

export default MakeAdmin;