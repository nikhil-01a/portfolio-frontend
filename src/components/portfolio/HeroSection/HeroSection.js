import profilePic from '../../../assets/IMG_6768.jpg'
import './HeroSection.css'

export default function HeroSection() {
  return (
    <div className="ml-8 mr-8 sm:ml-20 sm:mr-20 md:ml-40 md:mr-40 lg:ml-60 lg:mr-60 xl:ml-96 xl:mr-96 2xl:ml-72">
      <div className="flex flex-col 2xl:flex-row">
        <div className="flex-1 flex flex-col justify-center xl2:pr-5">
          <div className="flex flex-col items-center">
            <h1 className="hero-text mt-4 mb-8 text-3xl leading-[0rem] xs:text-5xl xs:leading-[1rem] lg:text-6xl lg:leading-[1.5rem]">Alexandra</h1>
            <h1 className="hero-text mb-12 xs:mb-16 text-3xl leading-[0rem] xs:text-5xl xs:leading-[1rem] lg:text-6xl lg:leading-[1.5rem]">Biehle</h1>
          </div>
          <div className="flex flex-col items-start 2xl:items-start xs:ml-12 xl:ml-10">
            <div>
              <div className="flex flex-col items-start custom-spacing">
                <h1 className="hero-text text-base xs:text-xl lg:text-2xl">- Graphic Designer</h1>
                <h1 className="hero-text mb-8 text-base xs:text-xl lg:text-2xl xs:mb-16">- Outreach Coordinator</h1>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start">
            <div className="flex flex-row mb-4 items-center justify-between w-full custom-spacing">
              <div>
                <h1 className="hero-text text-xs xs:text-lg">Currently Designing At</h1>
                <h1 className="hero-text text-xs xs:text-lg">Marshal Retail Group</h1>
              </div>
              <h1 className="hero-text text-xs xs:text-lg 2xl:mr-5">(2023 - PRESENT)</h1>
            </div>
          </div>
        </div>
        <div className="flex-1 pt-5 xl2:pl-5">
          <img src={profilePic} alt="Alexandra Biehle" className="rounded-3xl" />
        </div>
      </div>
    </div>
  )
}
