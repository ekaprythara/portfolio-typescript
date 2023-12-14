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
      <ul className="hidden lg:flex lg:flex-row lg:gap-7 font-bold text-base">
        <Link
          page="Home"
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          ariaLabel="Home Page"
        />
        <Link
          page="About"
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          ariaLabel="Home Page"
        />
        <Link
          page="Projects"
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          ariaLabel="Home Page"
        />
        <Link
          page="Contact"
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          ariaLabel="Home Page"
        />
      </ul>
      {/* Small Screen Size */}

      <div
        className={`absolute z-50 transition-all ease-linear duration-500 block lg:hidden ${
          isOnTop
            ? "top-20 h-[calc(100vh-5rem)]"
            : "top-16 h-[calc(100vh-4rem)]"
        } ${
          isOpen
            ? "left-0 right-0 bottom-0 w-full bg-light dark:bg-dark opacity-100"
            : "w-0 -left-[200px] opacity-0"
        }`}
      >
        <ul className="flex flex-col justify-center items-center text-2xl font-bold gap-7 h-full">
          <Link
            page="Home"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            ariaLabel="Home Page"
          />
          <Link
            page="About"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            ariaLabel="Home Page"
          />
          <Link
            page="Projects"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            ariaLabel="Home Page"
          />
          <Link
            page="Contact"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            ariaLabel="Home Page"
          />
        </ul>
      </div>
    </>
  );
};

export default NavLinks;
