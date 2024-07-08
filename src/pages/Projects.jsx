import ProjectCard from "../components/ProjectCard";
import Section from "../components/Section";

const projects = [
  {
    id: 1,
    title: "Gymate",
    link: "https://gymate-ruby.vercel.app/",
    image: "../images/Gymate.png",
    icon: "../images/gymate-icon.png",
    description: `Gymate provides a space for people to improve their physical fitness
          and overall health through regular exercise and physical activity.
          Will be developed in the future...`,
    designer: "Designed by RadiusTheme",
    skills: ["React", "Vite", "Tailwind"],
  },
  {
    id: 2,
    title: "🍕 Fast React Pizza.Co",
    link: "https://fast-react-pizza-co-lime.vercel.app/",
    image: "../images/FastReactPizza-homePage.png",
    description: `Simple application, where users can order one or more pizzas from a menu.`,
    designer: "This website was created during Jonas Schmedtmann's course",
    skills: ["React", "Tailwind", "React Router", "Redux"],
  },
];

function Projects() {
  return (
    <Section id="projects" styles="bg-gray-50">
      <h1 className="text-center font-bold text-3xl mb-20">My Projects 👇</h1>

      <div className="mb-20 flex flex-col gap-12">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            image={project.image}
            link={project.link}
            icon={project.icon}
            title={project.title}
            description={project.description}
            designer={project.designer}
            skills={project.skills}
          />
        ))}
      </div>

      <h1 className="text-3xl font-bold text-center">
        New projects coming soon... 🤠
      </h1>
    </Section>
  );
}

export default Projects;
