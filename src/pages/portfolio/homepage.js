import Header from '../../components/portfolio/Header'
import HeroSection from '../../components/portfolio/HeroSection'

export default function Homepage() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen">
      {/* Header: Done and added above all routes in App.js */}
      <Header homepage={true} />

      {/* Hero */}
      <HeroSection />
      {/* About */}
      {/* Experience */}
      {/* Skills */}
      {/* Projects */}
      {/* Contact Me*/}
    </div>
  )
}
