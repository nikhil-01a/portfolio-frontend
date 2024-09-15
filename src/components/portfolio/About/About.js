import { motion, useScroll, useTransform } from 'framer-motion'

export default function About() {
  const { scrollY } = useScroll()
  const x = useTransform(scrollY, [600, 1000], [-1000, 0])
  const scale = useTransform(scrollY, [600, 1100, 1150], [0.9, 0.9, 1])
  const opacity = useTransform(scrollY, [600, 900, 1200, 1350], [0.5, 1, 1, 0])
  return (
    <div>
      <div className="overflow-x-hidden sticky top-[2500px] flex justify-center pt-28 sm:pr-20 md:pr-40 lg:pr-60 xl:pr-96 sm:pl-20 md:pl-40 lg:pl-60 xl:pl-96 hero-text ">
        <motion.h1 className="text-[3.5rem]" style={{ x, scale, opacity }}>
          ABOUT ME
        </motion.h1>
      </div>
    </div>
  )
}
