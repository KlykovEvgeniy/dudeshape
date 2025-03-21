import { Formik, Form, Field } from 'formik';
import email from '../images/email.svg';

const initialState = {
  email: ''
};

export default function Subscribe() {
  return (
    <section id='contact' className="container px-0 max-w-[1200px] bg-[#F4F6F6] py-[60px] flex flex-col items-center mt-10 mb-20 mobile:">
      <h2 className="text-center text-[#222222] max-w-[605px] p-5 mb-1">Subscribe to get the latest news about us</h2>
      <p className="text-center text-[#222222] max-w-[500px] mb-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore at dolore.
      </p>
      <Formik initialValues={initialState}>
        <Form className="flex items-center desktop:flex-col">
          <div className="relative">
            <img src={email} className="absolute bottom-[24px] left-4 desktop:bottom-[32px]" />
            <Field className="py-5 pr-24 pl-10 max-w-[600px] placeholder:text-[#BABABA] desktop:mb-2" type="email" name="email" placeholder="Enter your email" />
          </div>
          <button className='bg-[#305F64] py-5 px-8 text-white desktop:w-full' type="submit">Register</button>
        </Form>
      </Formik>
    </section>
  );
}
