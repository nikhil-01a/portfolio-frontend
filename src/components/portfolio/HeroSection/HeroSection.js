import AlexLogo from '../../../assets/AlexLogo.png'
import './HeroSection.css'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function HeroSection() {
  return (
    <motion.div className="sticky top-0 pt-[6rem] flex justify-center" style={useElementOneTransform()}>
      <div className="max-w-2xl pl-[6rem] pr-[6rem]">
        <motion.img className="max-w-full" src={AlexLogo} alt="Alexandra Biehle" />
      </div>
    </motion.div>
  )
}

const useElementOneTransform = () => {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 80, 100], [1, 1, 0])
  const scale = useTransform(scrollY, [0, 40, 450], [1, 1, 0.7])
  return { opacity, scale }
}
