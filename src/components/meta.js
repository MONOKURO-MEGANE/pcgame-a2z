import React from "react"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { siteMeta } from '../libs/constants'

const { siteTitle, siteDesc, siteUrl } = siteMeta

export const Meta = ({ pageTitle, pageDesc }) => {
  const title = pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle
  const description = pageDesc ? pageDesc : siteDesc

  const location = useLocation()
  const url = `${siteUrl}${location.pathname}`

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
      <link rel="canonical" href={url} />
      <meta http-equiv="Pragma" content="no-cache" />
      <meta http-equiv="Cache-Control" content="no-cache" />
    </Helmet>
  )
}
