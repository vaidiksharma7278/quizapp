import logo from "./logo.png";
import Timer from "../Timer";
import './about.css'
const About = () => {
  return (
    <div className="about-container">
      <div className="about-left">
        <h1>
          Welcome to <br /> The world of <br /> <span>Quiz</span>
        </h1>
        <h4>
          "Better test your knowledge with<span>Quiz</span> App"
        </h4>
        <Timer/>
      </div>
      <div className="about-right">
        <img src={logo} alt="Logo" />
      </div>
    </div>
  );
};

export default About;