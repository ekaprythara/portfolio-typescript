import { useState } from "react";
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
  const [onMouseOver, setOnMouseOver] = useState(false);

  const onHoverHandler = () => {
    setOnMouseOver(true);
  };

  const onLeaveHandler = () => {
    setOnMouseOver(false);
  };

  return (
    <motion.div
      className="max-w-[450px] h-auto rounded-md p-2"
      onMouseOver={onHoverHandler}
      onMouseLeave={onLeaveHandler}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1, delay: animationDelay }}
      variants={{
        hidden: { opacity: 0, y: 200 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <div className="p-8 rounded-3xl bg-slate-200 dark:bg-dark">
        <img
          src={image}
          alt={title}
          width={2360}
          height={1640}
          className={`rounded-lg object-fill bg-cover transition-all ${
            onMouseOver && "scale-105 duration-300"
          }`}
        />
      </div>
      <div className="p-2">
        <div className="flex items-center justify-between gap-3 mt-7">
          <a
            href={viewLink}
            target="_blank"
            rel="noreferrer"
            className="font-bold text-xs md:text-sm lg:text-base block hover:text-[#3BC9DB] w-fit"
          >
            {title}
          </a>
          <a
            href={githubLink}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#3BC9DB] block md:hidden"
          >
            <BsGithub size={25} />
          </a>
          <a
            href={githubLink}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#3BC9DB] hidden md:block"
          >
            <BsGithub size={30} />
          </a>
        </div>
        <p className="text-xs md:text-sm lg:text-base mt-5">{description}</p>
        <ul className="flex flex-wrap mt-5 gap-2">
          {techStack.map((item, index) => (
            <li
              key={index}
              className="rounded-md py-2 px-4 text-sm bg-slate-200 dark:bg-dark text-center"
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
