import { BsGit, BsGithub } from "react-icons/bs";
import { SiVisualstudiocode } from "react-icons/si";
import { motion } from "framer-motion";

const MyTools = () => {
  return (
    <motion.div
      className="flex flex-col gap-2"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      variants={{
        hidden: { opacity: 0, y: 200 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <h2 className="text-lg text-color-primary text-center lg:text-start font-poppins font-bold">
        Tools
      </h2>
      <div className="flex flex-row flex-wrap justify-center items-center lg:justify-start gap-2 md:gap-3">
        <div className="bg-color-primary p-2 rounded-xl text-[#0078D7]">
          <SiVisualstudiocode size={40} />
        </div>
        <div className="bg-color-primary p-2 rounded-xl text-[#F34F29]">
          <BsGit size={40} />
        </div>
        <div className="bg-color-primary p-2 rounded-xl text-[#FFFFFF]">
          <BsGithub size={40} />
        </div>
      </div>
    </motion.div>
  );
};

export default MyTools;
