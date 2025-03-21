import { Link } from 'react-router-dom';
import logo from '../images/DudeShape (1).svg';
import facebook from '../images/facebook 2.svg';
import twitter from '../images/twitter 2.svg';
import instagram from '../images/instagram 1.svg';
import youtube from '../images/youtube';
import { Formik, Form, Field } from 'formik';
import { GoArrowRight } from 'react-icons/go';

const initailState = {
  email: ''
};

export default function Footer() {
  return (
    <footer className="bg-[#305F64] px-0 w-full pt-10 desktop:pt-0">
      <div className="container flex items-start justify-between tablet:justify-center">
        <div className='desktop:flex desktop:flex-col desktop:items-center'>
          <Link to="/">
            <img className="mb-4" src={logo} alt="logo" />
          </Link>

          <p className="max-w-[308px] mb-8 text-white desktop:text-center">
            Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, sed eiusmod tempor incididunt ut labore .
          </p>
          <h3 className="text-white mb-2">Follow Us:</h3>
          <ul className="flex space-x-4">
            <li>
              <img src={facebook} alt="facebook" />
            </li>
            <li>
              <img src={twitter} alt="twitter" />
            </li>
            <li>
              <img src={instagram} alt="instagram" />
            </li>
            <li>
              <img src={youtube} alt="youtube" />
            </li>
          </ul>
        </div>
        <div className="tablet:hidden">
          <h3 className="text-white mb-2">Take a tour</h3>
          <ul className="text-white space-y-2">
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Product</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
          </ul>
        </div>
        <div className="tablet:hidden">
          <h3 className="text-white mb-2">Our company</h3>
          <ul className="text-white space-y-2">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Media</a>
            </li>
            <li>
              <a href="#">Contact US</a>
            </li>
          </ul>
        </div>
        <div className="tablet:hidden">
          <div>
            <h3 className="text-white mb-2">Subscribe</h3>
            <p className="text-white max-w-[240px] mb-5">Subscribe to get the latest news from us</p>
          </div>

          <Formik initialValues={initailState}>
            <Form>
              <div className="flex items-center relative">
                <Field className="py-2 px-5" name="email" type="email" placeholder="Email Address" />
                <button className="bg-[#FFB624] rounded-full p-1 absolute right-8" type="submit">
                  <GoArrowRight className="w-4 h-4 bg-[#FFB624] fill-white rounded-full" />
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
      <div className="h-1 w-full bg-[#407980]"></div>
      <div className="container flex justify-center">
        <p className="text-white desktop:text-center">Copyright &copy; 2021. Crafted with love.</p>
      </div>
    </footer>
  );
}
