import React from 'react'
import { Hero } from '@/components/Hero'
import { ProductCategories } from '@/components/ProductCategories'
import { AboutUs } from '@/components/AboutUs'
import { SplitACGrid } from '@/components/SplitACGrid'
import { Services } from '@/components/Services'
import { WhyChooseUs } from '@/components/WhyChooseUs'
import { CTA } from '@/components/CTA'
import { FAQ } from '@/components/FAQ'
import { Footer } from '@/components/Footer'

export const metadata = {
  title: 'Galaxy Technologies - Home',
  description: 'Welcome to Galaxy Technologies. Find premium AC products and services.',
}

export default function HomePage() {
  return (
    <div className="flex flex-col w-full bg-white font-poppins text-text selection:bg-primarySurface selection:text-primaryDark">
      <Hero />
      <ProductCategories />
      <AboutUs />
      <SplitACGrid />
      <Services />
      <WhyChooseUs />
      <CTA />
      <FAQ />
      <Footer />
    </div>
  )
}
