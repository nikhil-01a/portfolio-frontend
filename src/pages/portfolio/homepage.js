import Header from '../../components/portfolio/Header/Header'
import HeroSection from '../../components/portfolio/HeroSection/HeroSection'
import About from '../../components/portfolio/About/About'
import ReactLenis from 'lenis/dist/lenis-react'
import Experience from '../../components/portfolio/Experience/Experience'
import HeroText from '../../components/portfolio/HeroText/HeroText'
import TagLine from '../../components/portfolio/Tagline/TagLine'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Homepage() {
  return (
    <div className=" text-white ">
      <ReactLenis root>
        <Header />
        <motion.div
          className="sticky top-0 sm:pr-[8rem] sm:pl-[8rem] md:pr-[13rem] md:pl-[13rem] lg:pr-[18rem] lg:pl-[18rem] xl:pr-[23rem] xl:pl-[23rem] 2xl:pr-[27rem] 2xl:pl-[27rem]"
          style={useElementOneTransform()}
        >
          <HeroText />
        </motion.div>

        <div className="relative w-full flex flex-col justify-center sm:pr-20 md:pr-40 lg:pr-60 xl:pr-80 2xl:pr-96 sm:pl-20 md:pl-40 lg:pl-60 xl:pl-80 2xl:pl-96">
          <HeroSection {...useElementTwoTransform()} />
        </div>
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
