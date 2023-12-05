import { TypeAnimation } from "react-type-animation";
import Button from "../Button";
import { motion } from "framer-motion";

const ProfileInfo = () => {
  return (
    <div className="flex flex-col justify-center items-center lg:items-start gap-10">
      <div className="flex flex-col gap-3">
        <motion.h1
          className="font-bold text-xl md:text-2xl lg:text-3xl md:mt-4 ms-[0.10rem]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          Hello, I&apos;m
        </motion.h1>
        <motion.h2
          className="font-bold text-4xl md:text-5xl lg:text-6xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <span className="text-[#3bc9db]">Eka </span>
          Priyanthara
        </motion.h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <TypeAnimation
            sequence={["Frontend Web Developer"]}
            speed={20}
            wrapper="p"
            className="text-base md:text-lg lg:text-xl ms-1 inline-block"
          />
        </motion.div>
        <motion.div
          className="mt-2 ms-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <a href="https://drive.google.com/file/d/1sTXvirOHBwLSP-RBGPHMk0qtYMjzJqTs/view?usp=sharing">
            <Button title="Unduh CV" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default ProfileInfo;
