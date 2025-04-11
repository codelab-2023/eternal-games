'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { FaFantasyFlightGames } from 'react-icons/fa6'
import { IoSearch } from 'react-icons/io5'
import './page.css'
import { useRouter } from 'next/navigation'
import { MdClose, MdMenu } from 'react-icons/md'

export default function Navbar({ toggleSideBar }) {
  const route = useRouter()

  const [ searchedGame, setSearchedGame ] = useState('')
  const [ isOpen, setIsOpen ] = useState(false)

  return (
      <>
        <div className="w-dvw flex text-lime-400 items-center justify-between top-0 left-0 right-0 md:px-6 xs:px-4 py-4 bg-slate-900/90 z-50 backdrop-blur-sm relative">
          <div className="flex ">
            {/*<button className="mr-10" onClick={toggleSideBar}>*/}
            {/*  <FaBars size={25}/>*/}
            {/*</button>*/}
            <Link href="/">
              <div className="flex gap-4 overflow-y-hidden h-16">
                <img src={'/trans-logo-full.png'} className='object-cover rounded-lg' width={160} alt={'logo'}/>
              </div>
            </Link>
          </div>
          <div className="hidden md:flex relative flex items-center header-search w-5/12 flex mx-auto">
            <input
                id="searchInput"
                className="w-full rounded-xl focus-visible:outline-none pl-4 pr-10 py-2 !bg-slate-800 border-2 border-slate-800"
                type="search"
                placeholder="Search"
                value={searchedGame}
                onChange={(e) => setSearchedGame(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault()
                    const value = e.target.value?.trim()
                    if (value) {
                      setSearchedGame(value)
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
            <button className="absolute right-2  h-auto text-lime-300" onClick={() => route.push(`/search?query=${searchedGame}`)}>
              <IoSearch size={23}/>
            </button>
          </div>
          <button
              className="md:hidden bg-black p-2 rounded text-gray-700 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <MdClose color={'#ffffff'} size={24}/> : <MdMenu color={'#ffffff'} size={24}/>}
          </button>
          {/*<div className="flex items-center gap-6">*/}
          {/*  <FaRegHeart size={25}/>*/}
          {/*</div>*/}
        </div>
        {
          isOpen && (
              <div className="absolute z-50 py-2 bg-black/80 shadow-lg w-full">
                <div className='relative mx-3 header-search flex items-center'>
                  <input
                      id="searchInput"
                      className="w-full rounded-xl focus-visible:outline-none pl-4 pr-10 py-2 !bg-slate-800 border-2 border-slate-800"
                      type="search"
                      placeholder="Search"
                      value={searchedGame}
                      onChange={(e) => setSearchedGame(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault()
                          const value = e.target.value?.trim()
                          if (value) {
                            setSearchedGame(value)
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
                            className="absolute right-10 z-50 text-lg text-lime-400"
                        >
                          ✕
                        </button> : null
                  }
                  <button className="absolute right-3 h-auto text-lime-300" onClick={() => route.push(`/search?query=${searchedGame}`)}>
                    <IoSearch size={23}/>
                  </button>
                </div>
              </div>
          )
        }
      </>
  )
}
