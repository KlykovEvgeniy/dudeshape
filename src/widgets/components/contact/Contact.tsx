import { Formik, Form, Field } from "formik";
import { Container } from "../container/Container";
import { FormProps } from "./model/FormProps";
import { ActionProps } from "./model/ActionProps";
import Email from "./assets/email.svg";
import "./styles/Contact.styled.scss";

const initialValues: FormProps = {
    email: ''
};

const handleSubmit = (values: FormProps, action: ActionProps) => {
    console.log(values.email)
    action.resetForm();
}

export const Contact = () => {
    return (
        <section id="contact" className="contact">
            <Container>
                <div className="contact-wrapper">
                    <h2 className="contact__title">
                        Subscribe to get the latest news about us
                    </h2>
                    <p className="contact__description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore at dolore.
                    </p>
                    <Formik onSubmit={handleSubmit} initialValues={initialValues}>
                        <Form >
                            <div className="contact__block">
                                <Email />
                                <Field autoComplete='off' placeholder='Enter your email' type='email' name='email' required />
                            </div>
                            <button className="contact__submit" type="submit">Submit</button>
                        </Form>
                    </Formik>
                </div>
            </Container>
        </section>
    )
}