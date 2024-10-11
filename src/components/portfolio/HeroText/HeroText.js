import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function HeroText() {
  return (
    <motion.div className="sticky top-[10rem] flex justify-center" style={useVisualDesigner()}>
      <h1 className="hero-text text-[2.9rem] leading-[0.6rem] xs:text-[3.5rem] xs:leading-[2rem]  lg:leading-[1rem] xl:text-[6.2rem] xl:leading-[3rem] 1xl:text-[7.3rem] 1xl:leading-[4rem] 2xl:text-[8rem] 2xl:leading-[4.55rem]">
        {AnimatedText()}
      </h1>
    </motion.div>
  )
}

const useVisualDesigner = () => {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 100, 400, 650], [0, 1, 1, 0])
  const scale = useTransform(scrollY, [500, 750], [1, 0.5])
  return { opacity, scale }
}

const AnimatedText = () => {
  // Block to refer
  const containerRef = useRef(null)

  // Split the text into singular characters
  const characters = 48

  return (
    <div ref={containerRef} className="flex text-5xl items-center justify-center">
      <div>
        <motion.span style={useCharacterTransform(containerRef, 0, characters)} className="inline-block">
          V
        </motion.span>
        <motion.span style={useCharacterTransform(containerRef, 1, characters)} className="inline-block">
          I
        </motion.span>
        <motion.span style={useCharacterTransform(containerRef, 2, characters)} className="inline-block">
          S
        </motion.span>
        <motion.span style={useCharacterTransform(containerRef, 3, characters)} className="inline-block">
          U
        </motion.span>
        <motion.span style={useCharacterTransform(containerRef, 4, characters)} className="inline-block">
          A
        </motion.span>
        <motion.span style={useCharacterTransform(containerRef, 5, characters)} className="inline-block">
          L
        </motion.span>
        <motion.span style={useCharacterTransform(containerRef, 6, characters)} className="inline-block">
          {'\u00A0'}
        </motion.span>
        <motion.span style={useCharacterTransform(containerRef, 7, characters)} className="inline-block">
          D
        </motion.span>
        <motion.span style={useCharacterTransform(containerRef, 8, characters)} className="inline-block">
          E
        </motion.span>
        <motion.span style={useCharacterTransform(containerRef, 9, characters)} className="inline-block">
          S
        </motion.span>
        <motion.span style={useCharacterTransform(containerRef, 10, characters)} className="inline-block">
          I
        </motion.span>
        <motion.span style={useCharacterTransform(containerRef, 11, characters)} className="inline-block">
          G
        </motion.span>
        <motion.span style={useCharacterTransform(containerRef, 12, characters)} className="inline-block">
          N
        </motion.span>
        <motion.span style={useCharacterTransform(containerRef, 13, characters)} className="inline-block">
          E
        </motion.span>
        <motion.span style={useCharacterTransform(containerRef, 14, characters)} className="inline-block">
          R
        </motion.span>
      </div>
    </div>
  )
}

const useCharacterTransform = (containerRef, index, characters) => {
  index = index + 28
  const start = index / characters // Calculate when each letter should appear
  const end = start + 1 / characters // Calculate when each letter should disappear
  // Setup Scroll Y Progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end center'],
  })
  const opacity = useTransform(scrollYProgress, [start, end], [0, 1])
  return { opacity }
}
