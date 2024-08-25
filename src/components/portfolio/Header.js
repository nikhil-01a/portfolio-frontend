import { SocialIcon } from "react-social-icons";

export default function Header() {
  return (
    <header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto p-8 z-20 xl:items-center">
      <div className="flex flex-row items-center">
        <SocialIcon
          url="https://www.instagram.com/alexandrab_design/"
          bgColor="transparent"
          fgColor="gray"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/alexandra-b-a8a27b146/"
          bgColor="transparent"
          fgColor="gray"
        />
      </div>
      <div className="flex flex-row items-center cursor-pointer text-gray-300">
        <SocialIcon network="email" bgColor="transparent" fgColor="gray" />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
          Get In Touch
        </p>
      </div>
    </header>
  );
}
