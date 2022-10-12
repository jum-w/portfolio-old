import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-center p-2 text-black font-extralight mb-8">
      <Link href="/">
        <a className="group transition duration-300 m-2">
          Home
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-pink-600"></span>
        </a>
      </Link>
      <Link href="projects">
        <a className="group transition duration-300 my-2 mx-4">
          Projects
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-pink-600"></span>
        </a>
      </Link>
    </div>
  );
};

export default Navbar;
