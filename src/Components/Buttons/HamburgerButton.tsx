interface HamburgerButtonProps {
  isOpen: boolean
  toggle: () => void
}

export default function HamburgerButton({ isOpen, toggle }: HamburgerButtonProps) {
  return (
    <button
      className="md:hidden text-[#005546] text-2xl"
      onClick={toggle}
      aria-label="Toggle menu"
    >
      {isOpen ? '✕' : '☰'}
    </button>
  )
}
