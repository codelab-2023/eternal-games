'use client'
import React, { useEffect, useState } from 'react'
import { FaBars, FaFantasyFlightGames, FaRegHeart } from 'react-icons/fa6'
import { IoSearch } from 'react-icons/io5'
import SideBar from '../sidebar/page'

export default function Navbar() {
  const [ openSideBar, setOpenSideBar ] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 600 && openSideBar) {
        setOpenSideBar(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  })

  function handleToggle() {
    setOpenSideBar((prevState) => !prevState)
  }

  return (
      <>
        <div className="flex items-center top-0 left-0 right-0 px-6 py-4 bg-slate-900/90 z-50 backdrop-blur-sm relative">
          <SideBar isOpen={openSideBar} onClose={handleToggle}/>
          <button className="mr-10" onClick={handleToggle}>
            <FaBars size={25}/>
          </button>

          <div className="flex gap-4">
            <FaFantasyFlightGames size={30}/>
            <div className="text-[24px] font-bold text-lime-400 font-sans">ZenGames</div>
          </div>
          <div className="m-auto flex">
            <input className="rounded-xl pl-4 pr-10 py-2 bg-slate-800 border-2 border-slate-800" type="search" placeholder="Search"/>
            <div className="relative right-8 mt-2 h-auto text-lime-300">
              <IoSearch size={23}/>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <FaRegHeart size={25}/>
            <button className="font-bold font-sans rounded-full p-2 px-6 mr-4 bg-lime-500 hover:bg-lime-600">Log in</button>
          </div>
        </div>
      </>
  )
}