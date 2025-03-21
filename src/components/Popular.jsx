import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProducts } from '../redux';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import PopularCard from '../reuse/PopularCard';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { MdKeyboardArrowRight } from 'react-icons/md';

export default function Popular() {
  const [curr, setCur] = useState(0);
  const { entries, isLoading } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const list = useRef();
  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  const first = entries[curr];
  const second = entries[curr + 1];
  const third = entries[curr + 2];

  const handleClick = () => {
    if (curr + 3 === entries.length - 1) {
      return;
    }
    setCur((prev) => prev + 1);
  };

  const handleDecreaseClick = () => {
    if (curr === 0) {
      return;
    }

    setCur((prev) => prev - 1);
  };

  return (
    <section className="container desktop:py-0 ">
      <div ref={list} className="relative">
        <h2 className="text-[#242424] mb-2 desktop:text-center desktop:text-[24px]  relative -z-10 ">
          Our Popular Furniture
        </h2>
        <p className="text-[#383738] max-w-[819px] mb-10 desktop:text-center desktop:max-w-none desktop:text-[16px] desktop:leading-tight  relative -z-10">
          All of our furniture uses the best materials and choices for our customers.All of our furniture uses the best
          materials and choices for our customers.
        </p>

        <div className="absolute right-0 bottom-0 space-x-2 desktop:hidden">
          <button onClick={handleDecreaseClick} type="button">
            <MdKeyboardArrowLeft className="w-8 h-8 bg-[#F4F6F6] rounded-full" />
          </button>
          <button onClick={handleClick} type="button">
            <MdKeyboardArrowRight className="w-8 h-8 bg-[#F4F6F6] rounded-full" />
          </button>
        </div>
      </div>
      <div className="grid-tm desktop:flex desktop:flex-col desktop:items-center desktop:space-y-5">
        {isLoading && <AiOutlineLoading3Quarters className="animate-spin w-8 h-8" />}
        {first !== undefined && (
          <>
            <PopularCard index={first} />
            <PopularCard index={second} />
            <PopularCard index={third} />
          </>
        )}
      </div>
    </section>
  );
}
