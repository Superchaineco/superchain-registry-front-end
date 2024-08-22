'use client'
import { useMemo } from 'react'
import { CssBaseline, ThemeProvider, useMediaQuery } from '@mui/material'
import createSafeTheme from './safeTheme'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'

const SafeThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const theme = useMemo(() => createSafeTheme(prefersDarkMode ? 'dark' : 'light'), [prefersDarkMode])

  return (
    <AppRouterCacheProvider options={{ key: 'css' }}>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme>{children}</CssBaseline>
      </ThemeProvider>
    </AppRouterCacheProvider>
  )
}

export default SafeThemeProvider
