import AlexLogo from '../../../assets/AlexLogo2.png'
import './HeroSection.css'
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion'
import { useState } from 'react'

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(true)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest > 100 && isVisible) setIsVisible(false)
    else if (latest <= 100 && !isVisible) setIsVisible(true)
  })

  return (
    <div className="relative h-screen flex flex-col justify-center items-center" style={{ marginTop: '-7vh', display: isVisible ? 'flex' : 'none' }}>
      <motion.div className="flex justify-center" style={useElementOneTransform()}>
        <motion.img className="max-w-md" src={AlexLogo} alt="Alexandra Biehle" />
      </motion.div>
    </div>
  )
}

const useElementOneTransform = () => {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 80, 100], [1, 1, 0])
  const scale = useTransform(scrollY, [0, 40, 450], [1, 1, 0.7])
  return { opacity, scale }
}
