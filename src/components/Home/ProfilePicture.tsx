import imgUrl from "../../assets/profile.png";
import { motion } from "framer-motion";

const ProfilePicture = () => {
  return (
    <div className="flex justify-center items-end lg:justify-end lg:items-center order-1 lg:order-2">
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
        <div className="max-h-[450px] max-w-[450px] p-5">
          <img
            src={imgUrl}
            alt="Profile Image"
            width={450}
            height={450}
            className="bg-primary w-10/12 m-auto animate-morph bg-[50%] bg-no-repeat bg-cover border-[3px] border-solid border-[#222] rounded-[60%_40%_30%_70%/60%_30%_70%_40%] transition-all duration-100 ease-in-out"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default ProfilePicture;
