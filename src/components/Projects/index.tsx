import { BsChevronDoubleDown } from "react-icons/bs";
import { PROJECTS as projects } from "../../utils/constants.ts";
import ProjectItem from "./ProjectItem";
import { SelectedPage } from "../../utils/types.ts";
import { motion } from "framer-motion";
import Title from "../Title.tsx";

type ProjectsProps = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Projects = ({ setSelectedPage }: ProjectsProps) => {
  return (
    <motion.div
      id="projects"
      className="flex flex-col justify-center items-center pt-24"
      onViewportEnter={() => setSelectedPage(SelectedPage.Projects)}
    >
      <Title>Projects</Title>
      {projects.length === 0 && (
        <motion.p
          className="mt-10 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          variants={{
            hidden: { opacity: 0, y: 300 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          Proyek yang ditambahkan akan tampil disini.
        </motion.p>
      )}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-center gap-5 mt-10">
        {projects.slice(0, 6).map((project, index) => (
          <div key={index}>
            <ProjectItem
              title={project.title}
              image={project.image}
              viewLink={project.viewLink}
              githubLink={project.githubLink}
              description={project.description}
              techStack={project.techStack}
              animationDelay={project.animationDelay}
            />
          </div>
        ))}
      </div>
      {projects.length > 6 && (
        <span className="text-center mt-10">
          <button>
            <BsChevronDoubleDown
              size={27}
              color="#3bc9db"
              className="animate-bounce"
            />
          </button>
        </span>
      )}
    </motion.div>
  );
};

export default Projects;
