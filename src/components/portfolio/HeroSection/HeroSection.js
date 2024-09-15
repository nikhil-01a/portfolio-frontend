import profilePic from '../../../assets/IMG_6768.jpg'
import './HeroSection.css'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function HeroSection() {
  return (
    <div className="relative w-full flex flex-col justify-center pt-32 xs:pt-16 sm:pr-20 md:pr-40 lg:pr-60 xl:pr-96 sm:pl-20 md:pl-40 lg:pl-60 xl:pl-96">
      <TopText />
      <BottomImage />
    </div>
  )
}

const TopText = () => {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 80, 450], [1, 1, 0])
  const scale = useTransform(scrollY, [0, 40, 450], [1, 1, 0.7])
  return (
    <motion.div className="flex-1 sticky top-28 xs:top-12 pl-12 pr-12 md:p-0" style={{ opacity, scale }}>
      <div className="flex flex-col items-center">
        <h1 className="hero-text xs:pt-8 pb-8 text-[2.9rem] leading-[0.6rem] xs:text-5xl xs:leading-[1rem] lg:text-[3.25rem] 1xl:text-[5.5rem] 1xl:leading-[2.6rem] 2xl:text-[6rem] 2xl:leading-[3rem]">
          {AnimatedText('Alexandra', 0.05, 0.1)}
        </h1>
        <h1 className="hero-text pb-12 text-[2.9rem] leading-[0.6rem] xs:text-5xl xs:leading-[1rem] lg:text-[3.25rem] 1xl:text-[5.5rem] 1xl:leading-[2.6rem] 2xl:text-[6rem] 2xl:leading-[3rem]">
          {AnimatedText('Biehle', 0.05, 0.2)}
        </h1>
      </div>
      <div>
        <div className="flex flex-col items-center custom-spacing">
          <h1 className="hero-text text-[0.7rem] xs:text-lg 2xl:text-xl ">{AnimatedText('Graphic Designer', 0.03, 0.2)}</h1>
          <h1 className="hero-text mb-10 2xl:mb-10 text-[0.7rem] xs:text-lg 2xl:text-xl">{AnimatedText('Outreach Coordinator', 0.03, 0.2)}</h1>
        </div>
      </div>
      <div className="flex flex-col items-start">
        <div className="flex flex-row items-center justify-between w-full custom-spacing">
          <div>
            <h1 className="hero-text text-[0.45rem] xs:text-[0.75rem] 2xl:text-sm pl-4 lg:pl-20 xl:pl-28 1xl:pl-36 2xl:pl-48">{AnimatedText('Currently Designing At', 0.03)}</h1>
            <h1 className="hero-text text-[0.45rem] xs:text-[0.75rem] 2xl:text-sm pl-4 lg:pl-20 xl:pl-28 1xl:pl-36 2xl:pl-48">{AnimatedText('Marshal Retail Group', 0.03)}</h1>
          </div>
          <h1 className="hero-text text-[0.45rem] xs:text-[0.75rem] 2xl:text-sm pr-4 lg:pr-20 xl:pr-28 1xl:pr-36 2xl:pr-48">{AnimatedText('(2023 - PRESENT)', 0.03, 0.3)}</h1>
        </div>
      </div>
    </motion.div>
  )
}

const BottomImage = () => {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 250, 450, 850], [0.4, 1, 1, 0])
  const scale = useTransform(scrollY, [0, 350, 450, 850], [0.8, 1, 1, 0.9])
  return (
    <div className="flex-1 z-10 pl-12 pr-12 xs:pt-2 flex justify-center">
      <div className="lg:pl-16 lg:pr-16 1xl:pl-24 1xl:pr-24 2xl:pl-36 2xl:pr-36">
        <motion.img
          className="rounded-3xl "
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 0.4, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          src={profilePic}
          alt="Alexandra Biehle"
          style={{ willChange: 'opacity, transform', opacity, scale }}
        />
      </div>
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
