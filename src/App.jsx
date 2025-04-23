import Contact from "./component/Contact";
import Hero from "./component/Hero";
import MyInfo from "./component/MyInfo";
import Navbar from "./component/Navbar";
import Project from "./component/Project";
import TechStack from "./component/TechStack";

function App() {
  return (
    <div className="bg-[#2A2A2A] h-screen overflow-x-hidden pt-20">
      <Navbar />
      <Hero />
      <TechStack />
      <MyInfo />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
