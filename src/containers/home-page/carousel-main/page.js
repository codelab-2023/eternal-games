import React from 'react'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

const CarouselMain = ({ helper }) => {

  return (
      <ImageList
          sx={{ margin: '40px 20px 60px', width: 'auto', height: 250, display: 'flex' }}
          variant="quilted"
          cols={4}
          rowHeight={135}
      >
        <Swiper
            spaceBetween={10}
            slidesPerView={4}
            speed={1700}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false
            }}
            modules={[ Autoplay ]}
            loop={true}
            pagination={{ clickable: true }}
            scrollbar={false}
        >
          {
            helper.map((item) => (
                <ImageListItem key={item._id} cols={item.cols || 1} rows={item.rows || 1}>
                  <SwiperSlide>
                    <Link href={{
                      pathname: '/game',
                      query: {
                        id: item._id
                      }
                    }}>
                      <img
                          className="rounded-lg h-full"
                          width={500}
                          src={item.thumbnail}
                          alt={item.gameName}
                      />
                    </Link>
                  </SwiperSlide>
                </ImageListItem>
            ))}
        </Swiper>
      </ImageList>
  )
}

export default CarouselMain