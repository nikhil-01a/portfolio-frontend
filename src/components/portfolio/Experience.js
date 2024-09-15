import { motion, useScroll, useTransform } from 'framer-motion'
export default function Experience() {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [2000, 2200], [0, 1])

  return (
    <motion.div className=" flex flex-col items-start pt-80 sm:pr-20 md:pr-40 lg:pr-60 xl:pr-96 sm:pl-20 md:pl-20 lg:pl-40 xl:pl-52 hero-text" style={{ opacity }}>
      <motion.h1 className="text-[3.5rem] leading-[3rem]">RELEVANT</motion.h1>
      <motion.h1 className="text-[3.5rem] leading-[3rem]">EXPERIENCE</motion.h1>
    </motion.div>
  )
}
