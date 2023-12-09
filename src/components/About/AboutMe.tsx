import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <>
      <motion.h2
        className="text-lg md:text-xl lg:text-2xl h-full font-poppins font-bold text-color-primary dark:text-light"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
        variants={{
          hidden: { opacity: 0, y: 200 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        A passionate Frontend Web Developer based in Denpasar, Bali.
      </motion.h2>
      <motion.p
        className="mt-2 text-base h-full text-justify font-mulish font-medium text-color-secondary dark:text-slate-300 tracking-wide"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
        variants={{
          hidden: { opacity: 0, y: 200 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        Saya merupakan fresh graduate dari Institut Teknologi dan Bisnis STIKOM
        Bali dengan jurusan Sistem Komputer. Memiliki minat lebih di bidang
        pemrograman web, sehingga mampu membuat sistem informasi sebagai salah
        satu tugas akhir di kuliah. Saya merupakan pribadi yang senang
        mengeksplorasi hal baru, termasuk mengasah kemampuan di bidang
        pemrograman web, seperti Frontend Developer. Saya terbuka untuk peluang
        kerja di bidang Frontend Web Developer.
      </motion.p>
    </>
  );
};

export default AboutMe;
