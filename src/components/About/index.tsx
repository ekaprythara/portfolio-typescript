import { SelectedPage } from "../../utils/types";
import Title from "../Title";
import AboutMe from "./AboutMe";
import MyTechStack from "./MyTechStack";
import MyTools from "./MyTools";
import PortraitPicture from "./PortraitPicture";
import { motion } from "framer-motion";

type AboutProps = {
  setSelectedPage: (value: SelectedPage) => void;
};

const About = ({ setSelectedPage }: AboutProps) => {
  return (
    <motion.section
      id="about"
      className="mt-10 pt-20 pb-10 px-5"
      onViewportEnter={() => setSelectedPage(SelectedPage.About)}
    >
      <Title>About Me</Title>
      <motion.div className="text-lg grid grid-cols-none grid-rows-1 lg:grid-cols-2 lg:grid-rows-none gap-5 lg:gap-10 items-start mt-10">
        <motion.div
          className="flex flex-col justify-center items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 2 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <PortraitPicture />
        </motion.div>
        <div className="flex flex-col justify-start items-start gap-2 text-sm md:text-base lg:text-lg">
          <AboutMe />
          <div className="flex flex-col gap-5 mt-2 w-full">
            <MyTechStack />
            <MyTools />
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default About;
