import profilePic from '../../../assets/IMG_6768.jpg'
import './HeroSection.css'
import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <div className="ml-8 mr-8 sm:ml-20 sm:mr-20 md:ml-40 md:mr-40 lg:ml-60 lg:mr-60 xl:ml-96 xl:mr-96 2xl:ml-60">
      <div className="flex flex-col 2xl:flex-row">
        <div className="flex-1 flex flex-col justify-center 2xl:pr-20">
          <div className="flex flex-col items-center">
            <h1 className="hero-text mt-8 mb-8 text-3xl leading-[0rem] xs:text-5xl xs:leading-[1rem] lg:text-6xl lg:leading-[1.5rem]"> {AnimatedText('Alexandra', 0.05, 0.1)} </h1>
            <h1 className="hero-text mb-16 xs:mb-16 2xl:mb-20 text-3xl leading-[0rem] xs:text-5xl xs:leading-[1rem] lg:text-6xl lg:leading-[1.5rem]">{AnimatedText('Biehle', 0.05, 0.2)}</h1>
          </div>
          <div className="flex flex-col items-start 2xl:items-start xs:ml-12 xl:ml-10">
            <div>
              <div className="flex flex-col items-start custom-spacing">
                <h1 className="hero-text text-base xs:text-xl lg:text-2xl">{AnimatedText('- Graphic Designer', 0.03)}</h1>
                <h1 className="hero-text mb-12 text-base xs:text-xl lg:text-2xl xs:mb-16 2xl:mb-20">{AnimatedText('- Outreach Coordinator', 0.03)}</h1>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start">
            <div className="flex flex-row mb-6 items-center justify-between w-full custom-spacing">
              <div>
                <h1 className="hero-text text-xs text-[0.6rem] xs:text-lg">{AnimatedText('Currently Designing At', 0.03)}</h1>
                <h1 className="hero-text text-xs text-[0.6rem] xs:text-lg">{AnimatedText('Marshal Retail Group', 0.03)}</h1>
              </div>
              <h1 className="hero-text text-xs text-[0.6rem] xs:text-lg">{AnimatedText('(2023 - PRESENT)', 0.03, 0.3)}</h1>
            </div>
          </div>
        </div>
        <div className="flex-1 pt-5 xl2:pl-5">
          <motion.img
            className="rounded-3xl"
            initial={{ opacity: 0, x: 0, y: 50 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
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
