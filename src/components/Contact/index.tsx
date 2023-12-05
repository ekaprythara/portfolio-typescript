import ContactForm from "./ContactForm";
import contact from "../../assets/contact.png";
import { SelectedPage } from "../../utils/types";
import { motion } from "framer-motion";
import Title from "../Title";

type ContactProps = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Contact = ({ setSelectedPage }: ContactProps) => {
  return (
    <motion.div
      id="contact"
      className="flex flex-col justify-center items-center pt-24 pb-20"
      onViewportEnter={() => setSelectedPage(SelectedPage.Contact)}
    >
      <Title>Contact</Title>
      <div className="mt-10 w-full">
        <div className="bg-slate-200 dark:bg-dark rounded-lg max-w-[1080px] m-auto p-5 gap-0 md:gap-10 lg:p-10 grid grid-cols-1 md:grid-cols-2 overflow-hidden">
          <motion.div
            className="h-full justify-center items-center hidden md:flex"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <img src={contact} alt="" className="transform -scale-x-100" />
          </motion.div>
          <ContactForm />
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
