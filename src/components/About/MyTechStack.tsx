import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiMysql,
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
      <h2 className="text-lg dark:text-white text-color-primary text-center lg:text-start font-poppins font-bold">
        Tech Stack
      </h2>
      <div className="flex flex-row flex-wrap justify-center items-center lg:justify-start gap-2 md:gap-3">
        <div className="bg-[#E44D26] p-2 rounded-xl text-white">
          <SiHtml5 size={40} />
        </div>
        <div className="bg-[#264DE4] p-2 rounded-xl text-white">
          <SiCss3 size={40} />
        </div>
        <div className="bg-[#CC6699] p-2 rounded-xl text-white">
          <SiSass size={40} />
        </div>
        <div className="bg-white shadow-md p-2 rounded-xl text-[#3490DC]">
          <SiTailwindcss size={40} />
        </div>
        <div>
          <SiJavascript
            size={56}
            className="bg-white text-[#F1DD35] rounded-xl"
          />
        </div>
        <div className="bg-color-primary p-2 rounded-xl text-[#61DAFB]">
          <SiReact size={40} />
        </div>
        <div className="bg-white shadow-md p-2 rounded-xl text-[#f55247]">
          <SiLaravel size={40} />
        </div>
        <div className="bg-color-primary p-2 rounded-xl text-[#61DAFB]">
          <SiMysql size={40} />
        </div>
      </div>
    </motion.div>
  );
};

export default MyTechStack;
