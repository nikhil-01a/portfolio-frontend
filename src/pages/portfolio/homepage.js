import Header from '../../components/portfolio/Header/Header'
import HeroSection from '../../components/portfolio/HeroSection/HeroSection'

export default function Homepage() {
  return (
    <div className=" text-white ">
      <Header />
      <div className="flex flex-col items-center">
        <HeroSection />
        <div className="h-screen"></div>
        {/* About */}
        {/* Experience */}
        {/* Projects */}
        {/* Skills */}
        {/* Contact Me*/}
      </div>
    </div>
  )
}
