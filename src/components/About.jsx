import sofa from '../images/green-sofa.png';
import shield from '../images/shield 3.svg';
import gredieted  from '../images/guarantee 1.svg';
import dev from '../images/free-delivery 1.svg';
import AboutCard from '../reuse/AboutCard'

export default function About() {
  return (
    <section id='about' className="container flex items-center justify-between mb-20 desktop:mb-5 desktop:flex-col">
      <img className='w-1/2 object-cover shadow-m mr-10 desktop:hidden' src={sofa} alt="big-green-sofa" />
      <div>
        <h2 className='text-[#244D4D] mb-3 desktop:text-[25px] desktop:text-center desktop:mb-0'>About Us</h2>
        <p className='text-[#444444] max-w-[436px] mb-8 desktop:max-w-none desktop:text-center'>
          All of our furniture uses the best materials and choices for our customers.All of our furniture uses the best
          materials
        </p>
        <div className='flex flex-col items-start space-y-5 desktop:items-center'>
            <AboutCard title='Best Quality' text='All of our furniture uses the best materials and choices' img={shield}/>
            <AboutCard title='100% Secure' text='All of our furniture uses the best materials and choices' img={gredieted}/>
            <AboutCard title='Free Shpping' text='All of our furniture uses the best materials and choices' img={dev}/>
        </div>
      </div>
    </section>
  );
}


