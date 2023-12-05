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
      className={`fixed left-0 top-0 right-0 z-50 transition-all duration-300 bg-light text-black dark:bg-darker dark:text-white opacity-95 ${
        isOnTop
          ? "h-20"
          : "h-16 shadow-sm shadow-slate-300 dark:shadow-slate-950"
      }`}
    >
      <div className="flex justify-between items-center px-5 md:px-10 lg:px-20 h-full">
        <h1 className="text-xl font-bold tracking-wider hidden md:block order-1">
          <span className="text-primary">Eka </span>Priyanthara
        </h1>
        <h1 className="block md:hidden text-3xl font-bold order-1">
          <span className="text-primary">E</span>P
        </h1>
        <button className="block lg:hidden order-3">
          <Hamburger toggled={isOpen} toggle={setIsOpen} size={27} />
        </button>
        <NavLinks
          isOpen={isOpen}
          isOnTop={isOnTop}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <div className="rounded-full p-2 shadow-md shadow-slate-300 dark:shadow-slate-950 order-2 lg:order-3">
          <DarkModeSwitch
            checked={isDarkMode}
            onChange={toggleDarkMode}
            size={25}
            moonColor="black"
            sunColor="white"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
