import LandingLayout from "../layouts/landingLayout";
import Background from "../style/background";

import AboutSection from "./sections/aboutSection";
import EducationSection from "./sections/educationSection";
import HomeSection from "./sections/homeSection";
import ProjectSection from "./sections/projectSection";
import SkillSection from "./sections/skillSection";
const mainPage = () => {
  return (
    <LandingLayout>
      <div className="h-full w-full">
        <Background />
      </div>

      <div className="h-full w-full" id="home">
        <HomeSection name="REIGNEAR" />
      </div>
      <div className="h-full w-full" id="about">
        <AboutSection />
      </div>
      <div className="h-full w-full" id="education">
        <EducationSection />
      </div>
      <div className="h-full w-full " id="skills">
        <SkillSection />
      </div>
      <div className="h-full w-full" id="projects">
        <ProjectSection />
      </div>
    </LandingLayout>
  );
};

export default mainPage;
