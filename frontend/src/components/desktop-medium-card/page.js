import React from 'react'
import ImageListItem from '@mui/material/ImageListItem'
import Link from 'next/link'
import 'swiper/css'
import { Box, Skeleton } from '@mui/material'

const Desktop = ({ helper, name }) => {
  return (
      <div className="mx-4">
        <p className="font-bold text-lg font-sans text-lime-300 mt-4">{name}</p>
        {
          helper.length ?
              <div className="flex flex-row items-center flex-wrap justify-center shrink gap-4 mt-4 mb-10">
                {
                  helper.map((item) => (
                      <ImageListItem key={item._id} cols={item.cols || 2} rows={item.rows || 1}>
                        <Link href={{
                          pathname: '/game',
                          query: {
                            slug: item.slug
                          }
                        }}>
                          <img className="homepage-games rounded-xl" src={item.thumbnail} alt={item?.gameName}/>
                        </Link>
                      </ImageListItem>

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
