import { motion, useScroll, useTransform } from 'framer-motion'

export default function About() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [700, 1100], [-250, 0])
  const scale = useTransform(scrollY, [1100, 1200], [0.9, 1])
  const opacity = useTransform(scrollY, [700, 1100, 1400, 1550], [0, 1, 1, 0])
  const tagLineOpacity = useTransform(scrollY, [1550, 1650, 1750, 1950], [0, 1, 1, 0])

  return (
    <div>
      <div className="overflow-x-hidden flex flex-col items-center pt-[29rem] 1xl:pt-80 sm:pr-20 md:pr-40 lg:pr-60 xl:pr-80 xl:pl-80 2xl:pr-96 sm:pl-20 md:pl-40 lg:pl-60 2xl:pl-96 hero-text ">
        <motion.h1 className="text-[3rem] 1xl:text-[3.5rem]" style={{ y, scale, opacity }}>
          ABOUT ME
        </motion.h1>
        <motion.p className="content-text pt-4 text-[1.1rem] 1xl:text-xl" style={{ opacity, scale }}>
          My expertise spans Packaging Design, Graphic Design, Advertising & Digital Design, and Spatial Experience Design, with a strong foundation in Adobe Creative Suite.
          <br />
          <br />I value attention to detail, composition, and color, always approaching each project with meticulous care. My dream is to collaborate with others on projects that make an impact,
          inspire, and bring joy.
        </motion.p>
        <motion.h1 className="pt-80 1xl:pt-60 text-[1.6rem] 1xl:text-[1.80rem] 2xl:text-[2rem]" style={{ scale, opacity: tagLineOpacity }}>
          Let’s create something meaningful together
        </motion.h1>
      </div>
    </div>
  )
}
