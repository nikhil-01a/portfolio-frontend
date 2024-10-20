import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'
import bgVideo from '../../../assets/BiehleCloudLights.mp4'

export default function TagLine() {
  const { scrollY } = useScroll()

  const [scHeight, setScHeight] = useState(0)

  useEffect(() => {
    //Initial screen size set
    const initialSetHeight = () => {
      setScHeight(window.innerHeight)
    }
    initialSetHeight()

    //Set initialSetHeight function to listen to screen resize event
    window.addEventListener('resize', initialSetHeight)

    //Clean up after the component is unmounted
    return () => {
      window.removeEventListener('resize', initialSetHeight)
    }
  }, [])

  const scale = useTransform(scrollY, [scHeight * 2, scHeight * 4], [1, 2])
  const opacity = useTransform(scrollY, [scHeight * 2.1, scHeight * 2.8, scHeight * 3.5, scHeight * 4], [0, 1, 1, 0])

  return (
    <motion.div className="sticky top-0 overflow-hidden w-full h-screen flex justify-center items-center hero-text" style={{}}>
      {/* Video Background */}
      <motion.video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover z-0" style={{ scale, opacity }}>
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </motion.video>

      {/* Tagline Text */}
      <motion.h1 className="relative z-50 text-[1.6rem] 1xl:text-[1.80rem] 2xl:text-[2rem]" style={useTagTransform(scHeight)}>
        Let’s create something meaningful together
      </motion.h1>
    </motion.div>
  )
}

const useTagTransform = (scHeight) => {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [scHeight * 1.6, scHeight * 2], [400, 0])
  const opacity = useTransform(scrollY, [scHeight * 1.8, scHeight * 2, scHeight * 3.5, scHeight * 4], [0, 1, 1, 0])
  return { opacity, y }
}
