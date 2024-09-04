import profilePic from '../../assets/IMG_6768.jpg'

export default function HeroSection() {
  return (
    <div className="pt-5 pr-80 pb-80 pl-80">
      <div className="flex flex-col lg:flex-row">
        <div className="flex-1 flex flex-col justify-center items-center">
          <div className="flex flex-col items-start">
            <div className="flex flex-col items-center">
              <h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-8"
                style={{
                  fontFamily: 'Inter Tight, sans-serif',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '.04em',
                  lineHeight: '50px',
                }}
              >
                Alexandra
              </h1>
              <h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-20"
                style={{
                  fontFamily: 'Inter Tight, sans-serif',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '.04em',
                  lineHeight: '50px',
                }}
              >
                Biehle
              </h1>
            </div>
            <h1
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-4"
              style={{
                fontFamily: 'Inter Tight, sans-serif',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '.04em',
                lineHeight: '25px',
              }}
            >
              - Graphic Designer
            </h1>
            <h1
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-20"
              style={{
                fontFamily: 'Inter Tight, sans-serif',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '.04em',
                lineHeight: '25px',
              }}
            >
              - Outreach Coordinator
            </h1>
            <div className="flex flex-row items-center">
              <div>
                <h1
                  className="text-base sm:text-base md:text-lg lg:text-xl xl:text-xl"
                  style={{
                    fontFamily: 'Inter Tight, sans-serif',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '.04em',
                    lineHeight: '25px',
                  }}
                >
                  Currently Designing For
                </h1>
                <h1
                  className="text-base sm:text-base md:text-lg lg:text-xl xl:text-xl"
                  style={{
                    fontFamily: 'Inter Tight, sans-serif',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '.04em',
                    lineHeight: '25px',
                  }}
                >
                  Marshal Retail Group
                </h1>
              </div>
              <h1
                className="text-base sm:text-base md:text-lg lg:text-xl xl:text-xl ml-24"
                style={{
                  fontFamily: 'Inter Tight, sans-serif',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '.04em',
                  lineHeight: '25px',
                }}
              >
                (2023 - PRESENT)
              </h1>
            </div>
          </div>
        </div>
        <div className="flex-1 pt-5">
          <img src={profilePic} alt="Alexandra Biehle" className="rounded-3xl"></img>
        </div>
      </div>
    </div>
  )
}
