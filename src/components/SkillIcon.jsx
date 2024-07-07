function SkillIcon({ src }) {
  return (
    <img
      src={src}
      alt="Skill icon"
      className="hover:-translate-y-2 duration-300 cursor-pointer"
    />
  );
}

export default SkillIcon;
