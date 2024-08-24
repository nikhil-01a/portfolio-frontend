import "./App.css";
import About from "./components/users/About";
import Experience from "./components/users/Experience";

function App() {
  let styled = {
    backgroundColor: "#e2e2e2",
    borderRadius: "10px",
    color: "black",
    padding: "20px",
  };

  const tempFunc = () => {
    console.log("this is a temporary function");
  };

  return (
    <div className="container" style={styled}>
      <h1>Hi this is a portfolio App</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        <br />
        Ipsa obcaecati,nemo quam perferendis quasi adipisci magnam eligendi
        doloribus soluta deleniti facere quaerat repellendus iste eos quis,
        nesciunt error consectetur reprehenderit.
        {2 + 5}
        <br />
        {new Date().toDateString()}
      </p>
      <br />
      <br />
      <About title="Dynamic About" phone="2016583034" tempFunction={tempFunc} />
      <br />
      <br />
      <Experience></Experience>
    </div>
  );
}

export default App;
