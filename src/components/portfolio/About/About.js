import { motion, useScroll, useTransform } from 'framer-motion'

export default function About() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [400, 750], [-250, 0])
  const scale = useTransform(scrollY, [700, 750], [0.9, 1])
  const opacity = useTransform(scrollY, [400, 750, 1000, 1150], [0, 1, 1, 0])

  return (
    <div>
      <div className="overflow-x-hidden flex flex-col items-center pt-[24rem] 1xl:pt-[10] sm:pr-20 md:pr-40 lg:pr-60 xl:pr-80 xl:pl-80 2xl:pr-96 sm:pl-20 md:pl-40 lg:pl-60 2xl:pl-96 hero-text ">
        <motion.h1 className="text-[3rem] 1xl:text-[3.5rem]" style={{ y, scale, opacity }}>
          ABOUT ME
        </motion.h1>
        <motion.p className="content-text pt-[1.75rem] text-[1.1rem] 1xl:text-[1.7rem]" style={{ opacity, scale }}>
          My expertise spans Packaging Design, Graphic Design, Advertising & Digital Design, and Spatial Experience Design, with a strong foundation in Adobe Creative Suite.
          <br />
          <br />I value attention to detail, composition, and color, always approaching each project with meticulous care. My dream is to collaborate with others on projects that make an impact,
          inspire, and bring joy.
        </motion.p>
      </div>
    </div>
  )
}
