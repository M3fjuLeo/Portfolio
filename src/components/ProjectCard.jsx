function ProjectCard({
  icon,
  title,
  description,
  designer,
  image,
  link,
  skills,
}) {
  return (
    <div className="flex lg:gap-4 flex-col lg:flex-row bg-white rounded-xl shadow-md">
      <div className="flex-1 w-full">
        <a href={link} target="_blank" className="">
          <img
            src={image}
            alt="Project image"
            className="rounded-xl cursor-pointer object-cover w-full h-full"
          />
        </a>
      </div>

      <div className="px-2 py-12 lg:items-start lg:text-start items-center text-center flex flex-col gap-4 flex-1">
        <h1 className="font-bold text-xl flex gap-2">
          <img src={icon} className="" alt="" />
          {title}
        </h1>
        <p className="text-gray-800">{description}</p>
        <p className="text-gray-800">
          Created with{" "}
          {skills.map((skill, index) => (
            <span key={index} className="text-blue-500">
              {skill}
              {index < skills.length - 1 && ", "}
            </span>
          ))}
        </p>
        <p className="text-gray-800 text-sm">{designer}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
