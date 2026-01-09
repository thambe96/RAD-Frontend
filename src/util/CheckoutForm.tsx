import { useElements, useStripe, CardElement } from "@stripe/react-stripe-js"


export default function CheckoutForm( { clientSecret}: {clientSecret: string}) {

    const stripe = useStripe()
    const elements = useElements()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!stripe || !elements) { 
            return
        }

        alert("This is client secret: " + clientSecret)

        const cardElement = elements.getElement(CardElement)
        const { paymentIntent, error } = await stripe.confirmCardPayment(
            clientSecret,
            { payment_method: { card: cardElement! } }
        );

        if (error) {
            console.error(error.message);
        } else if (paymentIntent?.status === "succeeded") {
            alert("Payment successful!");
        }

        
    }


  return (

    // <form onSubmit={handleSubmit} >
    //     <CardElement />
    //     <button type="submit" disabled={!stripe}>Pay</button>
    // </form>

    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
 
    <div className="p-3 border border-gray-300 rounded-md bg-gray-50">
        <CardElement
        options={{
            hidePostalCode: true,
            style: {
            base: {
                fontSize: "16px",
                color: "#1a202c", // Tailwind gray-900
                "::placeholder": { color: "#9ca3af" }, // Tailwind gray-400
            },
            invalid: { color: "#dc2626" }, // Tailwind red-600
            },
        }}
        />
    </div>

    <button
        type="submit"
        disabled={!stripe}
        className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
    >
        Donate 20$
    </button>
    </form>




  )
}
