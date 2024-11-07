import HeroSection from "./herosection/Herosection";
import Servicesection from "./servicesection/Servicesection";
import AboutSection from "./aboutsection/Aboutsection";
import ProjectSection from "./projectsection/Projectsection";

function HomePage() {
    return (
        <>
            <HeroSection />
            <Servicesection />
            <AboutSection />
            <ProjectSection />
        </>)
}

export default HomePage;