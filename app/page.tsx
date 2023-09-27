'use client'

import React from 'react'
import Image from 'next/image'
import Hero from './website/components/Hero';
import Companies from './website/components/Companies';
import Business from './website/components/Business';
import Billing from './website/components/Billing';
import Testimonials from './website/components/Testimonials';
import CTA from './website/components/CTA';
import Footer from './website/components/Footer';
import styles from './style';


process.env.NODE_NO_WARNINGS = 'stream/web';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:p-24 p-4 relative overflow-hidden">
    <div className={` ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
     </div>
     <div className={` ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Companies/>
        
        <Business />
        <Billing />
     
        <Testimonials />
  
        <CTA />
        <Footer/>
      </div>
    </div>
      
    </main>
  )
}
