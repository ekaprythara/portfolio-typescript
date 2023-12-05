import imgUrl from "../../assets/profile.png";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

const ProfilePicture = () => {
  return (
    <div className="flex justify-center items-start lg:items-center">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 2 }}
        variants={{
          hidden: { opacity: 0, x: 100 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} gyroscope={true}>
          <div className="max-h-[500px] max-w-[500px] p-5">
            <img
              src={imgUrl}
              alt="Profile Picture"
              width={450}
              height={450}
              className="bg-primary dark:bg-slate-800 rounded-full w-8/12 md:w-9/12 lg:w-10/12 m-auto"
            />
          </div>
        </Tilt>
      </motion.div>
    </div>
  );
};

export default ProfilePicture;
