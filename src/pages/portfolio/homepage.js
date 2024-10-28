import Header from '../../components/portfolio/Header/Header'
import HeroSection from '../../components/portfolio/HeroSection/HeroSection'
import About from '../../components/portfolio/About/About'
import ReactLenis from 'lenis/dist/lenis-react'
import Experience from '../../components/portfolio/Experience/Experience'
import TagLine from '../../components/portfolio/Tagline/TagLine'
import { motion, useScroll, useTransform } from 'framer-motion'
import bgVideo from '../../assets/BiehleCloudLights.mp4'
import HeroText from '../../components/portfolio/HeroText/HeroText'

export default function Homepage() {
  return (
    <div className=" text-white ">
      <ReactLenis root>
        <motion.video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover z-0" style={useVideoTransform()}>
          <source src={bgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </motion.video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] to-[#1a1a1a] opacity-60 z-1"></div>
        <Header />
        <HeroSection />
        <HeroText />
        <About />
        <TagLine />
        <div className="h-[210vh]"></div>
        <Experience />

        <div className="h-screen"></div>

        <div className="h-screen"></div>

        <div className="h-screen"></div>

        {/* TODO: Replace Logo with text*/}
        {/* Projects */}
        {/* Skills */}
        {/* Contact Me*/}
      </ReactLenis>
    </div>
  )
}

const useVideoTransform = () => {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 20], [1, 0])
  const scale = useTransform(scrollY, [350, 450, 600, 650], [1, 1, 1, 1])
  return { opacity, scale }
}
