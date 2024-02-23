import Image from 'next/image'
import { multiPlayer, offLineMultiplayer, onLineMultiplayer } from '../../../assets'
import * as React from 'react'

const Multiplayer = () => {
  return (
      <div className="flex gap-6 bg-slate-900 m-6 p-4 rounded-lg">
        <div className="flex flex-row items-center w-1/4 font-sans font-bold text-3xl">
          <div className="text-wrap px-8">Play with <br/>friends!</div>
          <Image
              className="relative top-4"
              src={multiPlayer}
              width={230}
              height={230}
              alt="gaming"
          />
        </div>
        <div className="flex  items-center justify-content-center bg-slate-950 w-1/3 rounded-xl">
          <div className="flex m-auto">
            <Image
                src={offLineMultiplayer}
                width={150}
                height={150}
                alt="gaming"
            />
            <div className="ml-8 text-center font-sans">
              <div className="font-bold text-xl">Local multiplayer</div>
              <div className="text-gray-400 text-lg mb-4">Play on the same device</div>
              <button className="bg-lime-500 hover:bg-lime-600 px-4 py-2 rounded-full font-bold">Explore games</button>
            </div>
          </div>
        </div>
        <div className="flex  items-center justify-content-center bg-slate-950 w-1/3 rounded-xl">
          <div className="flex  m-auto">
            <Image
                src={onLineMultiplayer}
                width={130}
                height={130}
                alt="gaming"
            />
            <div className="ml-8 text-center font-sans">
              <div className="font-bold text-xl">Online multiplayer</div>
              <div className="text-gray-400 text-lg mb-4">Play on the separate devices</div>
              <button className="bg-lime-500 hover:bg-lime-600 px-4 py-2 rounded-full font-bold">Explore games</button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Multiplayer