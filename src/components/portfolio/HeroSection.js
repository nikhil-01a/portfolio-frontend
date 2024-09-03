export default function HeroSection() {
  return (
    <div className="flex flex-wrap m-52 ml-80">
      <div className="w-full lg:w-1/2">
        <div className=" flex flex-col items-center lg:items-start"></div>
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
    </div>
  )
}
