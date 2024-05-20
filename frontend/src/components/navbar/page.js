'use client'
import React from 'react'
import Link from 'next/link'
import { FaFantasyFlightGames, FaRegHeart } from 'react-icons/fa6'
import { IoSearch } from 'react-icons/io5'

export default function Navbar({ toggleSideBar }) {

  return (
      <>
        <div className="w-dvw flex text-lime-400 items-center justify-between top-0 left-0 right-0 md:px-6 xs:px-4 py-4 bg-slate-900/90 z-50 backdrop-blur-sm relative">
          <div className="flex ">
            {/*<button className="mr-10" onClick={toggleSideBar}>*/}
            {/*  <FaBars size={25}/>*/}
            {/*</button>*/}
            <Link href="/">
              <div className="flex gap-4">
                <FaFantasyFlightGames size={30}/>
                <div className="text-[24px] font-bold text-lime-400 font-sans">EternalGames</div>
              </div>
            </Link>
          </div>
          <div className="xs:hidden nm:flex w-5/12 flex mx-auto">
            <input className="w-full rounded-xl pl-4 pr-10 py-2 bg-slate-800 border-2 border-slate-800" type="search" placeholder="Search"/>
            <div className="relative right-8 mt-2 h-auto text-lime-300">
              <IoSearch size={23}/>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <FaRegHeart size={25}/>
          </div>
        </div>
      </>
  )
}
