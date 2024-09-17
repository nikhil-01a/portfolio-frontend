import Header from '../../components/portfolio/Header/Header'
import HeroSection from '../../components/portfolio/HeroSection/HeroSection'
import About from '../../components/portfolio/About/About'
import ReactLenis from 'lenis/dist/lenis-react'
import Experience from '../../components/portfolio/Experience/Experience'
import HeroText from '../../components/portfolio/HeroText/HeroText'
import TagLine from '../../components/portfolio/Tagline/TagLine'
import { useScroll, useTransform } from 'framer-motion'

export default function Homepage() {
  const transformOne = useElementOneTransform()
  const transformTwo = useElementTwoTransform()
  console.log(transformOne)
  console.log(transformTwo)
  return (
    <div className=" text-white ">
      <ReactLenis root>
        <Header />
        <HeroText {...transformOne} />
        <HeroSection {...transformTwo} />
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

const useElementOneTransform = () => {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 80, 350], [1, 1, 0])
  const scale = useTransform(scrollY, [0, 40, 450], [1, 1, 0.7])
  return { opacity, scale }
}

const useElementTwoTransform = () => {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 250, 550, 1150], [0.4, 1, 1, 0])
  const scale = useTransform(scrollY, [0, 250, 650, 950], [0.8, 1, 1, 0.8])
  return { opacity, scale }
}
