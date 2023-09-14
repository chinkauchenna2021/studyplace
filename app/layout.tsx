
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from '@/components/modules/Navbar/page';
import { ClerkProvider } from '@clerk/nextjs'


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
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
       <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
        {children}
       </ThemeProvider>
        </body>
    </html>
    </ClerkProvider>
  )
}
