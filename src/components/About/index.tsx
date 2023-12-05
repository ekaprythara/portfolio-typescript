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
    <section
      id="about"
      className="flex flex-col justify-center items-center pt-24"
    >
      <Title>About</Title>
      <motion.div
        className="text-lg grid grid-cols-none grid-rows-1 lg:grid-cols-[0.8fr_1.2fr] lg:grid-rows-none gap-5 lg:gap-10 items-start mt-10"
        onViewportEnter={() => setSelectedPage(SelectedPage.About)}
      >
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
        <div className="grid grid-rows-[0.6fr_1.4fr] grid-cols-1 gap-5 h-full text-sm md:text-base lg:text-lg">
          <AboutMe />
          <div className="flex flex-col gap-5">
            <MyTechStack />
            <MyTools />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
