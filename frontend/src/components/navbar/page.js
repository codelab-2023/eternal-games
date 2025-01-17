'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { FaFantasyFlightGames, FaRegHeart } from 'react-icons/fa6'
import { IoSearch } from 'react-icons/io5'
import './page.css'
import gameService from '../../services/game.service'
import { Button } from '@mui/material'
import { useRouter } from 'next/navigation'

export default function Navbar({ toggleSideBar }) {
  const route = useRouter()

  const [ searchedGame, setSearchedGame ] = useState('')

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
          <div className="relative flex items-center header-search xs:hidden nm:flex w-5/12 flex mx-auto">
            <input
                id="searchInput"
                className="w-full rounded-xl focus-visible:outline-none pl-4 pr-10 py-2 !bg-slate-800 border-2 border-slate-800"
                type="search"
                placeholder="Search"
                value={searchedGame}
                onChange={(e) => setSearchedGame(e.target.value)}
                onKeyDown={(e) => {
                  if(e.key === 'Enter'){
                    e.preventDefault();
                    const value = e.target.value?.trim();
                    if (value) {
                      setSearchedGame(value);
                      route.push(`/search?query=${value}`)
                    }
                  }
                }}
            />
            {
              searchedGame ?
                  <button
                      id="clearButton"
                      onClick={() => setSearchedGame('')}
                      className="absolute right-16 z-50 text-lg text-lime-400"
                  >
                    ✕
                  </button> : null
            }
            <button className="relative right-8 h-auto text-lime-300" onClick={() => route.push(`/search?query=${searchedGame}`)}>
              <IoSearch size={23}/>
            </button>
          </div>
          <div className="flex items-center gap-6">
            <FaRegHeart size={25}/>
          </div>
        </div>
      </>
  )
}
