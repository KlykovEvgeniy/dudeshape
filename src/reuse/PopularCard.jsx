import { MdFavorite } from 'react-icons/md';
import { CiShare2 } from 'react-icons/ci';
import chair from '../images/white-chair.png';
import { Link } from 'react-router-dom';

export default function PopularCard({ index }) {
  const handleClick = () => {
    window.pageYOffset = 0;
  }
  return (
    <Link onClick={handleClick} state={index} to={`${index.name}`}>
      <article key={index.name} className="flex flex-col max-w-[380px] shadow-lg">
        <img className="w-full mb-2" src={chair} alt="beautiful chair" />
        <div className="p-5">
          <div className="w-full flex items-center justify-between mb-4">
            <h3 className="text-[#242424]">{index.name}</h3>
            <div className="flex items-center justify-between space-x-2">
              <button className="w-7 h-7 bg-[#EF5423] rounded-full grid place-items-center" type="button">
                <MdFavorite className="fill-white w-4 h-4" />
              </button>
              <button className="w-7 h-7 bg-[#ECF4FF] rounded-full grid place-items-center" type="button">
                <CiShare2 className="fill-black w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between w-full">
            <h3 className="text-[#154444]">{index.cost}$</h3>
            <button className="bg-[#244D4D] py-2 px-4 text-white" type="button">
              Buy Now
            </button>
          </div>
        </div>
      </article>
    </Link>
  );
}
