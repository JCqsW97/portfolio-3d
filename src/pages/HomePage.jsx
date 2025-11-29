import Hero from "../sections/Hero";
import About from "../sections/About";
import Experiences from "../sections/Experiences";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";

function HomePage() {
  return (
    <div>
        <h1 className="flex justify-center">Thinking outside the box!</h1>;
        <Hero />
        <About />
        <Experiences />
        <Skills />
        <Projects />
        <Contact />
    </div>
  )
};

export default HomePage;