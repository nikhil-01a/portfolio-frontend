import { motion, useScroll, useTransform } from 'framer-motion'
export default function Experience() {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [2000, 2000], [0, 1])
  const experienceOpacity = useTransform(scrollY, [2550, 2550, 2650, 2700], [0, 0.2, 0.2, 1])
  const experienceScale = useTransform(scrollY, [2550, 2550, 2650, 2700], [0.98, 0.98, 0.98, 1])

  return (
    <div className=" flex flex-col pt-[52rem]  sm:pr-20 md:pr-40 lg:pr-60 xl:pr-48 sm:pl-20 md:pl-20 lg:pl-40 xl:pl-48 hero-text">
      <motion.div className="flex-col items-start" style={{ opacity }}>
        <motion.h1 className="text-[3rem] 1xl:text-[3.5rem] leading-[2.5rem] 1xl:leading-[3rem]">RELEVANT</motion.h1>
        <motion.h1 className="text-[3rem] 1xl:text-[3.5rem] leading-[2.5rem] 1xl:leading-[3rem]">EXPERIENCE</motion.h1>
      </motion.div>
      <motion.div className="flex pl-20 pt-12 flex-col justify-center hero-text2" style={{ opacity: experienceOpacity, scale: experienceScale }}>
        <div>
          <h1 className=" text-[2.2rem] leading-[2.3rem]  1xl:leading-[3rem]">Marshall Retail Group</h1>
          <div className="flex pt-1 text-gray-300 justify-between">
            <h1 className=" text-[1rem]  hero-text">Graphic Designer</h1>
            <h1 className=" text-[1rem] hero-text">(09/2023 - Present)</h1>
          </div>
          <h1 className=" text-[1rem] pt-1 text-gray-400 w-5/6 content-text">Design magazine ads, invites and posters. Establish effective, remote communication to meet tight deadlines.</h1>
        </div>
        <div class="h-px bg-gray-500 my-6"></div>
        <div>
          <h1 className=" text-[2.2rem] leading-[2.3rem] 1xl:leading-[3rem]">Morgan Publishing House Inc.</h1>
          <div className="flex pt-1 text-gray-300 justify-between">
            <h1 className=" text-[1rem] hero-text">Graphic Designer & Outreach Coordinator</h1>
            <h1 className=" text-[1rem] hero-text">(10/2022 - 06/2024)</h1>
          </div>
          <div className="flex text-gray-300 justify-between">
            <h1 className=" text-[1rem] hero-text">Graphic Design Intern</h1>
            <h1 className=" text-[1rem] hero-text">(04/2022 - 10/2022)</h1>
          </div>
          <h1 className=" text-[1rem] pt-2 text-gray-400 w-5/6 content-text">
            Research, write, design, source content for, and manage an insightful blog about India that delves into the culture. Outreach to international organizations to donate inspirational
            children’s book series that promotes education.
          </h1>
        </div>
        <div class="h-px bg-gray-500 my-6"></div>
        <div>
          <h1 className=" text-[2.2rem] leading-[2.3rem] 1xl:leading-[3rem]">Build A Life Foundation</h1>
          <div className="flex pt-1 text-gray-300 justify-between">
            <h1 className=" text-[1rem] hero-text">Graphic Designer & Outreach Coordinator</h1>
            <h1 className=" text-[1rem] hero-text">(10/2022 - 06/2024)</h1>
          </div>
          <div className="flex text-gray-300 justify-between">
            <h1 className=" text-[1rem] hero-text">Graphic Design Intern</h1>
            <h1 className=" text-[1rem] hero-text">(04/2022 - 10/2022)</h1>
          </div>
          <h1 className=" text-[1rem] pt-2 w-5/6 text-gray-400 content-text">
            Redesigned website, design posts, create and manage social media platforms (Instagram, Facebook, LinkedIn, X). Outreach to international organizations through social media, securing guest
            speakers for monthly forum events.
          </h1>
        </div>
        <div class="h-px bg-gray-500 my-6"></div>
        <div>
          <h1 className=" text-[2.2rem] leading-[2.3rem] 1xl:leading-[3rem]">Trampoline Design</h1>
          <div className="flex pt-1 text-gray-300 justify-between">
            <h1 className=" text-[1rem] hero-text">Graphic Design Intern</h1>
            <h1 className=" text-[1rem] hero-text">(02/2023 - 05/2023)</h1>
          </div>
          <h1 className=" text-[1rem] pt-2 text-gray-400 w-5/6 content-text">
            Designed various logos for a tech company. Created marketing stickers for Trampoline Design. Executed graphics onto merchandise.
          </h1>
        </div>
      </motion.div>
    </div>
  )
}
