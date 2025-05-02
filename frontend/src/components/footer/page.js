'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { FaArrowUp, FaRandom } from 'react-icons/fa'
import gameService from '../../services/game.service'
import { useRouter } from 'next/navigation'
import { FaFacebook, FaInstagram } from 'react-icons/fa6'

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

const Footer = () => {
  const router = useRouter()

  const [ trendingGames, setTrendingGames ] = useState([])

  useEffect(() => {
    fetchTrendingGames()
  }, [])

  async function getRandomGame() {
    try {
      const response = await gameService.getGameList()

      const randomGame = response.games[Math.floor(Math.random() * response.games.length)]
      if (randomGame?.slug) {
        router.push(`/game/${randomGame.slug}`)
      } else {
        console.error('No slug found for the selected game')
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  async function fetchTrendingGames() {
    try {
      const response = await gameService.getTrendingGames()
      setTrendingGames(response.trendings)
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
      <>
        <div className="p-8 sticky top-full bg-slate-900 shadow-inner shadow-slate-800 rounded-t-xl w-full">
          <div className="max-w-7xl mx-auto md:flex text-white md:flex-row justify-around xl:justify-between gap-5 mt-2">
              <Link href="/" className="md:basis-[15%] flex gap-4 overflow-y-hidden mx-auto md:mx-0 !w-40 mb-8 md:mb-0">
                <div className="flex gap-4 overflow-y-hidden w-fit h-16">
                  <img src={'/trans-logo-full.png'} className="object-cover rounded-lg" width={160} alt={'logo'}/>
                </div>
              </Link>
            <div className="flex flex-col xl:flex-row basis-[70%] xl:basis-[80%] xl:justify-around gap-10">
              <div className="xl:basis-[55%] flex flex-col md:flex-row justify-between w-full gap-5">
                <div className="flex flex-col items-start gap-2">
                  <p className="text-lg font-semibold">Resources</p>
                  <Link className="mt-2 hover:text-lime-500 text-[#abb7c4] text-sm transition-colors duration-300" href={'/'}>Home</Link>
                  <Link className="hover:text-lime-500 text-[#abb7c4] text-sm transition-colors duration-300" href={'/blogs'}>Blogs</Link>
                  <Link className="hover:text-lime-500 text-[#abb7c4] text-sm transition-colors duration-300" href="/terms-and-condition">Terms & Condition</Link>
                  <Link className="hover:text-lime-500 text-[#abb7c4] text-sm transition-colors duration-300" href="/privacy-policy">Privacy Policy</Link>
                  <Link className="hover:text-lime-500 text-[#abb7c4] text-sm transition-colors duration-300" href="/sitemap/games">Sitemap</Link>
                  <Link className="hover:text-lime-500 text-[#abb7c4] text-sm transition-colors duration-300" href="/contact-us">Contact Us</Link>
                </div>

                <div className="flex flex-col items-start gap-4">
                  <p className="text-lg font-semibold">Games</p>
                  <div className="grid grid-cols-2 gap-y-2 gap-x-6">
                    {
                      trendingGames.map((game, index) => {
                        return (
                            <Link key={index} className="hover:text-lime-500 text-[#abb7c4] uppercase text-sm transition-colors duration-300" href={`/game/${game?.gameId?.slug}`}>
                              {game?.gameId?.gameName}
                            </Link>
                        )
                      })
                    }
                  </div>
                </div>
              </div>
              <div className="mt-5 xl:mt-0 xl:basis-[30%] flex flex-col sm:flex-row justify-between gap-5 w-full">
                <div className="flex flex-col items-start gap-2">
                  <p className="text-lg font-semibold">Connect</p>
                  <Link className="mt-2 flex flex-row items-center gap-2 hover:text-lime-500 text-[#abb7c4] text-sm transition-colors duration-300"
                        href={'https://www.facebook.com/people/Eternal-Games/100077568765286'}>
                    <FaFacebook/>
                    Facebook
                  </Link>
                  <Link className="flex flex-row items-center gap-2 hover:text-lime-500 text-[#abb7c4] text-sm transition-colors duration-300" href="https://www.instagram.com/eternalgames13 ">
                    <FaInstagram/>
                    Instagram
                  </Link>
                </div>
                <div className="flex flex-col gap-2">
                  <button onClick={getRandomGame}
                          className="flex items-center w-fit gap-2 rounded-full font-medium text-sm py-2 px-3 hover:border-2 hover:border-lime-500 hover:bg-transparent border-2 border-lime-500 bg-lime-500 font-sans">
                    <FaRandom size={14}/> Random Game
                  </button>
                </div>
              </div>
            </div>
          </div>
          <button style={{ zIndex: 999 }}
                  className="fixed bottom-3 right-5 !z-50 flex items-center gap-2 rounded-full font-medium transition duration-200 ease-in-out text-sm p-3 hover:border-2 hover:border-lime-500 hover:bg-transparent border-2 border-lime-500 bg-lime-500 font-sans"
                  onClick={scrollToTop}>
            <FaArrowUp size={23}/>
          </button>
        </div>
      </>
  )
}

export default Footer
