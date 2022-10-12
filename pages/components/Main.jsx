import { motion } from "framer-motion";

const Main = () => {
  return (
    <div>
      <motion.div whileHover={{ scale: 1.1 }}>
        <div className="text-6xl sm:text-8xl font-black tracking-wider my-4">
          HELLO
        </div>
      </motion.div>
      <hr className="border-pink-600 border-1 mb-6 mt-4 w-12 mx-auto" />
      <div className="font-light mb-8">
        I&apos;m Daniel, a Computer Science student with a passion for Software
        Development.
      </div>
    </div>
  );
};

export default Main;
