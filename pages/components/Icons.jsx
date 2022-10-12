import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faUser } from "@fortawesome/free-solid-svg-icons";
import { faDiscord, faGithub } from "@fortawesome/free-brands-svg-icons";

const Icons = () => {
  const click = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex w-64 sm:w-96 justify-between">
      <div className="flex flex-col">
        <h1 className="font-extralight m-1 text-left">
          <FontAwesomeIcon
            icon={faLocationDot}
            className="mx-1 text-pink-600"
          />
          United Kingdom
        </h1>
        <h1 className="font-extralight m-1 text-left">
          <FontAwesomeIcon icon={faUser} className="mx-1 text-pink-600" />
          19
        </h1>
      </div>
      <div className="flex flex-col justify-end text-lg m-1">
        <a href="https://github.com/jum-w" title="GitHub">
          <FontAwesomeIcon
            icon={faGithub}
            className="mx-1 m-1 text-pink-600 hover:text-pink-400 duration-150 text-sm"
          />
        </a>
        <a href="#" onClick={click} title="jum#0607">
          <FontAwesomeIcon
            icon={faDiscord}
            className="mx-1 m-1 text-pink-600 hover:text-pink-400 duration-150 text-sm"
          />
        </a>
      </div>
    </div>
  );
};

export default Icons;
