import { motion, useScroll, useTransform } from 'framer-motion'

export default function About() {
  const { scrollY } = useScroll()
  const x = useTransform(scrollY, [600, 1000], [-1000, 0])
  const scale = useTransform(scrollY, [600, 1000, 1150], [0.9, 0.9, 1])
  const opacity = useTransform(scrollY, [600, 900, 1200, 1380], [0.5, 1, 1, 0])
  const textOpacity = useTransform(scrollY, [1000, 1100, 1200, 1380], [0, 1, 1, 0])
  const tagLineOpacity = useTransform(scrollY, [1300, 1400, 1500, 1700], [0, 1, 1, 0])

  return (
    <div>
      <div className="overflow-x-hidden flex flex-col items-center pt-52 sm:pr-20 md:pr-40 lg:pr-60 xl:pr-96 sm:pl-20 md:pl-40 lg:pl-60 xl:pl-96 hero-text ">
        <motion.h1 className="text-[3.5rem]" style={{ x, scale, opacity }}>
          ABOUT ME
        </motion.h1>
        <motion.p className="content-text pt-8 text-xl" style={{ opacity: textOpacity, scale }}>
          My expertise spans Packaging Design, Graphic Design, Advertising & Digital Design, and Spatial Experience Design, with a strong foundation in Adobe Creative Suite.
          <br />
          <br />I value attention to detail, composition, and color, always approaching each project with meticulous care. My dream is to collaborate with others on projects that make an impact,
          inspire, and bring joy. From childhood, I’ve been drawn to art and design - whether crafting, writing stories, or creating virtual worlds.
        </motion.p>
        <motion.h1 className="pt-20 text-[2rem]" style={{ scale, opacity: tagLineOpacity }}>
          Let’s create something meaningful together
        </motion.h1>
      </div>
    </div>
  )
}
