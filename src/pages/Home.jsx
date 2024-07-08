import { AiOutlineLinkedin } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
import Section from "../components/Section";
import SkillIcon from "../components/SkillIcon";

function Home() {
  return (
    <Section
      id="home"
      bg="bg-gray-50"
      styles="bg-gray-50 lg:h-lvh h-auto lg:pt-60"
    >
      <div className="flex flex-col gap-20">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-24 xl:gap-28 ">
          <div className="flex flex-col gap-8 text-center lg:text-start order-2 lg:order-1 max-w-[30rem]">
            <h1 className="font-bold text-5xl sm:text-6xl text-gray-800">
              Front-End React Developer 👋
            </h1>

            <p className="text-xl font-light">
              Hi, I'm Mateusz Ropek. A passionate Front-end React Developer
              based in Krakow, Poland. 📍
            </p>

            <div className="flex text-3xl gap-4 lg:justify-start justify-center">
              <a
                href="https://www.linkedin.com/in/mateusz-ropek-45b782258/"
                target="_blank"
              >
                <AiOutlineLinkedin className="hover:text-blue-500 duration-200 cursor-pointer" />
              </a>
              <a href="https://github.com/M3fjuLeo" target="_blank">
                <FiGithub className="hover:text-blue-500 duration-200 cursor-pointer" />
              </a>
            </div>
          </div>

          <div className="blob size-[16rem] sm:size-[20rem] xl:size-[22rem] order-1"></div>
        </div>

        <div className="flex gap-12 flex-col lg:flex-row items-center text-gray-700">
          <h3 className="lg:border-r-2 lg:border-b-0 border-b-2 text-xl border-gray-400 lg:pr-6">
            Tech Stack
          </h3>

          <div className="flex gap-8 flex-wrap justify-center">
            <SkillIcon src="https://skillicons.dev/icons?i=html,css" />
            <SkillIcon src="https://skillicons.dev/icons?i=js" />
            <SkillIcon src="https://skillicons.dev/icons?i=react,redux,vite" />
            <SkillIcon src="https://skillicons.dev/icons?i=tailwind" />
            {/* <img src="https://skillicons.dev/icons?i=mysql" alt="" /> */}
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Home;
