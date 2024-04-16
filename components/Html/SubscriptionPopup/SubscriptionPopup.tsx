import s from "./popup.module.scss";
import { IoClose } from "react-icons/io5";
import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/clientApp";
import { useSnapshot } from "valtio";
import { store } from "@/store";

export const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

type props = {};

type formprops = {};

const Form: React.FC<formprops> = ({}) => {
  const stripe = useStripe();
  const elements = useElements();

  const [user] = useAuthState(auth);

  const handleClick = async () => {
    try {
      const paymentMethod = await stripe?.createPaymentMethod({
        type: "card",
        card: elements?.getElement("card")!,
      });

      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: user?.displayName,
          email: user?.email,
          paymentMethod: paymentMethod?.paymentMethod?.id,
        }),
      });

      if (!response.ok) return alert("Payment Unsuccessful");
      const data = await response.json();
      const confirm = await stripe?.confirmCardPayment(data.clientSecret);
      if (confirm?.error) return alert("Payment Unsuccessful");
      alert("Payment Successful Active");
      alert("Now You Access Lock Area");
      store.invisibleWallIsOpen = true;
      store.subscriptionPopupIsActive = false;
    } catch (error) {
      alert(`Payment Failed`);
      console.log(error);
    }
  };
  return (
    <>
      <CardElement />
      <button onClick={handleClick}>Buy Now - $ 10</button>
    </>
  );
};

const SubscriptionPopup: React.FC<props> = ({}) => {
  const { subscriptionPopupIsActive } = useSnapshot(store);

  return (
    <div data-active={subscriptionPopupIsActive} className={s.main}>
      <IoClose onClick={() => (store.subscriptionPopupIsActive = false)} />
      <h1>Change it to VIP Area Access</h1>
      <h2>Loyal Program</h2>
      <ul>
        <li>Benefits for Our Community</li>
        <li>VIP area access</li>
        <li>Loyalty Program</li>
      </ul>
      <Elements stripe={stripePromise}>
        <Form />
      </Elements>
    </div>
  );
};

export default SubscriptionPopup;
