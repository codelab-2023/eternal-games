'use client'
import React, { useEffect, useState } from 'react'
import CarouselMain from '../containers/carousel-main/page'
import Desktop from '../components/desktop-component/page'
import NavBar from '../components/navbar/page'
import Footer from '../components/footer/page'
import PacmanLoader from 'react-spinners/PacmanLoader'
import gameService from '../services/game.service'
import { GoogleAnalytics } from '@next/third-parties/google'

export default function Home() {

  const [ game, setGame ] = useState([])
  const [ loading, setLoading ] = useState(false)

  useEffect(() => {
    getGames()
  }, [])

  async function getGames() {
    try {
      setLoading(true)
      const response = await gameService.getGameList()
      setGame(response.games)
      setLoading(false)
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
      <>
        <div className="w-screen text-white min-h-screen overflow-x-hidden">
          <NavBar/>
          {
            loading ?
                <div className="absolute w-full top-[43%]">
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
                <div className="h-auto">
                  <CarouselMain helper={game}/>
                  {/*<Desktop name='Featured Games' helper={game} />*/}
                  <Desktop name="New Games" helper={game}/>
                  {/*<Desktop name='Adventure Games' helper={game} />*/}
                  {/*<Desktop name='CrazyGames Originals' helper={game} />*/}
                  {/*<Desktop name='Casual Games' helper={game} />*/}
                  {/* <Multiplayer /> */}
                  {/*<Desktop name='Puzzle Games' helper={game} />*/}
                  {/*<Desktop name='Action Games' helper={game} />*/}
                  {/*<Categories />*/}
                  {/*<Desktop name='Recommended this week' helper={game} />*/}
                  {/*<Desktop name='Car Games' helper={game} />*/}
                  {/*<Desktop name='2 Player Games' helper={game} />*/}
                </div>
          }
          <Footer/>
          <GoogleAnalytics gaId="G-TF62GHPFEJ" />
        </div>
      </>
  )
}
