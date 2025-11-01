'use client'

import { useState } from 'react'
import HamburgerButton from '../Buttons/HamburgerButton'
import NavLinks from './NavLinks'

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-[#C7D2D9] text-[#005546] px-6 py-4 flex items-center justify-between relative z-50">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div
          className="w-32 h-15 bg-cover bg-center rounded-md"
          style={{ backgroundImage: "url('/logoProConnect.png')" }}
          role="img"
          aria-label="Logo ConectaPro"
        />
        {/* <span className="hidden md:inline text-lg font-semibold">ConectaPro</span> */}
      </div>

      {/* Botón hamburguesa */} 
      <HamburgerButton isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />

      {/* Enlaces */}
      <NavLinks isOpen={isOpen} />
    </header>
  )
}

