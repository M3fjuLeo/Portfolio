import { useEffect } from "react";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  });

  return (
    <div className="relative">
      <nav className="flex text-gray-800 items-center justify-between px-12 t-0 l-0 py-6 border border-b-1 shadow-sm bg-white fixed w-full">
        <h2 className="text-2xl font-bold">Mateusz</h2>

        <GiHamburgerMenu
          onClick={toggleMenu}
          className="md:hidden text-2xl cursor-pointer hover:text-blue-500 duration-200"
        />

        <ul className="md:flex hidden gap-6 font-bold text-lg">
          <li className="hover:text-blue-500 duration-200">
            <Link to="home">Home</Link>
          </li>{" "}
          <li className="hover:text-blue-500 duration-200">
            <Link to="about">About</Link>
          </li>{" "}
          <li className="hover:text-blue-500 duration-200">
            <Link to="projects">Projects</Link>
          </li>{" "}
          <li className="hover:text-blue-500 duration-200">
            <Link to="contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <nav
        className={`top-0 ${
          isOpen ? "left-0" : "left-[-100%]"
        } duration-500 w-full h-screen fixed bg-white flex items-center justify-center`}
      >
        <MdClose
          onClick={toggleMenu}
          className="absolute top-8 text-4xl right-8"
        />
        <ul className="flex flex-col gap-10 text-3xl items-center">
          <li onClick={toggleMenu} className="hover:text-blue-500 duration-200">
            <Link to="home">Home</Link>
          </li>{" "}
          <li onClick={toggleMenu} className="hover:text-blue-500 duration-200">
            <Link to="about">About</Link>
          </li>{" "}
          <li onClick={toggleMenu} className="hover:text-blue-500 duration-200">
            <Link to="projects">Projects</Link>
          </li>{" "}
          <li onClick={toggleMenu} className="hover:text-blue-500 duration-200">
            <Link to="contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
