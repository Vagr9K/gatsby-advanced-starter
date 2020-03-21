import React from 'react'
import Helmet from 'react-helmet'
import config from '../../data/SiteConfig'
import { ThemeProvider } from '@chakra-ui/core'
import theme from '../theme'
import './index.css'

export default ({ children }) => {
  console.log('theme is', theme)
  return (
    <div className="layout-container">
      <Helmet>
        <meta name="description" content={config.siteDescription} />
        <html lang="en" />
      </Helmet>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </div>
  )
}
