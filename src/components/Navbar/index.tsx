import { DarkModeSwitch } from "react-toggle-dark-mode";
import { SelectedPage } from "../../utils/types";
import NavLinks from "./NavLinks";
import { useState } from "react";
import Hamburger from "hamburger-react";

type NavbarProps = {
  isOnTop: boolean;
  isDarkMode: boolean;
  setDarkMode: (checked: boolean) => void;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({
  isOnTop,
  isDarkMode,
  setDarkMode,
  selectedPage,
  setSelectedPage,
}: NavbarProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDarkMode = (checked: boolean) => {
    setDarkMode(checked);
  };

  return (
    <nav
      className={`fixed left-0 top-0 right-0 z-50 transition-[height] duration-500 bg-white text-color-primary dark:bg-darker dark:text-white ${
        isOnTop
          ? "h-20"
          : "h-16 drop-shadow-md shadow-slate-200 dark:shadow-slate-950"
      }`}
    >
      <div className="grid grid-cols-3 lg:grid-cols-[0.8fr_1.4fr_0.8fr] grid-rows-1 px-5 md:px-10 lg:px-20 h-full w-full">
        <div className="flex justify-start items-center order-1">
          <h1 className="text-xl font-bold hidden md:block">Eka Priyanthara</h1>
          <h1 className="block md:hidden text-3xl font-bold">
            <span className="text-primary">E</span>P
          </h1>
        </div>
        <div className="flex justify-end items-center h-full order-3 lg:hidden ms-auto">
          <button className="w-fit" aria-label="Navigation Menu">
            <Hamburger toggled={isOpen} toggle={setIsOpen} size={25} />
          </button>
        </div>
        <div className="flex justify-center items-center order-3 lg:order-2">
          <NavLinks
            isOpen={isOpen}
            isOnTop={isOnTop}
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        </div>
        <div className="flex justify-center lg:justify-end items-center order-2 lg:order-3">
          <div className="rounded-full w-fit p-2 shadow-md shadow-slate-300 dark:shadow-slate-950">
            <DarkModeSwitch
              checked={isDarkMode}
              onChange={toggleDarkMode}
              size={25}
              moonColor="black"
              sunColor="white"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
