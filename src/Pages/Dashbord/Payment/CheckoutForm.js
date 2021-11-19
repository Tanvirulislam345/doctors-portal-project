import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const CheckoutForm = ({ appoinment }) => {

    const [clientSecret, setClientSecret] = useState('');
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    const stripe = useStripe();
    const elements = useElements();
    const { price, patientName } = appoinment;
    const { user } = useAuth();

    useEffect(() => {
        fetch(`http://localhost:7000/create-payment-intent`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => setClientSecret(data));
    }, [price]);


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            setError("ErrorPayment", error.message);
        } else {
            setError('');

            console.log('[paymentMethod]', paymentMethod);
        }

        //confirm payment 
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: patientName
                        // email: user.email
                    },
                },
            },
        );

        if (intentError) {
            setError("ErrorConfirm", intentError.message);
            setSuccess('');
        } else {
            setError('');
            setSuccess('your payment process succefully');
            console.log(paymentIntent);
        }

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button type="submit" disabled={!stripe}>
                    Pay ${price}
                </button>
                {
                    error && <p style={{ color: 'red' }}>{error}</p>
                }
                {
                    success &&
                    <p style={{ color: 'red' }}>{success}</p>
                }
            </form>
        </div>
    );
};

export default CheckoutForm;