import ProjectCard from "../components/ProjectCard";
import Section from "../components/Section";

function Projects() {
  return (
    <Section id="projects" styles="bg-gray-50">
      <div className="mb-40">
        <ProjectCard />
      </div>

      <h1 className="text-3xl font-bold text-center">
        New projects coming soon... 🤠
      </h1>
    </Section>
  );
}

export default Projects;
