'use client'
import { FaArrowUp, FaRandom } from 'react-icons/fa'
import * as React from 'react'

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

const Footer = () => {
  return (
      <div className="flex items-center justify-center">
        <button className="flex items-center gap-2 rounded-full py-4 px-10 m-4 border-2 font-bold border-purple-500 hover:bg-purple-800 font-sans">
          <FaRandom size={17}/> Random Game
        </button>
        <button className="flex items-center gap-2 rounded-full py-4 px-12 m-4 font-bold bg-purple-800 font-sans" onClick={scrollToTop}>
          <FaArrowUp size={17}/> Back to top
        </button>
      </div>
  )
}

export default Footer