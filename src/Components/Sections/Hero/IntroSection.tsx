'use client'

import { useEffect, useState } from 'react'
import IntroLoading from './IntroLoading'
import IntroContent from './IntroContent'

export default function IntroSection() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  return isLoading ? <IntroLoading /> : <IntroContent />
}
