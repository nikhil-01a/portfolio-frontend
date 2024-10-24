import { SocialIcon } from 'react-social-icons'

export default function Header() {
  const getInstagramAttributes = getSocialIconsAttributes('url', 'https://www.instagram.com/alexandrab_design/')
  const getLinkedInAttributes = getSocialIconsAttributes('url', 'https://www.linkedin.com/in/alexandra-b-a8a27b146/')
  const getEmailAttributes = getSocialIconsAttributes('network', 'email')

  return (
    <header className="sticky top-0 flex justify-between pt-12 pl-6 pr-6 xs:pt-12 xs:pl-16 xs:pr-16 z-20">
      <div>
        <SocialIcon {...getInstagramAttributes} />
        <SocialIcon {...getLinkedInAttributes} />
      </div>
      <div>
        <SocialIcon {...getEmailAttributes} className="cursor-pointer" />
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
