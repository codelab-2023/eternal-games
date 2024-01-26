'use client'
import React, { useEffect, useState } from 'react'
import { FaBars, FaFantasyFlightGames, FaRegHeart } from 'react-icons/fa6'
import { IoSearch } from 'react-icons/io5'
// import GamePage from '../game/page';
import { FaCar, FaDownload, FaFire, FaGlobeAmericas, FaHome, FaRegClock, FaTags } from 'react-icons/fa'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { BsFire, BsStars } from 'react-icons/bs'
import { PiDribbbleLogoFill, PiGameControllerDuotone, PiLinuxLogoFill, PiPersonSimpleBikeBold, PiUsersFill } from 'react-icons/pi'


export default function Navbar() {

  const [ openSideBar, setOpenSideBar ] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if(window.innerWidth > 600 && openSideBar){
        setOpenSideBar(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  })

  const items = [
    {
      title: 'Home',
      icon: <FaHome/>
    },
    {
      title: 'Recently played',
      icon: <FaRegClock/>
    },
    {
      title: 'New',
      icon: <BsStars/>
    },
    {
      title: 'Trending now',
      icon: <BsFire/>
    },
    {
      title: 'Updated',
      icon: <FaDownload/>
    },
    {
      title: 'Originals',
      icon: <PiLinuxLogoFill/>
    },
    {
      title: 'Random',
      icon: <BsStars/>
    }
  ]

  const categories = [
    {
      title: '2 Players',
      icon: <PiUsersFill/>
    },
    {
      title: 'Car',
      icon: <FaCar/>
    },
    {
      title: 'Action',
      icon: <FaFire/>
    },
    {
      title: 'Adventure',
      icon: <FaGlobeAmericas/>
    },
    {
      title: 'Basketball',
      icon: <PiDribbbleLogoFill/>
    },
    {
      title: 'Bike',
      icon: <PiPersonSimpleBikeBold/>
    },
    {
      title: 'Controller',
      icon: <PiGameControllerDuotone/>
    }
  ]

  return (
      <>
          <div className="flex items-center sticky top-0 left-0 right-0 px-6 py-4 bg-slate-900/90 z-50 backdrop-blur-sm relative">
              <div className={`bg-slate-900/90 px-4 text-white fixed h-[100vh] absolute left-0 top-[76px] transition-transform transform ${openSideBar ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className='border-b-2 py-4 border-slate-700'>
                  {
                    items.map((items, index) =>
                        <div key={index}>
                          <div className="flex items-center pl-4 py-2 gap-6 ">
                            <div className="text-slate-400 text-lg">{items.icon}</div>
                            <div className="text-slate-400 text-white">{items.title}</div>
                          </div>
                        </div>
                    )
                  }
                </div>
                <div className='border-b-2 py-4 border-slate-700'>
                  {
                    categories.map((categories, index) =>
                        <div key={index}>
                          <div className="flex items-center pl-4 py-2 gap-6 ">
                            <div className="text-slate-400 text-lg	">{categories.icon}</div>
                            <div className="text-slate-400 text-white">{categories.title}</div>
                          </div>
                        </div>
                    )}
                </div>
                <div>
                  <div className="flex items-center pl-4 py-2 gap-6 ">
                    <div className="text-slate-400 text-lg	"><FaTags/></div>
                    <div className="text-slate-400 text-white">Tags</div>
                  </div>
                </div>
                {/*<FormControl fullWidth>*/}
                {/*  <InputLabel id="demo-simple-select-label">Age</InputLabel>*/}
                {/*  <Select*/}
                {/*      labelId="demo-simple-select-label"*/}
                {/*      id="demo-simple-select"*/}
                {/*      value={(e) => e.value}*/}
                {/*      onChange={(e) => e.target.value}*/}
                {/*  >*/}
                {/*    <MenuItem value='english'>English</MenuItem>*/}
                {/*    <MenuItem value='hindi'>Hindi</MenuItem>*/}
                {/*    <MenuItem value='gujarati'>Gujarati</MenuItem>*/}
                {/*  </Select>*/}
                {/*</FormControl>*/}
              </div>
            <button className="mr-10" onClick={() => setOpenSideBar(!openSideBar)}>
              <FaBars size={25}/>
            </button>

            <div className="flex gap-4">
              <FaFantasyFlightGames size={30}/>
              <div className="text-[24px] font-bold text-lime-400 font-sans">ZenGames</div>
            </div>
            <div className="m-auto flex">
              <input className="rounded-xl pl-4 pr-10 py-2 bg-slate-800 border-2 border-slate-800	" type="search" placeholder="Search"/>
              <div className="relative right-8 mt-2 h-auto text-lime-300">
                <IoSearch size={23}/>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <FaRegHeart size={25}/>
              <button className="font-bold font-sans rounded-full p-2 px-6 mr-4 bg-lime-500 hover:bg-lime-600">Log in</button>
            </div>
          </div>
        {/*<GamePage/>*/}
      </>
  )
}