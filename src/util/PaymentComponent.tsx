
import { useEffect, useState } from "react";
import { createPaymentIntent } from "../services/donation";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "./CheckoutForm";
import { stripePromise } from "./StripeInitialization";
// import { loadStripe } from "@stripe/stripe-js";

// const stripePromist = loadStripe("publishable-key")






export default function PaymentComponent() {

    const [clientSecret, setClientSecret] = useState<string | null>(null)
    // const [stripePromise, setStripePromise] = useState<Promise<Stripe | null> | null>(null)

   

    useEffect(() => {

        const makePaymentIntent = async () => {
            const res = await createPaymentIntent(2000)
            setClientSecret(res)
        }
        makePaymentIntent()
        // initStripe().then(setStripePromise)
        
    }, [])

    if (!clientSecret) {
        return <div>loading ...</div>
    }

    // send the publishable-key from the backend


  return (
        <Elements stripe={stripePromise} options={{clientSecret}}>
            <CheckoutForm clientSecret={clientSecret}/>
        </Elements>
  )
}
