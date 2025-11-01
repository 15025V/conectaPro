'use client'

import ChecklistComparison from '../Components/CheckList/ChecklistComparison'
import Footer from '../Components/Footer/Footer'
import NavBar from '../Components/NavBar/NavBar'
import IntroSection from '../Components/Sections/Hero/IntroSection'
import ProfesionalSection from '../Components/Sections/Profesional/ProfesionalSection'
import SplitIntroSection from '../Components/Split/SplitIntroSection'

// import SplitIntroBlock from '../Components/SplitIntroBlock'



export default function Home() {
 
  return (
    <div className="flex flex-col min-h-screen bg-moon text-petrol">
      {/* Header */}
      <NavBar />
      {/* Hero / Intro */}
      <IntroSection />
      {/* Grid + Sidebar */}
      <ProfesionalSection />
      {/* <SplitIntroBlock /> */}
      <SplitIntroSection />
      <ChecklistComparison />
      
      <Footer />
      
     
    
    </div>
  )
}
