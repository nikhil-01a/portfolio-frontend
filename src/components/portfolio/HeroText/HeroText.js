import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function HeroText() {
  const [scHeight, setScHeight] = useState(0)

  useEffect(() => {
    const handleResize = () => {
      setScHeight(window.innerHeight)
    }
    handleResize()

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <motion.div className=" flex flex-col justify-center items-center">
      <motion.h1 className="hero-text text-[2.9rem] xs:text-[3.5rem] xl:text-[6.2rem] 1xl:text-[7.3rem] 2xl:text-[8rem]">{AnimatedText(scHeight)}</motion.h1>
    </motion.div>
  )
}

const AnimatedText = (scHeight) => {
  const start = scHeight * 0.07
  return (
    <div className="text-[3.8rem] ">
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
      <motion.span style={useCharacterTransform(start + scHeight * 0.48, scHeight)} className="inline-block">
        E
      </motion.span>
      <motion.span style={useCharacterTransform(start + scHeight * 0.52, scHeight)} className="inline-block">
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
