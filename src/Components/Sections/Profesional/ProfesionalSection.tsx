'use client'

import { useEffect, useState } from 'react'
import ProfesionalLoading from './ProfesionalLoading'
import ProfesionalContent from './ProfesionalContent'

export default function ProfesionalSection() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    console.log('Simulando carga...')
    const timer = setTimeout(() => { 
         console.log('Carga terminada')
        setIsLoading(false) }, 1500)
    return () => clearTimeout(timer)
  }, [])

  return isLoading ? <ProfesionalLoading /> : <ProfesionalContent />
}
