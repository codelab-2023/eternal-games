'use client';
import React, { useEffect, useState } from 'react';
import Multiplayer from '@/containers/multiplayer/page';
import Categories from '@/containers/categories/page';
import CarouselMain from '@/containers/carousel-main/page';
import Desktop from '../components/desktop-component/page';
import gameService from '../services/game.service';

export default function Home() {

  const [ game, setGame ] = useState([]);

  useEffect(() => {
    getGames();
  }, []);

  async function getGames() {
    try {
      const response = await gameService.getGameList();
      setGame(response.games);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <>
      <div>
        <CarouselMain helper={game} />
        <Desktop name='Featured Games' helper={game} />
        <Desktop name='New Games' helper={game} />
        <Desktop name='Adventure Games' helper={game} />
        <Desktop name='CrazyGames Originals' helper={game} />
        <Desktop name='Casual Games' helper={game} />
        <Multiplayer />
        <Desktop name='Puzzle Games' helper={game} />
        <Desktop name='Action Games' helper={game} />
        <Categories />
        <Desktop name='Recommended this week' helper={game} />
        <Desktop name='Car Games' helper={game} />
        <Desktop name='2 Player Games' helper={game} />
      </div>
    </>
  );
}
