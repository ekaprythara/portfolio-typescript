import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiSass,
  SiTailwindcss,
} from "react-icons/si";
import { motion } from "framer-motion";

const MyTechStack = () => {
  return (
    <motion.div
      className="flex flex-col gap-2"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7, delay: 0.1 }}
      variants={{
        hidden: { opacity: 0, y: 200 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <h2 className="text-xs md:text-sm lg:text-base text-primary">
        Tech Stack
      </h2>
      <div className="flex flex-row flex-wrap gap-2 md:gap-3">
        <div className="bg-slate-200 dark:bg-dark p-3 rounded-lg flex items-center justify-center text-[#e34c26] transition-colors duration-500">
          <SiHtml5
            size={40}
            className="w-[30px] h-[30px] md:w-auto md:h-auto"
          />
        </div>
        <div className="bg-slate-200 dark:bg-dark p-3 rounded-lg flex items-center justify-center text-[#264de4] transition-colors duration-500">
          <SiCss3
            size={40}
            className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] lg:w-auto lg:h-auto"
          />
        </div>
        <div className="bg-slate-200 dark:bg-dark p-3 rounded-lg flex items-center justify-center text-[#cc6699] transition-colors duration-500">
          <SiSass
            size={40}
            className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] lg:w-auto lg:h-auto"
          />
        </div>
        <div className="bg-slate-200 dark:bg-dark p-3 rounded-lg flex items-center justify-center text-[#f0db4f] transition-colors duration-500">
          <SiJavascript
            size={40}
            className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] lg:w-auto lg:h-auto"
          />
        </div>
        <div className="bg-slate-200 dark:bg-dark p-3 rounded-lg flex items-center justify-center text-[#61dafb] transition-colors duration-500">
          <SiReact
            size={40}
            className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] lg:w-auto lg:h-auto"
          />
        </div>
        <div className="bg-slate-200 dark:bg-dark p-3 rounded-lg flex items-center justify-center text-[#3490dc] transition-colors duration-500">
          <SiTailwindcss
            size={40}
            className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] lg:w-auto lg:h-auto"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default MyTechStack;
