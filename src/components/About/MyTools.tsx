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
      <h2 className="text-xs md:text-sm lg:text-base text-primary">Tools</h2>
      <div className="flex flex-row flex-wrap gap-2 md:gap-3">
        <div className="bg-slate-200 dark:bg-dark p-3 rounded-lg flex items-center justify-center text-[#0078d7]  transition-colors duration-500">
          <SiVisualstudiocode
            size={38}
            className="w-[30px] h-[30px] md:w-auto md:h-auto"
          />
        </div>
        <div className="bg-slate-200 dark:bg-dark p-3 rounded-lg flex items-center justify-center text-[#f34f29]  transition-colors duration-500">
          <BsGit size={40} className="w-[30px] h-[30px] md:w-auto md:h-auto" />
        </div>
        <div className="bg-slate-200 dark:bg-dark p-3 rounded-lg flex items-center justify-center text-[#ffffff]  transition-colors duration-500">
          <BsGithub
            size={40}
            className="w-[30px] h-[30px] md:w-auto md:h-auto text-black dark:text-white"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default MyTools;
