import React from 'react'
import Link from 'next/link'

export default function GameCards({ games, startSlice = 0, endSlice = games.length }) {
  return (
      <React.Fragment>
        {
          games.slice(startSlice, endSlice ).map((game) => {
            return (
                <div key={game?._id}>
                  <Link href={{
                    pathname: '/game',
                    query: {
                      slug: game?.slug
                    }
                  }}>
                    <img className="rounded-lg ml-4 mb-4 h-28" src={game?.thumbnail} width={200} height={100} alt={game?.gameName}/>
                  </Link>
                </div>
            )
          })
        }
      < /React.Fragment>
  )
}
