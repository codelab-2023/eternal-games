import Head from 'next/head'
import { Inter } from 'next/font/google'
import './globals.css'
import { GoogleAnalytics } from '@next/third-parties/google'

import React, { Suspense } from 'react'

const inter = Inter({ subsets: [ 'latin' ] })

export const metadata = {
  title: 'Eternal games',
  description: 'Checkout Eternal Games cool page'
}

export default function RootLayout({ children }) {

  return (
      <html lang="en">
      <Head>
        <title>Eternal Games</title>
        <meta name="description" content="Checkout Eternal Games cool page" key="desc" />
        <meta property="og:title" content="Eternal Games is a platform for play offline games" />
        <meta property="og:description" content="Eternal Games is a platform for play offline games"/>
        {/*<meta property="og:image" content={logo}/>*/}
        <meta name="google" content="nositelinkssearchbox" key="sitelinks"/>
        <meta name="google" content="notranslate" key="notranslate"/>
      </Head>

      <body className={`w-screen text-white min-h-screen overflow-x-hidden ${inter.className}`}>
      {/*<Suspense>*/}
      {/*  <NavBar toggleSideBar={handleToggle} />*/}
      {/*</Suspense>*/}
      <Suspense>
        {children}
      </Suspense>

      {/*<div className={`w-full ${openSideBar ? 'h-screen overflow-y-scroll ' : ''}`}>*/}
      {/*    <SideBar isOpen={openSideBar} onClose={handleToggle} />*/}
      {/*  <div className={` ${openSideBar ? 'xs:ml-auto base:ml-[190px] h-screen overflow-y-scroll' : ''}`}>*/}

      {/*  </div>*/}
      {/*</div>*/}
      {/*<Suspense>*/}
      {/*  <Footer />*/}
      {/*</Suspense>*/}
      </body>
      <GoogleAnalytics gaId="G-TF62GHPFEJ"/>
      </html>
  )
}
