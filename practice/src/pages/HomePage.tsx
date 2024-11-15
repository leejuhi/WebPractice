import React, { useEffect, useState } from "react";
import NavBar from "../components/navBar/NavBar.tsx";
import useIsMobile from "../components/hooks/useIsMobile.ts";
import WelcomeSection from "../components/HomePageComponents/WelcomSection.tsx";
import IntroSeciton from "../components/HomePageComponents/IntroSection.tsx";
import Project1Section from "../components/HomePageComponents/Project1Section.tsx";

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();
  const scrollDown = () => {
    const target = document.getElementById("target-element");
    if (target) {
      const elementPosition =
        target.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - 59,
        behavior: "smooth",
      });
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => {
      const target = document.getElementById("target-element2");
      if (target) {
        const targetPosition =
          target.getBoundingClientRect().top + window.scrollY;
        if (window.scrollY >= targetPosition - 59) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <NavBar />
      <WelcomeSection isMobile={isMobile} scrollDown={scrollDown} />
      <IntroSeciton isMobile={isMobile} />
      <Project1Section isMobile={isMobile} isVisible={isVisible} />
    </>
  );
};

export default HomePage;
