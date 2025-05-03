import { Formik, Form, Field } from "formik";
import { LogoWhite } from "../../../shared/components/LogoWhite/LogoWhite";
import { Container } from "../container/Container";
import Facebook from "./assets/facebook.svg";
import Instagram from "./assets/instagram.svg";
import Twitter from "./assets/twitter.svg";
import Youtube from "./assets/youtube.svg";
import Arrow from "./assets/arrow.svg";
import type { ActionProps } from "../contact/model/ActionProps";
import type { FormProps } from "./model/FormProps";
import "./styles/Footer.styled.scss";

const initialValues: FormProps = {
    email: '',
};

const handleSubmit = (values: FormProps, action: ActionProps) => {
    console.log(values.email);
    action.resetForm();
}

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <div className="footer__wrapper">
                    <div className="footer__header">
                        <div className="footer__item footer__item_main">
                            <LogoWhite />
                            <p className="footer__item__description">
                                Lorem ipsum dolor sit amet, conse
                                ctetur adipiscing elit, sed eiusmod tempor incididunt ut labore .
                            </p>
                            <div className="footer__item__follow">
                                <h2 className="footer__item__title">
                                    Follow Us:
                                </h2>
                                <ul className="footer__list">
                                    <li><a aria-label="facebook" href="#"><Facebook /></a></li>
                                    <li><a aria-label="twitter" href="#"><Twitter /></a></li>
                                    <li><a aria-label="instagram" href="#"><Instagram /></a></li>
                                    <li><a aria-label="youtube" href="#"><Youtube /></a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="footer__item footer__item_list footer__item_tour">
                            <h2 className="footer__item__title">
                                Take a tour
                            </h2>

                            <ul>
                                <li className="footer__item__list__item"><a href="#">Features</a></li>
                                <li className="footer__item__list__item"><a href="#">Pricing</a></li>
                                <li className="footer__item__list__item"><a href="#">Product</a></li>
                                <li className="footer__item__list__item"><a href="#">Support</a></li>
                            </ul>
                        </div>

                        <div className="footer__item footer__item_list footer__item_company">
                            <h2 className="footer__item__title">
                                Our company
                            </h2>

                            <ul>
                                <li className="footer__item__list__item"><a href="#">About Us</a></li>
                                <li className="footer__item__list__item"><a href="#">Blog</a></li>
                                <li className="footer__item__list__item"><a href="#">Media</a></li>
                                <li className="footer__item__list__item"><a href="#">Contact Us</a></li>
                            </ul>
                        </div>

                        <div className="footer__item footer__item_form">
                            <h2 className="footer__item__title">Subscribe</h2>
                            <p className="footer__desription__form">
                                Subscribe to get the latest news from us
                            </p>
                            <Formik onSubmit={handleSubmit} initialValues={initialValues}>
                                <Form>
                                    <Field autoComplete='off' name='email' type='email' placeholder='Email Address'/>
                                    <button aria-label="submit btn" className="footer__button" type="submit">
                                        <Arrow />
                                    </button>
                                </Form>
                            </Formik>
                        </div>
                    </div>

                    <div className="footer__bottom">
                        <p>Copyright &copy; 2021. Crafted with love.</p>
                    </div>
                </div>
            </Container>
        </footer>
    )
}