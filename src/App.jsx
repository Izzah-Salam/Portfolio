import Contact from "./component/Contact";
import Hero from "./component/Hero";
import MyInfo from "./component/MyInfo";
import Navbar from "./component/Navbar";
import TechStack from "./component/TechStack";

function App() {
  return (
    <div className="bg-[#2A2A2A] h-screen">
      <Navbar />
      <Hero />
      <TechStack />
      <MyInfo />
      <Contact />
    </div>
  );
}

export default App;
