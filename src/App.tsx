import Container from "./layouts/Container";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Wrapper from "./layouts/Wrapper";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import { useEffect, useState } from "react";
import Footer from "./components/Footer";

import { SelectedPage } from "./utils/types";

function App() {
  const [isOnTop, setIsOnTop] = useState<boolean>(true);
  const [isDarkMode, setDarkMode] = useState<boolean>(true);
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );

  useEffect(() => {
    if (isOnTop) {
      setSelectedPage(SelectedPage.Home);
    }
  }, [isOnTop]);

  useEffect(() => {
    if (isDarkMode === false) {
      document.getElementById("root")?.classList.add("dark");
    } else {
      document.getElementById("root")?.classList.remove("dark");
    }
  }, [isDarkMode]);

  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY === 0) {
        setIsOnTop(true);
      }
      if (window.scrollY !== 0) setIsOnTop(false);
    };

    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <Container>
      <ToastContainer className="right-5 top-20" />
      <Navbar
        isOnTop={isOnTop}
        isDarkMode={isDarkMode}
        setDarkMode={setDarkMode}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Wrapper>
        <Home isOnTop={isOnTop} setSelectedPage={setSelectedPage} />
        <About setSelectedPage={setSelectedPage} />
        <Projects setSelectedPage={setSelectedPage} />
        <Contact setSelectedPage={setSelectedPage} />
      </Wrapper>
      <Footer />
    </Container>
  );
}

export default App;
