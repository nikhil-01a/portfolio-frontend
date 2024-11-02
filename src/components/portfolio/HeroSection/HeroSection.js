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

  const opacity = useTransform(scrollY, [scHeight * 0.65, scHeight * 0.85], [1, 0])
  const y = useTransform(scrollY, [scHeight * 0.65, scHeight * 0.85], [0, -600])

  return (
    <motion.div className="sticky top-0 h-screen flex flex-col justify-center items-center" style={{ opacity, y }}>
      <motion.div className="flex justify-center pb-4" style={useElementOneTransform()}>
        <motion.img className="max-w-md" src={AlexLogo} alt="Alexandra Biehle" />
      </motion.div>
      <HeroText />
    </motion.div>
  )
}

const useElementOneTransform = () => {
  const { scrollY } = useScroll()
  const scale = useTransform(scrollY, [0, 40, 150], [1, 1, 0.7])
  const opacity = useTransform(scrollY, [0, 40, 150], [1, 1, 0.3])
  return { scale, opacity }
}
