'use client'
import React, { useEffect, useState } from 'react'
import CarouselMain from '../containers/carousel-main/page'
import Desktop from '../components/desktop-component/page'
import gameService from '../services/game.service'
import NavBar from '../components/navbar/page'
import Footer from '../components/footer/page'
import Loading from './loading'

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
        {
          loading ? <Loading/> :
              <div className="w-screen text-white min-h-screen overflow-x-hidden">
                <NavBar/>
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
                <Footer/>
              </div>
        }
      </>
  )
}
