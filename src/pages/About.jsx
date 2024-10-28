import Section from "../components/Section";

function About() {
  return (
    <Section id="about">
      <div className="mx-auto items-center justify-center lg:flex-row flex flex-col gap-16 max-w-[70rem]">
        <div className="relative flex items-center justify-center max-w-[40rem]">
          <img
            src="../images/about-image.webp"
            alt=""
            className="h-auto md:min-w-[25rem] w-[35rem] rounded-xl"
          />

          <div className="absolute -bottom-6 -right-10 size-[10rem] items-center md:flex hidden justify-center bg-white rounded-full">
            <img src="../images/about-man.png" alt="" className="size-16" />
            <img
              className="absolute spin"
              src="../images/about-spinner.svg"
              alt=""
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 text-center lg:text-start">
          <span className="uppercase text-blue-700 font-bold">About me</span>
          <h3 className="text-2xl font-bold text-gray-800">
            Front-end Developer based in Krakow, Poland 📍
          </h3>
          <p className="font-medium text-gray-600">
            Hello! My name is Mateusz, and I’m a Computer Science student and a
            passionate Frontend Developer focused on building and developing
            websites.
          </p>
          <p className="font-medium text-gray-600">
            My primary tech stack includes React combined with Tailwind CSS, and
            I use React Query or Redux for state management. I’m currently
            expanding my skill set at university, where I’m learning Python,
            C++, Figma, and MySQL. Additionally, I have experience working with
            Supabase.
          </p>
        </div>
      </div>
    </Section>
  );
}

export default About;
