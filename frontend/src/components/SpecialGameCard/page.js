import React from 'react'
import ImageListItem from '@mui/material/ImageListItem'
import Link from 'next/link'
import ImageList from '@mui/material/ImageList'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { Skeleton } from '@mui/material'

export default function SpecialGameCard({ loading, isHorizontal = true, games, name }) {
  return (
      <div>
        <p className="font-bold text-lg font-sans text-lime-300 mt-4">{name}</p>
        <ImageList
            sx={{ margin: '16px 20px 60px', width: 'auto', display: 'flex' }}
            className="home-slider"
            variant="quilted"
            cols={4}
            rowHeight={135}
        >
          <Swiper
              className="h-auto w-screen"
              direction={isHorizontal ? 'horizontal' : 'vertical'}
              spaceBetween={10}
              slidesPerView={isHorizontal ? 4 : 1}
              speed={1700}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false
              }}
              modules={[ Autoplay ]}
              loop={true}
              pagination={{ clickable: true }}
              scrollbar={false}
              breakpoints={{
                300: {
                  slidesPerView: 1,
                  spaceBetween: 8
                },
                535: {
                  slidesPerView: (isHorizontal ? 1.3 : 1),
                  spaceBetween: 10
                },
                768: {
                  slidesPerView: (isHorizontal ? 2 : 1),
                  spaceBetween: 10
                },
                1024: {
                  slidesPerView: (isHorizontal ? 3 : 1),
                  spaceBetween: 10
                },
                1440: {
                  slidesPerView: (isHorizontal ? 4 : 1),
                  spaceBetween: 10
                }
              }}
          >
            {
              loading ?
                  (
                      [ 1, 2, 3, 4, 5 ].map((index) => {
                        // console.log('��������� special-card-1 => index :: ', `special-${index}`)
                        return (
                            <ImageListItem key={`special-${index}`} cols={1} rows={1}>
                              <SwiperSlide>
                                <Skeleton
                                    variant="rectangular"
                                    width={500}
                                    height={'100%'}
                                    sx={{ borderRadius: '8px', bgcolor: 'grey.700' }}
                                />
                              </SwiperSlide>
                            </ImageListItem>
                        )
                      })) :
                  (
                      games.map((item, index) => {
                        // console.log('��������� special-card-1 => index :: ', `special-${item._id}`, index)
                        return (
                            <ImageListItem key={`special-${item._id}`} cols={item.cols || 1} rows={item.rows || 1}>
                              <SwiperSlide>
                                <Link href={{ pathname: `/game/${item?.gameId?.slug}` }}>

                                <img
                                      className="rounded-lg h-full"
                                      width={500}
                                      src={item?.gameId?.thumbnail}
                                      alt={item?.gameId?.gameName}
                                  />
                                </Link>
                              </SwiperSlide>
                            </ImageListItem>
                        )
                      }))
            }
          </Swiper>
        </ImageList>
      </div>
  )
}
