import { SocialIcon } from 'react-social-icons'

export default function Header() {
  const getInstagramAttributes = getSocialIconsAttributes('url', 'https://www.instagram.com/alexandrab_design/')
  const getLinkedInAttributes = getSocialIconsAttributes('url', 'https://www.linkedin.com/in/alexandra-b-a8a27b146/')
  const getEmailAttributes = getSocialIconsAttributes('network', 'email')

  return (
    <header className="sticky top-0 flex items-start justify-between max-w-full overflow-x-hidden mx-auto p-8 z-20 xl:items-center">
      <div className="flex flex-row items-center">
        <SocialIcon {...getInstagramAttributes} />
        <SocialIcon {...getLinkedInAttributes} />
      </div>
      <div className="flex flex-row items-center cursor-pointer text-white">
        <SocialIcon {...getEmailAttributes} />
      </div>
    </header>
  )
}

const getSocialIconsAttributes = (mainProperty, mainPropertyValue) => {
  return {
    [mainProperty]: mainPropertyValue,
    bgColor: 'transparent',
    fgColor: 'white',
  }
}
