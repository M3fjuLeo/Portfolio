import { FiGithub } from "react-icons/fi";
import ProjectCard from "../components/ProjectCard";
import Section from "../components/Section";

const projects = [
  {
    id: 1,
    title: "The Wild Oasis",
    link: "https://the-wild-oasis-omega-black.vercel.app/login",
    image: "../images/Home-Untitled.png",
  },
  {
    id: 2,
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
    id: 3,
    title: "🍕 Fast React Pizza.Co",
    link: "https://fast-react-pizza-co-lime.vercel.app/",
    image: "../images/FastReactPizza-homePage.png",
    description: `Simple application, where users can order one or more pizzas from a menu.`,
    designer: "This website was created during Jonas Schmedtmann's course",
    skills: ["React", "Tailwind", "React Router", "Redux"],
  },
  {
    id: 4,
    title: "🍿 usePopcorn",
    link: "https://use-popcorn-vert.vercel.app/",
    image: "../images/usePopcorn.png",
    description: `The website allows users to search for movies, rate them, and add them to their watched library.`,
    designer:
      "The application was created based on the Jonas Schmedtmann course.",
    skills: ["React", "CSS", "API"],
  },
];

function Projects() {
  return (
    <Section id="projects" styles="bg-gray-50">
      <h1 className="text-center font-bold text-3xl mb-20">My Projects 👇</h1>

      <div className="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            image={project.image}
            link={project.link}
            // icon={project.icon}
            // title={project.title}
            // description={project.description}
            // designer={project.designer}
            // skills={project.skills}
          />
        ))}
      </div>

      <div className="text-center leading-10 text-gray-800">
        <h1 className="text-3xl font-bold ">New projects coming soon... 🤠</h1>
        <div className="flex items-center justify-center gap-4">
          <p>More projects on github</p>
          <a href="https://github.com/M3fjuLeo" target="_blank">
            <FiGithub className="hover:text-blue-500 duration-200 cursor-pointer text-2xl" />
          </a>
        </div>
      </div>
    </Section>
  );
}

export default Projects;
