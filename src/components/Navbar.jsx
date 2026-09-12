import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';


const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    const visible = prevScrollPos > currentScrollPos || currentScrollPos < 10;

    setVisible(visible);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos, visible]);

  return (
    <nav className={`px-4 md:px-8 w-full flex items-center py-5 fixed top-0 z-20 transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0 h-0'}`}>
      <div className={'w-full flex justify-between items-center max-w-7xl mx-auto'}>
        <Link
         to="/" 
         className='flex items-center gap-2' 
         onClick={() => {
          setActive("");
          window.scrollTo(0, 0);
         }}>
          <img src={logo} alt="logo" style={{ cursor: "pointer", width: "50px", height: "50px"}} />
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>Divyarajsinh Karmariya &nbsp;
          <span className='sm:block hidden'> | Full-Stack &amp; AI Engineer 
          </span>
          </p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              {link.imgSrc ? (
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  <img src={link.imgSrc} alt={link.title} style={{ position: "relative", top: "-15px", width: "53px", height: "50px" }} />
                </a>
              ) : (
                <a href={`#${link.id}`}>{link.title}</a>
              )}
       
              
            </li>
          ))}
        </ul>
        

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt="menu"
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />

          <div className={`${!toggle ? "hidden" : "flex"} p-6 background-gradient bg-tertiary rounded-2xl absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-2xl`}>
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${active === link.title ? "text-white" : "text-secondary"} font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  {link.imgSrc ? (
                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                      <img src={link.imgSrc} alt={link.title} style={{ position: "relative", left: "6px", width: "30px", height: "30px" }} />
                    </a>
                  ) : (
                    <a href={`#${link.id}`}>{link.title}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>  
    </nav>
  );
};

export default Navbar;
