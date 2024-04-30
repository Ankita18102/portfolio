import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import Hamburger from "hamburger-react";
import { useState } from "react";

const Navbar = ({
  aboutScroll,
  skillsScroll,
  experienceScroll,
  projectsScroll,
}) => {
  const navigate = useNavigate();
  const [isOpen, setOpen] = useState(false);
  const handleClick = () => {
    navigate("/contact");
  };

  return (
    <>
      <div className="flex bg-white text-teal-600 items-center justify-between w-full px-10 py-2 z-50 shadow-md top-0 fixed md:hidden">
        <a href="/">
          <img src={logo} alt="Logo" className="w-14" />
        </a>
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
      <nav className={`hidden md:flex font-roboto-slab text-xl bg-white text-teal-600 items-center justify-between w-full px-10 py-2 z-50 shadow-md top-0 fixed transition-transform duration-500 ${
        isOpen ? "translate-y-14" : "translate-y-0"
      }`}>
        <ul className="flex items-center justify-center gap-10 cursor-pointer">
          <a href="/">
            <img src={logo} alt="Logo" className="w-14" />
          </a>
          <li onClick={aboutScroll}>About</li>
          <li onClick={skillsScroll}>Skills</li>
          <li onClick={experienceScroll}>Experience</li>
          <li onClick={projectsScroll}>Projects</li>
        </ul>
        <button
          className="border-2 rounded-full px-3 border-teal-600 hover:bg-teal-500 hover:text-white transition duration-300"
          onClick={handleClick}
        >
          Say Hello
        </button>
      </nav>
      {/* Drawer */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden bg-white text-teal-600 fixed top-16 left-0 w-full z-50 shadow-md transition-max-height duration-500 overflow-hidden`}
        style={{
          maxHeight: isOpen ? "500px" : "0",
          transitionDuration: isOpen ? "500ms" : "200ms" // Adjust the duration as needed
        }}
      >
        <ul className="ml-12 my-6">
          <li className="py-2" onClick={() => { aboutScroll(); setOpen(false); }}>About</li>
          <li className="py-2" onClick={() => { skillsScroll(); setOpen(false); }}>Skills</li>
          <li className="py-2" onClick={() => { experienceScroll(); setOpen(false); }}>Experience</li>
          <li className="py-2" onClick={() => { projectsScroll(); setOpen(false); }}>Projects</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
