import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion'
import AlexPicture from '../../../assets/IMG_6768.jpg'
import { useEffect, useState } from 'react'

export default function About() {
  const { scrollY } = useScroll()
  const [scHeight, setScHeight] = useState(0)
  const [visible, setVisible] = useState(true)

  // Effect to get the current screen height
  useEffect(() => {
    const handleResize = () => setScHeight(window.innerHeight)
    handleResize() // Set initial height
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Calculate transforms based on the screen height (responsive)
  const scale = useTransform(scrollY, [scHeight * 0.98, scHeight * 1, scHeight * 1.3, scHeight * 1.35], [0.95, 1, 1, 1])
  const opacity = useTransform(scrollY, [scHeight * 0.65, scHeight * 0.7, scHeight * 0.9, scHeight, scHeight * 1.3, scHeight * 1.35, scHeight * 1.6], [0, 0.3, 0.6, 1, 1, 1, 0])
  const y = useTransform(scrollY, [scHeight * 0.7, scHeight * 1], [400, 0])

  useMotionValueEvent(scrollY, 'change', (latest) => {
    console.log('Current scrollY:', latest) // This will log the current scrollY value
    if (latest < scHeight * 1.6 && !visible) setVisible(true)
    else if (latest >= scHeight * 1.6 && visible) setVisible(false)
  })

  return (
    <motion.div className="h-screen  overflow-hidden flex flex-col justify-center items-center" style={{ display: visible ? 'flex' : 'none', y }}>
      <motion.h1 className="hero-text text-[2rem] xl:text-[2.5rem] 1xl:text-[3.5rem]" style={{ scale, opacity }}>
        ABOUT ME
      </motion.h1>
      <motion.div className="flex justify-center p-8 " style={useContentTransform(scHeight)}>
        <motion.p className="flex justify-center items-center content-text p-7 xl:text-md max-w-[40rem] 1xl:text-xl 1xl:max-w-[47rem] 2xl:text-[1.5rem] 2xl:max-w-[47rem]">
          <ul>
            <li> My expertise spans Packaging Design, Graphic Design, Advertising & Digital Design, and Spatial Experience Design, with a strong foundation in Adobe Creative Suite.</li>
            <li className="pt-[1.5rem]">
              I value attention to detail, composition, and color, always approaching each project with meticulous care. My dream is to collaborate with others on projects that make an impact,
              inspire, and bring joy.
            </li>
          </ul>
        </motion.p>
        <motion.div className="flex justify-center items-center">
          <img src={AlexPicture} alt="DisplayPic" className="flex items-center rounded-3xl h-[300px] 1xl:h-[400px] 2xl:h-[450px]" />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

// Define content transform for responsive animations
const useContentTransform = (scHeight) => {
  const { scrollY } = useScroll()

  // Use relative values (based on screen height) for responsive transforms
  const scale = useTransform(scrollY, [scHeight * 0.98, scHeight * 1, scHeight * 1.3, scHeight * 1.35], [0.95, 1, 1, 1])
  const opacity = useTransform(scrollY, [scHeight * 0.65, scHeight * 0.7, scHeight * 0.99, scHeight, scHeight * 1.3, scHeight * 1.35, scHeight * 1.6], [0, 0.3, 0.6, 1, 1, 1, 0])
  const y = useTransform(scrollY, [scHeight * 0.7, scHeight * 1], [500, 0])

  return { scale, opacity, y }
}
