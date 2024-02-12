'use client';
import * as React from 'react';
import { FaArrowUp, FaRandom } from 'react-icons/fa';

import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import Link from 'next/link';
import { gamerBoy, offLineMultiplayer, onLineMultiplayer } from '../assets/index';
import { categories, gameThumbnails } from '../helper/helper';
import { carouselMain, featuredGames } from './containers/page';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};
export default function Home() {
  return (
    <>
      <div>
        <carouselMain />
        <featuredGames />
        <div className='mx-4'>
          <div className='flex items-center text-purple-500 gap-4'>
            <div className='font-bold text-lg font-sans text-lime-300 my-4'>New Games</div>
            <Link href='#'> View more</Link>
          </div>
          <Swiper
            spaceBetween={10}
            slidesPerView={5}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            
            {gameThumbnails.map((item, index) => (
              <SwiperSlide key={index}>
                <Link href='/components/game'>
                  <img className='rounded-xl h-[100%]' width={400} src={item.image} alt='game' />
                </Link>
              </SwiperSlide>
            ))
            }
          </Swiper>
        </div>
        <div className='mx-4'>
          <div className='flex items-center text-purple-500 gap-4'>
            <div className='font-bold text-lg font-sans text-lime-300 my-4'>Adventure Games</div>
            <Link href='#'> View more</Link>
          </div>
          <Swiper
            className='flex'
            spaceBetween={10}
            slidesPerView={5}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            {gameThumbnails.map((item, index) => (

              <SwiperSlide key={index}>
                <Link href='/src/app/components/game'>
                  <img className='rounded-xl h-[100%]' width={400} src={item.image} alt='game' />
                </Link>
              </SwiperSlide>
            ))
            }
          </Swiper>
        </div>
        <div className='mx-4'>
          <div className='flex items-center text-purple-500 gap-4'>
            <div className='font-bold text-lg font-sans text-lime-300 my-4'>CrazyGames Originals</div>
            <Link href='#'> View more</Link>
          </div>
          <Swiper
            spaceBetween={10}
            slidesPerView={5}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            {gameThumbnails.map((item, index) => (

              <SwiperSlide key={index}>
                <Link href='/src/app/components/game'>
                  <img className='rounded-xl h-[100%]' width={400} src={item.image} alt='game' />
                </Link>
              </SwiperSlide>
            ))
            }
          </Swiper>
        </div>
        <div className='mx-4'>
          <div className='flex items-center text-purple-500 gap-4'>
            <div className='font-bold text-lg font-sans text-lime-300 my-4'>Casual Games</div>
            <Link href='#'> View more</Link>
          </div>
          <Swiper
            spaceBetween={10}
            slidesPerView={5}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            {gameThumbnails.map((item, index) => (

              <SwiperSlide key={index}>
                <Link href='/src/app/components/game'>
                  <img className='rounded-xl h-[100%]' width={400} src={item.image} alt='game' />
                </Link>
              </SwiperSlide>
            ))
            }
          </Swiper>
        </div>
        <div className='flex gap-6 bg-slate-900 m-6 p-4 rounded-lg'>
          <div className='flex flex-row items-center w-[25%] font-sans font-bold text-3xl'>
            <div className='text-wrap px-8'>Play with <br />friends!</div>
            <Image
              className='relative top-4'
              src={gamerBoy}
              width={230}
              height={230}
              alt='gaming'
            />
          </div>
          <div className='flex  items-center justify-content-center bg-slate-950 w-[36%] rounded-xl'>
            <div className='flex m-auto'>
              <Image
                src={offLineMultiplayer}
                width={150}
                height={150}
                alt='gaming'
              />
              <div className='ml-8 text-center font-sans'>
                <div className='font-bold text-xl'>Local multiplayer</div>
                <div className='text-gray-400 text-lg mb-4'>Play on the same device</div>
                <button className='bg-lime-500 hover:bg-lime-600 px-4 py-2 rounded-full font-bold'>Explore games</button>
              </div>
            </div>
          </div>
          <div className='flex  items-center justify-content-center bg-slate-950 w-[36%] rounded-xl'>
            <div className='flex  m-auto'>
              <Image
                src={onLineMultiplayer}
                width={130}
                height={130}
                alt='gaming'
              />
              <div className='ml-8 text-center font-sans'>
                <div className='font-bold text-xl'>Online multiplayer</div>
                <div className='text-gray-400 text-lg mb-4'>Play on the separate devices</div>
                <button className='bg-lime-500 hover:bg-lime-600 px-4 py-2 rounded-full font-bold'>Explore games</button>
              </div>
            </div>
          </div>
        </div>
        <div className='mx-4'>
          <div className='flex items-center text-purple-500 gap-4'>
            <div className='font-bold text-lg font-sans text-lime-300 my-4'>Puzzle Games</div>
            <Link href='#'> View more</Link>
          </div>
          <Swiper
            spaceBetween={10}
            slidesPerView={5}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            {gameThumbnails.map((item, index) => (

              <SwiperSlide key={index}>
                <Link href='/src/app/components/game'>
                  <img className='rounded-xl h-[100%]' width={400} src={item.image} alt='game' />
                </Link>
              </SwiperSlide>
            ))
            }
          </Swiper>
        </div>
        <div className='mx-4'>
          <div className='flex items-center text-purple-500 gap-4'>
            <div className='font-bold text-lg font-sans text-lime-300 my-4'>Action Games</div>
            <Link href='#'> View more</Link>
          </div>
          <Swiper
            spaceBetween={10}
            slidesPerView={5}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            {gameThumbnails.map((item, index) => (

              <SwiperSlide key={index}>
                <Link href='/src/app/components/game'>
                  <img className='rounded-xl h-[100%]' width={400} src={item.image} alt='game' />
                </Link>
              </SwiperSlide>
            ))
            }
          </Swiper>
        </div>
        <div className='flex mx-6 my-10 gap-6'>
          <div className='h-[268px] p-6 bg-slate-900 rounded-xl'>
            <div className='font-sans font-bold pb-4'>About ZenGames</div>
            <div className='text-wrap pb-4 text-sm text-gray-400'>CrazyGames features the latest and best free online games. You can enjoy playing fun games without
              interruptions from downloads, intrusive ads, or pop-ups.
            </div>
            <Link className='text-lime-400 font-bold font-sans' href='/'>Learn More</Link>
          </div>
          <div className='h-[100%] w-[75%]'>
            <Swiper
              className='flex flex-row'
              slidesPerView={6}
              spaceBetween={10}
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              scrollbar={false}
            >
              {
                categories.map((category, index) => (
                  <SwiperSlide key={index} className='font-sans font-bold'>
                    <div className='m-auto bg-slate-900 h-[50%] pl-6 py-8 rounded-xl text-lime-400 hover:text-lime-500'>
                      <div className='text-3xl'>
                        {category.tag1.icon}
                      </div>
                      <div className='mt-2 text-white'>
                        {category.tag1.title}
                      </div>
                    </div>
                    <div className='bg-slate-900 mt-4 h-[50%] pl-6 py-8 rounded-xl text-lime-400 hover:text-lime-500'>
                      <div className='text-3xl'>
                        {category.tag2.icon}
                      </div>
                      <div className='mt-2 text-white'>
                        {category.tag2.title}
                      </div>
                    </div>
                  </SwiperSlide>
                ))
              }
            </Swiper>
          </div>
        </div>
        <div className='mx-4'>
          <div className='font-bold text-lg font-sans text-lime-300 my-4'>Recommended this week</div>
          <Swiper
            spaceBetween={10}
            slidesPerView={5}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            {gameThumbnails.map((item, index) => (

              <SwiperSlide key={index}>
                <Link href='/src/app/components/game'>
                  <img className='rounded-xl h-[100%]' width={400} src={item.image} alt='game' />
                </Link>
              </SwiperSlide>
            ))
            }
          </Swiper>
        </div>
        <div className='mx-4'>
          <div className='flex items-center text-purple-500 gap-4'>
            <div className='font-bold text-lg font-sans text-lime-300 my-4'>Car Games</div>
            <Link href='#'> View more</Link>
          </div>
          <Swiper
            spaceBetween={10}
            slidesPerView={5}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            {gameThumbnails.map((item, index) => (

              <SwiperSlide key={index}>
                <Link href='/src/app/components/game'>
                  <img className='rounded-xl h-[100%]' width={400} src={item.image} alt='game' />
                </Link>
              </SwiperSlide>
            ))
            }
          </Swiper>
        </div>
        <div className='mx-4 mb-4'>
          <div className='flex items-center text-purple-500 gap-4'>
            <div className='font-bold text-lg font-sans text-lime-300 my-4'>2 Player Games</div>
            <Link href='#'> View more</Link>
          </div>
          <Swiper
            spaceBetween={10}
            slidesPerView={5}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            {gameThumbnails.map((item, index) => (

              <SwiperSlide key={index}>
                <Link href='/src/app/components/game'>
                  <img className='rounded-xl h-[100%]' width={400} src={item.image} alt='game' />
                </Link>
              </SwiperSlide>
            ))
            }
          </Swiper>
        </div>
        <div className='flex items-center justify-center'>
          <button className='flex items-center gap-2 rounded-full py-4 px-10 m-4 border-2 font-bold border-purple-500 hover:bg-purple-800 font-sans'>
            <FaRandom size={17} /> Random Game
          </button>
          <button className='flex items-center gap-2 rounded-full py-4 px-12 m-4 font-bold bg-purple-800 font-sans' onClick={scrollToTop}>
            <FaArrowUp size={17} /> Back to top
          </button>
        </div>
      </div>
    </>
  );
}
