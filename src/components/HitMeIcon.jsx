function HitMeIcon({ icon: Icon, title, description }) {
  return (
    <div className="flex items-center gap-4">
      <div className="shadow-2xl border rounded-full p-2 cursor-pointer">
        <Icon className="text-4xl text-blue-500 rounded-full" />
      </div>
      <div>
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-gray-800 text-md hover:text-blue-500 cursor-pointer duration-200">
          {description}
        </p>
      </div>
    </div>
  );
}

export default HitMeIcon;
