import { motion, useScroll, useTransform } from 'framer-motion'

export default function TagLine() {
  const { scrollY } = useScroll()
  const scale = useTransform(scrollY, [1100, 1200], [0.9, 1])
  const tagLineOpacity = useTransform(scrollY, [1550, 1650, 1750, 1950], [0, 1, 1, 0])

  return (
    <div className="flex justify-center items-center hero-text">
      <motion.h1 className="pt-80 1xl:pt-60 text-[1.6rem] 1xl:text-[1.80rem] 2xl:text-[2rem]" style={{ scale, opacity: tagLineOpacity }}>
        Let’s create something meaningful together
      </motion.h1>
    </div>
  )
}
