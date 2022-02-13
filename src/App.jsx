import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import ProjectList from "./components/projects List/ProjectList";
import Contact from "./contact/Contact";
import Toggle from "./components/toggle/Toggle";
import { useContext } from "react";
import { ThemeContext } from "./context";
import Connect from "./components/connect/Connect";
import Footer from "./components/footer/Footer";

const App = () => {
  const theme= useContext(ThemeContext);
  const darkMode= theme.state.darkMode;

  return (
    <div 
      style={{
        backgroundColor:darkMode ? "#222" : "white",
        color:darkMode && "white",
        }}
    >
    <Connect/>
    <Toggle/>
    <Intro/>
    <About/>
    <ProjectList/>
    <Contact/>
    <Footer/>
  </div>)
};

export default App;