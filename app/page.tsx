import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import CoreSkills from "./components/CoreSkills";
import Hero from "./components/Hero";
import ProjectsList from "./components/ProjectsList";

export default function Home() {
  return (
    <>
    <Hero />
    <ProjectsList />
    <AboutMe />
    <CoreSkills />
    <Contact />
    </>
  );
}
