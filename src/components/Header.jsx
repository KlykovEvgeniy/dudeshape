import AppBar from './AppBar';
import Logo from '../images/logo.svg';
import { useWindowSize } from '@react-hooks-library/core';
import { useEffect, useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoClose } from 'react-icons/io5';
import { Link } from 'react-router-dom';

export default function Header() {
  const [vis, setVis] = useState(true);
  const { width } = useWindowSize();

  useEffect(() => {
    if (width <= 1024) {
      setVis(false);
    } else {
      setVis(true);
    }
  }, [width]);

  const handleHamburgerMenuClick = () => {
    window.pageYOffset = 0;
    document.body.classList.toggle('overflow-y-hidden');
    setVis((prev) => !prev);
  };

  return (
    <header className="container flex justify-between items-center fixed z-50 left-0 right-0 top-0 bg-white">
      <Link to='/'>
        <img src={Logo} alt="Dude Shape Logo" />
      </Link>
      {vis && <AppBar />}
      {width <= 1024 && (
        <button onClick={handleHamburgerMenuClick} className="z-10">
          {vis ? <IoClose className="w-8 h-8 fill-black" /> : <RxHamburgerMenu className="w-8 h-8 fill-black" />}
        </button>
      )}
    </header>
  );
}

