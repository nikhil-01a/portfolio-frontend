import profilePic from '../../assets/IMG_6768.jpg'

export default function HeroSection() {
  return (
    <div>
      <div className="flex flex-wrap mt-24 mr-52 ml-80">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1
              className="text:6xl mt-9 lg:text-8xl"
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
              className="text:6xl mt-9 lg:text-8xl"
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
          <div className=" flex flex-col items-center lg:items-start">
            <h1
              className="text:2xl mt-9 lg:text-4xl"
              style={{
                fontFamily: 'Inter Tight, sans-serif',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '.04em',
                lineHeight: '50px',
              }}
            >
              - Graphic Designer
            </h1>
            <h1
              className="text:2xl mt-4 lg:text-4xl"
              style={{
                fontFamily: 'Inter Tight, sans-serif',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '.04em',
                lineHeight: '1px',
              }}
            >
              - Outreach Coordinator
            </h1>
          </div>
          <div className="relative flex items-center flex-row justify-between w-3/4">
            <div className="h-auto relative w-96 break-words ">
              <p
                className="text:2xl mt-10 lg:text-2xl"
                style={{
                  fontFamily: 'Inter Tight, sans-serif',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '.04em',
                  lineHeight: '30px',
                }}
              >
                Currently Designing for Marshal Retail Group
              </p>
            </div>
            <div className="h-auto relative w-96 break-words ">
              <p
                className="text:2xl mt-10 lg:text-2xl"
                style={{
                  fontFamily: 'Inter Tight, sans-serif',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '.04em',
                  lineHeight: '30px',
                }}
              >
                (2023 - PRESENT)
              </p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:pb-36 lg:pr-28">
          <div className="flex justify-center">
            <img src={profilePic} alt="Alexandra Biehle" className="rounded-3xl"></img>
          </div>
        </div>
      </div>
    </div>
  )
}
