'use client'
import React, { useEffect, useState } from 'react'
import { Box, Container, Typography } from '@mui/material'
import PageService from '../../services/pages.service'
import { useParams } from 'react-router'
import Navbar from '../../components/navbar/page'
import Footer from '../../components/footer/page'

export default function Page() {
  const privacyPageId = 'privacy-policy'
  const params = useParams()
  const [ description, setDescription ] = useState('')

  useEffect(() => {
    getPage()
  }, [ params ])

  async function getPage() {
    try {
      const response = await PageService.fetchPage(privacyPageId)
      setDescription(response?.description)
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
      <div className="w-screen text-white min-h-screen overflow-x-hidden">
        <Navbar/>
        <Container className="bg-slate-900 rounded-xl p-10 mx-auto my-8">
          <Typography variant="h3" component="h1" gutterBottom>
            <b>Privacy Policy</b>
          </Typography>
          <Box className="row">
            <Box className="col-lg-10 mx-auto" dangerouslySetInnerHTML={{ __html: description }}/>
          </Box>
        </Container>
        <Footer/>
      </div>
  )
}
