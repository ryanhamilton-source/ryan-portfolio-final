import  NavBar from "./components/NavBar";
import  Home from "./components/Home";
import  SocialLinks from "./components/socialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contacts, { Contactss } from "./components/Contactss";
function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <SocialLinks />
      <Portfolio />
      <Experience />
      <Contactss />

    </div>  
    );
}

export default App;
