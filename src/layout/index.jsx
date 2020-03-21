import React from 'react'
import Helmet from 'react-helmet'
import { ThemeProvider, Box, CSSReset } from '@chakra-ui/core'
import Header from '../components/Header'
import config from '../../data/SiteConfig'
import theme from '../theme'

export default ({ children }) => {
  console.log('theme is', theme)
  return (
    <>
      <Helmet>
        <meta name="description" content={config.siteDescription} />
        <html lang="en" />
      </Helmet>
      <ThemeProvider theme={theme}>
        <CSSReset />
        <Box>
          <Header />
          {children}
        </Box>
      </ThemeProvider>
    </>
  )
}
