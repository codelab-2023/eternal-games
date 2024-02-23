import { sidebarCategories, sidebarFeatures } from '../../helper/helper'
import { FaTags } from 'react-icons/fa6'
import React from 'react'

const SideBar = ({ isOpen, onClose }) => {
  if (!isOpen && onClose) return null

  return (
      <div className={`bg-slate-900/90 px-4 text-white h-dvh absolute left-0 top-18 transition-transform transform ${isOpen ? 'translate-x-0 ' : '-translate-x-full'}`}>
        <div className="border-b-2 py-4 border-slate-700">
          {
            sidebarFeatures.map((item, index) =>
                <div key={index}>
                  <div className="flex items-center pl-4 py-2 gap-6 ">
                    <div className="text-slate-400 text-lg">{item.icon}</div>
                    <div className="text-white">{item.title}</div>
                  </div>
                </div>
            )
          }
        </div>
        <div className="h-1/2 overflow-y-scroll py-2">
          <div className="py-4">
            {
              sidebarCategories.map((categories, index) =>
                  <div key={index}>
                    <div className="flex items-center pl-4 py-2 gap-6">
                      <div className="text-slate-400 text-lg">{categories.icon}</div>
                      <div className="text-white">{categories.title}</div>
                    </div>
                  </div>
              )}
          </div>
        </div>
        <div>
          <div className="flex items-center pl-4 py-2 gap-6 border-t-2 border-slate-700">
            <div className="text-slate-400 text-lg"><FaTags/></div>
            <div className="text-white">Tags</div>
          </div>
        </div>
      </div>
  )
}

export default SideBar