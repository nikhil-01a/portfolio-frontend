import profilePic from '../../../assets/IMG_6768.jpg'
import './HeroSection.css'
import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <div className="relative w-full flex flex-col justify-center sm:pr-20 md:pr-40 lg:pr-60 xl:pr-96 sm:pl-20 md:pl-40 lg:pl-60 xl:pl-96">
      <div className="flex-1 sticky top-32 pl-12 pr-12 pt-5">
        <div className="flex flex-col items-center">
          <h1 className="hero-text pt-8 pb-8 text-3xl leading-[0rem] xs:text-5xl xs:leading-[1rem] lg:text-6xl lg:leading-[1.5rem]"> {AnimatedText('Alexandra', 0.05, 0.1)} </h1>
          <h1 className="hero-text pb-12 text-3xl leading-[0rem] xs:text-5xl xs:leading-[1rem] lg:text-6xl lg:leading-[1.5rem]">{AnimatedText('Biehle', 0.05, 0.2)}</h1>
        </div>
        <div>
          <div className="flex flex-col items-start custom-spacing">
            <h1 className="hero-text text-base xs:text-lg lg:text-xl">{AnimatedText('- Graphic Designer', 0.03)}</h1>
            <h1 className="hero-text mb-8 xs:mb-10 text-base xs:text-lg lg:text-xl">{AnimatedText('- Outreach Coordinator', 0.03)}</h1>
          </div>
        </div>
        <div className="flex flex-col items-start">
          <div className="flex flex-row items-center justify-between w-full custom-spacing">
            <div>
              <h1 className="hero-text text-xs text-[0.6rem] xs:text-sm">{AnimatedText('Currently Designing At', 0.03)}</h1>
              <h1 className="hero-text text-xs text-[0.6rem] xs:text-sm">{AnimatedText('Marshal Retail Group', 0.03)}</h1>
            </div>
            <h1 className="hero-text text-xs text-[0.6rem] xs:text-sm">{AnimatedText('(2023 - PRESENT)', 0.03, 0.3)}</h1>
          </div>
        </div>
      </div>
      <div className="flex-1 z-10 pl-12 pr-12 pt-8 flex justify-center">
        <div className="xs:pl-12 xs:pr-12">
          <motion.img
            className="rounded-3xl "
            initial={{ opacity: 0, x: 0, y: 0 }}
            animate={{ opacity: 1, x: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            src={profilePic}
            alt="Alexandra Biehle"
          />
        </div>
      </div>
    </div>
  )
}

export const AnimatedText = (text, speed, delay) => {
  return (
    <motion.span initial="hidden" animate="visible" transition={{ staggerChildren: speed - 0.02, delayChildren: delay }}>
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          className="inline-block"
          variants={{
            hidden: {
              opacity: 0,
              x: 20,
            },
            visible: {
              opacity: 1,
              x: 0,
            },
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.span>
  )
}
