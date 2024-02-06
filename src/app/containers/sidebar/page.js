import { FaTags } from 'react-icons/fa';
import React from 'react';
import { categories, sidebarFeatures } from '../../../helper/helper';

const sideBar = () => {
  return (
    <>
      <div className={`bg-slate-900/90 px-4 text-white h-screen absolute left-0 top-[76px] transition-transform transform ${openSideBar ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className='border-b-2 py-4 border-slate-700'>
          {
            sidebarFeatures.map((item, index) =>
              <div key={index}>
                <div className='flex items-center pl-4 py-2 gap-6 '>
                  <div className='text-slate-400 text-lg'>{item.icon}</div>
                  <div className='text-white'>{item.title}</div>
                </div>
              </div>
            )
          }
        </div>
        <div className='border-b-2 py-4 border-slate-700'>
          {
            categories.map((categories, index) =>
              <div key={index}>
                <div className='flex items-center pl-4 py-2 gap-6'>
                  <div className='text-slate-400 text-lg'>{categories.icon}</div>
                  <div className='text-white'>{categories.title}</div>
                </div>
              </div>
            )}
        </div>
        <div>
          <div className='flex items-center pl-4 py-2 gap-6'>
            <div className='text-slate-400 text-lg'><FaTags /></div>
            <div className='text-white'>Tags</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default sideBar;