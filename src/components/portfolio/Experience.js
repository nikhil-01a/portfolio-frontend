import { motion, useScroll, useTransform } from 'framer-motion'
export default function Experience() {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [1900, 2100], [0, 1])
  const experienceOpacity = useTransform(scrollY, [1950, 2170, 2200, 2215], [0, 0.2, 0.2, 1])
  const experienceScale = useTransform(scrollY, [1950, 2170, 2200, 2215], [0.98, 0.98, 0.98, 1])

  return (
    <div className=" flex flex-col xl:pt-96 1xl:pt-80 sm:pr-20 md:pr-40 lg:pr-60 xl:pr-48 sm:pl-20 md:pl-20 lg:pl-40 xl:pl-48 hero-text">
      <motion.div className="flex-col items-start" style={{ opacity }}>
        <motion.h1 className="xl:text-[3rem] 1xl:text-[3.5rem] xl:leading-[2.5rem] 1xl:leading-[3rem]">RELEVANT</motion.h1>
        <motion.h1 className="xl:text-[3rem] 1xl:text-[3.5rem] xl:leading-[2.5rem] 1xl:leading-[3rem]">EXPERIENCE</motion.h1>
      </motion.div>
      <motion.div className="flex pl-20 pt-8 flex-col justify-center hero-text2" style={{ opacity: experienceOpacity, scale: experienceScale }}>
        <div>
          <h1 className=" text-[1.5rem] xl:leading-[2.3rem] 1xl:leading-[3rem]">First Experience</h1>
          <h1 className=" xl:text-[1rem] hero-text">First Experience</h1>
        </div>
        <div class="h-px bg-gray-500 my-4"></div>
        <div>
          <h1 className=" text-[1.5rem] xl:leading-[2.3rem] 1xl:leading-[3rem]">First Experience</h1>
          <h1 className=" xl:text-[1rem] hero-text">First Experience</h1>
        </div>
        <div class="h-px bg-gray-500 my-4"></div>
        <div>
          <h1 className=" text-[1.5rem] xl:leading-[2.3rem] 1xl:leading-[3rem]">First Experience</h1>
          <h1 className=" xl:text-[1rem] hero-text">First Experience</h1>
        </div>
        <div class="h-px bg-gray-500 my-4"></div>

        <div>
          <h1 className=" text-[1.5rem] xl:leading-[2.3rem] 1xl:leading-[3rem]">First Experience</h1>
          <h1 className=" xl:text-[1rem] hero-text">First Experience</h1>
        </div>
        <div class="h-px bg-gray-500 my-4"></div>

        <div>
          <h1 className=" text-[1.5rem] xl:leading-[2.3rem] 1xl:leading-[3rem]">First Experience</h1>
          <h1 className=" xl:text-[1rem] hero-text">First Experience</h1>
        </div>
      </motion.div>
    </div>
  )
}
