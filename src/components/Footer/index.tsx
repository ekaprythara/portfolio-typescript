import { BsGithub, BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="h-32 bg-[#222] text-white dark:bg-dark text-sm">
      <div className="flex justify-between items-center w-11/12 lg:w-9/12 mx-auto h-full">
        <h1 className="text-base hidden md:block">
          Copyright &copy; 2023. All rights reserved.
        </h1>
        <div className="flex gap-3">
          <a href="https://www.twitter.com/ekaprythara" target="_blank">
            <BsTwitterX size={25} className="hover:text-primary duration-500" />
          </a>
          <a href="https://www.github.com/ekaprythara" target="_blank">
            <BsGithub size={25} className="hover:text-primary duration-500" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
