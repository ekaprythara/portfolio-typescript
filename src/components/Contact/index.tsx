import ContactForm from "./ContactForm";
import { SelectedPage } from "../../utils/types";
import { motion } from "framer-motion";
import Title from "../Title";
import { TbMapSearch, TbMail } from "react-icons/tb";

type ContactProps = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Contact = ({ setSelectedPage }: ContactProps) => {
  return (
    <motion.div
      id="contact"
      className="flex flex-col justify-center items-center mt-10 pt-20 pb-10 px-5"
      onViewportEnter={() => setSelectedPage(SelectedPage.Contact)}
    >
      <Title>Contact</Title>
      <div className="mt-10 w-full">
        <div className="bg-white shadow-md shadow-secondary dark:shadow-none dark:bg-dark rounded-lg max-w-[1080px] m-auto p-5 gap-10 lg:p-10 grid grid-cols-1 grid-rows-[0.5fr_1.5fr] md:grid-cols-2 md:grid-rows-1 overflow-hidden">
          <motion.div
            className="h-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-color-primary dark:text-white font-poppins font-bold">
              Feel free to contact me!
            </h2>
            <div className="mt-10 flex flex-col gap-5 justify-start items-start">
              <div className="grid grid-cols-[0.2fr_1.8fr] grid-rows-1 gap-5">
                <div className="flex justify-center items-center">
                  <TbMapSearch size={30} className="text-primary" />
                </div>
                <div className="grid grid-rows-2 grid-cols-none">
                  <div className="font-poppins font-bold text-base">
                    Location
                  </div>
                  <div className="font-mulish tracking-wide font-medium dark:text-white text-color-secondary">
                    <span className="cursor-pointer text-sm lg:text-base hover:text-primary duration-500">
                      Denpasar, Bali
                    </span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-[0.2fr_1.8fr] grid-rows-1 gap-5">
                <div className="flex justify-center items-center">
                  <TbMail size={30} className="text-primary" />
                </div>
                <div className="grid grid-rows-2 grid-cols-none">
                  <div className="font-poppins font-bold text-base">Email</div>
                  <div className="font-mulish tracking-wide font-medium dark:text-white text-color-secondary">
                    <a
                      href="mailto:ekapriyanthara@gmail.com"
                      className="cursor-pointer text-sm lg:text-base hover:text-primary duration-500"
                    >
                      ekapriyanthara@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <ContactForm />
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
