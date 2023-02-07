import Image from "next/image";
import { motion } from "framer-motion";

const Project = (props) => {
  return (
    <div className="justify-center">
      <motion.div whileHover={{ scale: 1.1 }} delay={{ delay: 1 }}>
        <a
          className="mx-8 mb-3 justify-center flex border mx-auto rounded-lg"
          href={props.url}
        >
          <Image
            className="rounded-lg border border-black"
            src={props.img}
            alt={props.alt}
            width={627}
            height={360}
            quality={100}
          />
        </a>
      </motion.div>
    </div>
  );
};

export default Project;
