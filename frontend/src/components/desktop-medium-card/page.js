import React from 'react'
import ImageListItem from '@mui/material/ImageListItem'
import Link from 'next/link'
import 'swiper/css'
import { Box, Skeleton } from '@mui/material'

const Desktop = ({ helper, name }) => {
  return (
      <div className="mx-1 sm:mx-4">
        <p className="font-bold text-lg font-sans text-lime-300 mt-4">{name}</p>
        {
          helper.length ?
              <div className="grid grid-flow-row grid-cols-[repeat(auto-fit,minmax(120px,1fr))] sm:grid-cols-[repeat(auto-fit,minmax(150px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-3 mt-4 mb-10">
                {
                  helper.map((item) => (
                      <div key={item._id} className='w-full'>
                        <Link href={{ pathname: `/game/${item?.slug}` }}>
                        <img className="homepage-games rounded-xl w-full" src={item.thumbnail} alt={item?.gameName}/>
                        </Link>
                      </div>

                  ))
                }
              </div> : <Box
                  className="flex flex-row items-center flex-wrap justify-center shrink gap-4 mt-4 mb-10"
              >
                {Array.from({ length: 6 }).map((_, index) => (
                    <Box key={index} className="homepage-games">
                      <Skeleton
                          variant="rectangular"
                          width="100%"
                          height="100%"
                          sx={{ borderRadius: '12px', bgcolor: 'grey.700' }}
                      />
                    </Box>
                ))}
              </Box>
        }
      </div>
  )
}

export default Desktop
