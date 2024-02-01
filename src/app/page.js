'use client'
import * as React from 'react'
import { FaArrowUp, FaBasketballBall, FaCar, FaDoorOpen, FaFire, FaGlobeAmericas, FaPuzzlePiece, FaRandom, FaRunning, FaUsers } from 'react-icons/fa'
import { FaEllo, FaGun, FaUserGroup } from 'react-icons/fa6'
import { GiCardAceSpades, GiConsoleController, GiGuardedTower, GiJoystick, GiPoolTableCorner, GiPumpkinMask, GiStoneCrafting, GiTargeted, GiTargeting, GiVineFlower } from 'react-icons/gi'
import { MdDirectionsBike, MdFlashOn, MdOutlineAdsClick, MdSportsFootball } from 'react-icons/md'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import Image from 'next/image'
import Link from 'next/link'
import { gamerBoy, offLineMultiplayer, onLineMultiplayer } from '../assets/index'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const itemData = [
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVQESBp2d1rxKkn1wMOKgUbYfboO_HztpNdQ&usqp=CAU',
    title: 'Valorant'
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNZ7Q-FOVh2LScsYY-JL7Vhu0WvsmPkBoOFg&usqp=CAU',
    title: 'The Last Of Use'
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjPidA27xgN0yop_TewXNhYjGK-Y41j_ma-w&usqp=CAU',
    title: 'Players Unknown BattleGrounds'
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSirrliphuqWWgUPKCGjl0O3iNjBJILaJZ9Ng&usqp=CAU',
    title: 'The Witcher'
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXgyHU5o5XSFFun5sk1Io-IedMxdOQnjmY0g&usqp=CAU',
    title: 'Call Of Duty'
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0PfXFmxpiwUIvWXLidPjDVG-ccACJ1z_Jpg&usqp=CAU',
    title: 'Far Cry 5',
    author: '@arwinneil'
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWFc9McA9RAkxtfoDO1841fuq97LD1N_W7CQ&usqp=CAU',
    title: 'Minecraft'
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSdu6dlQzxo5yiefxmdmMA2oDKjX8okRXkxw&usqp=CAU',
    title: 'Fifa 22'
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE4K3ZNy16LgWH_fDS5cL7RwEBntv-66a30D6W1Q0Fz6r5ial4TGL_YHhzhjPV9BtuqpI&usqp=CAU',
    title: 'God Of War'
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxcatq1Jzbd5u0141egzv2Vb8o9H5y3mez1w&usqp=CAU',
    title: 'Hitman'
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh41ZKFmeDajgXpvq8c-nVtVfl7FDK6R_FC99k8VxUXY5p7dJVJ6ppjAB8MjhWQcSrnUE&usqp=CAU',
    title: 'Syndicate'
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-o27Ut0iYw_IWUvtaBY6ETp9a3qjzDe_Whhdr4HQz7bJGndC0it1-HmJvHCVbNXypnXY&usqp=CAU',
    title: 'Apex Lagend'
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTenBbmBCf3ymwQ56k3PF5-wbZQZw7sbw1LZA&usqp=CAU',
    title: 'Harry Potter'
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPQSSImukcjt6awXTmoa9wjE5McfGCs9x-Sw&usqp=CAU',
    title: 'Forza Horizon 5'
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhIbNOkDtSwaUY6NPwbKKWWx0EZ7oOkDQ_oQ&usqp=CAU',
    title: 'Halo Infinity'
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnR_OIEl6ZpTCe2NrXpZFeJtMoxULkPMX2JA&usqp=CAU',
    title: 'Red Dead Redemption 2'
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoLNfc6tuGw7H5IrAfRQpoGObcpIzh9ynndQ&usqp=CAU',
    title: 'Uncharted'
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8osbxWbKg4Cz29iSZ16esFIoYvzR6dsUoIQ&usqp=CAU',
    title3: 'Need For Speed'
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLuLmNEw7xdpB6VbiedJkdnb16D9uWYYYzKg&usqp=CAU',
    title: 'Sub Nautica'
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_OakdJesXSGkWQkhnQI14LB3-SkfcgpHE8A&usqp=CAU',
    title: 'Mafia IV'
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvzE-b2ONTJAr4LSNyECheyXnmBH6y3rgung&usqp=CAU',
    title: 'Spider-Man 2'
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG5-pnte6y0NF2d-eiGMCNqAUvYlz9OE4-lA&usqp=CAU',
    title: 'Grand Theft Auto V'
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0wwk-w4CVeeHon4U-bv7_Yphg_LmBf_BWuQ&usqp=CAU',
    title: 'Rocket League'
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUwLu1J6R5lHWXjea4MQBEDBrtFXrdOyj8Ng&usqp=CAU',
    title: 'The Witcher'
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNC5gkdzMPpqE0MkXN-n4lbBPGYpLM5AwoMA&usqp=CAU',
    title: 'Cyberpunk'
  }
]

const items = [
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjNQRY3NaYJzy4qp7J6xE1dTFKSNPS1ysgIA&usqp=CAU',
    title: 'Rocket Racing'
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi2Po5qDf1M7qW_4dBkBWZIhYR-UkroDpx9vLaGtLEyQQnB2w4eL_C7j3AevmOOXitFcI&usqp=CAU',
    title: 'Rocket League'
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDDu5bbFeCAzzl5W2TH6XR-PFJjSrEA3Gwvg&usqp=CAU',
    title: 'The Witcher'
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR07-1AeeqSse05YdzXTmJu0DOxTzozuyIY6Q&usqp=CAU',
    title: 'Halo Infinity'
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD7PR_GrT55Y1e4qc8CcAdb0HTMS2qwD8Yug&usqp=CAU',
    title: 'Spider-Man'
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTDvAgc02Umq-40eSVTknjfqWX1mbAzQKkZg&usqp=CAU',
    title: 'The Last Of Use'
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqUZ7uYdZFaDa86moClp5OAP7WfKM-S-slsg&usqp=CAU',
    title: 'God Of War'
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpOVD0onVj7HVHrvGnr9cbZ6S8qDiGWBVNGw&usqp=CAU',
    title: 'Gta V'
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNNOQAqgviLQEB2KFwmAjOm9A_-WzBj8hHdw&usqp=CAU',
    title: 'Uncharted'
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFNjUX_Y-OmCKxq1iBqeP1Sq364E8Xw8JrcA&usqp=CAU',
    title: 'Players Unknown BattleGrounds'
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2dx-PH0o0sxU9_fQ0i_9YgoJ1ykegvlUbjg&usqp=CAU',
    title: 'Cyberpunk'
  }
]

const categories = [
  {
    tag1: {
      icon: <FaCar/>,
      title: 'Driving'
    },
    tag2: {
      icon: <FaDoorOpen/>,
      title: 'Escape'
    }
  },
  {
    tag1: {
      icon: <MdFlashOn/>,
      title: 'Flash'
    },
    tag2: {
      icon: <FaGun/>,
      title: 'FPS'
    }
  }, {
    tag1: {
      icon: <GiPumpkinMask/>,
      title: 'Horror'
    },
    tag2: {
      icon: <FaEllo/>,
      title: '.io'
    }
  }, {
    tag1: {
      icon: <FaUsers/>,
      title: 'Multiplayer'
    },
    tag2: {
      icon: <GiStoneCrafting/>,
      title: 'Minecraft'
    }
  }, {
    tag1: {
      icon: <GiPoolTableCorner/>,
      title: 'Pool'
    },
    tag2: {
      icon: <FaPuzzlePiece/>,
      title: 'Puzzle'
    }
  }, {
    tag1: {
      icon: <GiTargeted/>,
      title: 'Shooting'
    },
    tag2: {
      icon: <GiTargeting/>,
      title: 'Socker'
    }
  }, {
    tag1: {
      icon: <FaRunning/>,
      title: 'Stickman'
    },
    tag2: {
      icon: <MdSportsFootball/>,
      title: 'Sports'
    }
  }, {
    tag1: {
      icon: <GiGuardedTower/>,
      title: 'Defense'
    },
    tag2: {
      icon: <FaFire/>,
      title: 'Action'
    }
  }, {
    tag1: {
      icon: <FaGlobeAmericas/>,
      title: 'Adventure'
    },
    tag2: {
      icon: <FaUserGroup/>,
      title: '2 Player'
    }
  }, {
    tag1: {
      icon: <FaBasketballBall/>,
      title: 'BasketBall'
    },
    tag2: {
      icon: <MdDirectionsBike/>,
      title: 'Bike'
    }
  }, {
    tag1: {
      icon: <GiVineFlower/>,
      title: 'Beauty'
    },
    tag2: {
      icon: <FaDoorOpen/>,
      title: 'Card'
    }
  },
  {
    tag1: {
      icon: <GiCardAceSpades/>,
      title: 'car'
    },
    tag2: {
      icon: <GiJoystick/>,
      title: 'Casual'
    }
  },
  {
    tag1: {
      icon: <MdOutlineAdsClick/>,
      title: 'Clicker'
    },
    tag2: {
      icon: <GiConsoleController/>,
      title: 'Controller'
    }
  }
]

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
export default function Home() {
  return (
      <>
        <div>
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
              {itemData.map((item) => (
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
          <div className="mx-4">
            <div className="font-bold text-lg font-sans text-lime-300 my-4">Featured Games</div>
            <Swiper
                spaceBetween={10}
                slidesPerView={5}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            >
              {items.map((item, index) => (
                  <SwiperSlide key={index}>
                    <Link href="/src/components/game">
                      <img className="rounded-xl h-[100%]" width={400} src={item.image} alt="game"/>
                    </Link>
                  </SwiperSlide>
              ))
              }
            </Swiper>
          </div>
          <div className="mx-4">
            <div className="flex items-center text-purple-500 gap-4">
              <div className="font-bold text-lg font-sans text-lime-300 my-4">New Games</div>
              <Link href="#"> View more</Link>
            </div>
            <Swiper
                spaceBetween={10}
                slidesPerView={5}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            >
              {items.map((item, index) => (
                  <SwiperSlide key={index}>
                    <Link href="/src/components/game">
                      <img className="rounded-xl h-[100%]" width={400} src={item.image} alt="game"/>
                    </Link>
                  </SwiperSlide>
              ))
              }
            </Swiper>
          </div>
          <div className="mx-4">
            <div className="flex items-center text-purple-500 gap-4">
              <div className="font-bold text-lg font-sans text-lime-300 my-4">Adventure Games</div>
              <Link href="#"> View more</Link>
            </div>
            <Swiper
                className="flex"
                spaceBetween={10}
                slidesPerView={5}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            >
              {items.map((item, index) => (

                  <SwiperSlide key={index}>
                    <Link href="/src/components/game">
                      <img className="rounded-xl h-[100%]" width={400} src={item.image} alt="game"/>
                    </Link>
                  </SwiperSlide>
              ))
              }
            </Swiper>
          </div>
          <div className="mx-4">
            <div className="flex items-center text-purple-500 gap-4">
              <div className="font-bold text-lg font-sans text-lime-300 my-4">CrazyGames Originals</div>
              <Link href="#"> View more</Link>
            </div>
            <Swiper
                spaceBetween={10}
                slidesPerView={5}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            >
              {items.map((item, index) => (

                  <SwiperSlide key={index}>
                    <Link href="/src/components/game">
                      <img className="rounded-xl h-[100%]" width={400} src={item.image} alt="game"/>
                    </Link>
                  </SwiperSlide>
              ))
              }
            </Swiper>
          </div>
          <div className="mx-4">
            <div className="flex items-center text-purple-500 gap-4">
              <div className="font-bold text-lg font-sans text-lime-300 my-4">Casual Games</div>
              <Link href="#"> View more</Link>
            </div>
            <Swiper
                spaceBetween={10}
                slidesPerView={5}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            >
              {items.map((item, index) => (

                  <SwiperSlide key={index}>
                    <Link href="/src/components/game">
                      <img className="rounded-xl h-[100%]" width={400} src={item.image} alt="game"/>
                    </Link>
                  </SwiperSlide>
              ))
              }
            </Swiper>
          </div>
          <div className="flex gap-6 bg-slate-900 m-6 p-4 rounded-lg">
            <div className="flex flex-row items-center w-[25%] font-sans font-bold text-3xl">
              <div className="text-wrap px-8">Play with <br/>friends!</div>
              <Image
                  className="relative top-4"
                  src={gamerBoy}
                  width={230}
                  height={230}
                  alt="gaming"
              />
            </div>
            <div className="flex  items-center justify-content-center bg-slate-950 w-[36%] rounded-xl">
              <div className="flex m-auto">
                <Image
                    src={offLineMultiplayer}
                    width={150}
                    height={150}
                    alt="gaming"
                />
                <div className="ml-8 text-center font-sans">
                  <div className="font-bold text-xl">Local multiplayer</div>
                  <div className="text-gray-400 text-lg mb-4">Play on the same device</div>
                  <button className="bg-lime-500 hover:bg-lime-600 px-4 py-2 rounded-full font-bold">Explore games</button>
                </div>
              </div>
            </div>
            <div className="flex  items-center justify-content-center bg-slate-950 w-[36%] rounded-xl">
              <div className="flex  m-auto">
                <Image
                    src={onLineMultiplayer}
                    width={130}
                    height={130}
                    alt="gaming"
                />
                <div className="ml-8 text-center font-sans">
                  <div className="font-bold text-xl">Online multiplayer</div>
                  <div className="text-gray-400 text-lg mb-4">Play on the separate devices</div>
                  <button className="bg-lime-500 hover:bg-lime-600 px-4 py-2 rounded-full font-bold">Explore games</button>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-4">
            <div className="flex items-center text-purple-500 gap-4">
              <div className="font-bold text-lg font-sans text-lime-300 my-4">Puzzle Games</div>
              <Link href="#"> View more</Link>
            </div>
            <Swiper
                spaceBetween={10}
                slidesPerView={5}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            >
              {items.map((item, index) => (

                  <SwiperSlide key={index}>
                    <Link href="/src/components/game">
                      <img className="rounded-xl h-[100%]" width={400} src={item.image} alt="game"/>
                    </Link>
                  </SwiperSlide>
              ))
              }
            </Swiper>
          </div>
          <div className="mx-4">
            <div className="flex items-center text-purple-500 gap-4">
              <div className="font-bold text-lg font-sans text-lime-300 my-4">Action Games</div>
              <Link href="#"> View more</Link>
            </div>
            <Swiper
                spaceBetween={10}
                slidesPerView={5}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            >
              {items.map((item, index) => (

                  <SwiperSlide key={index}>
                    <Link href="/src/components/game">
                      <img className="rounded-xl h-[100%]" width={400} src={item.image} alt="game"/>
                    </Link>
                  </SwiperSlide>
              ))
              }
            </Swiper>
          </div>
          <div className="flex mx-6 my-10 gap-6">
            <div className="h-[268px] p-6 bg-slate-900 rounded-xl">
              <div className="font-sans font-bold pb-4">About ZenGames</div>
              <div className="text-wrap pb-4 text-sm text-gray-400">CrazyGames features the latest and best free online games. You can enjoy playing fun games without
                interruptions from downloads, intrusive ads, or pop-ups.
              </div>
              <Link className="text-lime-400 font-bold font-sans" href="/">Learn More</Link>
            </div>
            <div className="h-[100%] w-[75%]">
              <Swiper
                  className="flex flex-row"
                  slidesPerView={6}
                  spaceBetween={10}
                  pagination={{ clickable: true }}
                  scrollbar={{ draggable: true }}
                  scrollbar={false}
              >
                {
                  categories.map((category, index) => (
                      <SwiperSlide key={index} className="font-sans font-bold">
                        <div className="m-auto bg-slate-900 h-[50%] pl-6 py-8 rounded-xl text-lime-400 hover:text-lime-500">
                          <div className="text-3xl">
                            {category.tag1.icon}
                          </div>
                          <div className="mt-2 text-white">
                            {category.tag1.title}
                          </div>
                        </div>
                        <div className="bg-slate-900 mt-4 h-[50%] pl-6 py-8 rounded-xl text-lime-400 hover:text-lime-500">
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
          <div className="mx-4">
            <div className="font-bold text-lg font-sans text-lime-300 my-4">Recommended this week</div>
            <Swiper
                spaceBetween={10}
                slidesPerView={5}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            >
              {items.map((item, index) => (

                  <SwiperSlide key={index}>
                    <Link href="/src/components/game">
                      <img className="rounded-xl h-[100%]" width={400} src={item.image} alt="game"/>
                    </Link>
                  </SwiperSlide>
              ))
              }
            </Swiper>
          </div>
          <div className="mx-4">
            <div className="flex items-center text-purple-500 gap-4">
              <div className="font-bold text-lg font-sans text-lime-300 my-4">Car Games</div>
              <Link href="#"> View more</Link>
            </div>
            <Swiper
                spaceBetween={10}
                slidesPerView={5}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            >
              {items.map((item, index) => (

                  <SwiperSlide key={index}>
                    <Link href="/src/components/game">
                      <img className="rounded-xl h-[100%]" width={400} src={item.image} alt="game"/>
                    </Link>
                  </SwiperSlide>
              ))
              }
            </Swiper>
          </div>
          <div className="mx-4 mb-4">
            <div className="flex items-center text-purple-500 gap-4">
              <div className="font-bold text-lg font-sans text-lime-300 my-4">2 Player Games</div>
              <Link href="#"> View more</Link>
            </div>
            <Swiper
                spaceBetween={10}
                slidesPerView={5}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            >
              {items.map((item, index) => (

                  <SwiperSlide key={index}>
                    <Link href="/src/components/game">
                      <img className="rounded-xl h-[100%]" width={400} src={item.image} alt="game"/>
                    </Link>
                  </SwiperSlide>
              ))
              }
            </Swiper>
          </div>
          <div className="flex items-center justify-center">
            <button className="flex items-center gap-2 rounded-full py-4 px-10 m-4 border-2 font-bold border-purple-500 hover:bg-purple-800 font-sans">
              <FaRandom size={17}/> Random Game
            </button>
            <button className="flex items-center gap-2 rounded-full py-4 px-12 m-4 font-bold bg-purple-800 font-sans" onClick={scrollToTop}>
              <FaArrowUp size={17}/> Back to top
            </button>
          </div>
        </div>
      </>
  )
}
