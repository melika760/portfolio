import React,{Fragment} from "react";
import Navigation from "./Components/Navigation";
import Content from "./Components/Content";
import Projects from "./Components/Projects";
function App() {
  return (
   <Fragment>
    <Navigation/>
    <Content/>
    <Projects/>
   </Fragment>
  );
}

export default App;
