import { motion, useScroll, useTransform } from 'framer-motion'
import TextLogo from '../../../assets/LogoText.png'

export default function HeroTextLogo() {
  return (
    <motion.div className="relative pt-[4rem] pl-[6rem] pr-[8rem] flex justify-center" style={useLogoTransform()}>
      <motion.img src={TextLogo} alt="Text Logo" />
    </motion.div>
  )
}

const useLogoTransform = () => {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 80, 100], [1, 1, 0])
  const scale = useTransform(scrollY, [0, 40, 450], [1, 1, 0.7])
  const y = useTransform(scrollY, [0, 40, 450], [0, 100, 500])

  return { opacity, scale, y }
}
