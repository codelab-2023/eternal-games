'use client'
import { useSearchParams } from 'next/navigation'
import Navbar from '../../components/navbar/page'
import Footer from '../../components/footer/page'
import React, { useEffect, useState } from 'react'
import gameService from '../../services/game.service'
import SearchedGameCard from '../../components/desktop-component/page'
import GameCards from '../../components/game-cards/page'

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get('query')

  const [ isResultNotExist, setIsResultNotExist ] = useState(false)
  const [ isLoading, setIsLoading ] = useState(true)
  const [ filteredGames, setFilteredGames ] = useState([])
  const [ games, setGames ] = useState([])

  useEffect(() => {
    handleSearch()
  }, [ query ])

  async function handleSearch() {
    try {
      setIsLoading(true)
      const response = await gameService.getGameList()

      setGames(response.games)
      const term = query.toLowerCase()
      const filtered = response.games.filter(
          (game) =>
              game.gameName.toLowerCase().includes(term) ||
              game.shortDescription.toLowerCase().includes(term)
      )
      console.log('🚀🚀🚀 handleSearch => filtered :: ', filtered)
      if (filtered.length === 0) {
        setIsResultNotExist(true)
      } else {
        setIsResultNotExist(false)
      }

      await setFilteredGames(filtered)
      setIsLoading(false)
    } catch (error) {
      console.error(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
      <div className="w-screen text-white min-h-screen overflow-x-hidden">
        <Navbar/>
        <div className="flex flex-col">
          {
            isResultNotExist ?
                <div className="mx-auto w-10/12 my-8 rounded-lg py-3 bg-slate-900">
                  <p className="mb-5 font-bold text-center text-lg font-sans text-lime-300 mt-4">No results found for "{query}"</p>
                </div> :
                <SearchedGameCard helper={filteredGames} name={'Matching Results'}/>
          }
          {
            !isLoading ?
                (
                    filteredGames.length < 9 ?
                        <div className="mx-4 mb-5">
                          <p className="mb-5 font-bold text-lg font-sans text-lime-300 mt-4">Must-Play Games</p>
                          <div className="mt-auto flex flex-row items-center justify-center flex-wrap gap-4">
                            <GameCards games={games} endSlice={10}/>
                          </div>
                        </div> : null
                ) : null
          }
        </div>
        <Footer/>
      </div>
  )
}
