import Header from '../../components/portfolio/Header'
import HeroSection from '../../components/portfolio/HeroSection'

export default function Homepage() {
  return (
    <div className=" text-white ">
      {/* Header: Done and added above all routes in App.js */}
      <Header homepage={true} />

      <div className="flex flex-col items-center">
        {/* Hero */}
        <HeroSection />
        {/* About */}
        {/* Experience */}
        {/* Skills */}
        {/* Projects */}
        {/* Contact Me*/}
      </div>
    </div>
  )
}
