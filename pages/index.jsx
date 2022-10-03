import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faUser } from "@fortawesome/free-solid-svg-icons";
import { faDiscord, faGithub } from "@fortawesome/free-brands-svg-icons";

const index = () => {
  return (
    <div className="bg-gray-200 text-black min-h-screen text-xl">
      <Head>
        <title>Daniel</title>
      </Head>
      <div className="flex justify-center p-2 text-black font-extralight">
        <a href="/" className="group transition duration-300 m-2">
          Home
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-pink-600"></span>
        </a>
        <a href="projects" className="group transition duration-300 my-2 mx-4">
          Projects
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-pink-600"></span>
        </a>
      </div>

      <div className="flex flex-col text-center justify-center items-center h-[500px] md:h-[800px]">
        <div className="text-6xl sm:text-8xl font-black tracking-wider my-4">
          HELLO
        </div>
        <hr className="border-pink-600 border-1 mb-6 mt-4 w-12" />
        <div className="font-light mb-4">
          I&apos;m Daniel, a Computer Science student with a passion for Web
          Development.
        </div>
        <div className="flex w-64 sm:w-96 justify-between">
          <div className="flex flex-col">
            <h1 className="text-lg font-extralight m-1 text-left">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="mx-1 text-pink-600"
              />
              United Kingdom
            </h1>
            <h1 className="text-lg font-extralight m-1 text-left">
              <FontAwesomeIcon icon={faUser} className="mx-1 text-pink-600" />
              19
            </h1>
          </div>
          <div className="flex flex-col justify-end text-lg m-1">
            <a href="https://github.com/jum-w">
              <FontAwesomeIcon
                icon={faGithub}
                className="mx-1 m-1 text-pink-600 hover:text-pink-400 duration-150"
              />
            </a>
            <a href="">
              <FontAwesomeIcon
                icon={faDiscord}
                className="mx-1 m-1 text-pink-600 hover:text-pink-400 duration-150"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
