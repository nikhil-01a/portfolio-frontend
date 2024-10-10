import AlexLogo from '../../../assets/AlexLogo2.png'
import './HeroSection.css'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function HeroSection() {
  return (
    <motion.div
      className="sticky top-0 pt-[10rem] sm:pr-[8rem] sm:pl-[8rem] md:pr-[13rem] md:pl-[13rem] lg:pr-[18rem] lg:pl-[18rem] xl:pr-[23rem] xl:pl-[23rem] 2xl:pr-[27rem] 2xl:pl-[27rem]"
      style={useElementOneTransform()}
    >
      <div className="flex-1 z-10 pl-12 pr-12 flex justify-center">
        <div className="lg:pl-16 lg:pr-16 1xl:pl-24 1xl:pr-24 2xl:pl-36 2xl:pr-36">
          <motion.img className="rounded-3xl " src={AlexLogo} alt="Alexandra Biehle" style={{ willChange: 'opacity, transform', useElementOneTransform }} />
        </div>
      </div>
    </motion.div>
  )
}

const useElementOneTransform = () => {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 80, 350], [1, 1, 0])
  const scale = useTransform(scrollY, [0, 40, 450], [1, 1, 0.7])
  return { opacity, scale }
}
