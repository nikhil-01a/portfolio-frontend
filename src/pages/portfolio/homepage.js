import Header from '../../components/portfolio/Header/Header'
import HeroSection from '../../components/portfolio/HeroSection/HeroSection'

export default function Homepage() {
  return (
    <div className=" text-white ">
      {/* Header: Done and added above all routes in App.js */}
      <Header />

      <div className="flex flex-col items-center">
        {/* Hero */}
        <HeroSection />
        {/* About */}
        {/* Experience */}
        {/* Projects */}
        {/* Skills */}
        {/* Contact Me*/}
      </div>
    </div>
  )
}
