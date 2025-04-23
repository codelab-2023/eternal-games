'use client'
import Head from 'next/head'
import Script from 'next/script'
import { Inter } from 'next/font/google'
import './globals.css'
import { GoogleAnalytics } from '@next/third-parties/google'
import React, { Suspense, useEffect } from 'react'
import { usePathname } from 'next/navigation'

const inter = Inter({ subsets: [ 'latin' ] })

// export const metadata = {
//   title: 'Eternal games',
//   description: 'Checkout Eternal Games cool page'
// }

const META_PIXEL_ID = "YOUR_PIXEL_ID";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  // useEffect(() => {
  //   window.fbq("track", "PageView");
  // }, [pathname]);

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
        <Script
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${META_PIXEL_ID}');
              fbq('track', 'PageView');
            `,
            }}
        />
      </Head>

      <body style={{width: '100%', color: 'white', minHeight: '100%', overflowX: 'hidden' }}>
      <Script
          id="adsense-script"
          async
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5284860989721758"
          crossOrigin="anonymous"
      />
      {/*<Suspense>*/}
      {/*  <NavBar toggleSideBar={handleToggle} />*/}
      {/*</Suspense>*/}
      <Suspense>
        {children}
      </Suspense>

      {/*<div className={`w-full ${openSideBar ? 'h-screen overflow-y-scroll ' : ''}`}>*/}
      {/*    <SideBar isOpen={openSideBar} onClose={handleToggle} />*/}
      {/*  <div className={` ${openSideBar ? 'xs:ml-auto sm:ml-[190px] h-screen overflow-y-scroll' : ''}`}>*/}

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
