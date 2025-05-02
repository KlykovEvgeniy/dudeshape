import Mastercard from "./assets/mastercard.svg";
import Airbnb from "./assets/airbnb.svg";
import Uber from "./assets/uber.svg";
import Paypal from "./assets/paypal.svg";
import Visa from "./assets/visa.svg";
import Stripe from "./assets/stripe.svg";
import { Container } from "../container/Container";
import "./styles/Trusted.styled.scss";

export const Trusted = () => {
    return (
        <section className="trusted">
            <Container>
                <h2 className="trusted__title">
                    Trusted by 20,000+ companies
                </h2>
                <div className="trusted__main">
                    <Mastercard />
                    <Airbnb />
                    <Uber />
                    <Paypal />
                    <Visa />
                    <Stripe />
                </div>
            </Container>
        </section>
    )
}