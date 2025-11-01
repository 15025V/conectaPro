'use client'

import { useEffect, useState } from 'react'

import SplitIntroContent from './SplitIntroContent'
import SplitIntroLoading from './SplitIntroLoading'

export default function SplitIntroSection() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  return isLoading ? <SplitIntroLoading /> : <SplitIntroContent />
}
