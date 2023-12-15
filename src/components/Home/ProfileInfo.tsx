import { TypeAnimation } from "react-type-animation";
import Button from "../Button";
import { motion } from "framer-motion";
import waving from "../../assets/waving.png";

const ProfileInfo = () => {
  return (
    <div className="flex flex-col justify-start items-center lg:justify-center lg:items-center pt-5 lg:pt-0 gap-10 order-2 lg:order-1">
      <div className="flex flex-col gap-4">
        <motion.h2
          className="font-bold text-4xl text-center lg:text-start lg:text-5xl text-color-primary dark:text-light leading-tight"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          Frontend Web Developer
          <img
            src={waving}
            alt="Waving hand symbol"
            className="w-[3.2rem] h-[3.2rem] ms-5 lg:inline-block hidden"
          />
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
            sequence={[
              "Hi, I'm Eka Priyanthara. A passionate Frontend Web Developer based in Denpasar, Bali.",
            ]}
            cursor={false}
            speed={20}
            wrapper="p"
            className="text-color-secondary dark:text-slate-300 ms-1 inline-block font-mulish tracking-wide text-center lg:text-start text-base lg:text-lg leading-normal font-medium"
          />
        </motion.div>

        <motion.a
          href="https://drive.google.com/file/d/14_-YhL2i3twFKFRK-rwVmeutJ0NRW0Cg/view?usp=sharing"
          className="mt-2 ms-1 text-center lg:text-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <Button title="Download CV" />
        </motion.a>
      </div>
    </div>
  );
};

export default ProfileInfo;
