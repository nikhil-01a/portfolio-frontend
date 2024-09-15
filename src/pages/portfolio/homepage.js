import Header from '../../components/portfolio/Header/Header'
import HeroSection from '../../components/portfolio/HeroSection/HeroSection'
import About from '../../components/portfolio/About/About'
import ReactLenis from 'lenis/dist/lenis-react'

export default function Homepage() {
  return (
    <div className=" text-white ">
      <ReactLenis root>
        <Header />
        <HeroSection />
        <About />
        <div className="h-screen"></div>
        {/* About */}
        {/* Experience */}
        {/* Projects */}
        {/* Skills */}
        {/* Contact Me*/}
      </ReactLenis>
    </div>
  )
}
