import profilePic from '../../assets/IMG_6768.jpg'

const headingStyle = (fontSize, lineHeight) => ({
  fontFamily: 'Inter Tight, sans-serif',
  fontWeight: 600,
  textTransform: 'uppercase',
  letterSpacing: '.04em',
  lineHeight,
  fontSize,
})

export default function HeroSection() {
  return (
    <div className="p-96 pt-5">
      <div className="flex flex-col xl2:flex-row">
        <div className="flex-1 flex flex-col justify-center pr-5">
          <div className="flex flex-col items-center">
            <h1 className="mb-8" style={headingStyle('4rem', '50px')}>
              Alexandra
            </h1>
            <h1 className="mb-20" style={headingStyle('4rem', '50px')}>
              Biehle
            </h1>
          </div>
          <div className="flex flex-col items-start">
            <h1
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-4"
              style={headingStyle('1.5rem', '25px')}
            >
              - Graphic Designer
            </h1>
            <h1
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-20"
              style={headingStyle('1.5rem', '25px')}
            >
              - Outreach Coordinator
            </h1>
            <div className="flex flex-row items-center justify-between w-full">
              <div>
                <h1
                  className="text-base sm:text-base md:text-lg lg:text-xl xl:text-xl"
                  style={headingStyle('1.25rem', '25px')}
                >
                  Currently Designing For
                </h1>
                <h1
                  className="text-base sm:text-base md:text-lg lg:text-xl xl:text-xl"
                  style={headingStyle('1.25rem', '25px')}
                >
                  Marshal Retail Group
                </h1>
              </div>
              <h1
                className="text-base sm:text-base md:text-lg lg:text-xl xl:text-xl"
                style={headingStyle('1.25rem', '25px')}
              >
                (2023 - PRESENT)
              </h1>
            </div>
          </div>
        </div>
        <div className="flex-1 pt-5 lg:pl-5">
          <img src={profilePic} alt="Alexandra Biehle" className="rounded-3xl" />
        </div>
      </div>
    </div>
  )
}
