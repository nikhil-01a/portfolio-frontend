import { motion, useScroll, useTransform } from 'framer-motion'
import bgVideo from '../../../assets/BiehleCloudLights.mp4'

export default function TagLine() {
  const { scrollY } = useScroll()
  const scale = useTransform(scrollY, [1550, 1600, 1750, 2950], [1, 1, 1, 2])
  const opacity = useTransform(scrollY, [1850, 2150, 2850], [0, 1, 0])

  return (
    <motion.div className="sticky top-0 overflow-hidden w-full h-screen flex justify-center items-center hero-text" style={{}}>
      {/* Video Background */}
      <motion.video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover z-0" style={{ scale, opacity }}>
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </motion.video>

      {/* Tagline Text */}
      <motion.h1 className="relative z-10 text-[1.6rem] 1xl:text-[1.80rem] 2xl:text-[2rem]" style={useVideoTransform()}>
        Let’s create something meaningful together
      </motion.h1>
    </motion.div>
  )
}

const useVideoTransform = () => {
  const { scrollY } = useScroll()
  const scale = useTransform(scrollY, [1100, 1200], [1, 1])
  const opacity = useTransform(scrollY, [1550, 1850, 2150, 2850], [0, 1, 1, 0])
  return { opacity, scale }
}
