'use client';
import React, { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { FaShareAlt } from 'react-icons/fa';
import { ImEmbed2 } from 'react-icons/im';
import gameService from '../../services/game.service';
import parse from 'html-react-parser';
const moment = require('moment');

export default function Page() {
  const descriptionRef = useRef();
  const searchParams = useSearchParams();
  const [ loading, setLoading ] = useState(true);
  const [ games, setGames ] = useState();
  const [ sideGames, setSideGames ] = useState([]);

  useEffect(() => {
    const id = searchParams.get('id');
    fetchGame(id);
    getSideGames();
  }, [ searchParams ]);

  async function fetchGame(gameID) {
    try {
      setLoading(true);
      const response = await gameService.getGame(`${gameID}`);

      setGames(response.game);
      descriptionRef.current.innerHTML = response.data.description;
      setLoading(false);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  }

  async function getSideGames() {
    try {
      const response = await gameService.getGameList();
      setSideGames(response.games);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <>
      {loading ? (
        <div varient="body2">Loading...</div>
      ) : <div className="xl:mx-28 md:mx-16 xs:mx-10 my-10 font-sans">
        <div className="flex flex-row gap-4">
          <div className="xs:hidden 2xl:block">
            {
              sideGames.slice(0, 13).map((game) => {
                return (
                  <div key={game._id}>
                    <Link href={{
                      pathname: '/game',
                      query: {
                        id: game._id
                      }
                    }}>
                      <img className="rounded-lg mb-4 h-full" src={game.thumbnail} width={173} height={100} alt="game" />
                    </Link>
                  </div>
                );
              })
            }
          </div>
          <div className="xl:w-3/4 xs:w-full">
            <div className="flex relative">
              <iframe className="w-full" src={games.url} height={600} title="W3Schools Free Online Web Tutorials" />
            </div>
            <div className="h-32 w-full mt-4 bg-slate-800 rounded-xl">Ad</div>
            <div className="xs:hidden lg:flex flex-wrap justify-center gap-4 mt-4">
              {
                sideGames.slice(0, 12).map((game) => {
                  return (
                    <div key={game._id}>
                      <Link href={{
                        pathname: '/game',
                        query: {
                          id: game._id
                        }
                      }}>
                        <img className="rounded-lg h-full" src={game.thumbnail} width={173} height={100} alt="game" />
                      </Link>
                    </div>
                  );
                })
              }
            </div>
            <div className="my-4 w-full bg-slate-900 p-2 my-4 rounded-lg">
              <div className="flex flex-row gap-4">
                <div className="w-full p-4">
                  <div className="font-extrabold text-2xl">{games.gameName}</div>
                  <div className="flex gap-4 my-4">
                    <button className="flex flex-row items-center gap-2 font-bold bg-slate-700 rounded-full py-2 px-4"><FaShareAlt size={15} />Share</button>
                    <button className="flex flex-row items-center gap-2 font-bold bg-slate-700 rounded-full py-2 px-4"><ImEmbed2 size={20} />Embed</button>
                  </div>
                  <div className="text-sm border-b pb-4 border-gray-700">
                    <div className="flex gap-2">
                      <div className="w-28 mt-1 text-gray-500">Rating:</div>
                      <div><b className="text-lg">{games.rating}</b></div>
                    </div>
                    <div className="flex gap-2 mt-1 ">
                      <div className="w-28 text-gray-500">Released:</div>
                      <div>{moment(games.createdOn).format('DD MMM, YYYY')}</div>
                    </div>
                    <div className="flex gap-2 mt-1 ">
                      <div className="w-28 text-gray-500">Last Updated:</div>
                      <div>{moment(games.updatedOn).format('DD MMM, YYYY')}</div>
                    </div>
                    <div className="flex gap-2 mt-1 ">
                      <div className="w-28 text-gray-500">Technology:</div>
                      <div>{games.technology}</div>
                    </div>
                    <div className="flex gap-2 mt-1 ">
                      <div className="w-28 text-gray-500">Platforms:</div>
                      <div>{games.platform}</div>
                    </div>
                    <div className="flex gap-2 mt-1">
                      <div className="w-28 text-gray-500">Classification:</div>
                      <div className="flex gap-2 text-lime-500">
                        <div className="font-bold hover:text-lime-600">{games.categories.categoryName}</div>
                        »
                      </div>
                    </div>
                  </div>
                  <div ref={descriptionRef} className="my-6 text-sm leading-6 tracking-wide text-gray-200">
                    {parse(games.description)}
                  </div>
                  <div className="mb-8 text-sm">{games.shortDescription}</div>
                </div>
                <div className="bg-slate-800 h-96 w-1/3 rounded-xl" />
              </div>
              <div className="flex flex-wrap gap-6 mx-6 mb-8">
                {
                  games.categories.map((tag, index) => {
                    return (
                      <div key={index} className="flex items-center gap-2 px-4 py-2 bg-slate-600 rounded-full text-sm">
                        <img className="rounded-full my-px h-full" src={tag.categoryIcon} width={20} height={20} alt="game" />
                        <div>{tag.categoryName}</div>
                      </div>
                    );
                  })
                }
              </div>
              {/* <img className="m-auto mb-8" src="https://images.crazygames.com/store-logos/steam-button.png?auto=format%2Ccompress&q=45&cs=strip&ch=DPR" width={200} height={100} alt="download" /> */}
            </div>
          </div>
          <div className="w-1/4 xs:hidden xl:block">
            <div className="h-1/2 w-full bg-slate-800 rounded-xl" />
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mt-2">
          {
            sideGames.slice(0, 18).map((game) => {
              return (
                <div key={game._id}>
                  <Link href={{
                    pathname: '/game',
                    query: {
                      id: game._id
                    }
                  }}>
                    <img className="rounded-lg h-full" src={game.thumbnail} width={173} height={100} alt="game" />
                  </Link>
                </div>
              );
            })
          }
          {
            sideGames.slice(0, 18).map((game) => {
              return (
                <div key={game._id} className="xs:block lg:hidden">
                  <Link href={{
                    pathname: '/game',
                    query: {
                      id: game._id
                    }
                  }}>
                    <img className="rounded-lg h-full" src={game.thumbnail} width={173} height={100} alt="game" />
                  </Link>
                </div>
              );
            })
          }
        </div>
      </div>
      }
    </>
  );
}