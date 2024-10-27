import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function HeroText() {
  const [isVisible, setIsVisible] = useState(true)
  const { scrollY } = useScroll()
  const [scHeight, setScHeight] = useState(0)

  useEffect(() => {
    const handleResize = () => {
      setScHeight(window.innerHeight)
    }
    handleResize()

    window.addEventListener('resize', handleResize)

    return window.removeEventListener('resize', handleResize)
  }, [])

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest > scHeight && isVisible) setIsVisible(false)
    else if (latest <= scHeight && !isVisible) setIsVisible(true)
  })

  return (
    <motion.div className="sticky top-0 h-screen flex flex-col justify-center items-center" style={{ display: isVisible ? 'flex' : 'none' }}>
      <motion.h1 style={useHeroTextTransform(scHeight)} className="hero-text text-[2.9rem] xs:text-[3.5rem] xl:text-[6.2rem] 1xl:text-[7.3rem] 2xl:text-[8rem]">
        {AnimatedText(scHeight)}
      </motion.h1>
    </motion.div>
  )
}

const useHeroTextTransform = (scHeight) => {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [scHeight * 0.01, scHeight * 0.9, scHeight], [1, 1, 0])
  return { opacity }
}

const AnimatedText = (scHeight) => {
  const start = scHeight * 0.2
  return (
    <div className="text-7xl ">
      <motion.span style={useCharacterTransform(start, scHeight)} className="inline-block">
        V
      </motion.span>
      <motion.span style={useCharacterTransform(start + scHeight * 0.04, scHeight)} className="inline-block">
        I
      </motion.span>
      <motion.span style={useCharacterTransform(start + scHeight * 0.08, scHeight)} className="inline-block">
        S
      </motion.span>
      <motion.span style={useCharacterTransform(start + scHeight * 0.12, scHeight)} className="inline-block">
        U
      </motion.span>
      <motion.span style={useCharacterTransform(start + scHeight * 0.16, scHeight)} className="inline-block">
        A
      </motion.span>
      <motion.span style={useCharacterTransform(start + scHeight * 0.2, scHeight)} className="inline-block">
        L
      </motion.span>
      <motion.span style={useCharacterTransform(start, scHeight)} className="inline-block">
        {'\u00A0'}
      </motion.span>
      <motion.span style={useCharacterTransform(start + scHeight * 0.24, scHeight)} className="inline-block">
        D
      </motion.span>
      <motion.span style={useCharacterTransform(start + scHeight * 0.28, scHeight)} className="inline-block">
        E
      </motion.span>
      <motion.span style={useCharacterTransform(start + scHeight * 0.32, scHeight)} className="inline-block">
        S
      </motion.span>
      <motion.span style={useCharacterTransform(start + scHeight * 0.36, scHeight)} className="inline-block">
        I
      </motion.span>
      <motion.span style={useCharacterTransform(start + scHeight * 0.4, scHeight)} className="inline-block">
        G
      </motion.span>
      <motion.span style={useCharacterTransform(start + scHeight * 0.44, scHeight)} className="inline-block">
        N
      </motion.span>
      <motion.span style={useCharacterTransform(start + scHeight * 0.58, scHeight)} className="inline-block">
        E
      </motion.span>
      <motion.span style={useCharacterTransform(start + scHeight * 0.62, scHeight)} className="inline-block">
        R
      </motion.span>
    </div>
  )
}

const useCharacterTransform = (start, scHeight) => {
  const end = start + scHeight * 0.04
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [start, end], [0, 1])
  return { opacity }
}
