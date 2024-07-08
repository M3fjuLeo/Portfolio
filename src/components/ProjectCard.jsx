function ProjectCard() {
  return (
    <div className="flex lg:gap-4 flex-col lg:flex-row bg-white rounded-xl shadow-md">
      <div className="flex-1 w-full">
        <a href="https://gymate-ruby.vercel.app/" target="_blank" className="">
          <img
            src="../images/Gymate.png"
            alt="Project image"
            className="rounded-xl cursor-pointer object-cover h-full"
          />
        </a>
      </div>

      <div className="px-2 py-12 lg:items-start lg:text-start items-center text-center flex flex-col gap-4 flex-1">
        <h1 className="font-bold text-xl flex gap-2">
          <img src="../images/gymate-icon.png" className="size-8" alt="" />
          Gymate
        </h1>
        <p className="text-gray-800">
          Gymate provides a space for people to improve their physical fitness
          and overall health through regular exercise and physical activity.
          Will be developed in the future...
        </p>
        <p className="text-gray-800">
          Created with
          <span className="text-blue-500"> React Vite </span>
          and
          <span className="text-blue-500"> Tailwind </span>
        </p>
        <p className="text-gray-800 text-sm">Designed by RadiusTheme</p>
      </div>
    </div>
  );
}

export default ProjectCard;
