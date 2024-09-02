import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'

export default function Header({ homepage = false }) {
  const DynamicDiv = homepage ? motion.div : 'div'
  const animationPropsLeft = getHeaderAnimation(homepage, 'left')
  const animationPropsRight = getHeaderAnimation(homepage, 'right')
  const getInstagramAttributes = getSocialIconsAttributes('url', 'https://www.instagram.com/alexandrab_design/')
  const getLinkedInAttributes = getSocialIconsAttributes('url', 'https://www.linkedin.com/in/alexandra-b-a8a27b146/')
  const getEmailAttributes = getSocialIconsAttributes('network', 'email')

  return (
    <header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto p-8 z-20 xl:items-center">
      <DynamicDiv {...animationPropsLeft} className="flex flex-row items-center">
        <SocialIcon {...getInstagramAttributes} />
        <SocialIcon {...getLinkedInAttributes} />
      </DynamicDiv>
      <DynamicDiv {...animationPropsRight} className="flex flex-row items-center cursor-pointer text-gray-300">
        <SocialIcon {...getEmailAttributes} />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">Get In Touch</p>
      </DynamicDiv>
    </header>
  )
}

const getHeaderAnimation = (homepage, direction) => {
  if (!homepage) return {}
  const initialX = direction === 'left' ? -500 : 500
  return {
    initial: { x: initialX, opacity: 1, scale: 0.5 },
    animate: { x: 0, opacity: 1, scale: 1 },
    transition: { duration: 0.3 },
  }
}

const getSocialIconsAttributes = (mainProperty, mainPropertyValue) => {
  return {
    [mainProperty]: mainPropertyValue,
    bgColor: 'transparent',
    fgColor: 'gray',
  }
}
