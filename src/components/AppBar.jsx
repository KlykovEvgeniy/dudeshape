
import Grocery from '../images/menu.svg';
import Loupe from '../images/loupe.svg';

export default function AppBar() {
  return (
    <nav className="flex justify-between items-center w-2/3 desktop:flex-col desktop:absolute desktop:top-0 desktop:right-0 desktop:bg-white desktop:items-center desktop:h-[100vh] desktop:w-screen desktop:justify-center desktop:z-10">
      <ul className="flex items-center space-x-16 desktop:flex-col desktop:items-center desktop:space-x-0 desktop:space-y-5">
        <li>
          <a className="desktop:text-3xl desktop:text-black" href="#">
            Home
          </a>
        </li>
        <li>
          <a className="desktop:text-3xl desktop:text-black" href="#about">
            About
          </a>
        </li>
        <li>
          <a className="desktop:text-3xl desktop:text-black" href="#features">
            Features
          </a>
        </li>
        <li>
          <a className="desktop:text-3xl desktop:text-black" href="#contact">
            Contact
          </a>
        </li>
      </ul>
      <div className="flex justify-center items-center space-x-10 desktop:space-x-2 desktop:justify-end">
        <button type="button">
          <img className="desktop:w-10 desktop:mt-5" src={Loupe} alt="loupe" />
        </button>
        <button type="button">
          <img className="desktop:w-10 desktop:mt-5" src={Grocery} alt="grocery" />
        </button>
      </div>
    </nav>
  );
}

