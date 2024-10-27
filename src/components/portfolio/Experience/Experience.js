import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'
export default function Experience() {
  const { scrollY } = useScroll()
  const [scHeight, setScHeight] = useState(0)

  useEffect(() => {
    const handleSize = () => {
      setScHeight(window.innerHeight)
    }
    handleSize()

    window.addEventListener('resize', handleSize)

    return () => {
      window.removeEventListener('resize', handleSize)
    }
  }, [])

  const experienceOpacity = useTransform(scrollY, [scHeight * 0.1, scHeight * 0.5, scHeight * 0.5, scHeight * 1], [0, 0.2, 0.2, 1])
  const experienceScale = useTransform(scrollY, [scHeight * 0.1, scHeight * 0.1, scHeight * 0.1, scHeight * 0.5], [0.98, 0.98, 0.98, 1])

  return (
    <div className="h-screen hero-text flex flex-col pl-12 pr-12 md:pl-32 md:pr-32 lg:pl-52 lg:pr-52 xl:pl-64 xl:pr-64 1xl:pl-72 1xl:pr-72">
      <motion.div className="flex-col items-center">
        <div className="flex justify-center">
          <motion.h1 className="text-[3rem] 1xl:text-[3.5rem] leading-[2.5rem] 1xl:leading-[3rem]">RELEVANT EXPERIENCE</motion.h1>
          <motion.h1 className="text-[3rem] 1xl:text-[3.5rem] leading-[2.5rem] 1xl:leading-[3rem]"></motion.h1>
        </div>
      </motion.div>
      <motion.div className="flex pt-24 flex-col justify-center hero-text2" style={{ opacity: experienceOpacity, scale: experienceScale }}>
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
