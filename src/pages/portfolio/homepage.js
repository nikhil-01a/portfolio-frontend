import Header from '../../components/portfolio/Header/Header'
import HeroSection from '../../components/portfolio/HeroSection/HeroSection'
import About from '../../components/portfolio/About/About'
import ReactLenis from 'lenis/dist/lenis-react'
import Experience from '../../components/portfolio/Experience/Experience'
import HeroText from '../../components/portfolio/HeroText/HeroText'
import TagLine from '../../components/portfolio/Tagline/TagLine'

export default function Homepage() {
  return (
    <div className=" text-white ">
      <ReactLenis root>
        <Header />
        <HeroText />
        <HeroSection />
        <About />
        <TagLine />
        <Experience />
        <div className="h-screen"></div>
        {/* Projects */}
        {/* Skills */}
        {/* Contact Me*/}
      </ReactLenis>
    </div>
  )
}
