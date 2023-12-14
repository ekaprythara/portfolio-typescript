import { SelectedPage } from "../../utils/types";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  ariaLabel: string;
};

const Link = ({ page, selectedPage, setSelectedPage, ariaLabel }: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

  return (
    <li>
      <a
        className={`${
          selectedPage === lowerCasePage ? "text-primary" : ""
        } transition duration-300 hover:text-primary`}
        href={`#${lowerCasePage}`}
        onClick={() => setSelectedPage(lowerCasePage)}
        aria-label={ariaLabel}
      >
        {page}
      </a>
    </li>
  );
};

export default Link;
