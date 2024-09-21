import AlexLogo from '../../../assets/AlexLogo2.png'
import './HeroSection.css'
import { motion } from 'framer-motion'

export default function HeroSection({ opacity, scale }) {
  return (
    <div className="flex-1 z-10 pl-12 pr-12 flex justify-center">
      <div className="lg:pl-16 lg:pr-16 1xl:pl-24 1xl:pr-24 2xl:pl-36 2xl:pr-36">
        <motion.img className="rounded-3xl " src={AlexLogo} alt="Alexandra Biehle" style={{ willChange: 'opacity, transform', opacity, scale }} />
      </div>
    </div>
  )
}
