import { motion } from 'framer-motion'

export default function HeroText() {
  return (
    <div>
      <div className="flex flex-col items-center">
        <h1 className="hero-text xs:pt-8 pb-8 text-[2.9rem] leading-[0.6rem] xs:text-[3.5rem] xs:leading-[2rem]  lg:leading-[1rem] xl:text-[6.2rem] xl:leading-[3rem] 1xl:text-[7.3rem] 1xl:leading-[4rem] 2xl:text-[8rem] 2xl:leading-[4.55rem]">
          {AnimatedText('Alexandra', 0.05, 0.1)}
        </h1>
        <h1 className="hero-text pb-16 text-[2.9rem] leading-[0.6rem] xs:text-[3.5rem] xs:leading-[2rem] lg:leading-[1rem] xl:text-[6.2rem] xl:leading-[3rem] 1xl:text-[7.3rem] 1xl:leading-[4rem] 2xl:text-[8rem] 2xl:leading-[4.55rem]">
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
            <h1 className="hero-text text-[0.45rem] xs:text-[0.75rem] 2xl:text-sm pl-4 lg:pl-20 xl:pl-28 1xl:pl-36 2xl:pl-48">{AnimatedText('Marshall Retail Group', 0.03)}</h1>
          </div>
          <h1 className="hero-text text-[0.45rem] xs:text-[0.75rem] 2xl:text-sm pr-4 lg:pr-20 xl:pr-28 1xl:pr-36 2xl:pr-48">{AnimatedText('(2023 - PRESENT)', 0.03, 0.3)}</h1>
        </div>
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
