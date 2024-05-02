'use client';
import * as React from 'react';
import Link from 'next/link';
import { FaArrowUp, FaRandom } from 'react-icons/fa';

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

const Footer = () => {
  return (
    <>
      <div className='px-8 sticky top-full py-4 bg-slate-900 shadow-inner shadow-slate-800 rounded-xl w-full'>
        <div className='flex flex-column flex-wrap items-center justify-center gap-6 text-lg text-gray-300 font-medium my-3'>
          {/* <Link className='hover:text-primary transition-colors duration-300' href='/about-us'>About Us</Link>| */}
          <Link className='hover:text-primary transition-colors duration-300' href='/terms-and-condition'>Terms & Condition</Link>|
          <Link className='hover:text-primary transition-colors duration-300' href='/privacy-policy'>Privacy Policy</Link>
          {/* <Link className='hover:text-primary transition-colors duration-300' href='/developer'>Developers</Link> */}
        </div>
        <div className='base:flex text-white base:flex-row base:items-center base:justify-center gap-3 mt-2'>
          <button className='flex items-center gap-2 rounded-full nm:py-4 nm:px-10 xs:py-2 xs:px-6 xs:mx-auto base:m-0 border-2 font-bold border-purple-500 hover:bg-purple-800 font-sans'>
            <FaRandom size={23} /> Random Game
          </button>
          <button className='flex items-center gap-2 rounded-full nm:py-4 nm:px-12 xs:py-2 xs:px-8 xs:mx-auto base:m-0 xs:mt-3 font-bold bg-purple-800 font-sans' onClick={scrollToTop}>
            <FaArrowUp size={23} /> Back to top
          </button>
        </div>
      </div>
    </>
  );
};

export default Footer;
