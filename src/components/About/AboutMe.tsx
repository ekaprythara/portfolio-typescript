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
        A passionate Web Developer based in Denpasar, Bali.
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
        Saya adalah lulusan Institut Teknologi dan Bisnis STIKOM Bali, jurusan
        Sistem Komputer. Selama masa studi, saya memiliki minat yang besar di
        bidang pemrograman web. Salah satu pencapaian signifikan saya adalah
        berhasil membuat sistem informasi sebagai tugas akhir kuliah, yang
        menunjukkan kemampuan saya dalam pengembangan web.
      </motion.p>
      <motion.p
        className="mt-2 text-base h-full text-justify font-mulish font-medium text-color-secondary dark:text-slate-300 tracking-wide"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
        variants={{
          hidden: { opacity: 0, y: 200 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        Sebagai seorang individu, saya senang mengeksplorasi hal-hal baru dan
        terus belajar untuk meningkatkan keterampilan saya. Saya terbuka untuk
        peluang kerja di bidang Web Developer, di mana saya dapat menerapkan
        pengetahuan dan keterampilan yang telah saya pelajari, serta terus
        berkembang dalam karir saya.
      </motion.p>
    </>
  );
};

export default AboutMe;
