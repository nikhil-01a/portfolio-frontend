import { motion, useScroll, useTransform } from 'framer-motion'

export default function HeroText() {
  return (
    <motion.div className="relative h-screen flex flex-col justify-center items-center">
      <motion.h1 style={useHeroTextTransform()} className="hero-text text-[2.9rem] xs:text-[3.5rem] xl:text-[6.2rem] 1xl:text-[7.3rem] 2xl:text-[8rem]">
        {AnimatedText()}
      </motion.h1>
    </motion.div>
  )
}

const useHeroTextTransform = () => {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [100, 400, 500], [1, 1, 0])
  const y = -150
  return { opacity, y }
}

const AnimatedText = () => {
  const start = 100
  return (
    <div className="text-7xl ">
      <motion.span style={useCharacterTransform(start)} className="inline-block">
        V
      </motion.span>
      <motion.span style={useCharacterTransform(start + 20)} className="inline-block">
        I
      </motion.span>
      <motion.span style={useCharacterTransform(start + 40)} className="inline-block">
        S
      </motion.span>
      <motion.span style={useCharacterTransform(start + 60)} className="inline-block">
        U
      </motion.span>
      <motion.span style={useCharacterTransform(start + 80)} className="inline-block">
        A
      </motion.span>
      <motion.span style={useCharacterTransform(start + 100)} className="inline-block">
        L
      </motion.span>
      <motion.span style={useCharacterTransform(start + 120)} className="inline-block">
        {'\u00A0'}
      </motion.span>
      <motion.span style={useCharacterTransform(start + 140)} className="inline-block">
        D
      </motion.span>
      <motion.span style={useCharacterTransform(start + 160)} className="inline-block">
        E
      </motion.span>
      <motion.span style={useCharacterTransform(start + 180)} className="inline-block">
        S
      </motion.span>
      <motion.span style={useCharacterTransform(start + 200)} className="inline-block">
        I
      </motion.span>
      <motion.span style={useCharacterTransform(start + 220)} className="inline-block">
        G
      </motion.span>
      <motion.span style={useCharacterTransform(start + 240)} className="inline-block">
        N
      </motion.span>
      <motion.span style={useCharacterTransform(start + 260)} className="inline-block">
        E
      </motion.span>
      <motion.span style={useCharacterTransform(start + 280)} className="inline-block">
        R
      </motion.span>
    </div>
  )
}

const useCharacterTransform = (start) => {
  const end = start + 10
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [start, end], [0, 1])
  return { opacity }
}
