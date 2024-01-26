import React from 'react'
import { FaHome, FaRegClock, FaDownload, FaCar, FaFire, FaGlobeAmericas, FaTags } from 'react-icons/fa'
import { BsStars, BsFire } from 'react-icons/bs'
import {
  FormControl, InputLabel, Select, MenuItem
} from '@mui/material';
import { PiDribbbleLogoFill, PiUsersFill, PiLinuxLogoFill, PiPersonSimpleBikeBold, PiGameControllerDuotone } from 'react-icons/pi'

export default function SideBar() {

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
        <div className="w-[230px] h-[100vh] px-2 bg-slate-900">
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
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={(e) => e.value}
                onChange={(e) => e.target.value}
            >
              <MenuItem value='english'>English</MenuItem>
              <MenuItem value='hindi'>Hindi</MenuItem>
              <MenuItem value='gujarati'>Gujarati</MenuItem>
            </Select>
          </FormControl>
        </div>
      </>
  )
}