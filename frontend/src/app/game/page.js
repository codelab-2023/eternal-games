'use client'
import React, { useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { FaFacebookF, FaFantasyFlightGames, FaLinkedinIn, FaPlay, FaRegComments, FaRegThumbsDown, FaRegThumbsUp, FaShareAlt, FaWhatsapp } from 'react-icons/fa'
import { ImEmbed2, ImReddit } from 'react-icons/im'
import { MdClose, MdFullscreen, MdFullscreenExit } from 'react-icons/md'
import gameService from '../../services/game.service'
import parse from 'html-react-parser'
import NavBar from '../../components/navbar/page'
import Footer from '../../components/footer/page'
import PacmanLoader from 'react-spinners/PacmanLoader'
import Modal from '@mui/material/Modal'
import { FaXTwitter } from 'react-icons/fa6'
import { Box } from '@mui/material'

const moment = require('moment')

export default function Page() {
  const descriptionRef = useRef()
  const iframeRef = useRef(null)

  const searchParams = useSearchParams()
  const [ loading, setLoading ] = useState(true)
  const [ games, setGames ] = useState()
  const [ sideGames, setSideGames ] = useState([])
  const [ isFullScreen, setIsFullScreen ] = useState(false)
  const [ playGame, setPlayGame ] = useState(false)
  const [ isCopied, setIsCopied ] = useState(false)
  const [ shareModelOpen, setShareModelOpen ] = useState(false)

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
      descriptionRef.current.innerHTML = response.data.description
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

  function handlePlay() {
    if (!isFullScreen) {
      setPlayGame(true)
      document.documentElement.requestFullscreen().then(() => setIsFullScreen(true)).catch(err => console.log(err))
    } else {
      document.exitFullscreen().then(() => setIsFullScreen(false)).catch(err => console.log(err))
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
      setIsFullScreen(!!document.fullscreenElement)
      if (iframeRef.current) {
        iframeRef.current.focus()
      }
    }

    document.addEventListener('fullscreenchange', handleFullscreenChange)
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange)
    document.addEventListener('mozfullscreenchange', handleFullscreenChange)
    document.addEventListener('MSFullscreenChange', handleFullscreenChange)

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange)
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange)
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange)
      document.removeEventListener('MSFullscreenChange', handleFullscreenChange)
    }
  }, [])

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000) // Reset after 2 seconds
    }).catch(err => {
      console.error('Failed to copy: ', err)
    })
  }

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    boxShadow: 24,
    p: 4
  }

  return (
      <>
        <div className="w-screen text-white min-h-screen overflow-x-hidden">
          {isFullScreen ? null : <NavBar/>}
          {
            shareModelOpen ?
                <Modal
                    open={open}
                    onClose={() => setShareModelOpen(false)}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                  <Box className="absolute w-full h-full flex justify-center z-50">
                    <div className="bg-slate-800 h-fit p-3 self-center rounded-xl">
                      <div className="float-right" onClick={() => setShareModelOpen(false)}><MdClose color="#979797" size={26}/></div>
                      <div className="mt-4 text-xl font-bold text-center">Share the game</div>
                      <div className="my-4 flex flex-row justify-center gap-3">
                        <Link href="https://www.facebook.com/" target="_blank" className="p-3 rounded-full bg-[#2b5ee3]"><FaFacebookF size={24}/></Link>
                        <Link href="https://twitter.com/?lang=en" target="_blank" className="p-3 rounded-full bg-black"><FaXTwitter size={24}/></Link>
                        <Link href="https://www.whatsapp.com/" target="_blank" className="p-3 rounded-full bg-[#53af52]"><FaWhatsapp size={24}/></Link>
                        <Link href="https://in.linkedin.com/" target="_blank" className="p-3 rounded-full bg-[#2c5eaf]"><FaLinkedinIn size={24}/></Link>
                        <Link href="https://www.reddit.com/" target="_blank" className="p-3 rounded-full bg-[#d85e3c]"><ImReddit size={24}/></Link>
                      </div>
                      <div className="flex flex-row items-center gap-3 bg-slate-950 py-3 px-4 mb-10 rounded-xl text-gray-500">
                        <div>{window.location.href}</div>
                        <button className="py-1 px-3 bg-lime-500 text-white text-base font-bold rounded-full" onClick={() => handleCopy()}>Copy</button>
                      </div>
                    </div>
                  </Box>
                </Modal>
                : null
          }
          {loading ? <div className="absolute w-full top-[46%]">
                <PacmanLoader
                    color="rgb(190 242 100)"
                    size={20}
                    speedMultiplier={2}
                    cssOverride={{
                      flex: 1,
                      marginLeft: 'auto',
                      marginRight: 'auto'
                    }}
                />
              </div> :
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
                    <div className="game-thumbnail-div flex relative">
                      <div className={`${playGame ? 'hidden' : 'absolute w-full h-full mx-auto xs:hidden base:flex flex-row items-center justify-center bg-transBlack z-40'}`}>
                        <button className="py-3 px-6 rounded-full flex flex-row items-center gap-2 bg-lime-500 text-base font-extrabold" onClick={() => handlePlay()}><FaPlay/>Play Now</button>
                      </div>
                      {
                        playGame ? <div className={`${isFullScreen ? 'w-screen h-screen' : 'w-full h-auto'}`}>
                              <iframe className="w-full" ref={iframeRef} src={games?.url} height={`${isFullScreen ? '100%' : 600}`} title="W3Schools Free Online Web Tutorials"/>
                              {isFullScreen ? <button className="absolute bottom-2 right-2 p-1 bg-slate-800 rounded-lg" onClick={() => goFullscreen()}>
                                <MdFullscreenExit size={30}/>
                              </button> : null
                              }
                            </div> :
                            <div>
                              <div className="relative w-full">
                                <img className="game-thumbnail" src={games?.thumbnail} alt="game"/>
                                <div className="absolute -bottom-1 bg-gradient-to-b from-transparent via-transBlack to-transBlack2 to-90% w-full -left-1 h-full xs:block base:hidden z-20"/>
                              </div>
                              <div className="absolute bottom-24 w-full z-40 xs:block base:hidden">
                                <img className="w-2/4 rounded-xl mx-auto" src={games?.thumbnail} style={{ height: '120px' }} alt="game"/>
                              </div>
                              <div className="h-20 xs:block base:hidden"/>
                              <div className={`${isFullScreen ? 'hidden' : 'mb-4 mx-auto flex flex-row items-center justify-center base:hidden xs:flex'}`}>
                                <button className="py-3 px-6 rounded-full flex flex-row items-center gap-2 bg-lime-500 text-base font-extrabold" onClick={() => handlePlay()}><FaPlay/>Play Now</button>
                              </div>
                            </div>
                      }
                    </div>
                    {isFullScreen ? null : <div className="flex flex-row items-center justify-between pl-3 w-full bg-slate-800">
                      <div className="flex flex-row gap-2 text-xl font-black text-lime-500">
                        <FaFantasyFlightGames size={26}/>
                        <p>EternalGames</p>
                      </div>
                      <div className="flex flex-row items-center justify-between gap-5 p-4 ">
                        <div><FaRegThumbsUp size={18}/></div>
                        <div><FaRegThumbsDown size={18}/></div>
                        <div><FaRegComments size={22}/></div>
                        <div onClick={() => setShareModelOpen(prevState => !prevState)}><FaShareAlt size={18}/></div>
                        {
                          playGame ? <div onClick={() => handlePlay()}><MdFullscreen size={30}/></div> :
                              <div><MdFullscreen color="#616161" size={30}/></div>
                        }
                      </div>
                    </div>
                    }
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
                                  <button className="flex flex-row items-center gap-2 font-bold bg-slate-700 rounded-full py-2 px-4" onClick={() => setShareModelOpen(prevState => !prevState)}>
                                    <FaShareAlt size={15}/>Share
                                  </button>
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
                            <div className="flex flex-wrap justify-center gap-6 mx-6 mb-8">
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
                      <div className="flex flex-wrap justify-center gap-4 mt-2 mb-4">
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
                                    <img className="rounded-lg h-28" src={game?.thumbnail} width={173} height={100} alt="game"/>
                                  </Link>
                                </div>
                            )
                          })
                        }
                      </div>
                }
              </div>
          }
          {isFullScreen ? null : <Footer/>}
        </div>
      </>
  )
}
