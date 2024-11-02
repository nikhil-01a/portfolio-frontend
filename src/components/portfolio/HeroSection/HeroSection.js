import AlexLogo from '../../../assets/AlexLogo2.png'
import HeroText from '../HeroText/HeroText'
import './HeroSection.css'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function HeroSection() {
  const { scrollY } = useScroll()
  const [scHeight, setScHeight] = useState(0)

  useEffect(() => {
    const handleResize = () => {
      setScHeight(window.innerHeight)
    }
    handleResize()

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const opacity = useTransform(scrollY, [scHeight * 0.65, scHeight * 0.75], [1, 0])
  const y = useTransform(scrollY, [scHeight * 0.65, scHeight * 0.78], [0, -scHeight * 0.13])

  return (
    <motion.div className="sticky top-0 h-screen flex flex-col justify-center items-center" style={{ opacity, y }}>
      <motion.div className="flex justify-center pb-4" style={useElementOneTransform(scHeight)}>
        <motion.img className="max-w-md" src={AlexLogo} alt="Alexandra Biehle" />
      </motion.div>
      <HeroText />
    </motion.div>
  )
}

const useElementOneTransform = (scHeight) => {
  const { scrollY } = useScroll()
  const scale = useTransform(scrollY, [scHeight * 0.053, scHeight * 0.2], [1, 0.7])
  const opacity = useTransform(scrollY, [scHeight * 0.053, scHeight * 0.2], [1, 0.3])
  return { scale, opacity }
}
