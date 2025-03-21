import chairs from '../images/chairs.png';
import sofa from '../images/sofa 1.svg';
import kitchen from '../images/kitchen.svg';
import dinnig from '../images/dinning.svg';
import office from '../images/office.svg';
import bedroom from '../images/bedroom.svg';
import hallway from '../images/hallway.svg';
import FurnitureCard from '../reuse/FurnitureCard';

export default function Furniture() {
  return (
    <section id='features' className="container flex flex-col items-center mt-10 desktop:mt-0">
      <h2 className="text-[All Furniture] text-center mb-5 desktop:text-[24px] desktop:mb-0">All Furniture</h2>
      <ul className="flex items-center justify-between max-w-[720px] w-full tablet:mb-0">
        <li>
          <button className="text-[#919090] btn desktop:text-[16px]" type="button">
            Shop By Category
          </button>
        </li>
        <li>
          <button className="text-[#919090] btn desktop:text-[16px]" type="button">
            Shop By Style
          </button>
        </li>
        <li>
          <button className="text-[#919090] btn desktop:text-[16px]" type="button">
            Shop By Room
          </button>
        </li>
      </ul>
      <div className="flex w-full items-center justify-between mt-20 desktop2xl:flex-col desktop2xl:items-center desktop:mt-6">
        <div className="relative mb-10">
          <img className="relative z-10" src={chairs} alt="Chairs" />
          <div className="absolute w-[190px] h-[85px] bg-[#154444] z-0 -top-4 -left-4"></div>
          <div className="absolute w-[190px] h-[85px] bg-[#154444] z-0 -bottom-4 -right-4"></div>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <FurnitureCard color="text-[#808080]" title="Living Room" img={sofa} />
          <FurnitureCard color="text-[#808080]" title="Kitchen" img={kitchen} />
          <FurnitureCard color="text-[#808080]" title="Dinning Room" img={dinnig} />
          <FurnitureCard invert={'#154444'}  color="text-white" title="Office" img={office} />
          <FurnitureCard color="text-[#808080]" title="Bed Room" img={bedroom} />
          <FurnitureCard color="text-[#808080]" title="Hallway" img={hallway} />
        </div>
      </div>
    </section>
  );
}
