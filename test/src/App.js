import {Elements,CardElement} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51NFGMvC5UXN5nuNS1bUdcmpKFVvvfVsI4cO4kZ5CUJYbreOGg3pgJCQZCxNK4bRbd69avZiIL6FCqBD0pPUNpRHz00owdxuhjw');
const CheckoutForm = ()=>{
  return <form>
    <CardElement/>
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
