import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function About() {
  const { scrollY } = useScroll()
  const [screenHeight, setScreenHeight] = useState(0)

  // Effect to get the current screen height
  useEffect(() => {
    const handleResize = () => setScreenHeight(window.innerHeight)
    handleResize() // Set initial height
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Calculate transforms based on the screen height (responsive)
  const y = useTransform(scrollY, [screenHeight * 0.4, screenHeight * 0.6, screenHeight * 1.4, screenHeight * 1.45], [600, 0, 0, -600])
  const scale = useTransform(scrollY, [screenHeight * 0.9, screenHeight * 0.95, screenHeight * 1.3, screenHeight * 1.35], [0.9, 1, 1, 0.9])
  const opacity = useTransform(
    scrollY,
    [screenHeight * 0.6, screenHeight * 0.9, screenHeight * 0.95, screenHeight * 1.2, screenHeight * 1.3, screenHeight * 1.35, screenHeight * 1.6],
    [0.3, 0.3, 1, 1, 1, 0.3, 0]
  )

  return (
    <motion.div className="sticky top-0 h-screen flex flex-col justify-center items-center">
      <motion.h1 className="hero-text text-[3rem] 1xl:text-[3.5rem]" style={{ y, scale, opacity }}>
        ABOUT ME
      </motion.h1>
      <motion.p className="content-text pt-[1rem] text-2xl max-w-[75rem] p-12" style={useContentTransform(screenHeight)}>
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
const useContentTransform = (screenHeight) => {
  const { scrollY } = useScroll()

  // Use relative values (based on screen height) for responsive transforms
  const y = useTransform(scrollY, [screenHeight * 0.6, screenHeight * 0.85], [600, 0])
  const scale = useTransform(scrollY, [screenHeight * 0.9, screenHeight * 0.95, screenHeight * 1.3, screenHeight * 1.35], [0.9, 1, 1, 0.9])
  const opacity = useTransform(
    scrollY,
    [screenHeight * 0.6, screenHeight * 0.9, screenHeight * 0.95, screenHeight * 1.2, screenHeight * 1.3, screenHeight * 1.35, screenHeight * 1.6],
    [0.3, 0.3, 1, 1, 1, 0.3, 0]
  )
  return { scale, opacity, y }
}
