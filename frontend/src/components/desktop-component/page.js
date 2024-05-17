import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Link from 'next/link';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Desktop = ({ helper, name }) => {
  return (
    <div className='mx-4'>
      <div className='font-bold text-lg font-sans text-lime-300 mt-4'>{name}</div>
      {/*<ImageList*/}
      {/*  sx={{ margin: '25px 20px 50px', width: 'auto', height: 'max', display: 'flex' }}*/}
      {/*  variant='quilted'*/}
      {/*  cols={4}*/}
      {/*  rowHeight={120}*/}
      {/*>*/}
      {/*  <Swiper*/}
      {/*    className='h-max w-screen'*/}
      {/*    spaceBetween={10}*/}
      {/*    slidesPerView={5}*/}
      {/*    pagination={{ clickable: true }}*/}
      {/*    scrollbar={false}*/}
      {/*    breakpoints={{*/}
      {/*      320: {*/}
      {/*        slidesPerView: 1,*/}
      {/*        spaceBetween: 8,*/}
      {/*      },*/}
      {/*      400: {*/}
      {/*        slidesPerView: 1.2,*/}
      {/*        spaceBetween: 8,*/}
      {/*      },*/}
      {/*      500:{*/}
      {/*        slidesPerView: 2,*/}
      {/*        spaceBetween: 10,*/}
      {/*      },*/}
      {/*      768: {*/}
      {/*        slidesPerView: 3,*/}
      {/*        spaceBetween: 10,*/}
      {/*      },*/}
      {/*      1024: {*/}
      {/*        slidesPerView: 4,*/}
      {/*        spaceBetween: 10,*/}
      {/*      },*/}
      {/*      1440: {*/}
      {/*        slidesPerView: 5,*/}
      {/*        spaceBetween: 10,*/}
      {/*      },*/}
      {/*    }}*/}
      {/*  >*/}
      {/*    {*/}
      {/*      helper.map((item) => (*/}
      {/*        <ImageListItem key={item.thumbnail} cols={item.cols || 1} rows={item.rows || 1}>*/}
      {/*          <SwiperSlide>*/}
      {/*            <Link href={{*/}
      {/*              pathname: '/game',*/}
      {/*              query: {*/}
      {/*                id: item._id*/}
      {/*              }*/}
      {/*            }}>*/}
      {/*              <img className='rounded-xl h-48' width={400} src={item.thumbnail} alt='game' />*/}
      {/*            </Link>*/}
      {/*          </SwiperSlide>*/}
      {/*        </ImageListItem>*/}

      {/*      ))*/}
      {/*    }*/}
      {/*  </Swiper>*/}
      {/*</ImageList>*/}
      <div className="flex flex-row items-center flex-wrap justify-center shrink gap-4 mt-4 mb-10">
            {
              helper.map((item) => (
                <ImageListItem key={item.thumbnail} cols={item.cols || 2} rows={item.rows || 1}>
                    <Link href={{
                      pathname: '/game',
                      query: {
                        id: item._id
                      }
                    }}>
                      <img className='homepage-games rounded-xl' src={item.thumbnail} alt='game' />
                    </Link>
                </ImageListItem>

              ))
            }
      </div>
    </div>
  );
};

export default Desktop;
