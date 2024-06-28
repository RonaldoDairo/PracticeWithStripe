import {Elements,CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

import "bootswatch/dist/lux/bootstrap.min.css"

const stripePromise = loadStripe('pk_test_51NFGMvC5UXN5nuNS1bUdcmpKFVvvfVsI4cO4kZ5CUJYbreOGg3pgJCQZCxNK4bRbd69avZiIL6FCqBD0pPUNpRHz00owdxuhjw');
const CheckoutForm = ()=>{

  const stripe = useStripe();
  const elements = useElements();
const handleSubmit = async (e) =>{
  e.preventDefaul();
  const {error, paymentMethod} = await stripe.createPaymentMethod({
  type: 'card',
  card: elements.getElement(CardElement),
});

}

  return <form onSubmit={handleSubmit}>
    <CardElement/>
    <button>
      Buy
    </button>
  </form>
}

function App() {
  return (
   
    <Elements stripe={stripePromise}> 
    <CheckoutForm/>
  </Elements>
    
  );
}

export default App;
