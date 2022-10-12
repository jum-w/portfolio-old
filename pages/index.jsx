import Head from "next/head";
import Navbar from "./components/Navbar";
import Icons from "./components/Icons";
import Main from "./components/Main";
import { motion } from "framer-motion";

const Index = () => {
  const click = (e) => {
    e.preventDefault();
  };
  return (
    <div className="">
      <Head>
        <title>Daniel</title>
      </Head>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="flex flex-col text-center justify-center items-center h-[500px] md:h-[800px]">
          <Main />
          <Icons />
        </div>
      </motion.div>
    </div>
  );
};

export default Index;
