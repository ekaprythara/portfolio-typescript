import { motion } from "framer-motion";
import { ReactNode } from "react";

type TitleProps = {
  children: ReactNode;
};

const Title = ({ children }: TitleProps) => {
  return (
    <motion.h1
      className="text-center text-2xl md:text-3xl lg:text-4xl font-bold text-primary uppercase"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: 300 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      {children}
    </motion.h1>
  );
};

export default Title;
