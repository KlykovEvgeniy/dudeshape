import mastercard from '../images/mastercard.svg';
import air from '../images/air.svg';
import uber from '../images/uber.svg';
import paypal from '../images/paypal.svg';
import visa from '../images/visa.svg';
import stripe from '../images/stripe.svg';

export default function Trusted() {
  return (
    <section className="container desktop:py-0">
      <div className='mb-20 desktop:mb-0'>
        <h2 className="text-center text-[#244D4D] mb-10 desktop:text-[24px] desktop:leading-tight tablet:mb-5">
          Trusted by 20,000+ companies
        </h2>
        <div className="flex justify-between items-center tablet:flex-col tablet:space-y-5">
          <img className="w-1/10" src={mastercard} alt="mastercard" />
          <img className="w-1/10" src={air} alt="airbnd" />
          <img className="w-1/10" src={uber} alt="uber" />
          <img className="w-1/10" src={paypal} alt="paypal" />
          <img className="w-1/10" src={visa} alt="visa" />
          <img className="w-1/10" src={stripe} alt="stripe" />
        </div>
      </div>
    </section>
  );
}


