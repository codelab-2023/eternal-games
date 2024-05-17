import PacmanLoader from 'react-spinners/PacmanLoader'
import React from 'react'

export default function Page() {

  return (
      <div className="absolute w-full top-[46%]">
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
      </div>
  );
}
