import { motion } from 'framer-motion'
import AlexLogo from '../../../assets/AlexLogo2.png'

export default function HeroText() {
  return (
    <div>
      <div className="flex flex-col items-center">
        <motion.img className="rounded-3xl" src={AlexLogo} alt="Alexandra Biehle" style={{ scale: 0.7 }} />
      </div>
      <div></div>
    </div>
  )
}

const AnimatedText = (text, speed, delay) => {
  return (
    <motion.span initial="hidden" animate="visible" transition={{ staggerChildren: speed - 0.02, delayChildren: delay }}>
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          className="inline-block"
          variants={{
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
            },
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.span>
  )
}
