import { loadStripe } from "@stripe/stripe-js";
import { apiKey } from "./key";

export const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}`, {
    locale: 'en'
});