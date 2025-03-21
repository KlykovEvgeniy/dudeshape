import picture from '../images/daniil-silantev.png';
import Button from '../reuse/Button';

export default function Hero() {
  return (
    <section className="container flex items-center justify-between mb-20 desktop:mb-5">
      <div className='bg-[#154444] w-full h-[500px] flex justify-between items-center desktop2xl:items-center desktop2xl:justify-center tablet:p-5'>
        <img className='object-cover h-full w-1/3 mr-10 desktop2xl:hidden' src={picture} alt="beautiful furniture" />
        <div className='flex flex-col items-start desktop2xl:items-center'>
          <h1 className="max-w-[671px] desktop2xl:text-center text-white mb-5 tablet:text-[40px] mobile:text-[10px]">We Help You Make Modern Furniture</h1>
          <p className="text-white max-w-[488px] mb-14 desktop2xl:text-center  tablet:text-[16px] tablet:mb-10 mobile:mb-0">
            All of our furniture uses the best materials and choices for our customers.All of our furniture uses the
            best materials
          </p>
          <Button title='Explore More'/>
        </div>
      </div>
    </section>
  );
}

