import React from 'react';
import ImageList from '@mui/material/ImageList';
import { mainSliderThumbnails } from '../../../helper/helper';
import ImageListItem from '@mui/material/ImageListItem';
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import Link from 'next/link';


const carouselMain = () => {
  return(
  <ImageList
    sx={{ margin: '40px 20px 60px', width: 'auto', height: 250, display: 'flex' }}
    variant="quilted"
    cols={4}
    rowHeight={120}
  >
    <Swiper
      spaceBetween={10}
      slidesPerView={4}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false
      }}
      modules={[ Autoplay ]}
      loop={true}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      {mainSliderThumbnails.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <SwiperSlide>
            <Link href="/src/components/game">
              <img
                className="rounded-lg h-[100%]"
                width={500}
                src={item.img}
                alt={item.title}
                loading="lazy"
              />
            </Link>
          </SwiperSlide>
        </ImageListItem>
      ))}
    </Swiper>
  </ImageList>
  )
}

export default carouselMain;