import React,{Fragment} from "react";
import Navigation from "./Components/Navigation";
import Content from "./Components/Content";
import Projects from "./Components/Projects";
import AboutMe from "./Components/AboutMe"
function App() {
  return (
   <Fragment>
    <Navigation/>
    <Content/>
    <Projects/>
    <AboutMe/>
   </Fragment>
  );
}

export default App;
