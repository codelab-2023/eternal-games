'use client'
import React, { useEffect, useState } from 'react'
import CarouselMain from '../containers/carousel-main/page'
import Desktop from '../components/desktop-medium-card/page'
import NavBar from '../components/navbar/page'
import Footer from '../components/footer/page'
import PacmanLoader from 'react-spinners/PacmanLoader'
import gameService from '../services/game.service'
import { GoogleAnalytics } from '@next/third-parties/google'
import SpecialCard from '../components/SpecialGameCard/page'

export default function Home() {

  const [ game, setGame ] = useState([])
  const [ loading, setLoading ] = useState(false)
  const [ trendingGames, setTrendingGames ] = useState([])
  const [ featureGames, setFeatureGames ] = useState([])

  useEffect(() => {
    document.title = 'EternalGames'

    getGames()
    fetchTrendingGames()
    fetchFeatureGames()
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

  async function fetchTrendingGames(){
    try{
      const response = await gameService.getTrendingGames();
      setTrendingGames(response.trendings)
    } catch(error) {
      console.log(error.message)
    }
  }

  async function fetchFeatureGames(){
    try{
      const response = await gameService.getFeatureGames();
      setFeatureGames(response.features)
    } catch(error) {
      console.log(error.message)
    }
  }

  return (
      <>
        <div className="w-screen text-white min-h-screen overflow-x-hidden">
          <NavBar/>
                <div className="home-page-sliders h-auto px-3 !z-30 sm:px-5">
                  <CarouselMain helper={game} loading={loading}/>
                  <SpecialCard isHorizontal={true} games={trendingGames} name={'Trending Games'} loading={loading}/>
                  <SpecialCard isHorizontal={true} games={featureGames} name={'Feature Games'} loading={loading}/>
                  <Desktop name="New Games" helper={game}/>
                </div>
          <Footer/>
          <GoogleAnalytics gaId="G-TF62GHPFEJ" />
        </div>
      </>
  )
}
