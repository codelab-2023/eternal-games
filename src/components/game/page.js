'use client'
import * as React from 'react'
import Link from 'next/link'
import ReactPlayer from 'react-player'
import { FaArrowUp, FaRegPlayCircle, FaShareAlt } from 'react-icons/fa'
import { ImEmbed2 } from 'react-icons/im'

export default function GamePage() {

  const gamesImg = [
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDoDOJZbUuf2mU6r1AxYP0PoNn5XEnCuaG7w&usqp=CAU'
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZRgtgJjIznsit1CsxTUbLXei6cq1kKry9ug&usqp=CAU'
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN8Pn8Ye-NBuBFgANv4PM_Z4yooAyjH0F8Jw&usqp=CAU'
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQw32qO2WqwzJq2pAVFfIBqMSS2HhA6pK5CQ&usqp=CAU'
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvwvymgCpKRxvzl56mT7bF9BkrBaHgb2mbLw&usqp=CAU'
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTatoKSTytIzEVsX43869utuHvmOsJcABqwfQ&usqp=CAU'
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ1kOi7EbHvyDWOmIUK4TOZn--HhAWjkvRiw&usqp=CAU'
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTILOTD7gx911tvT-HPetHP9BYZmyKXVKn9Vg&usqp=CAU'
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS05urv-NFz8JbygeMN5U7l3oA3hvw9rjH0Bg&usqp=CAU'
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS04mC-F78eUkHmStuvqTsbNYNuEaIRcZXJcn2__Y1szk215syapt4-p4nFo17uMbxYQxc&usqp=CAU'
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS79W7IQoKzY4if02D7jR5KZm1JotnzwjY0TQ&usqp=CAU'
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGMLLrTo7XZuSDymEnLwF7ShwZXowYUDD7FQ&usqp=CAU'
    }
  ]

  const tags = [
    {
      img: 'https://img.icons8.com/?size=50&id=8931&format=png',
      title: 'Action'
    },
    {
      img: 'https://img.icons8.com/?size=80&id=lp9Lv0PWqOBh&format=png',
      title: '3D'
    },
    {
      img: 'https://img.icons8.com/?size=60&id=lRaI3B0GhAgD&format=png',
      title: 'Battle'
    },
    {
      img: 'https://img.icons8.com/?size=48&id=80604&format=png',
      title: 'Sci-fi'
    },
    {
      img: 'https://img.icons8.com/?size=80&id=zbGZokGkWvLX&format=png',
      title: 'Adventure'
    },
    {
      img: 'https://img.icons8.com/?size=40&id=ghQPAZtxmNbQ&format=png',
      title: 'Graphics'
    },
    {
      img: 'https://img.icons8.com/?size=64&id=PEfxi3mNT0kR&format=png',
      title: 'power'
    },
    {
      img: 'https://img.icons8.com/?size=80&id=R9nmG80rVKvZ&format=png',
      title: 'Super Human'
    },
    {
      img: 'https://img.icons8.com/?size=80&id=iW0pxfkIq0Ck&format=png',
      title: 'Bromance'
    }
  ]

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
      <>
        <div className="mx-[7%] my-10 font-sans">
          <div className="flex flex-row gap-4">
            <div>
              {
                gamesImg.map((game, index) => {
                  return (
                      <div key={index}>
                        <Link href="/components/game1">
                          <img className="rounded-lg mb-4 h-[100%]" src={game.img} width={173} height={100} alt="game"/>
                        </Link>
                      </div>
                  )
                })
              }
            </div>
            <div className="w-[69%]">
              <div className="flex relative">
                <ReactPlayer
                    width="100%"
                    height="600px"
                    url="https://www.youtube.com/watch?v=nq1M_Wc4FIc&pp=ygUMc3BpZGVyIG1hbiAy"
                    autoPlay={true}
                    controls={false}
                    muted={true}
                    loop={true}
                    light={false}
                    pip={true}
                />
                <source src="https://www.youtube.com/watch?v=nq1M_Wc4FIc&pp=ygUMc3BpZGVyIG1hbiAy" type="video/mp4"/>
                <div className="flex items-center absolute w-[100%] h-[600px] bg-neutral-900/70 p-10">
                  <div className="text-center mx-auto">
                    <img className="rounded-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvzE-b2ONTJAr4LSNyECheyXnmBH6y3rgung&usqp=CAU" width={250} height={150} alt="game"/>
                    <div className="font-bold text-xl mt-2 mb-4">Spider-Man 2</div>
                    <button className="flex items-center mx-auto gap-2 bg-lime-500 hover:bg-lime-600 py-2 px-8 rounded-full font-bold">Play Now <FaRegPlayCircle size={20}/></button>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 mt-4">
                {
                  gamesImg.map((game, index) => {
                    return (
                        <div key={index}>
                          <Link href="/components/game1">
                            <img className="rounded-lg h-[100%]" src={game.img} width={173} height={100} alt="game"/>
                          </Link>
                        </div>
                    )
                  })
                }
              </div>
              <div className="my-4 w-[100%] bg-slate-900 p-2 my-4 rounded-lg">
                <div className="flex flex-row gap-4">
                  <div className="w-[65%] p-4">
                    <div className="font-extrabold text-2xl">Spider-Man 2</div>
                    <div className="flex gap-4 my-4">
                      <button className="flex flex-row items-center gap-2 font-bold bg-slate-700 rounded-full py-2 px-4"><FaShareAlt size={15}/>Share</button>
                      <button className="flex flex-row items-center gap-2 font-bold bg-slate-700 rounded-full py-2 px-4"><ImEmbed2 size={20}/>Embed</button>
                    </div>
                    <div className="text-sm border-b pb-4 border-gray-700">
                      <div className="flex gap-2">
                        <div className="w-28 mt-1 text-gray-500">Rating:</div>
                        <div><b className="text-lg">9.4</b>(3.4 M+)</div>
                      </div>
                      <div className="flex gap-2 mt-1 ">
                        <div className="w-28 text-gray-500">Released:</div>
                        <div>January 2024</div>
                      </div>
                      <div className="flex gap-2 mt-1 ">
                        <div className="w-28 text-gray-500">Last Updated:</div>
                        <div>January 2024</div>
                      </div>
                      <div className="flex gap-2 mt-1 ">
                        <div className="w-28 text-gray-500">Technology:</div>
                        <div>HTML5 (Unity WebGL)</div>
                      </div>
                      <div className="flex gap-2 mt-1 ">
                        <div className="w-28 text-gray-500">Platforms:</div>
                        <div>Browser (desktop-only), Steam</div>
                      </div>
                      <div className="flex gap-2 mt-1">
                        <div className="w-28 text-gray-500">Classification:</div>
                        <div className="flex gap-2 text-lime-500">
                          <div className="font-bold hover:text-lime-600">Games</div>
                          »
                          <div className="font-bold hover:text-lime-600">Action</div> »
                          <div className="font-bold hover:text-lime-600">Puzzle</div> »
                          <div className="font-bold hover:text-lime-600">Card</div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 mb-8 text-sm leading-6 tracking-wide text-gray-200">
                      Spider-Men, Peter Parker and Miles Morales, return for an exciting new adventure in the critically acclaimed Marvel’s Spider-Man franchise for PS5.
                      Swing, jump and utilize the new Web Wings to travel across Marvel’s New York, quickly switching between Peter Parker and Miles Morales to experience
                      different stories and epic new powers, as the iconic villain Venom threatens to destroy their lives, their city and the ones they love.
                    </div>
                    <div>
                      <div>
                        <div className="mb-4 font-bold text-xl">Release Date</div>
                        <div className="mb-8 text-sm">January 2024</div>
                      </div>
                      <div>
                        <div className="mb-4 font-bold text-xl">Platforms</div>
                        <ul className="ml-8 mb-8 text-sm list-disc">
                          <li>Web Browser</li>
                          <li>Steam</li>
                          <li>Play Station</li>
                        </ul>
                      </div>
                      <div>
                        <div className="mb-4 font-bold text-xl">Last Updated</div>
                        <div className="mb-8 text-sm">January 2024</div>
                      </div>
                      <div>
                        <div className="mb-4 font-bold text-xl">Controls</div>
                        <div className="mb-4 text-sm">Use left mouse button to start an action and the right mouse button to undo some actions. Please see the in-game tutorials.</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-slate-800 h-[600px] w-[35%]"></div>
                </div>
                <div className="flex flex-wrap gap-6 mx-6 mb-8">
                  {
                    tags.map((tag, index) => {
                      return (
                          <div key={index} className="flex items-center gap-2 px-4 py-2 bg-slate-600 rounded-full text-sm">
                            <img className="rounded-full my-px h-[100%]" src={tag.img} width={20} height={20} alt="game"/>
                            <div>{tag.title}</div>
                          </div>
                      )
                    })
                  }
                </div>
                <img className="m-auto mb-8" src="https://images.crazygames.com/store-logos/steam-button.png?auto=format%2Ccompress&q=45&cs=strip&ch=DPR" width={200} height={100} alt="download"/>
              </div>
            </div>
            <div className="w-[19%]">
              <div className="h-[900px] w-[100%] bg-slate-800">
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 mt-2">
            {
              gamesImg.map((game, index) => {
                return (
                    <div key={index}>
                      <Link href="/components/game1">
                        <img className="rounded-lg h-[100%]" src={game.img} width={173} height={100} alt="game"/>
                      </Link>
                    </div>
                )
              })
            }
          </div>
          <div className="relative">
            <button className="flex items-center absolute -right-28 -top-9 justify-self-end gap-2 rounded-full py-4 px-12 font-bold bg-purple-800" onClick={scrollToTop}>
              <FaArrowUp size={17}/> Back to top
            </button>
          </div>
        </div>
      </>
  )
}