import { motion, useScroll, useTransform } from 'framer-motion'

export default function About() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [300, 850], [-250, 0])
  const scale = useTransform(scrollY, [850, 900], [0.9, 1])
  const opacity = useTransform(scrollY, [500, 800, 850, 1250, 1400], [0, 0.3, 1, 1, 0])

  return (
    <div>
      <div className="overflow-hidden flex flex-col items-center pt-[30rem] sm:pr-20 md:pr-40 lg:pr-60 xl:pr-80 xl:pl-80 2xl:pr-96 sm:pl-20 md:pl-40 lg:pl-60 2xl:pl-96 hero-text ">
        <motion.h1 className="text-[3rem] 1xl:text-[3.5rem]" style={{ y, scale, opacity }}>
          ABOUT ME
        </motion.h1>
        <motion.p className="content-text pt-[1.1rem] text-[1.1rem] 1xl:text-[1.7rem]" style={useContentTransform()}>
          <ul>
            <li> My expertise spans Packaging Design, Graphic Design, Advertising & Digital Design, and Spatial Experience Design, with a strong foundation in Adobe Creative Suite.</li>
            <li className="pt-[1.5rem]">
              I value attention to detail, composition, and color, always approaching each project with meticulous care. My dream is to collaborate with others on projects that make an impact,
              inspire, and bring joy.
            </li>
          </ul>
        </motion.p>
      </div>
    </div>
  )
}

const useContentTransform = () => {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [300, 850], [600, 0])
  const scale = useTransform(scrollY, [850, 900], [0.9, 1])
  const opacity = useTransform(scrollY, [500, 800, 850, 1250, 1400], [0, 0.3, 1, 1, 0])
  return { scale, opacity, y }
}
