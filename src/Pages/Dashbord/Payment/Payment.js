import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51JvzTsJcQr8Cfu8pp4x0axN9829voYoIqIOdVd7iw7pjIuK9OoutYag3sUn13F7r5wFPmu830cL63616GUYC91Ej00plyYXAWZ');

const Payment = () => {
    const { paymentId } = useParams();
    const [appoinment, setAppoinment] = useState({});


    useEffect(() => {
        fetch(`http://localhost:7000/appoinments/${paymentId}`)
            .then(res => res.json())
            .then(data => setAppoinment(data));

    }, [paymentId]);
    return (
        <div>
            This is payment {paymentId}
            <h2>pay: ${appoinment.price}</h2>

            {appoinment?.price &&
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        appoinment={appoinment}
                    ></CheckoutForm>
                </Elements>}
        </div>
    );
};

export default Payment;