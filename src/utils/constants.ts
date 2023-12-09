import eReportLogistik from "../assets/thumbnail/e-report.png";
import randomQuoteMachine from "../assets/thumbnail/random-quote-machine.png";
import drumMachine from "../assets/thumbnail/drum-machine.png";
import evogym from "../assets/thumbnail/evogym.png";
import portfolio from "../assets/thumbnail/portfolio.png";

type ProjectsType = {
  title: string;
  image: string;
  viewLink: string;
  githubLink: string;
  description: string;
  techStack: string[];
  animationDelay: number;
}[];

export const PROJECTS: ProjectsType = [
  {
    title: "Portfolio",
    image: portfolio,
    viewLink: "#",
    githubLink: "https://github.com/ekaprythara/portfolio-typescript",
    description:
      "Project portfolio saya yang dibuat dengan menggunakan React & Typescript",
    techStack: ["React", "Tailwind CSS", "Typescript"],
    animationDelay: 0.2,
  },
  {
    title: "Evogym Landing Page",
    image: evogym,
    viewLink: "https://evogym-zeta.vercel.app/",
    githubLink: "https://github.com/ekaprythara/evogym",
    description: "Project dari YouTube",
    techStack: ["React", "Tailwind CSS", "Typescript"],
    animationDelay: 0.3,
  },
  {
    title: "E-Report Logistik",
    image: eReportLogistik,
    viewLink: "#",
    githubLink: "https://github.com/ekaprythara/e-report",
    description: "Proyek Tugas Akhir II. Saat ini belum di hosting.",
    techStack: ["Laravel", "Bootstrap", "jQuery", "MySQL"],
    animationDelay: 0.4,
  },
  {
    title: "Random Quote Machine",
    image: randomQuoteMachine,
    viewLink: "https://random-quote-machine-gold.vercel.app/",
    githubLink: "https://github.com/ekaprythara/random-quote-machine",
    description: "Project dari FreeCodeCamp",
    techStack: ["React", "Tailwind CSS"],
    animationDelay: 0.5,
  },
  {
    title: "Drum Machine",
    image: drumMachine,
    viewLink: "https://drum-machine-mu-ecru.vercel.app/",
    githubLink: "https://github.com/ekaprythara/drum-machine",
    description: "Project dari FreeCodeCamp",
    techStack: ["React", "Tailwind CSS"],
    animationDelay: 0.6,
  },
];
