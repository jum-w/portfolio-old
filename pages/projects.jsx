import Project from "./components/Project";
import Navbar from "./components/Navbar";
import calc from "./components/firefox_ivKw0csUXq.png";
import port from "./components/firefox_BZppDFiUN9.png";
import { motion } from "framer-motion";

const Projects = () => {
  const click = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="flex flex-col justify-center mx-auto max-w-lg 2xl:max-w-full 2xl:flex-row">
          <Project img={port} alt="image of portfolio website" />
          <Project
            img={calc}
            alt="image of calc website"
            url="https://jum.lol"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
