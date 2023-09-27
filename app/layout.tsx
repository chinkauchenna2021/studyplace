
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import { ClerkProvider } from '@clerk/nextjs'
import Navbar from './website/components/Navbar'
import Footer from './website/components/Footer'
import styles from './style'



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'School platform ',
  description: 'Coding platform for tech devs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
       <ThemeProvider attribute="class"     defaultTheme="system" enableSystem>
       <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
         <Navbar/>
      </div>
    </div>
        {children}
 
       </ThemeProvider>
        </body>
    </html>
    // </ClerkProvider>
  )
}
