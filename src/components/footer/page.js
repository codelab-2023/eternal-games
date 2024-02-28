'use client'
import * as React from 'react'
import Link from 'next/link'
import { FaArrowUp, FaRandom } from 'react-icons/fa'

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

const Footer = () => {
  return (
      <>
        <div className="sticky top-full px-8 py-4 bg-slate-900 shadow-inner shadow-slate-800 rounded-xl w-full">
          <div className="flex flex-column flex-wrap items-center justify-center gap-6 text-lg text-gray-300 font-medium my-3">
            <Link className="hover:text-primary transition-colors duration-300" href="/about-us">About Us</Link>|
            <Link className="hover:text-primary transition-colors duration-300" href="/terms-and-condition">Terms & Condition</Link>|
            <Link className="hover:text-primary transition-colors duration-300" href="/privacy-policy">Privacy Policy</Link>|
            <Link className="hover:text-primary transition-colors duration-300" href="/privacy-policy">Developers</Link>|
            <Link className="hover:text-primary transition-colors duration-300" href="/privacy-policy">Advertising</Link>|
            <Link className="hover:text-primary transition-colors duration-300" href="/privacy-policy">Kids Site</Link>|
            <Link className="hover:text-primary transition-colors duration-300" href="/privacy-policy">Jobs</Link>|
            <Link className="hover:text-primary transition-colors duration-300" href="/privacy-policy">Info For Parents</Link>|
            <Link className="hover:text-primary transition-colors duration-300" href="/privacy-policy">All Games</Link>
          </div>
          <div className="flex items-center flex-row justify-center">
            <button className="flex items-center gap-2 rounded-full py-4 px-10 m-4 border-2 font-bold border-purple-500 hover:bg-purple-800 font-sans">
              <FaRandom size={17}/> Random Game
            </button>
            <button className="flex items-center gap-2 rounded-full py-4 px-12 m-4 font-bold bg-purple-800 font-sans" onClick={scrollToTop}>
              <FaArrowUp size={17}/> Back to top
            </button>
          </div>
        </div>
      </>
  )
}

export default Footer
