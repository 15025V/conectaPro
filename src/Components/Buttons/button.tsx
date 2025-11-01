'use client'

import { useState } from 'react'
import HamburgerButton from './HamburgerButton'
import NavLinks from '../NavBar/NavLinks'

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-[#C7D2D9] text-[#005546] px-6 py-4 flex justify-between items-center relative">
      {/* Logo */}
      <div className="bg-[#1d304c] w-32 h-10 rounded-md"></div>

      {/* Botón hamburguesa */}
      <HamburgerButton isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />

      {/* Enlaces */}
      <NavLinks isOpen={isOpen} />
    </header>
  )
}
