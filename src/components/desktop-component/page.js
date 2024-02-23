import React from 'react'
import Link from 'next/link'
import ImageListItem from '@mui/material/ImageListItem'
import ImageList from '@mui/material/ImageList'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

const Desktop = ({ helper, name, url }) => {
  return (
      <div className="mx-4">
        <div className="font-bold text-lg font-sans text-lime-300 mt-4">{name}</div>
        <ImageList
            sx={{ margin: '25px 20px 50px', width: 'auto', height: 'max', display: 'flex' }}
            variant="quilted"
            cols={4}
            rowHeight={120}
        >
          <Swiper
              className="h-min"
              spaceBetween={10}
              slidesPerView={5}
              pagination={{ clickable: true }}
              scrollbar={false}
          >
            {
              helper.map((item) => (
                  <ImageListItem key={item.thumbnail} cols={item.cols || 1} rows={item.rows || 1}>
                    <SwiperSlide>
                      <Link href={{
                        pathname: '/game',
                        query: {
                          id: item._id
                        }
                      }}>
                        <img className="rounded-xl h-48" width={400} src={item.thumbnail} alt="game"/>
                      </Link>
                    </SwiperSlide>
                  </ImageListItem>

              ))
            }
          </Swiper>
        </ImageList>
      </div>
  )
}

export default Desktop