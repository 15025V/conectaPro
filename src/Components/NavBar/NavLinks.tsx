
interface NavLinksProps {
  isOpen: boolean
}

export default function NavLinks({ isOpen }: NavLinksProps) {
  return (
    <nav
      className={`text-sm font-medium
        flex-col gap-4 px-6 py-4 bg-[#C7D2D9] absolute top-full left-0 w-full z-10
        md:static md:flex md:flex-row md:justify-end md:gap-6 md:py-0 md:px-0 md:bg-transparent
        ${isOpen ? 'flex' : 'hidden'}`}
    >
      <a href="/" className="text-[#1EBE91]">Home</a>
      <a href="/Formulario" className="hover:text-[#1EBE91] transition">About</a>
      <a href="#contact" className="hover:text-[#1EBE91] transition">Contact</a>
    </nav>
  )
}
