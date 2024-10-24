import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion'
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
  const y = useTransform(scrollY, [scHeight * 0.4, scHeight * 0.6, scHeight * 1.4, scHeight * 1.45], [600, 0, 0, 0])
  const scale = useTransform(scrollY, [scHeight * 0.9, scHeight * 0.95, scHeight * 1.3, scHeight * 1.35], [0.9, 1, 1, 1])
  const opacity = useTransform(scrollY, [scHeight * 0.6, scHeight * 0.9, scHeight * 0.95, scHeight * 1.2, scHeight * 1.3, scHeight * 1.6], [0.3, 0.3, 1, 1, 1, 0])

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest < scHeight * 1.6 && !visible) setVisible(true)
    else if (latest >= scHeight * 1.6 && visible) setVisible(false)
  })

  return (
    <motion.div className="h-screen flex flex-col justify-center items-center" style={{ display: visible ? 'flex' : 'none' }}>
      <motion.h1 className="hero-text text-[3rem] 1xl:text-[3.5rem]" style={{ y, scale, opacity }}>
        ABOUT ME
      </motion.h1>
      <motion.p className="content-text pt-[1.1rem] text-2xl leading-[2.5rem]  max-w-[75rem] p-10 pl-[12rem] pr-[12rem]" style={useContentTransform(scHeight)}>
        <ul>
          <li> My expertise spans Packaging Design, Graphic Design, Advertising & Digital Design, and Spatial Experience Design, with a strong foundation in Adobe Creative Suite.</li>
          <li className="pt-[1.5rem]">
            I value attention to detail, composition, and color, always approaching each project with meticulous care. My dream is to collaborate with others on projects that make an impact, inspire,
            and bring joy.
          </li>
        </ul>
      </motion.p>
    </motion.div>
  )
}

// Define content transform for responsive animations
const useContentTransform = (scHeight) => {
  const { scrollY } = useScroll()

  // Use relative values (based on screen height) for responsive transforms
  const y = useTransform(scrollY, [scHeight * 0.6, scHeight * 0.85], [600, 0])
  const scale = useTransform(scrollY, [scHeight * 0.9, scHeight * 0.95, scHeight * 1.3, scHeight * 1.35], [0.9, 1, 1, 1])
  const opacity = useTransform(scrollY, [scHeight * 0.6, scHeight * 0.9, scHeight * 0.95, scHeight * 1.2, scHeight * 1.3, scHeight * 1.6], [0.3, 0.3, 1, 1, 1, 0])
  return { scale, opacity, y }
}
