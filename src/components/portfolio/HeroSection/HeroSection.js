import AlexLogo from '../../../assets/AlexLogo.png'
import './HeroSection.css'
import { motion, useScroll, useTransform } from 'framer-motion'
import TextLogo from '../../../assets/LogoText.png'

export default function HeroSection() {
  return (
    <div className="relative h-screen flex flex-col justify-center items-center" style={{ marginTop: '-10vh' }}>
      <motion.div className="flex justify-center" style={useElementOneTransform()}>
        <motion.img className="max-w-md" src={AlexLogo} alt="Alexandra Biehle" />
      </motion.div>
      <motion.div className="flex justify-center pt-[4rem] pl-[4rem] pr-[4rem]" style={useLogoTransform()}>
        <motion.img src={TextLogo} alt="Text Logo" />
      </motion.div>
    </div>
  )
}

const useElementOneTransform = () => {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 80, 100], [1, 1, 0])
  const scale = useTransform(scrollY, [0, 40, 450], [1, 1, 0.7])
  return { opacity, scale }
}

const useLogoTransform = () => {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 80, 100], [1, 1, 0])
  const scale = useTransform(scrollY, [0, 40, 450], [1, 1, 0.7])
  const y = useTransform(scrollY, [0, 40, 450], [0, 100, 500])

  return { opacity, scale, y }
}
