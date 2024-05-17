'use client'
import React, { useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { FaPlay, FaShareAlt } from 'react-icons/fa'
import { ImEmbed2 } from 'react-icons/im'
import { MdFullscreen, MdFullscreenExit } from 'react-icons/md'
import gameService from '../../services/game.service'
import parse from 'html-react-parser'
import NavBar from '../../components/navbar/page'
import Footer from '../../components/footer/page'
import Loading from '../loading'

const moment = require('moment')

export default function Page() {
  const descriptionRef = useRef()
  const iframeRef = useRef(null);

  const searchParams = useSearchParams()
  const [ loading, setLoading ] = useState(true)
  const [ games, setGames ] = useState()
  const [ sideGames, setSideGames ] = useState([])
  const [ playGame, setPlayGame ] = useState(false)
  const [ isFullScreen, setIsFullScreen ] = useState(false)

  useEffect(() => {
    const id = searchParams.get('id')
    fetchGame(id)
    getSideGames()
  }, [ searchParams ])

  async function fetchGame(gameID) {
    try {
      setLoading(true)
      const response = await gameService.getGame(`${gameID}`)

      setGames(response.game)
      descriptionRef.current.innerHTML = response.data.description;
      setLoading(false)
    } catch (error) {
      console.log(error.message)
    } finally {
      setLoading(false)
    }
  }

  async function getSideGames() {
    try {
      const response = await gameService.getGameList()
      setSideGames(response.games)
    } catch (error) {
      console.log(error.message)
    }
  }

  const goFullscreen = () => {
    const content = document.documentElement
    if (!isFullScreen) {
      if (content.requestFullscreen) {
        content.requestFullscreen()
      } else if (content.mozRequestFullScreen) {
        content.mozRequestFullScreen()
      } else if (content.webkitRequestFullscreen) {
        content.webkitRequestFullscreen()
      } else if (content.msRequestFullscreen) {
        content.msRequestFullscreen()
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
        setIsFullScreen(prevState => !prevState)
      } else if (document.mozCancelFullScreen) { // Firefox
        document.mozCancelFullScreen()
        setIsFullScreen(prevState => !prevState)
      } else if (document.webkitExitFullscreen) { // Chrome, Safari, and Opera
        document.webkitExitFullscreen()
        setIsFullScreen(prevState => !prevState)
      } else if (document.msExitFullscreen) { // IE/Edge
        document.msExitFullscreen()
        setIsFullScreen(prevState => !prevState)
      }
    }
    setIsFullScreen(prevState => !prevState)
  }

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullScreen(!!document.fullscreenElement);
      if (iframeRef.current) {
        iframeRef.current.focus();
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    document.addEventListener('MSFullscreenChange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
      document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
    };
  }, []);

  return (
      <>
        {loading ? <Loading/> : <div>
          {isFullScreen ? null : <NavBar/>}
          <div className={`${isFullScreen ? 'mx-1' : 'lg:mx-24 font-sans'}`}>
            <div className={`${isFullScreen ? '' : 'flex flex-row gap-4 pt-3'}`}>
              {
                isFullScreen ? null :
                    <div className="xs:hidden 2xl:block">
                      {
                        sideGames.slice(0, 13).map((game) => {
                          return (
                              <div key={game?._id} onClick={() => setPlayGame(false)}>
                                <Link href={{
                                  pathname: '/game',
                                  query: {
                                    id: game?._id
                                  }
                                }}>
                                  <img className="rounded-lg mb-4 h-28" src={game?.thumbnail} width={173} height={100} alt="game"/>
                                </Link>
                              </div>
                          )
                        })
                      }
                    </div>
              }
              <div className={`${isFullScreen ? '' : 'nm:w-3/4 xs:w-full nm:mx-auto xs:mx-4'}`}>
                <div className="flex relative bg-stone-900">
                  <div className={`${playGame ? 'hidden' : 'absolute w-full h-full mx-auto flex flex-row items-center justify-center bg-transBlack'}`}>
                    <button className="py-3 px-6 rounded-full flex flex-row items-center gap-2 bg-slate-800 text-base font-extrabold" onClick={() => setPlayGame(true)}><FaPlay/>Play Now</button>
                  </div>
                  {
                    playGame ? <div className={`${isFullScreen ? 'w-screen h-screen' : 'w-full h-auto'}`}>
                          <iframe className="w-full" ref={iframeRef} src={games?.url} height={`${isFullScreen ? '100%' : 600}`} title="W3Schools Free Online Web Tutorials"/>
                          <button className="absolute bottom-2 right-2 p-1 bg-slate-800 rounded-lg" onClick={() => goFullscreen()}>{isFullScreen ?
                              <MdFullscreenExit size={30}/> :
                              <MdFullscreen size={30}/>}</button>
                        </div> :
                        <div className="w-full h-auto">
                          <img className="game-thumbnail" src={games?.thumbnail} alt="game"/>
                        </div>
                  }
                </div>
                {isFullScreen ? null : <div className="h-32 w-full mt-4 bg-slate-800 rounded-xl">Ad</div>}
                {isFullScreen ? null :
                    <div className="xs:hidden lg:flex flex-wrap justify-center gap-4 mt-4">
                      {
                        sideGames.slice(0, 12).map((game) => {
                          return (
                              <div key={game?._id} onClick={() => setPlayGame(false)}>
                                <Link href={{
                                  pathname: '/game',
                                  query: {
                                    id: game?._id
                                  }
                                }}>
                                  <img className="rounded-lg h-28" src={game?.thumbnail} width={173} height={100} alt="game"/>
                                </Link>
                              </div>
                          )
                        })
                      }
                    </div>
                }
                {
                  isFullScreen ? null :
                      <div className="my-4 w-full bg-slate-900 p-2 rounded-lg">
                        <div className="flex flex-row gap-4">
                          <div className="w-full p-4">
                            <div className="font-extrabold text-2xl">{games?.gameName}</div>
                            <div className="flex gap-4 my-4">
                              <button className="flex flex-row items-center gap-2 font-bold bg-slate-700 rounded-full py-2 px-4"><FaShareAlt size={15}/>Share</button>
                              <button className="flex flex-row items-center gap-2 font-bold bg-slate-700 rounded-full py-2 px-4"><ImEmbed2 size={20}/>Embed</button>
                            </div>
                            <div className="text-sm border-b pb-4 border-gray-700">
                              <div className="flex gap-2">
                                <div className="w-28 mt-1 text-gray-500">Rating:</div>
                                <div><b className="text-lg">{games?.rating}</b></div>
                              </div>
                              <div className="flex gap-2 mt-1 ">
                                <div className="w-28 text-gray-500">Released:</div>
                                <div>{moment(games?.createdOn).format('DD MMM, YYYY')}</div>
                              </div>
                              <div className="flex gap-2 mt-1 ">
                                <div className="w-28 text-gray-500">Last Updated:</div>
                                <div>{moment(games?.updatedOn).format('DD MMM, YYYY')}</div>
                              </div>
                              <div className="flex gap-2 mt-1 ">
                                <div className="w-28 text-gray-500">Technology:</div>
                                <div>{games?.technology}</div>
                              </div>
                              <div className="flex gap-2 mt-1 ">
                                <div className="w-28 text-gray-500">Platforms:</div>
                                <div>{games?.platform}</div>
                              </div>
                              <div className="flex gap-2 mt-1">
                                <div className="w-28 text-gray-500">Classification:</div>
                                <div className="flex gap-2 text-lime-500">
                                  <div className="font-bold hover:text-lime-600">{games?.categories?.categoryName}</div>
                                  »
                                </div>
                              </div>
                            </div>
                            <div ref={descriptionRef} className="my-6 text-sm leading-6 tracking-wide text-gray-200">
                              {parse(games?.description)}
                            </div>
                            <div className="mb-8 text-sm">{games?.shortDescription}</div>
                          </div>
                          <div className="bg-slate-800 h-96 w-1/3 rounded-xl nm:block xs:hidden"/>
                        </div>
                        <div className="flex flex-wrap gap-6 mx-6 mb-8">
                          {
                            games?.categories?.map((tag, index) => {
                              return (
                                  <div key={index} className="flex items-center gap-2 px-4 py-2 bg-slate-600 rounded-full text-sm">
                                    <img className="rounded-full my-px h-full" src={tag?.categoryIcon} width={20} height={20} alt="game"/>
                                    <div>{tag?.categoryName}</div>
                                  </div>
                              )
                            })
                          }
                        </div>
                        {/* <img className="m-auto mb-8" src="https://images.crazygames.com/store-logos/steam-button.png?auto=format%2Ccompress&q=45&cs=strip&ch=DPR" width={200} height={100} alt="download" /> */}
                      </div>
                }
              </div>
              {
                isFullScreen ? null : <div className="w-1/4 xs:hidden xl:block">
                  <div className="h-1/2 w-full bg-slate-800 rounded-xl"/>
                </div>
              }
            </div>
            {
              isFullScreen ? null :
                  <div className="flex flex-wrap justify-center gap-4 mt-2">
                    {
                      sideGames.slice(0, 18).map((game) => {
                        return (
                            <div key={game?._id} onClick={() => setPlayGame(false)}>
                              <Link href={{
                                pathname: '/game',
                                query: {
                                  id: game?._id
                                }
                              }}>
                                <img className="rounded-lg mb-4 h-28" src={game?.thumbnail} width={173} height={100} alt="game"/>
                              </Link>
                            </div>
                        )
                      })
                    }
                  </div>
            }
          </div>
          {isFullScreen ? null : <Footer/>}
        </div>
        }
      </>
  )
}
