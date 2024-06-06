'use client'
import React, { useEffect } from 'react'
import { GoogleAnalytics } from '@next/third-parties/google'

export default function Page() {

  return (
      <div className="my-10">
        <p>Recent Played</p>
        <GoogleAnalytics gaId="G-TF62GHPFEJ" />
      </div>
  )
}
