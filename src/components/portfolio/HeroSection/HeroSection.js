import AlexLogo from '../../../assets/AlexLogo.png'
import './HeroSection.css'
import { motion, useScroll, useTransform } from 'framer-motion'
import TextLogo from '../../../assets/LogoText.png'

export default function HeroSection() {
  return (
    <div>
      <motion.div className="sticky top-0 pt-[6rem] flex justify-center" style={useElementOneTransform()}>
        <div className="max-w-2xl pl-[6rem] pr-[6rem]">
          <motion.img className="max-w-full" src={AlexLogo} alt="Alexandra Biehle" />
        </div>
      </motion.div>
      <motion.div className="relative pt-[4rem] pl-[6rem] pr-[8rem] flex justify-center" style={useLogoTransform()}>
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
