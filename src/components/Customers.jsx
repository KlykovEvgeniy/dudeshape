import customersPic from '../images/customers-picture.png';
import man from '../images/man-picture.png';
import star from '../images/star 2.svg';

export default function Customers() {
  return (
    <section className="container mt-10 flex justify-between items-center desktop:mt-0 desktop2xl:flex-col">
      <img src={customersPic} className='mb-2' alt="customer picture" />
      <div className='flex flex-col desktop2xl:items-center'>
        <h2 className="text-[#242424] max-w-[535px] mb-3 desktop2xl:text-center desktop2xl:mb-0 desktop2xl:text-[24px] desktop2xl:leading-tight">Our customers are verry importan to us</h2>
        <p className="max-w-[535px] text-[#383738] mb-6 desktop2xl:text-center desktop2xl:mb-3 desktop2xl:text-[12px] desktop2xl:leading-tight" >
          All of our furniture uses the best materials and choices for our customers.All of our furniture uses the best
          materials and choices for our customers.
        </p>
        <div className="flex items-center">
          <img src={man} className="mr-3" alt="Man Picture" />
          <div>
            <h3 className="text-[#000000]">Mh Jibon</h3>
            <div className='flex items-center'>
              <img className='mr-2' src={star} alt="star" />
              <p className='text-[#000000]'>4.8</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
