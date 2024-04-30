import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

// eslint-disable-next-line react/prop-types
const Navbar = ({ aboutScroll, skillsScroll, experienceScroll, projectsScroll }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact");
  };

  return (
    <nav className="hidden md:flex font-roboto-slab text-xl bg-white text-teal-600  items-center justify-between w-full px-10 py-2 z-50 shadow-md top-0 fixed">
      <ul className="flex items-center justify-center gap-10 cursor-pointer">
        <a href="/">
          <img src={logo} alt="Logo" className="w-14"/>
        </a>
        <li onClick={aboutScroll}>About</li>
        <li onClick={skillsScroll}>Skills</li>
        <li onClick={experienceScroll}>Experience</li>
        <li onClick={projectsScroll}>Projects</li>
      </ul>
      <button className="border-2 rounded-full px-3 border-teal-600 hover:bg-teal-500 hover:text-white transition duration-300" onClick={handleClick}>
        Say Hello
      </button>
    </nav>
  );
};

export default Navbar;
