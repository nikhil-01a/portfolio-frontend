function About({ title = "When Nothing Passed", phone, tempFunction }) {
  return (
    <div>
      <h1> This is the About section</h1>
      <button onClick={tempFunction}>Click Me</button>
      <br />
      {title}
      <br />
      {phone}
    </div>
  );
}

export default About;
