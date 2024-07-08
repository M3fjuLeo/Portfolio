import { useEffect } from "react";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { Link } from "react-scroll";

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
    <div className="relative z-20">
      <nav className="flex text-gray-800 items-center justify-between px-12 t-0 l-0 py-6 border border-b-1 shadow-sm bg-white fixed w-full">
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="text-2xl font-bold cursor-pointer"
        >
          Mateusz
        </Link>

        <GiHamburgerMenu
          onClick={toggleMenu}
          className="md:hidden text-2xl cursor-pointer hover:text-blue-500 duration-200"
        />

        <ul className="md:flex hidden gap-6 font-bold text-lg">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="hover:text-blue-500 duration-200 cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="hover:text-blue-500 duration-200 cursor-pointer"
          >
            About
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="hover:text-blue-500 duration-200 cursor-pointer"
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="hover:text-blue-500 duration-200 cursor-pointer"
          >
            Contact
          </Link>
        </ul>
      </nav>

      <nav
        className={`top-0 ${
          isOpen ? "left-0" : "left-[-100%]"
        } duration-500 w-full h-screen fixed bg-white flex items-center justify-center`}
      >
        <MdClose
          onClick={toggleMenu}
          className="absolute top-8 text-4xl right-8 cursor-pointer hover:text-blue-500 duration-200"
        />
        <ul className="flex flex-col gap-10 text-3xl items-center">
          <Link
            to="home"
            smooth={true}
            duration={500}
            onClick={toggleMenu}
            className="hover:text-blue-500 duration-200 cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            onClick={toggleMenu}
            className="hover:text-blue-500 duration-200 cursor-pointer"
          >
            About
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            onClick={toggleMenu}
            className="hover:text-blue-500 duration-200 cursor-pointer"
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            onClick={toggleMenu}
            className="hover:text-blue-500 duration-200 cursor-pointer"
          >
            Contact
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
