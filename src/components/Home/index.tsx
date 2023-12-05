import ProfilePicture from "./ProfilePicture";
import ProfileInfo from "./ProfileInfo";
import { SelectedPage } from "../../utils/types";
import { motion } from "framer-motion";

type HomeProps = {
  isOnTop: boolean;
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ isOnTop, setSelectedPage }: HomeProps) => {
  return (
    <motion.section
      id="home"
      className="px-5 md:px-10 lg:px-15 xl:px-20 h-screen"
      onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
    >
      <div
        className={`grid grid-rows-[0.8fr_1.2fr] grid-cols-1 lg:grid-rows-1 lg:grid-cols-[1.2fr_0.8fr] w-full h-full ${
          isOnTop ? "pt-20" : "pt-16"
        }`}
      >
        <ProfileInfo />
        <ProfilePicture />
      </div>
    </motion.section>
  );
};

export default Home;
