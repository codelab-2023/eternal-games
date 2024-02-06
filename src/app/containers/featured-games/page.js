import React from 'react';
import { gameThumbnails } from '../../../helper/helper';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

const featuredGames = () => {
  return (
    <div className="mx-4">
      <div className="font-bold text-lg font-sans text-lime-300 my-4">Featured Games</div>
      <Swiper
        spaceBetween={10}
        slidesPerView={5}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {gameThumbnails.map((item, index) => (
          <SwiperSlide key={index}>
            <Link href="/src/components/game">
              <img className="rounded-xl h-[100%]" width={400} src={item.image} alt="game"/>
            </Link>
          </SwiperSlide>
        ))
        }
      </Swiper>
    </div>
  )
}

export default featuredGames