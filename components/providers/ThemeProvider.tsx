"use client"
import React, { ReactNode } from 'react'
import { ThemeProvider as NextThemesProvider } from "next-themes";


const ThemeProvider = ({children}:{children: ReactNode}) => {
  return (
    <NextThemesProvider defaultTheme='system' attribute={"class"} enableSystem>
        {children}
    </NextThemesProvider>
  )
}

export default ThemeProvider