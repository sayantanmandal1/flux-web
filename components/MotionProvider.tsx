'use client'
// Provides Framer Motion LazyMotion with domAnimation features
// loaded only on the client to avoid SSR issues
import { LazyMotion, domAnimation } from 'framer-motion'
import { ReactNode } from 'react'

export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  )
}
