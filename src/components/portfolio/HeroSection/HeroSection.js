import profilePic from '../../../assets/IMG_6768.jpg'
import './HeroSection.css'
import { motion } from 'framer-motion'

export default function HeroSection({ opacity, scale }) {
  return (
    <div className="relative w-full flex flex-col justify-center sm:pr-20 md:pr-40 lg:pr-60 xl:pr-80 2xl:pr-96 sm:pl-20 md:pl-40 lg:pl-60 xl:pl-80 2xl:pl-96">
      <div className="flex-1 z-10 pl-12 pr-12 flex justify-center">
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
    </div>
  )
}
