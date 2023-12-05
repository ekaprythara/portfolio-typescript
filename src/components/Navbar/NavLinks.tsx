import { SelectedPage } from "../../utils/types";
import Link from "./Link";

type NavLinksProps = {
  isOpen: boolean;
  isOnTop: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const NavLinks = ({
  isOpen,
  isOnTop,
  selectedPage,
  setSelectedPage,
}: NavLinksProps) => {
  return (
    <>
      <ul className="hidden lg:flex lg:flex-row lg:gap-7 font-bold text-base lg:order-2">
        <Link
          page="Home"
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <Link
          page="About"
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <Link
          page="Projects"
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <Link
          page="Contact"
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
      </ul>
      {isOpen && (
        <div
          className={`absolute left-0 right-0 bg-slate-200 dark:bg-dark z-50 transition-all duration-300 block lg:hidden ${
            isOnTop ? "top-20" : "top-16"
          }`}
        >
          <ul className="flex flex-col justify-center items-center text-sm py-5 gap-5">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="About"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Projects"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </ul>
        </div>
      )}
    </>
  );
};

export default NavLinks;
