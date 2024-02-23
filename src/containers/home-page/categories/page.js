import Link from 'next/link'
import { categories } from '../../../helper/helper'
import * as React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

const Categories = () => {
  return (
      <div className="flex mx-6 my-10 gap-6">
        <div className="about-zenGame p-6 bg-slate-900 rounded-xl">
          <h2 className="font-sans font-bold pb-4">About ZenGames</h2>
          <p className="text-wrap pb-4 text-sm text-gray-400">CrazyGames features the latest and best free online games. You can enjoy playing fun games without
            interruptions from downloads, intrusive ads, or pop-ups.
          </p>
          <Link className="text-lime-400 font-bold font-sans" href="/">Learn More</Link>
        </div>
        <div className="h-full w-3/4">
          <Swiper
              className="flex flex-row"
              slidesPerView={5}
              spaceBetween={10}
              pagination={{ clickable: true }}
              scrollbar={false}
          >
            {
              categories.map((category, index) => (
                  <SwiperSlide key={index} className="font-sans font-bold">
                    <div className="m-auto bg-slate-900 h-1/2 pl-6 py-8 rounded-xl text-lime-400 hover:text-lime-500">
                      <div className="text-3xl">
                        {category.tag1.icon}
                      </div>
                      <div className="mt-2 text-white">
                        {category.tag1.title}
                      </div>
                    </div>
                    <div className="bg-slate-900 mt-4 h-1/2 pl-6 py-8 rounded-xl text-lime-400 hover:text-lime-500">
                      <div className="text-3xl">
                        {category.tag2.icon}
                      </div>
                      <div className="mt-2 text-white">
                        {category.tag2.title}
                      </div>
                    </div>
                  </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
      </div>
  )
}

export default Categories
