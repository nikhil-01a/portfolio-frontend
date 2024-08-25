import { SocialIcon } from "react-social-icons";

export default function Header() {
  return (
    <header>
      <div>
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
        <SocialIcon
          network="email"
          bgColor="transparent"
          fgColor="gray"
          className="cursor-pointer"
        />
      </div>
    </header>
  );
}
