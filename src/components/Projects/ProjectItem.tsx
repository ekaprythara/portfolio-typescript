import { BsGithub } from "react-icons/bs";
import { motion } from "framer-motion";

type ProjectItemProps = {
  title: string;
  image: string;
  viewLink: string;
  githubLink: string;
  description: string;
  techStack: string[];
  animationDelay: number;
};

const ProjectItem = ({
  title,
  image,
  viewLink,
  githubLink,
  description,
  techStack,
  animationDelay,
}: ProjectItemProps) => {
  return (
    <motion.div
      className="max-w-[450px] h-auto rounded-md p-2"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1, delay: animationDelay }}
      variants={{
        hidden: { opacity: 0, y: 200 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <div className="p-8 w-full rounded-3xl bg-white shadow-md shadow-secondary dark:shadow-none dark:bg-dark">
        <img
          src={image}
          alt={title}
          width={2360}
          height={1640}
          className="rounded-xl object-fill bg-cover transition-all ease-in-out duration-500 border border-slate-100 dark:border-color-primary hover:scale-110"
        />
      </div>
      <div className="px-2">
        <div className="flex items-center justify-between gap-3 mt-7">
          <a
            href={viewLink}
            target="_blank"
            rel="noreferrer"
            className="font-poppins font-bold text-lg uppercase block hover:text-primary duration-300 w-fit"
          >
            {title}
          </a>
          <a
            href={githubLink}
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary duration-500 block md:hidden"
          >
            <BsGithub size={30} />
          </a>
          <a
            href={githubLink}
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary duration-500 hidden md:block"
          >
            <BsGithub size={35} />
          </a>
        </div>
        <p className="font-mulish tracking-wide font-medium text-base mt-5">
          {description}
        </p>
        <ul className="flex flex-wrap mt-5 gap-2">
          {techStack.map((item, index) => (
            <li
              key={index}
              className="rounded-md py-2 px-4 text-sm lg:text-base font-mulish font-medium tracking-wide bg-white shadow-md shadow-secondary dark:shadow-none dark:bg-dark text-center"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default ProjectItem;
