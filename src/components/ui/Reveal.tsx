'use client'

import React, { useEffect, useRef, useState } from 'react'

interface RevealProps {
  children: React.ReactNode
  width?: 'fit-content' | '100%'
  delay?: number
}

export const Reveal = ({ children, width = '100%', delay = 0 }: RevealProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
          // Unobserve once it's visible if you only want it to reveal once
          if (ref.current) observer.unobserve(ref.current)
        }
      },
      {
        threshold: 0.1, // trigger when 10% of the element is visible
      },
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [delay])

  return (
    <div
      ref={ref}
      style={{
        position: 'relative',
        width,
        overflow: 'hidden',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
      }}
    >
      {children}
    </div>
  )
}
